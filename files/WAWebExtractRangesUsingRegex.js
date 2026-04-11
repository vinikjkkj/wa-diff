__d(
  "WAWebExtractRangesUsingRegex",
  ["WAWebExtractRangeFromMatch"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      n === void 0 && (n = 0);
      var a = [];
      t.lastIndex = 0;
      for (var i; (i = t.exec(e)) && t.lastIndex > 0; )
        (o && (i = o(i, t)),
          i && a.push(r("WAWebExtractRangeFromMatch")(i, n)));
      return a;
    }
    l.default = e;
  },
  98,
);
