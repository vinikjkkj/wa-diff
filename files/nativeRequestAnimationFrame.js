__d(
  "nativeRequestAnimationFrame",
  [],
  function (t, n, r, o, a, i) {
    var e =
        t.__fbNativeRequestAnimationFrame ||
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        t.msRequestAnimationFrame,
      l = e;
    i.default = l;
  },
  66,
);
