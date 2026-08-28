__d(
  "ZenonMWCommonUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.split("\n");
      if (t.length < 2)
        throw r("FBLogger")("rtc_www").mustfixThrow(
          "Expected SDP string with two or more lines, but got %s",
          t.length,
        );
      var n = t[1].trim(),
        o = n.split(" ");
      if (o.length < 3)
        throw r("FBLogger")("rtc_www").mustfixThrow(
          "Session line should have at least 3 tokens, but got %s",
          o.length,
        );
      var a = parseInt(o[2], 10);
      if (isNaN(a))
        throw r("FBLogger")("rtc_www").mustfixThrow(
          "SDP version could not be parsed as number.",
        );
      return a;
    }
    function s(e) {
      return e.includes("BUNDLE 0");
    }
    ((l.getSdpVersion = e), (l.isUnifiedPlan = s));
  },
  98,
);
