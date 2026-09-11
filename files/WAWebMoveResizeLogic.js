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
    function u(e, t, n) {
      var r = window.innerWidth - t - n,
        o;
      return (
        e > r ? (o = Math.max(n, r)) : e < n ? (o = n) : (o = e),
        { adjustedLeft: o, needsAdjustment: o !== e }
      );
    }
    function c(e) {
      var t = e.deltaBottom,
        n = e.deltaHeight,
        r = e.deltaLeft,
        o = e.deltaWidth,
        a = e.extraBottomContentHeight,
        i = e.extraTopContentHeight,
        l = e.margin,
        s = e.minHeight,
        u = e.minWidth,
        c = e.resizeStartHeight,
        d = e.resizeStartPiPStyle,
        m = Math.max(u, Math.min(window.innerWidth - l.x * 2, d.width + o)),
        p = Math.max(s, Math.min(window.innerHeight - l.y * 2 - i - a, c + n)),
        _;
      if (r !== 0) {
        var f = m - d.width;
        _ = Math.max(l.x, Math.min(window.innerWidth - m - l.x, d.left - f));
      } else _ = Math.max(l.x, Math.min(window.innerWidth - m - l.x, d.left));
      var g;
      if (t !== 0) {
        var h = p - c;
        g = Math.max(
          l.y + a,
          Math.min(window.innerHeight - p - l.y - i, d.bottom - h),
        );
      } else
        g = Math.max(
          l.y + a,
          Math.min(window.innerHeight - p - l.y - i, d.bottom),
        );
      return {
        resizedWidth: m,
        resizedHeight: p,
        resizedLeft: _,
        resizedBottom: g,
      };
    }
    function d(e) {
      var t = e.aspectRatio,
        n = e.minWidth,
        r = e.resizeDirection,
        a = e.resizeStartPiPStyleWidth,
        i = n - a,
        l = 0,
        s = 0,
        u = 0;
      switch (r) {
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_RIGHT:
          ((u = 0), (s = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.TOP_LEFT:
          ((s = -i), (u = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.RIGHT:
          ((l = i / t), (u = 0), (s = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.LEFT:
          ((l = i / t), (u = 0), (s = -i));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM:
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_RIGHT:
          ((l = i / t), (u = -l), (s = 0));
          break;
        case o("WAWebMoveResizeComponentUtils").ResizeDirections.BOTTOM_LEFT:
          ((l = i / t), (u = -l), (s = -i));
          break;
      }
      return { deltaWidth: i, deltaHeight: l, deltaLeft: s, deltaBottom: u };
    }
    function m(e) {
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
      (l.clampLeftToBounds = u),
      (l.calculateIndependentResize = c),
      (l.adjustDeltasForMinWidth = d),
      (l.adjustDeltasForMaxBounds = m));
  },
  98,
);
