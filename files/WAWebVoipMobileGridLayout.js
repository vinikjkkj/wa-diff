__d(
  "WAWebVoipMobileGridLayout",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 8,
      s = 6,
      u = 3,
      c = 1 / u,
      d = 0.25;
    function m(t) {
      return t <= 1
        ? { cols: 1, rows: 1 }
        : t === 2
          ? { cols: 1, rows: 2 }
          : { cols: e, rows: Math.ceil(t / e) };
    }
    function p(e, t) {
      if ((t === void 0 && (t = 0), e <= l - t))
        return { fixedCount: Math.max(e, 0), scrollCount: 0 };
      var n = s - t;
      return { fixedCount: n, scrollCount: e - n };
    }
    function _(e, t, n) {
      return e <= 0 || t <= 0
        ? 0
        : t === u
          ? (e - (u - 1) * n) / u
          : (e - u * n) / (u + d);
    }
    ((i.MOBILE_GRID_COLUMNS = e),
      (i.MOBILE_GRID_SINGLE_MAX = l),
      (i.MOBILE_GRID_OVERFLOW_FIXED = s),
      (i.MOBILE_SCROLL_WHOLE_TILES = u),
      (i.MOBILE_SCROLL_VISIBLE_RATIO = c),
      (i.MOBILE_SCROLL_PEEK_FRACTION = d),
      (i.mobileGridShape = m),
      (i.splitMobileGridParticipants = p),
      (i.calculateMobileScrollTileWidth = _));
  },
  66,
);
