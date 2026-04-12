__d(
  "useWAWebCarouselScrollUtils",
  ["WAWebVelocityAnimate", "useWAWebThrottledCallback"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = 7,
      u = 200;
    function c(t, n, o, a) {
      var i = r("useWAWebThrottledCallback")(function (e) {
          var r = t == null ? void 0 : t.current;
          if (r != null) {
            r.scrollLeft < s ? n(!1) : n(!0);
            var a = r.scrollLeft + r.clientWidth >= r.scrollWidth - s;
            o(!a);
          }
        }, 100),
        l = function (o) {
          var n = e * 0.5 * a.length * (o ? 1 : -1),
            i = t == null ? void 0 : t.current;
          i != null &&
            (r("WAWebVelocityAnimate")(i, "stop"),
            r("WAWebVelocityAnimate")(i, "scroll", {
              SCROLL_ANIMATION: u,
              container: i,
              offset: n,
              axis: "x",
              easing: [0.1, 0.82, 0.25, 1],
            }));
        };
      return [i, l];
    }
    l.default = c;
  },
  98,
);
