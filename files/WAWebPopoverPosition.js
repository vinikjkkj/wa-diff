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
    function f(t, n, o, a, i, l) {
      var f, g, h;
      i === void 0 && (i = 0);
      var y = (f = l == null ? void 0 : l.height) != null ? f : 0,
        C = (g = l == null ? void 0 : l.width) != null ? g : 0,
        b = (h = l == null ? void 0 : l.offset) != null ? h : 0,
        v,
        S,
        R = 1,
        L = i + y,
        E = o;
      r("WAWebL10N").isRTL() &&
        (o === e.Start ? (E = e.End) : o === e.End && (E = e.Start));
      var k = {
          coords: { top: 0, left: 0 },
          alignment: a,
          position: E,
          arrowCoords: null,
        },
        I = 0;
      return (
        l != null &&
          (a === s.Start || a === s.End) &&
          ((E === e.Top || E === e.Bottom) && t.width < b * 2 + C
            ? (I = b + C / 2 - t.width / 2)
            : (E === e.Start || E === e.End) &&
              t.height < b * 2 + C &&
              (I = b + C / 2 - t.height / 2),
          a === s.Start && (I = -I)),
        E === e.Top
          ? ((k.coords.top = u(t, n, L)), (S = "100%"))
          : E === e.End
            ? ((k.coords.left = c(t, L)), (v = -y + R))
            : E === e.Bottom
              ? ((k.coords.top = d(t, L)), (S = -y + R))
              : E === e.Start && ((k.coords.left = m(t, n, L)), (v = "100%")),
        a === s.Center
          ? E === e.Top || E === e.Bottom
            ? ((v = "calc(50% - " + C / 2 + "px)"), (k.coords.left = p(t, n)))
            : ((S = "calc(50% - " + C / 2 + "px)"), (k.coords.top = _(t, n)))
          : a === s.Start
            ? E === e.Top || E === e.Bottom
              ? ((v = b), (k.coords.left = t.left + I))
              : ((S = b), (k.coords.top = t.top + I))
            : a === s.End &&
              (E === e.Top || E === e.Bottom
                ? ((v = "calc(100% - " + (b + C) + "px)"),
                  (k.coords.left = t.right - n.width + I))
                : ((S = "calc(100% - " + (b + C) + "px)"),
                  (k.coords.top = t.bottom - n.height + I))),
        k.coords.left < 0
          ? E === e.Top || E === e.Bottom
            ? ((k.alignment = s.Start), (k.coords.left = t.left + I), (v = b))
            : ((k.position = e.End), (k.coords.left = c(t, L)), (v = "0px"))
          : k.coords.left + n.width > window.innerWidth &&
            (E === e.Top || E === e.Bottom
              ? ((k.alignment = s.End),
                (k.coords.left = t.right - n.width + I),
                (v = "calc(100% - " + C + "px)"))
              : ((k.position = e.Start),
                (k.coords.left = m(t, n, L)),
                (v = "100%"))),
        k.coords.top < 0
          ? E === e.Start || E === e.End
            ? ((k.alignment = s.Start), (k.coords.top = t.top + I), (S = b))
            : ((k.position = e.Bottom), (k.coords.top = d(t, L)), (S = "0px"))
          : k.coords.top + n.height > window.innerHeight &&
            (E === e.Start || E === e.End
              ? ((k.alignment = s.End),
                (k.coords.top = t.bottom - n.height + I),
                (S = "calc(100% - " + b + "px)"))
              : ((k.position = e.Top),
                (k.coords.top = u(t, n, L)),
                (S = "100%"))),
        l != null &&
          S != null &&
          v != null &&
          (k.arrowCoords = { top: S, left: v }),
        k
      );
    }
    function g(e, t, n, r, o, a) {
      o === void 0 && (o = 0);
      var i;
      return (
        "getBoundingClientRect" in e
          ? (i = e.getBoundingClientRect())
          : (i = {
              top: e.y,
              right: e.x,
              bottom: e.y,
              left: e.x,
              width: 0,
              height: 0,
              x: e.x,
              y: e.y,
            }),
        f(i, t.getBoundingClientRect(), n, r, o, a)
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
