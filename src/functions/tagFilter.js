export default function tagFilter(data, tagItem) {
  let tagSet = new Set();
  data.forEach((item) => {
    let tag = item[tagItem].split(",");
    tag.forEach((tag) => {
      if (tag) {
        tagSet.add(tag.trim());
      }
    });
  });

  const uniqueTag = Array.from(tagSet);

  return uniqueTag;
}
