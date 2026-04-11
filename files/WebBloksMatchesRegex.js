__d(
  "WebBloksMatchesRegex",
  ["WebBloksRegexUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksRegexUtils").extractPatternAndFlags(n),
        a = r.flags,
        i = r.normalizedPattern,
        l = new RegExp(i, a);
      return !!t.match(l);
    }
    l.default = e;
  },
  98,
);
