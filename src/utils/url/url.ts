/**
 * A very, very, fucking important function, for dynamically importing image
 * the url is already prefixed with '../../assets/images/'
 * so, you don't have to put the full-path, just put the path after the '/images/'
 */
export function getImgUrl(name: string) {
    return new URL(`../../assets/images/${name}`, import.meta.url).href;
}
