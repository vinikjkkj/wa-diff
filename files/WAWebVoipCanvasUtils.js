__d(
  "WAWebVoipCanvasUtils",
  ["WAWebVoipVideoRendererRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        n === void 0 && (n = window.devicePixelRatio),
        { width: Math.trunc(e * n), height: Math.trunc(t * n) }
      );
    }
    function s(t, n, r, a) {
      var i = e(n, r, a);
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
