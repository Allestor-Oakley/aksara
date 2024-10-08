export function hexToRgb(hex: string) {
    hex = hex.replace("#", "")
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(_, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function hexToRgba(hex: string, alpha: number) {
    const rgb = hexToRgb(hex);
    if (rgb == null) {
        return "rgba(0, 0, 0, 1)"
    }
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
