/** Resolve a public/ asset path for local development and the GitHub Pages project site. */
export function publicAsset(src: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|data:)/i.test(src)) {
    return src;
  }

  const basePath = process.env.NODE_ENV === 'production' ? '/Web3JH' : '';
  return `${basePath}/${src.replace(/^\/+/, '')}`;
}
