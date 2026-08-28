__d(
  "KFAnimationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return t;
    }
    function l(e, t, n) {
      return (n - t) * e + t;
    }
    function s(e, t, n, r, o, a, i) {
      return o * r + 2 * n * e * a + t * i;
    }
    function u(e, t, n, r, o, a, i, l) {
      return o * r * n + a * 3 * r * e + i * 3 * n * t + l * t * e;
    }
    ((i.hold = e),
      (i.identityFunction = e),
      (i.linearInterpolation = l),
      (i.quadraticInterpolation = s),
      (i.cubicInterpolation = u),
      (i.lerp = l));
  },
  66,
);
