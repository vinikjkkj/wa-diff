__d(
  "WAWebMoveResizeLogic",
  ["WAWebMoveResizeComponentUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i) {
      var l = 0,
        s = 0,
        u = 0,
        c = 0;
      switch (e) {
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
          ((s = t.y - r), i ? (l = 0) : (l = s * a));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
          ((s = r - t.y), i ? (l = 0) : (l = s * a), (c = -s));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
          ((l = n - t.x), i ? (s = 0) : (s = l / a), (c = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
          ((l = t.x - n), i ? (s = 0) : (s = l / a), (c = 0), (u = -l));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
          ((l = Math.max(n - t.x, a * (t.y - r))), (s = l / a));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
          ((l = Math.max(t.x - n, a * (t.y - r))), (s = l / a), (u = -l));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
          ((l = Math.max(n - t.x, a * (r - t.y))), (s = l / a), (c = -s));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
          ((l = Math.max(t.x - n, a * (r - t.y))),
            (s = l / a),
            (c = -s),
            (u = -l));
          break;
      }
      return { deltaWidth: l, deltaHeight: s, deltaLeft: u, deltaBottom: c };
    }
    function s(e, t, n, r, o) {
      var a = window.innerHeight - t - n - r,
        i = e > a ? Math.max(n + o, a) : e;
      return { adjustedBottom: i, needsAdjustment: i !== e };
    }
    function u(e, t, n, r, o, a, i, l, s, u, c) {
      var d = Math.max(i, Math.min(window.innerWidth - s.x * 2, o.width + e)),
        m = Math.max(l, Math.min(window.innerHeight - s.y * 2 - u - c, a + t)),
        p;
      if (n !== 0) {
        var _ = d - o.width;
        p = Math.max(s.x, Math.min(window.innerWidth - d - s.x, o.left - _));
      } else p = Math.max(s.x, Math.min(window.innerWidth - d - s.x, o.left));
      var f;
      if (r !== 0) {
        var g = m - a;
        f = Math.max(
          s.y + c,
          Math.min(window.innerHeight - m - s.y - u, o.bottom - g),
        );
      } else
        f = Math.max(
          s.y + c,
          Math.min(window.innerHeight - m - s.y - u, o.bottom),
        );
      return {
        resizedWidth: d,
        resizedHeight: m,
        resizedLeft: p,
        resizedBottom: f,
      };
    }
    function c(e, t, n, r) {
      var a = t - n,
        i = 0,
        l = 0,
        s = 0;
      switch (e) {
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
          ((s = 0), (l = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
          ((l = -a), (s = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
          ((i = a / r), (s = 0), (l = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
          ((i = a / r), (s = 0), (l = -a));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
          ((i = a / r), (s = -i), (l = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
          ((i = a / r), (s = -i), (l = -a));
          break;
      }
      return { deltaWidth: a, deltaHeight: i, deltaLeft: l, deltaBottom: s };
    }
    function d(e) {
      var t = e.aspectRatio,
        n = e.extraBottomContentHeight,
        r = e.extraTopContentHeight,
        a = e.margin,
        i = e.resizeDirection,
        l = e.resizeStartPiPStyle,
        s = l.width / t,
        u = 0,
        c = 0,
        d = 0,
        m = 0;
      switch (i) {
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
          u =
            Math.min(
              window.innerWidth - a.x - r - l.width - l.left,
              t * (window.innerHeight - a.y - r - s - l.bottom),
            ) - 0.1;
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
          ((u =
            Math.min(
              l.left - a.x,
              t * (window.innerHeight - a.y - r - s - l.bottom),
            ) - 0.1),
            (c = u / t),
            (d = -u));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
          ((u =
            Math.min(
              window.innerWidth - a.x - l.width - l.left,
              t * (window.innerHeight - a.y - r - s - l.bottom),
            ) - 0.1),
            (c = u / t),
            (m = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
          ((u =
            Math.min(
              l.left - a.x,
              t * (window.innerHeight - a.y - r - s - l.bottom),
            ) - 0.1),
            (c = u / t),
            (m = 0),
            (d = -u));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
          ((u =
            Math.min(
              window.innerWidth - a.x - l.width - l.left,
              t * (l.bottom - a.y - n),
            ) - 0.1),
            (c = u / t),
            (m = -c));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
          ((u = Math.min(l.left - a.x, t * (l.bottom - a.y - n)) - 0.1),
            (c = u / t),
            (m = -c),
            (d = -u));
          break;
      }
      return { deltaWidth: u, deltaHeight: c, deltaLeft: d, deltaBottom: m };
    }
    ((l.calculateResizeDeltas = e),
      (l.clampBottomToBounds = s),
      (l.calculateIndependentResize = u),
      (l.adjustDeltasForMinWidth = c),
      (l.adjustDeltasForMaxBounds = d));
  },
  98,
);
