__d(
  "VideoPlayerMutedStateChange",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.currMuted,
        n = e.currVolume,
        r = e.prevMuted,
        o = e.prevVolume,
        a = t || n === 0,
        i = r || o === 0;
      return i === a ? null : a ? "muted" : "unmuted";
    }
    i.getVideoPlayerMutedStateChange = e;
  },
  66,
);
