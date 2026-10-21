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
    function f(t, n) {
      n === void 0 && (n = "");
      var r = t.split(u),
        o = n === e,
        a = [],
        i = !1,
        l = !1;
      return (
        r.forEach(function (e, t) {
          var n = p(e),
            s = t === 0 || i || n;
          n && (i = !i);
          var u = e.replace(d, ""),
            c = b(u),
            m = s
              ? e
              : g(e, u, {
                  isAfterEmptyLine: l,
                  isLastLine: t === r.length - 1,
                });
          (m != null && a.push(m),
            (l = t === 0 ? u.trim() === "" && o : !s && c));
        }),
        a.join("\n")
      );
    }
    function g(t, n, r) {
      var o = r.isAfterEmptyLine,
        a = r.isLastLine;
      return b(n)
        ? a
          ? t
          : o
            ? null
            : e
        : n.length === t.length && _(n)
          ? t
          : "" + e + n;
    }
    function h(e, t) {
      var n = t.split(u)[0];
      return c.test(e) && n.trim() !== "" && !_(n) && !p(e);
    }
    function y(t, n) {
      var r, o;
      return n !== e || t.trim() === ""
        ? 0
        : (r = (o = t.match(m)) == null ? void 0 : o[0].length) != null
          ? r
          : 0;
    }
    function C(e) {
      for (var t = e.split("\n"), n = t.length; n > 0 && b(t[n - 1]); ) n--;
      if (n === t.length || p(t.slice(0, n).join("\n"))) return e;
      var r = t.findIndex(function (e) {
          return e.trim() !== "";
        }),
        o = Math.max(n, r + 1);
      return o < t.length ? t.slice(0, o).join("\n") : e;
    }
    function b(t) {
      var n = t.startsWith(e) ? t.slice(e.length) : t;
      return n.trim() === "";
    }
    ((i.QUOTE_LINE_PREFIX = e),
      (i.isInsideCodeBlock = p),
      (i.isQuoteLine = _),
      (i.prefixPastedLines = f),
      (i.quotesTextAfter = h),
      (i.firstLineWhitespaceLength = y),
      (i.removeTrailingEmptyQuoteLines = C));
  },
  66,
);
