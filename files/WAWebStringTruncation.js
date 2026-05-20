__d(
  "WAWebStringTruncation",
  ["WAUnicodeUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e != null ? e : "";
      if (o("WAUnicodeUtils").numCodepoints(n) <= t) return n;
      var a = r("fbs")._(/*BTDS*/ "\u2026").toString();
      return (
        o("WAUnicodeUtils").firstNCodepoints(
          n,
          t - o("WAUnicodeUtils").numCodepoints(a),
        ) + a
      );
    }
    l.truncateAtCodepoints = e;
  },
  226,
);
