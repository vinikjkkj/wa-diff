__d(
  "WAWebVoipCanvasUtils",
  ["WAWebVoipVideoRendererRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.cssHeight,
        n = e.cssWidth,
        r = e.scale,
        o = r === void 0 ? window.devicePixelRatio : r;
      return { width: Math.trunc(n * o), height: Math.trunc(t * o) };
    }
    function s(t, n, r, a) {
      var i = e({ cssHeight: r, cssWidth: n, scale: a });
      return (
        o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.onCanvasResize(t, i.width, i.height),
        i
      );
    }
    ((l.computeCanvasBufferSize = e), (l.resizeCanvasBuffer = s));
  },
  98,
);
