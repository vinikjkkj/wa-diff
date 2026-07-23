__d(
  "CometAppNavigationConstants",
  ["Env", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = 56,
      c = 44;
    switch (!0) {
      case (e || (e = r("Env"))).isCometOnMobile: {
        s = r("gkx")("22809") ? u : c;
        break;
      }
      case (e || (e = r("Env"))).isMessengerDotComOnComet:
        s = 0;
        break;
      default:
        s = u;
    }
    var d = s;
    l.HEADER_HEIGHT = d;
  },
  98,
);
