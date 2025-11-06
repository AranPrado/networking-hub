export const getPaths = (pathname: string): string[] => {
  const segments = pathname.split("/").filter(Boolean);

  const cleanSegments = segments
    .map((seg) => {
      if (seg.startsWith("[") && seg.endsWith("]")) return null;
      return seg;
    })
    .filter(Boolean) as string[];

  return cleanSegments.map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1));
};
