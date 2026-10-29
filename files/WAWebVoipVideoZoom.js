__d(
  "WAWebVoipVideoZoom",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.canvasAspect,
        n = e.coverFit,
        r = e.videoAspect,
        o = t > r;
      return n
        ? o
          ? { x: 1, y: t / r }
          : { x: r / t, y: 1 }
        : o
          ? { x: r / t, y: 1 }
          : { x: 1, y: t / r };
    }
    function l(e, t) {
      return t == null
        ? { offsetX: 0, offsetY: 0, scaleX: e.x, scaleY: e.y }
        : {
            offsetX: t.offsetX * 2,
            offsetY: -t.offsetY * 2,
            scaleX: e.x * t.scale,
            scaleY: e.y * t.scale,
          };
    }
    ((i.computeFitScale = e), (i.toClipSpaceTransform = l));
  },
  66,
);
