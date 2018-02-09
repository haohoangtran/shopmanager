function repeat(a, n, r) {
    return !n ? r : repeat(a, --n, (r||[]).concat(a));
}

export {
    repeat
}