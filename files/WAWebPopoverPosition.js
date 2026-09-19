__d(
  "WAWebPopoverPosition",
  ["$InternalEnum", "WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Top", "End", "Bottom", "Start"]),
      s = n("$InternalEnum").Mirrored(["Center", "Start", "End"]);
    function u(e, t, n) {
      return (n === void 0 && (n = 0), e.top - t.height - n);
    }
    function c(e, t) {
      return (t === void 0 && (t = 0), e.right + t);
    }
    function d(e, t) {
      return (t === void 0 && (t = 0), e.bottom + t);
    }
    function m(e, t, n) {
      return (n === void 0 && (n = 0), e.left - t.width - n);
    }
    function p(e, t) {
      return e.left + e.width / 2 - t.width / 2;
    }
    function _(e, t) {
      return e.top + e.height / 2 - t.height / 2;
    }
    function f(t, n, o, a, i, l, f, g, h) {
      var y, C, b;
      (i === void 0 && (i = 0),
        f === void 0 && (f = window.innerWidth),
        g === void 0 && (g = window.innerHeight),
        h === void 0 && (h = !1));
      var v = (y = l == null ? void 0 : l.height) != null ? y : 0,
        S = (C = l == null ? void 0 : l.width) != null ? C : 0,
        R = (b = l == null ? void 0 : l.offset) != null ? b : 0,
        L,
        E,
        k = 1,
        I = i + v,
        T = o;
      r("WAWebL10N").isRTL() &&
        (o === e.Start ? (T = e.End) : o === e.End && (T = e.Start));
      var D = {
          coords: { top: 0, left: 0 },
          alignment: a,
          position: T,
          arrowCoords: null,
        },
        x = 0;
      if (
        (l != null &&
          (a === s.Start || a === s.End) &&
          ((T === e.Top || T === e.Bottom) && t.width < R * 2 + S
            ? (x = R + S / 2 - t.width / 2)
            : (T === e.Start || T === e.End) &&
              t.height < R * 2 + S &&
              (x = R + S / 2 - t.height / 2),
          a === s.Start && (x = -x)),
        T === e.Top
          ? ((D.coords.top = u(t, n, I)), (E = "100%"))
          : T === e.End
            ? ((D.coords.left = c(t, I)), (L = -v + k))
            : T === e.Bottom
              ? ((D.coords.top = d(t, I)), (E = -v + k))
              : T === e.Start && ((D.coords.left = m(t, n, I)), (L = "100%")),
        a === s.Center
          ? T === e.Top || T === e.Bottom
            ? ((L = "calc(50% - " + S / 2 + "px)"), (D.coords.left = p(t, n)))
            : ((E = "calc(50% - " + S / 2 + "px)"), (D.coords.top = _(t, n)))
          : a === s.Start
            ? T === e.Top || T === e.Bottom
              ? ((L = R), (D.coords.left = t.left + x))
              : ((E = R), (D.coords.top = t.top + x))
            : a === s.End &&
              (T === e.Top || T === e.Bottom
                ? ((L = "calc(100% - " + (R + S) + "px)"),
                  (D.coords.left = t.right - n.width + x))
                : ((E = "calc(100% - " + (R + S) + "px)"),
                  (D.coords.top = t.bottom - n.height + x))),
        D.coords.left < 0
          ? T === e.Top || T === e.Bottom
            ? ((D.alignment = s.Start), (D.coords.left = t.left + x), (L = R))
            : ((D.position = e.End), (D.coords.left = c(t, I)), (L = "0px"))
          : D.coords.left + n.width > f &&
            (T === e.Top || T === e.Bottom
              ? ((D.alignment = s.End),
                (D.coords.left = t.right - n.width + x),
                (L = "calc(100% - " + S + "px)"))
              : ((D.position = e.Start),
                (D.coords.left = m(t, n, I)),
                (L = "100%"))),
        D.coords.top < 0
          ? T === e.Start || T === e.End
            ? ((D.alignment = s.Start), (D.coords.top = t.top + x), (E = R))
            : ((D.position = e.Bottom), (D.coords.top = d(t, I)), (E = "0px"))
          : D.coords.top + n.height > g &&
            (T === e.Start || T === e.End
              ? ((D.alignment = s.End),
                (D.coords.top = t.bottom - n.height + x),
                (E = "calc(100% - " + R + "px)"))
              : ((D.position = e.Top),
                (D.coords.top = u(t, n, I)),
                (E = "100%"))),
        l != null &&
          E != null &&
          L != null &&
          (D.arrowCoords = { top: E, left: L }),
        h === !0 && l == null)
      )
        if (T === e.Top || T === e.Bottom) {
          var $ = D.coords.left,
            P = Math.min(Math.max($, 0), Math.max(f - n.width, 0));
          if (((D.coords.left = P), P !== $)) {
            var N = D.position === e.Top ? "bottom" : "top",
              M = Math.min(Math.max(t.left + t.width / 2 - P, 0), n.width);
            D.transformOrigin = M + "px " + N;
          }
        } else {
          var w = D.coords.top,
            A = Math.min(Math.max(w, 0), Math.max(g - n.height, 0));
          if (((D.coords.top = A), A !== w)) {
            var F = D.position === e.Start ? "right" : "left",
              O = Math.min(Math.max(t.top + t.height / 2 - A, 0), n.height);
            D.transformOrigin = F + " " + O + "px";
          }
        }
      return D;
    }
    function g(e) {
      var t,
        n,
        r = e.alignment,
        o = e.arrow,
        a = e.buffer,
        i = a === void 0 ? 0 : a,
        l = e.clampToViewport,
        s = l === void 0 ? !1 : l,
        u = e.element,
        c = e.position,
        d = e.target,
        m;
      "getBoundingClientRect" in d
        ? (m = d.getBoundingClientRect())
        : (m = {
            top: d.y,
            right: d.x,
            bottom: d.y,
            left: d.x,
            width: 0,
            height: 0,
            x: d.x,
            y: d.y,
          });
      var p =
        (t = (n = u.ownerDocument) == null ? void 0 : n.defaultView) != null
          ? t
          : window;
      return f(
        m,
        u.getBoundingClientRect(),
        c,
        r,
        i,
        o,
        p.innerWidth,
        p.innerHeight,
        s,
      );
    }
    function h(t) {
      var n = t.alignment,
        r = t.position,
        o = "left",
        a = "top";
      return (
        (r === e.Top || r === e.Bottom) &&
          (r === e.Top ? (a = "bottom") : (a = "top"),
          n === s.Start
            ? (o = "left")
            : n === s.End
              ? (o = "right")
              : n === s.Center && (o = "center")),
        (r === e.Start || r === e.End) &&
          (r === e.Start ? (o = "right") : (o = "left"),
          n === s.Start
            ? (a = "top")
            : n === s.End
              ? (a = "bottom")
              : n === s.Center && (a = "center")),
        o + " " + a
      );
    }
    ((l.PopoverPosition = e),
      (l.PopoverAlignment = s),
      (l.getFixedElementPosition = g),
      (l.getDefaultTransformOrigin = h));
  },
  98,
);
