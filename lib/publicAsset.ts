/** Resolve a public/ asset path for the root-level GitHub Pages site. */
export function publicAsset(src: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|data:)/i.test(src)) {
    return src;
  }

  // This repository is Web3JH.github.io, so Pages serves it at the domain root.
  // Prefixing assets with /Web3JH would make every production image URL 404.
  return `/${src.replace(/^\/+/, '')}`;
}
