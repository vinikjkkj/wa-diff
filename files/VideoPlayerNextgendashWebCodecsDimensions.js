__d(
  "VideoPlayerNextgendashWebCodecsDimensions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 720,
      l = 1280;
    function s(t) {
      if (t.width <= 0 || t.height <= 0) return t;
      var n = Math.min(1, l / t.width, e / t.height);
      return n < 1
        ? { height: Math.round(t.height * n), width: Math.round(t.width * n) }
        : t;
    }
    i.capVideoPlayerNextgendashWebCodecsDimensions = s;
  },
  66,
);
