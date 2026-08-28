__d(
  "KeyframesPathUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return (n - t) * e + t;
    }
    function l(e, t, n, r, o, a, i) {
      return o * r + 2 * n * e * a + t * i;
    }
    function s(e, t, n, r, o, a, i, l) {
      return o * r * n + a * 3 * r * e + i * 3 * n * t + l * t * e;
    }
    ((i.interpolateLinear = e),
      (i.interpolateQuad = l),
      (i.interpolateCubic = s),
      (i.lerp = e));
  },
  66,
);
