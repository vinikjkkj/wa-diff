__d(
  "PlaybackSpeedExperiments",
  ["CurrentUser", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("26216");
    }
    function s() {
      return !1;
    }
    function u() {
      return !!(e() || s());
    }
    function c() {
      return (s(), !1);
    }
    var d =
      r("CurrentUser").getID() !== "0"
        ? function () {
            return !0;
          }
        : function () {
            return !1;
          };
    function m() {
      return e() ? !1 : s() ? !0 : (c(), !1);
    }
    function p() {
      return !0;
    }
    ((l.enableWwwPlaybackSpeedControl = u),
      (l.isInCometHeadroomTest = c),
      (l.enableCometPlaybackSpeedControl = d),
      (l.enableCometPlaybackSpeedControlNUX = m),
      (l.enablePlaybackSpeedLogging = p));
  },
  98,
);
