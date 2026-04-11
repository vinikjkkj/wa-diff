__d(
  "WAWebMoveResizeValidation",
  ["lodash"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.deltaBottom,
        o = e.deltaLeft,
        a = e.deltaWidth,
        i = e.params,
        l = e.type,
        s = a,
        u = o,
        c = n,
        d = 0,
        m = 0,
        p = 0;
      switch (l) {
        case "RESIZE":
          ((d = i.resizeStartPiPStyle.width),
            (m = i.resizeStartPiPStyle.left),
            (p = i.resizeStartPiPStyle.bottom));
          break;
        case "MOVE":
          ((d = i.width),
            (m = i.moveStartPositionStyle.left),
            (p = i.moveStartPositionStyle.bottom));
          break;
        default:
      }
      var _ = 2,
        f = i.windowHeight,
        g = i.windowWidth,
        h = d + s,
        y = (t = i.height) != null ? t : h / i.aspectRatio,
        C = p + c,
        b = r("lodash").round(C, _),
        v = m + u,
        S = r("lodash").round(v, _),
        R = r("lodash").round(i.margin.y + i.extraBottomContentHeight, _),
        L = r("lodash").round(f - y - i.margin.y - i.extraTopContentHeight, _),
        E = r("lodash").round(i.margin.x, _),
        k = r("lodash").round(g - h - i.margin.x, _);
      if (R > b || b > L)
        switch (l) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          case "MOVE":
            c = 0;
            break;
          default:
        }
      if (E > S || S > k)
        switch (l) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          case "MOVE":
            u = 0;
            break;
          default:
        }
      if (s && C + y + i.margin.y > f)
        switch (l) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          default:
        }
      if (s && v + h + i.margin.x > g)
        switch (l) {
          case "RESIZE":
            ((c = 0), (u = 0), (s = 0));
            break;
          default:
        }
      return (
        (h < i.minWidth || y + 2 * i.margin.y > f || h + 2 * i.margin.x > g) &&
          ((c = 0), (u = 0), (s = 0)),
        { deltaWidth: s, deltaBottom: c, deltaLeft: u }
      );
    }
    l.validateMoveResize = e;
  },
  98,
);
