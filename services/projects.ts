import { unstable_cache } from "next/cache";

import { createClient } from "@/common/utils/server";

const fetchProjectsData = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("projects").select();

  if (error) throw new Error(error.message);
  if (!data) return [];

  return data.map((item) => {
    const cleanSlug = item.slug?.trim();
    const { data: imageData } = supabase.storage
      .from("projects")
      .getPublicUrl(`${cleanSlug}.webp`);

    return {
      ...item,
      slug: cleanSlug,
      image: imageData.publicUrl,
    };
  });
};

export const getProjectsData = unstable_cache(
  fetchProjectsData,
  ["projects-list-cache"],
  { revalidate: 300, tags: ["projects"] },
);

const fetchProjectsDataBySlug = async (slug: string) => {
  const supabase = createClient();
  const cleanSlug = slug.trim();

  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("slug", cleanSlug)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return null;

  const itemSlug = data.slug?.trim();

  const { data: imageData } = supabase.storage
    .from("projects")
    .getPublicUrl(`${itemSlug}.webp`);

  return {
    ...data,
    slug: itemSlug,
    image: imageData.publicUrl,
  };
};

export const getProjectsDataBySlug = unstable_cache(
  fetchProjectsDataBySlug,
  ["projects-slug-cache"],
  { revalidate: 300, tags: ["projects"] },
);
