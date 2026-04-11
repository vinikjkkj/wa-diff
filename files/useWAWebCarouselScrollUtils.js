__d(
  "useWAWebCarouselScrollUtils",
  [
    "WAWebVelocityAnimate",
    "react-compiler-runtime",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = 7,
      u = 200;
    function c(t, n, a, i) {
      var l = o("react-compiler-runtime").c(10),
        c;
      l[0] !== t || l[1] !== a || l[2] !== n
        ? ((c = function (r) {
            var e = t == null ? void 0 : t.current;
            if (e != null) {
              e.scrollLeft < s ? n(!1) : n(!0);
              var o = e.scrollLeft + e.clientWidth >= e.scrollWidth - s;
              a(!o);
            }
          }),
          (l[0] = t),
          (l[1] = a),
          (l[2] = n),
          (l[3] = c))
        : (c = l[3]);
      var d = r("useWAWebThrottledCallback")(c, 100),
        m;
      l[4] !== t || l[5] !== i
        ? ((m = function (o) {
            var n = e * 0.5 * i.length * (o ? 1 : -1),
              a = t == null ? void 0 : t.current;
            a != null &&
              (r("WAWebVelocityAnimate")(a, "stop"),
              r("WAWebVelocityAnimate")(a, "scroll", {
                SCROLL_ANIMATION: u,
                container: a,
                offset: n,
                axis: "x",
                easing: [0.1, 0.82, 0.25, 1],
              }));
          }),
          (l[4] = t),
          (l[5] = i),
          (l[6] = m))
        : (m = l[6]);
      var p = m,
        _;
      return (
        l[7] !== d || l[8] !== p
          ? ((_ = [d, p]), (l[7] = d), (l[8] = p), (l[9] = _))
          : (_ = l[9]),
        _
      );
    }
    l.default = c;
  },
  98,
);
