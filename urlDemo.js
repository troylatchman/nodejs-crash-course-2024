import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

//format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

//fileURLtoPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search); // already part of urlObj.searchParams
console.log(params.get("q"));
params.append("limit", "5");
params.delete("limit");
console.log(params);
