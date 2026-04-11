__d(
  "WAWebMediaEditorUtilsSize",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      if (e === 0 || t === 0) return { x: 1, y: 1 };
      var o = 1;
      return (
        !n.isEmpty() &&
          (e > n.getWidth() || t > n.getHeight()) &&
          (o = Math.min(n.getWidth() / e, n.getHeight() / t)),
        !r.isEmpty() &&
          e < r.getWidth() &&
          t < r.getHeight() &&
          (o = Math.min(r.getWidth() / e, r.getHeight() / t)),
        { x: o, y: o }
      );
    }
    i.calculateContainScale = e;
  },
  66,
);
