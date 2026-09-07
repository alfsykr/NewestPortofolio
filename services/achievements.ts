import { unstable_cache } from "next/cache";

import { createClient } from "@/common/utils/server";

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

interface EnumItem {
  enum_value: string;
}

const fetchAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps) => {
  const supabase = createClient();

  let query = supabase.from("achievements").select();

  if (category) query = query.eq("category", category);
  if (search) query = query.ilike("name", `%${search}%`);

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data.map((item) => {
    const { data: imageData } = supabase.storage
      .from("achievements")
      .getPublicUrl(`${item.slug}.webp`);

    return {
      ...item,
      image: imageData.publicUrl,
    };
  });
};

export const getAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps) => {
  const cacheKey = `achievements-${category ?? "all"}-${search ?? "none"}`;
  const cachedFetch = unstable_cache(
    () => fetchAchievementsData({ category, search }),
    [cacheKey],
    { revalidate: 600, tags: ["achievements"] },
  );
  return cachedFetch();
};

const fetchAchivementTypes = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.rpc("get_enum_values", {
    type_name: "achievement_type",
  });

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data.map((item: EnumItem) => item.enum_value);
};

export const getAchivementTypes = unstable_cache(
  fetchAchivementTypes,
  ["achievement-types-cache"],
  { revalidate: 3600, tags: ["achievement-types"] },
);

const fetchAchivementCategories = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.rpc("get_enum_values", {
    type_name: "achievement_category",
  });

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data.map((item: EnumItem) => item.enum_value);
};

export const getAchivementCategories = unstable_cache(
  fetchAchivementCategories,
  ["achievement-categories-cache"],
  { revalidate: 3600, tags: ["achievement-categories"] },
);
