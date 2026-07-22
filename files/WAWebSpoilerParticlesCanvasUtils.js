__d(
  "WAWebSpoilerParticlesCanvasUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (t.length === 0)
        return [{ x: 0, y: 0, width: e.width, height: e.height }];
      for (var n = [], r = 0; r < t.length; r++) {
        var o = t[r];
        o != null &&
          n.push({
            x: o.left - e.left,
            y: o.top - e.top,
            width: o.width,
            height: o.height,
          });
      }
      return n;
    }
    function l(e, t) {
      var n = e.left - t.left,
        r = e.top - t.top;
      return n !== 0 || r !== 0 ? "translate(" + n + "px, " + r + "px)" : "";
    }
    ((i.getSpoilerParticleFields = e),
      (i.getSpoilerParticlesCanvasTransform = l));
  },
  66,
);
