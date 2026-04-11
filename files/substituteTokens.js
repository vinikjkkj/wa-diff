__d(
  "substituteTokens",
  ["invariant", "IntlPunctuation"],
  function (t, n, r, o, a, i, l, s) {
    var e = Object.prototype.hasOwnProperty,
      u = new RegExp(
        "\\{([^}]+)\\}(" + o("IntlPunctuation").PUNCT_CHAR_CLASS + "*)",
        "g",
      );
    function c(e) {
      return e;
    }
    function d(t, n, r) {
      if (n == null) return t;
      typeof n == "object" || s(0, 6041, t);
      var a = [],
        i = [],
        l = t
          .replace(u, function (t, l, s) {
            e.call(n, l) ||
              r == null ||
              r.onMissingParameterError == null ||
              r.onMissingParameterError(Object.keys(n), l);
            var u = n[l];
            return u != null && typeof u == "object"
              ? (a.push(u), i.push(l), "" + s)
              : u == null
                ? ""
                : String(u) + o("IntlPunctuation").dedupeStops(String(u), s);
          })
          .split("")
          .map(o("IntlPunctuation").applyPhonologicalRules);
      if (l.length === 1) return l[0];
      for (var d = l[0] !== "" ? [l[0]] : [], m = 0; m < a.length; m++)
        (d.push(a[m]), l[m + 1] !== "" && d.push(l[m + 1]));
      return d;
    }
    i.exports = d;
  },
  34,
);
