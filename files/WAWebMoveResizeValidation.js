__d(
  "WAWebMoveResizeValidation",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n = e.deltaBottom,
        r = e.deltaLeft,
        o = e.deltaWidth,
        a = e.params,
        i = e.type,
        s = o,
        u = r,
        c = n,
        d = 0,
        m = 0,
        p = 0;
      switch (i) {
        case "RESIZE":
          ((d = a.resizeStartPiPStyle.width),
            (m = a.resizeStartPiPStyle.left),
            (p = a.resizeStartPiPStyle.bottom));
          break;
        case "MOVE":
          ((d = a.width),
            (m = a.moveStartPositionStyle.left),
            (p = a.moveStartPositionStyle.bottom));
          break;
        default:
      }
      var _ = a.windowHeight,
        f = a.windowWidth,
        g = d + s,
        h = (t = a.height) != null ? t : g / a.aspectRatio,
        y = p + c,
        C = l(y),
        b = m + u,
        v = l(b),
        S = l(a.margin.y + a.extraBottomContentHeight),
        R = l(_ - h - a.margin.y - a.extraTopContentHeight),
        L = l(a.margin.x),
        E = l(f - g - a.margin.x);
      if (S > C || C > R)
        switch (i) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          case "MOVE":
            c = 0;
            break;
          default:
        }
      if (L > v || v > E)
        switch (i) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          case "MOVE":
            u = 0;
            break;
          default:
        }
      if (s && y + h + a.margin.y > _)
        switch (i) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          default:
        }
      if (s && b + g + a.margin.x > f)
        switch (i) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          default:
        }
      return (
        (g < a.minWidth || h + 2 * a.margin.y > _ || g + 2 * a.margin.x > f) &&
          ((c = 0), (u = 0), (s = 0)),
        { deltaWidth: s, deltaBottom: c, deltaLeft: u }
      );
    }
    function l(e) {
      return Math.round(e * 100) / 100;
    }
    i.validateMoveResize = e;
  },
  66,
);
