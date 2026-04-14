__d(
  "useWAWebVPVOverlayEnabled",
  ["WAWebDebugBizVPVOverlay", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled),
        t = e[0],
        n = e[1];
      return (
        u(function () {
          return o("WAWebDebugBizVPVOverlay").subscribeToVPVOverlay(n);
        }, []),
        t
      );
    }
    l.default = d;
  },
  98,
);
