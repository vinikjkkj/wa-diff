__d(
  "WAWebQuoteLineUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = "> ",
      l = /^> (?!\s)/,
      s = "```",
      u = /\r?\n|\r/,
      c = /(\r?\n|\r)$/,
      d = /^\s+/,
      m = /^[^\S\r\n]+/;
    function p(e) {
      return (e.split(s).length - 1) % 2 === 1;
    }
    function _(e) {
      return l.test(e);
    }
    function f(t) {
      var n = !1;
      return t
        .split(u)
        .map(function (t, r) {
          var o = p(t),
            a = t.replace(d, ""),
            i = a.trim() === "",
            l = a.length === t.length && _(a),
            s = r === 0 || n || o || i || l;
          return (o && (n = !n), s ? t : "" + e + a);
        })
        .join("\n");
    }
    function g(e, t) {
      var n = t.split(u)[0];
      return c.test(e) && n.trim() !== "" && !_(n) && !p(e);
    }
    function h(t, n) {
      var r, o;
      return n !== e || t.trim() === ""
        ? 0
        : (r = (o = t.match(m)) == null ? void 0 : o[0].length) != null
          ? r
          : 0;
    }
    function y(e) {
      for (var t = e.split("\n"), n = t.length; n > 0 && C(t[n - 1]); ) n--;
      if (n === t.length || p(t.slice(0, n).join("\n"))) return e;
      var r = t.findIndex(function (e) {
          return e.trim() !== "";
        }),
        o = Math.max(n, r + 1);
      return o < t.length ? t.slice(0, o).join("\n") : e;
    }
    function C(t) {
      var n = t.startsWith(e) ? t.slice(e.length) : t;
      return n.trim() === "";
    }
    ((i.QUOTE_LINE_PREFIX = e),
      (i.isInsideCodeBlock = p),
      (i.isQuoteLine = _),
      (i.prefixPastedLines = f),
      (i.quotesTextAfter = g),
      (i.firstLineWhitespaceLength = h),
      (i.removeTrailingEmptyQuoteLines = y));
  },
  66,
);
