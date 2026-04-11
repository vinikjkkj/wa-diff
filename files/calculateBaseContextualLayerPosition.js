__d(
  "calculateBaseContextualLayerPosition",
  ["Locale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Locale").isRTL();
    function s(t) {
      var n = t.align,
        r = t.contextRect,
        o = t.contextualLayerSize,
        a = t.fixed,
        i = t.offsetRect,
        l = t.position,
        s = t.screenRect,
        u = { position: a ? "fixed" : void 0, transform: "" },
        c = 0,
        d = 0,
        m = 0,
        p = 0,
        _ = (r.bottom + r.top) / 2,
        f = (r.left + r.right) / 2,
        g = e ? "start" : "end",
        h = e ? "end" : "start";
      switch (l) {
        case "above":
          ((d = r.top - i.top), (p = "-100%"));
          break;
        case "below":
          d = r.bottom - i.top;
          break;
        case h:
          ((c = r.left - i.left), (m = "-100%"));
          break;
        case g:
          c = r.right - i.left;
          break;
      }
      if (l === "start" || l === "end")
        switch (n) {
          case "start":
            d = r.top - i.top;
            break;
          case "middle":
            ((d = _ - i.top), (p = "-50%"));
            break;
          case "end":
            ((d = r.bottom - i.top), (p = "-100%"));
            break;
          case "stretch":
            ((d = r.top - i.top), (u.height = r.bottom - r.top + "px"));
            break;
        }
      else if (l === "above" || l === "below")
        switch (n) {
          case h:
            c = r.left - i.left;
            break;
          case "middle":
            ((c = f - i.left), (m = "-50%"));
            break;
          case g:
            ((c = r.right - i.left), (m = "-100%"));
            break;
          case "stretch":
            ((c = r.left - i.left), (u.width = r.right - r.left + "px"));
            break;
        }
      var y = 0;
      if (o != null) {
        if (l === "start" || l === "end") {
          var C = null;
          switch (n) {
            case "start":
              C = r.top;
              break;
            case "middle":
              C = _ - o.height / 2;
              break;
            case "end":
              C = r.bottom - o.height;
              break;
          }
          (C != null &&
            (C < s.top
              ? (y = s.top - C)
              : C + o.height > s.bottom && (y = s.bottom - C - o.height)),
            (d += y));
        } else if (l === "above" || l === "below") {
          var b = null;
          switch (n) {
            case h:
              b = r.left;
              break;
            case "middle":
              b = f - o.width / 2;
              break;
            case g:
              b = r.right - o.width;
              break;
          }
          (b != null &&
            (b < s.left
              ? (y = s.left - b)
              : b + o.width > s.right && (y = s.right - b - o.width)),
            (c += y));
        }
      }
      var v = "";
      return (
        (c !== 0 || d !== 0) &&
          (v += "translate(" + Math.round(c) + "px, " + Math.round(d) + "px) "),
        (m !== 0 || p !== 0) && (v += "translate(" + m + ", " + p + ") "),
        (u.transform = v),
        { adjustment: y, style: u }
      );
    }
    l.default = s;
  },
  98,
);
