__d(
  "WAWebMediaEditorUtilsSize",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.height,
        n = e.maxSize,
        r = e.minSize,
        o = e.width;
      if (o === 0 || t === 0) return { x: 1, y: 1 };
      var a = 1;
      return (
        !n.isEmpty() &&
          (o > n.getWidth() || t > n.getHeight()) &&
          (a = Math.min(n.getWidth() / o, n.getHeight() / t)),
        !r.isEmpty() &&
          o < r.getWidth() &&
          t < r.getHeight() &&
          (a = Math.min(r.getWidth() / o, r.getHeight() / t)),
        { x: a, y: a }
      );
    }
    i.calculateContainScale = e;
  },
  66,
);
