__d(
  "WAWebLoggerFormatMessage",
  ["WAArrayInterleave"],
  function (t, n, r, o, a, i, l) {
    var e = 4e3;
    function s(t, n, o, a) {
      a === void 0 && (a = String);
      var i = r("WAArrayInterleave")(t, n.map(a)).join(""),
        l = o ? e : Number.POSITIVE_INFINITY;
      return (
        i.length > l &&
          (i =
            i.slice(0, l / 2) +
            ("\n\n[" + (i.length - l) + " truncated]\n\n") +
            i.slice(-l / 2)),
        i
      );
    }
    l.default = s;
  },
  98,
);
