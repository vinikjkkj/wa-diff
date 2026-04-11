__d(
  "WebBloksStringReplace",
  ["WebBloksRegexUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i,
        l = o("WebBloksRegexUtils").extractPatternAndFlags(n),
        s = (i = l.flags) != null ? i : "";
      !a && !s.includes("g") && (s += "g");
      var u = new RegExp(l.normalizedPattern, s);
      return t.replace(u, r);
    }
    l.default = e;
  },
  98,
);
