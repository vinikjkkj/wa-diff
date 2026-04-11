__d(
  "foregroundRequestAnimationFrame",
  [
    "Visibility",
    "cancelAnimationFrame",
    "clearTimeout",
    "requestAnimationFrame",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (r("Visibility").isHidden()) {
        var t = r("setTimeout")(e, 0);
        return function () {
          r("clearTimeout")(t);
        };
      } else {
        var n = r("requestAnimationFrame")(e);
        return function () {
          r("cancelAnimationFrame")(n);
        };
      }
    }
    l.foregroundRequestAnimationFrame = e;
  },
  98,
);
