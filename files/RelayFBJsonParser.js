__d(
  "RelayFBJsonParser",
  ["GHLDetectionUtils", "cr:7329"],
  function (t, n, r, o, a, i, l) {
    var e = {
        parse: function (t) {
          return n("cr:7329") && o("GHLDetectionUtils").isJSONParseShimmed()
            ? n("cr:7329").parse(t)
            : JSON.parse(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
