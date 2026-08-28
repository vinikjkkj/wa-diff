__d(
  "getGeoPrivateBaseContextualLayerPositioningStyles_DEPRECATED",
  ["Locale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Locale").isRTL();
    function s(e) {
      var t = e.offsetX,
        n = e.offsetY,
        r = e.translatePercentX,
        o = e.translatePercentY,
        a = e.translatePositionX,
        i = e.translatePositionY,
        l = "";
      return (
        (a !== 0 || i !== 0) &&
          (l += "translate(" + Math.round(a) + "px, " + Math.round(i) + "px) "),
        (r !== 0 || o !== 0) && (l += "translate(" + r + ", " + o + ") "),
        (t !== 0 || n !== 0) && (l += "translate(" + t + "px, " + n + "px)"),
        l
      );
    }
    function u(t) {
      var n = t.adjustment,
        r = t.align,
        o = t.contextRect,
        a = t.fixed,
        i = t.offsetRect,
        l = t.offsetX,
        u = l === void 0 ? 0 : l,
        c = t.offsetY,
        d = c === void 0 ? 0 : c,
        m = t.position,
        p = {
          height: void 0,
          position: a ? "fixed" : "absolute",
          transform: "",
          width: void 0,
        },
        _ = 0,
        f = 0,
        g = 0,
        h = 0,
        y = (o.bottom + o.top) / 2,
        C = (o.left + o.right) / 2,
        b = e ? "start" : "end",
        v = e ? "end" : "start";
      switch (m) {
        case "above":
          ((f = o.top - i.top), (h = "-100%"));
          break;
        case "below":
          f = o.bottom - i.top;
          break;
        case v:
          ((_ = o.left - i.left), (g = "-100%"));
          break;
        case b:
          _ = o.right - i.left;
          break;
      }
      if (m === "start" || m === "end")
        switch (r) {
          case "start":
            f = o.top - i.top;
            break;
          case "middle":
            ((f = y - i.top), (h = "-50%"));
            break;
          case "end":
            ((f = o.bottom - i.top), (h = "-100%"));
            break;
          case "stretch":
            ((f = o.top - i.top), (p.height = o.bottom - o.top + "px"));
            break;
        }
      else if (m === "above" || m === "below")
        switch (r) {
          case v:
            _ = o.left - i.left;
            break;
          case "middle":
            ((_ = C - i.left), (g = "-50%"));
            break;
          case b:
            ((_ = o.right - i.left), (g = "-100%"));
            break;
          case "stretch":
            ((_ = o.left - i.left), (p.width = o.right - o.left + "px"));
            break;
        }
      return (
        n != null &&
          (m === "start" || m === "end"
            ? (f += n)
            : (m === "above" || m === "below") && (_ += n)),
        (p.transform = s({
          offsetX: u,
          offsetY: d,
          translatePercentX: g,
          translatePercentY: h,
          translatePositionX: _,
          translatePositionY: f,
        })),
        p
      );
    }
    l.default = u;
  },
  98,
);
