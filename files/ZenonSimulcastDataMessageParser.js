__d(
  "ZenonSimulcastDataMessageParser",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = null,
        n = 0;
      if (
        (e.perSsrcTargetBitrateBpsMap != null &&
          (t = s(e.perSsrcTargetBitrateBpsMap)),
        e.qualityMask != null)
      ) {
        var r = parseInt(e.qualityMask, 10);
        isNaN(r) || (n = r);
      }
      return { perSsrcTargetBitrateBpsMap: t, qualityMask: n };
    }
    function s(e) {
      var t = new Map();
      return (
        Object.keys(e).forEach(function (n) {
          var o = parseInt(e[n], 10);
          if (isNaN(o)) {
            r("FBLogger")("rtc_www").mustfix(
              "Simulcast bitrate string could not be parsed as int",
            );
            return;
          }
          t.set(n, o);
        }),
        t
      );
    }
    l.parseSimulcastControlMessage = e;
  },
  98,
);
