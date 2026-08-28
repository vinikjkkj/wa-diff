__d(
  "ZenonAppFeaturesUtils",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !r("UserAgent").isBrowser("Firefox");
    }
    function s() {
      var e;
      return (
        typeof ((e = window.MediaStreamTrack) == null ||
        (e = e.prototype) == null
          ? void 0
          : e.getSettings) == "function"
      );
    }
    ((l.shouldStopMediaTrackWhenMute = e), (l.supportsGetSettings = s));
  },
  98,
);
