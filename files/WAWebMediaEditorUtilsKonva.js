__d(
  "WAWebMediaEditorUtilsKonva",
  ["WAWebMediaEditorGeometryPoint"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = 0,
        n = 0;
      return (
        window.TouchEvent != null && e instanceof window.TouchEvent
          ? e.touches.length > 0
            ? ((t = e.touches[0].clientX), (n = e.touches[0].clientY))
            : ((t = 0), (n = 0))
          : e instanceof MouseEvent && ((t = e.clientX), (n = e.clientY)),
        { clientX: t, clientY: n }
      );
    }
    function s(t, n) {
      var r = e(t),
        o = r.clientX,
        a = r.clientY,
        i = o - n.left,
        l = a - n.top;
      return { pointX: i, pointY: l };
    }
    function u(e, t, n) {
      if ((n === void 0 && (n = !1), !t))
        return new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 });
      var o = t.getAbsoluteScale(),
        a = o.x,
        i = o.y,
        l = t.content.getBoundingClientRect(),
        u = s(e, l),
        c = u.pointX,
        d = u.pointY;
      return (
        n &&
          ((c = Math.min(Math.max(0, c), l.width)),
          (d = Math.min(Math.max(0, d), l.height))),
        new (r("WAWebMediaEditorGeometryPoint"))({ x: c / a, y: d / i })
      );
    }
    function c(e) {
      return new (r("WAWebMediaEditorGeometryPoint"))({
        x: e.target.x() - e.target.offsetX(),
        y: e.target.y() - e.target.offsetY(),
      });
    }
    function d(e) {
      return e.target.rotation();
    }
    function m(e) {
      return { x: e.target.scaleX(), y: e.target.scaleY() };
    }
    function p(e) {
      var t, n;
      return (t =
        (n = e.target.attrs.name) == null ? void 0 : n.includes("anchor")) !=
        null
        ? t
        : !1;
    }
    function _(e, t) {
      if (!t) return !1;
      var n = t.getAbsoluteScale(),
        r = n.x,
        o = n.y,
        a = t.content.getBoundingClientRect(),
        i = a.height,
        l = a.width;
      return (
        (e.getX() === 0 && e.getY() === 0) ||
        (e.getX() === 0 && e.getY() === i / o) ||
        (e.getX() === l / r && e.getY() === 0) ||
        (e.getX() === l / r && e.getY() === i / o)
      );
    }
    ((l.getPointFromStage = u),
      (l.getPointFromGroup = c),
      (l.getRotationFromGroup = d),
      (l.getScaleFromGroup = m),
      (l.isEventOnAnchor = p),
      (l.isStageCorner = _));
  },
  98,
);
