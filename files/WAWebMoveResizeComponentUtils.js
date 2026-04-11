__d(
  "WAWebMoveResizeComponentUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored([
        "TOP",
        "BOTTOM",
        "LEFT",
        "RIGHT",
        "TOP_RIGHT",
        "TOP_LEFT",
        "BOTTOM_RIGHT",
        "BOTTOM_LEFT",
      ]),
      l = n("$InternalEnum").Mirrored(["IDLE", "RESIZE", "MOVE"]),
      s = [e.LEFT, e.RIGHT],
      u = [e.TOP, e.TOP_LEFT, e.TOP_RIGHT, e.LEFT, e.RIGHT],
      c = [e.BOTTOM, e.BOTTOM_LEFT, e.BOTTOM_RIGHT, e.LEFT, e.RIGHT],
      d = 3;
    function m(e, t) {
      return !(
        e.right <= t.left ||
        e.left >= t.right ||
        e.bottom <= t.top ||
        e.top >= t.bottom
      );
    }
    function p(e, t) {
      return {
        toLeftDistance: e.right - t.left,
        toBottomDistance: t.bottom - e.top,
        toRightDistance: t.right - e.left,
        toTopDistance: e.bottom - t.top,
      };
    }
    function _(e, t, n, r, o, a, i) {
      var l = window.innerWidth,
        s = window.innerHeight,
        u = n + e,
        c = r + t,
        d = o / a,
        m = i.x,
        p = l - o - i.x,
        _ = i.y,
        f = s - d - i.y;
      return _ > c || c > f || m > u || u > p;
    }
    function f(t) {
      var n = t.aspectRatio,
        r = t.bottom,
        o = t.dists,
        a = t.left,
        i = t.margin,
        l = t.width,
        s,
        u;
      return (
        _(-o.toLeftDistance, 0, a, r, l, n, i) ||
          ((s === void 0 || o.toLeftDistance < s) &&
            ((s = o.toLeftDistance), (u = e.LEFT))),
        _(0, -o.toBottomDistance, a, r, l, n, i) ||
          ((s === void 0 || o.toBottomDistance < s) &&
            ((s = o.toBottomDistance), (u = e.BOTTOM))),
        _(o.toRightDistance, 0, a, r, l, n, i) ||
          ((s === void 0 || o.toRightDistance < s) &&
            ((s = o.toRightDistance), (u = e.RIGHT))),
        _(0, o.toTopDistance, a, r, l, n, i) ||
          ((s === void 0 || o.toTopDistance < s) &&
            ((s = o.toTopDistance), (u = e.TOP))),
        { direction: u, distance: s }
      );
    }
    ((i.ResizeDirections = e),
      (i.UserActions = l),
      (i.RISIZE_SIDE_DIRECTIONS = s),
      (i.RISIZE_TOP_DIRECTIONS = u),
      (i.RISIZE_BOTTOM_DIRECTIONS = c),
      (i.BORDER_TOLERANCE = d),
      (i.doOverlap = m),
      (i.escapeDistance = p),
      (i.findEscapeDirection = f));
  },
  66,
);
