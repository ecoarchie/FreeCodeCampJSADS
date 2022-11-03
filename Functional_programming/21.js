// Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
  return title.toLowerCase()
              .trim()
              .split(/\s+/)
              .join('-');

}
console.log(urlSlug(" Winter Is  Coming"));