__d(
  "MediaPlaybackCompoundEventLogger",
  ["MediaPlaybackCompoundFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        logComet: function (t) {
          r("MediaPlaybackCompoundFalcoEvent").log(function () {
            return t;
          });
        },
        logCometImmediately: function (t) {
          r("MediaPlaybackCompoundFalcoEvent").logImmediately(function () {
            return t;
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
