__d(
  "WAWebVoipSelfPreviewPositionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e ? 8 : 16;
    }
    function l(e) {
      var t = e.containerHeight,
        n = e.containerWidth,
        r = e.x,
        o = e.y,
        a = n / 2,
        i = t / 2,
        l = r < a,
        s = o < i;
      return s && l
        ? "top-left"
        : s && !l
          ? "top-right"
          : !s && l
            ? "bottom-left"
            : "bottom-right";
    }
    function s(e, t, n, r, o, a, i, l, s) {
      var u = s != null ? s : 8,
        c = i != null ? i : 16,
        d = l != null ? l : 16,
        m = a != null ? a : 0,
        p = t - r - d,
        _ = n - o - m;
      switch (e) {
        case "top-left":
          return { x: c, y: u };
        case "top-right":
          return { x: p, y: u };
        case "bottom-left":
          return { x: c, y: _ };
        case "bottom-right":
          return { x: p, y: _ };
        default:
          return { x: p, y: _ };
      }
    }
    ((i.getSelfPreviewMargin = e),
      (i.getCornerFromPosition = l),
      (i.getPositionFromCorner = s));
  },
  66,
);
