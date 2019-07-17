function isAlpha(c) {
    return /^[A-Z]$/i.test(c);
}

function toUpperCase(c) {
    return c.toUpperCase();
}

function toLowerCase(c) {
    return c.toLowerCase();
}

function flipCoin(prob) {
    return Math.random() < prob;
}

function switchFunc(func) {
    return func == toUpperCase ? toLowerCase : toUpperCase;
}

function spongebobify(text) {
    if (text.length < 2)
        return text;
    var alpha = text.length < 10 ? 0.25 : 0.45;
    var ret = '';
    var case_dup = 1;
    var transform_fn = flipCoin(0.5) ? toUpperCase : toLowerCase;
    for (var i = 0; i < text.length; ++i) {
        var c = text[i];
        ret += transform_fn(c);
        if (!isAlpha(c))
            continue;
        if (flipCoin(Math.pow(alpha, case_dup))) {
            ++case_dup;
        } else {
            transform_fn = switchFunc(transform_fn);
            case_dup = 1;
        }
    }
    return ret;
}
