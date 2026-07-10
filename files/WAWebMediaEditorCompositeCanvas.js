__d(
  "WAWebMediaEditorCompositeCanvas",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return e.toCanvas({
        pixelRatio: t,
        x: 0,
        y: 0,
        width: e.width(),
        height: e.height(),
      });
    }
    i.getStageCompositeCanvas = e;
  },
  66,
);
