__d(
  "ZenonScreenShare",
  ["UserAgent", "ZenonAppProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        e.length === 1 &&
        ((t = e[0]) == null ? void 0 : t.contentType) === "screen"
      );
    }
    function s() {
      return !r("UserAgent").isBrowser("Safari");
    }
    function u() {
      return !o("ZenonAppProvider").isOculusCastingSite();
    }
    function c() {
      return !s() || !u();
    }
    ((l.isScreenSharingTrack = e), (l.screenShareWithReplaceTrack = c));
  },
  98,
);
