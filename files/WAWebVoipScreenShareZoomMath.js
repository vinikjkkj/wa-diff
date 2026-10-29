__d(
  "WAWebVoipScreenShareZoomMath",
  ["WAWebVoipVideoZoom"],
  function (t, n, r, o, a, i, l) {
    var e = { offsetX: 0, offsetY: 0, scale: 1 },
      s = 3,
      u = 0.1,
      c = 0.01,
      d = 25,
      m = 16,
      p = 800,
      _ = 0.001;
    function f(e) {
      return e.scale > 1 + _;
    }
    function g(e, t, n) {
      return t === "in"
        ? Math.min(n, Math.floor(e + _) + 1)
        : Math.max(1, Math.ceil(e - _) - 1);
    }
    function h(e) {
      var t = e.maxScale,
        n = e.point,
        r = e.scale,
        o = e.viewport,
        a = e.zoom,
        i = S(r, 1, Math.max(1, t)),
        l = i / a.scale;
      return C(
        {
          offsetX: n.x - (n.x - a.offsetX) * l,
          offsetY: n.y - (n.y - a.offsetY) * l,
          scale: i,
        },
        o,
      );
    }
    function y(e, t, n) {
      return C(
        { offsetX: e.offsetX + t.x, offsetY: e.offsetY + t.y, scale: e.scale },
        n,
      );
    }
    function C(e, t) {
      var n = o("WAWebVoipVideoZoom").computeFitScale({
        canvasAspect: t.canvasAspect,
        coverFit: !1,
        videoAspect: t.contentAspect,
      });
      return {
        offsetX: v(e.offsetX, n.x * e.scale),
        offsetY: v(e.offsetY, n.y * e.scale),
        scale: e.scale,
      };
    }
    function b(e, t) {
      var n = t === 1 ? e * m : t === 2 ? e * p : e;
      return Math.exp(-S(n, -d, d) * c);
    }
    function v(e, t) {
      var n = (t - 1) / 2;
      return n <= 0 ? 0 : S(e, -n, n);
    }
    function S(e, t, n) {
      return Math.min(n, Math.max(t, e));
    }
    ((l.ZOOM_RESET = e),
      (l.DOUBLE_CLICK_ZOOM_SCALE = s),
      (l.KEYBOARD_PAN_STEP = u),
      (l.isZoomed = f),
      (l.nextZoomStep = g),
      (l.zoomAroundPoint = h),
      (l.panZoom = y),
      (l.clampPan = C),
      (l.wheelZoomFactor = b));
  },
  98,
);
