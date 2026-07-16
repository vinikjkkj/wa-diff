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
    function f(t, n, o, a, i, l, f, g) {
      var h, y, C;
      (i === void 0 && (i = 0),
        f === void 0 && (f = window.innerWidth),
        g === void 0 && (g = window.innerHeight));
      var b = (h = l == null ? void 0 : l.height) != null ? h : 0,
        v = (y = l == null ? void 0 : l.width) != null ? y : 0,
        S = (C = l == null ? void 0 : l.offset) != null ? C : 0,
        R,
        L,
        E = 1,
        k = i + b,
        I = o;
      r("WAWebL10N").isRTL() &&
        (o === e.Start ? (I = e.End) : o === e.End && (I = e.Start));
      var T = {
          coords: { top: 0, left: 0 },
          alignment: a,
          position: I,
          arrowCoords: null,
        },
        D = 0;
      return (
        l != null &&
          (a === s.Start || a === s.End) &&
          ((I === e.Top || I === e.Bottom) && t.width < S * 2 + v
            ? (D = S + v / 2 - t.width / 2)
            : (I === e.Start || I === e.End) &&
              t.height < S * 2 + v &&
              (D = S + v / 2 - t.height / 2),
          a === s.Start && (D = -D)),
        I === e.Top
          ? ((T.coords.top = u(t, n, k)), (L = "100%"))
          : I === e.End
            ? ((T.coords.left = c(t, k)), (R = -b + E))
            : I === e.Bottom
              ? ((T.coords.top = d(t, k)), (L = -b + E))
              : I === e.Start && ((T.coords.left = m(t, n, k)), (R = "100%")),
        a === s.Center
          ? I === e.Top || I === e.Bottom
            ? ((R = "calc(50% - " + v / 2 + "px)"), (T.coords.left = p(t, n)))
            : ((L = "calc(50% - " + v / 2 + "px)"), (T.coords.top = _(t, n)))
          : a === s.Start
            ? I === e.Top || I === e.Bottom
              ? ((R = S), (T.coords.left = t.left + D))
              : ((L = S), (T.coords.top = t.top + D))
            : a === s.End &&
              (I === e.Top || I === e.Bottom
                ? ((R = "calc(100% - " + (S + v) + "px)"),
                  (T.coords.left = t.right - n.width + D))
                : ((L = "calc(100% - " + (S + v) + "px)"),
                  (T.coords.top = t.bottom - n.height + D))),
        T.coords.left < 0
          ? I === e.Top || I === e.Bottom
            ? ((T.alignment = s.Start), (T.coords.left = t.left + D), (R = S))
            : ((T.position = e.End), (T.coords.left = c(t, k)), (R = "0px"))
          : T.coords.left + n.width > f &&
            (I === e.Top || I === e.Bottom
              ? ((T.alignment = s.End),
                (T.coords.left = t.right - n.width + D),
                (R = "calc(100% - " + v + "px)"))
              : ((T.position = e.Start),
                (T.coords.left = m(t, n, k)),
                (R = "100%"))),
        T.coords.top < 0
          ? I === e.Start || I === e.End
            ? ((T.alignment = s.Start), (T.coords.top = t.top + D), (L = S))
            : ((T.position = e.Bottom), (T.coords.top = d(t, k)), (L = "0px"))
          : T.coords.top + n.height > g &&
            (I === e.Start || I === e.End
              ? ((T.alignment = s.End),
                (T.coords.top = t.bottom - n.height + D),
                (L = "calc(100% - " + S + "px)"))
              : ((T.position = e.Top),
                (T.coords.top = u(t, n, k)),
                (L = "100%"))),
        l != null &&
          L != null &&
          R != null &&
          (T.arrowCoords = { top: L, left: R }),
        T
      );
    }
    function g(e) {
      var t,
        n,
        r = e.alignment,
        o = e.arrow,
        a = e.buffer,
        i = a === void 0 ? 0 : a,
        l = e.element,
        s = e.position,
        u = e.target,
        c;
      "getBoundingClientRect" in u
        ? (c = u.getBoundingClientRect())
        : (c = {
            top: u.y,
            right: u.x,
            bottom: u.y,
            left: u.x,
            width: 0,
            height: 0,
            x: u.x,
            y: u.y,
          });
      var d =
        (t = (n = l.ownerDocument) == null ? void 0 : n.defaultView) != null
          ? t
          : window;
      return f(
        c,
        l.getBoundingClientRect(),
        s,
        r,
        i,
        o,
        d.innerWidth,
        d.innerHeight,
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
