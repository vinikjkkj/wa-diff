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
    function f(t, n, o, a, i, l, f, h, C) {
      var b, v, S;
      (i === void 0 && (i = 0),
        f === void 0 && (f = window.innerWidth),
        h === void 0 && (h = window.innerHeight),
        C === void 0 && (C = !1));
      var R = (b = l == null ? void 0 : l.height) != null ? b : 0,
        L = (v = l == null ? void 0 : l.width) != null ? v : 0,
        E = (S = l == null ? void 0 : l.offset) != null ? S : 0,
        k,
        I,
        T = 1,
        D = i + R,
        x = o;
      r("WAWebL10N").isRTL() &&
        (o === e.Start ? (x = e.End) : o === e.End && (x = e.Start));
      var $ = {
          coords: { top: 0, left: 0 },
          alignment: a,
          position: x,
          arrowCoords: null,
        },
        P = 0;
      return (
        l != null &&
          (a === s.Start || a === s.End) &&
          ((x === e.Top || x === e.Bottom) && t.width < E * 2 + L
            ? (P = E + L / 2 - t.width / 2)
            : (x === e.Start || x === e.End) &&
              t.height < E * 2 + L &&
              (P = E + L / 2 - t.height / 2),
          a === s.Start && (P = -P)),
        x === e.Top
          ? (($.coords.top = u(t, n, D)), (I = "100%"))
          : x === e.End
            ? (($.coords.left = c(t, D)), (k = -R + T))
            : x === e.Bottom
              ? (($.coords.top = d(t, D)), (I = -R + T))
              : x === e.Start && (($.coords.left = m(t, n, D)), (k = "100%")),
        a === s.Center
          ? x === e.Top || x === e.Bottom
            ? ((k = "calc(50% - " + L / 2 + "px)"), ($.coords.left = p(t, n)))
            : ((I = "calc(50% - " + L / 2 + "px)"), ($.coords.top = _(t, n)))
          : a === s.Start
            ? x === e.Top || x === e.Bottom
              ? ((k = E), ($.coords.left = t.left + P))
              : ((I = E), ($.coords.top = t.top + P))
            : a === s.End &&
              (x === e.Top || x === e.Bottom
                ? ((k = "calc(100% - " + (E + L) + "px)"),
                  ($.coords.left = t.right - n.width + P))
                : ((I = "calc(100% - " + (E + L) + "px)"),
                  ($.coords.top = t.bottom - n.height + P))),
        $.coords.left < 0
          ? x === e.Top || x === e.Bottom
            ? (($.alignment = s.Start), ($.coords.left = t.left + P), (k = E))
            : (($.position = e.End), ($.coords.left = c(t, D)), (k = "0px"))
          : $.coords.left + n.width > f &&
            (x === e.Top || x === e.Bottom
              ? (($.alignment = s.End),
                ($.coords.left = t.right - n.width + P),
                (k = "calc(100% - " + L + "px)"))
              : (($.position = e.Start),
                ($.coords.left = m(t, n, D)),
                (k = "100%"))),
        $.coords.top < 0
          ? x === e.Start || x === e.End
            ? (($.alignment = s.Start), ($.coords.top = t.top + P), (I = E))
            : (($.position = e.Bottom), ($.coords.top = d(t, D)), (I = "0px"))
          : $.coords.top + n.height > h &&
            (x === e.Start || x === e.End
              ? (($.alignment = s.End),
                ($.coords.top = t.bottom - n.height + P),
                (I = "calc(100% - " + E + "px)"))
              : (($.position = e.Top),
                ($.coords.top = u(t, n, D)),
                (I = "100%"))),
        l != null &&
          I != null &&
          k != null &&
          ($.arrowCoords = { top: I, left: k }),
        C === !0 &&
          l == null &&
          (x === e.Top || x === e.Bottom ? g($, t, n, f, h) : y($, t, n, h)),
        $
      );
    }
    function g(e, t, n, r, o) {
      var a = e.coords,
        i = a.left,
        l = a.top,
        s = C(i, r - n.width),
        u = C(l, o - n.height);
      if (((e.coords.left = s), (e.coords.top = u), !(s === i && u === l))) {
        var c = C(t.left + t.width / 2 - s, n.width),
          d =
            u === l
              ? h(e.position)
              : C(t.top + t.height / 2 - u, n.height) + "px";
        e.transformOrigin = c + "px " + d;
      }
    }
    function h(t) {
      return t === e.Top ? "bottom" : "top";
    }
    function y(t, n, r, o) {
      var a = t.coords.top,
        i = C(a, o - r.height);
      if (((t.coords.top = i), i !== a)) {
        var l = t.position === e.Start ? "right" : "left",
          s = C(n.top + n.height / 2 - i, r.height);
        t.transformOrigin = l + " " + s + "px";
      }
    }
    function C(e, t) {
      return Math.min(Math.max(e, 0), Math.max(t, 0));
    }
    function b(e) {
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
    function v(t) {
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
      (l.getFixedElementPosition = b),
      (l.getDefaultTransformOrigin = v));
  },
  98,
);
