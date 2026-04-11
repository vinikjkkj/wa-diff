__d(
  "cancelAnimationFramePolyfill",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        t.__fbNativeCancelAnimationFrame ||
        t.cancelAnimationFrame ||
        t.webkitCancelAnimationFrame ||
        t.mozCancelAnimationFrame ||
        t.oCancelAnimationFrame ||
        t.msCancelAnimationFrame ||
        t.clearTimeout,
      l = e;
    i.default = l;
  },
  66,
);
