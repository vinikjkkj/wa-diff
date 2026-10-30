__d(
  "VideoPlayerNextgendashWebCodecsDimensions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 720,
      l = 1280;
    function s(t) {
      var n = t.filter(function (t) {
        return t.height <= e && t.width <= l;
      });
      return n.length > 0 || t.length === 0
        ? n
        : [
            t.reduce(function (e, t) {
              return t.height * t.width < e.height * e.width ? t : e;
            }),
          ];
    }
    function u(t) {
      if (t.width <= 0 || t.height <= 0) return t;
      var n = Math.min(1, l / t.width, e / t.height);
      return n < 1
        ? { height: Math.round(t.height * n), width: Math.round(t.width * n) }
        : t;
    }
    ((i.filterVideoPlayerNextgendashWebCodecsRepresentations = s),
      (i.capVideoPlayerNextgendashWebCodecsDimensions = u));
  },
  66,
);
