__d(
  "SVGInterpolationRenderer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return "M " + e + "," + t;
    }
    function l(e, t) {
      return "L " + e + "," + t;
    }
    function s(e, t, n, r, o, a) {
      return "C " + e + "," + t + " " + n + "," + r + " " + o + "," + a;
    }
    function u() {
      return "z";
    }
    ((i.moveTo = e), (i.lineTo = l), (i.bezierCurveTo = s), (i.closePath = u));
  },
  66,
);
