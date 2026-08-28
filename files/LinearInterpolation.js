__d(
  "LinearInterpolation",
  ["SVGInterpolationRenderer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .map(function (e, t) {
          return t === 0
            ? o("SVGInterpolationRenderer").moveTo.apply(
                o("SVGInterpolationRenderer"),
                e,
              )
            : o("SVGInterpolationRenderer").lineTo.apply(
                o("SVGInterpolationRenderer"),
                e,
              );
        })
        .join(" ");
    }
    l.default = e;
  },
  98,
);
