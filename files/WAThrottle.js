__d(
  "WAThrottle",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = 0,
        r = null,
        o;
      function a() {
        for (
          var a = Date.now(),
            i = a - n,
            l = arguments.length,
            s = new Array(l),
            u = 0;
          u < l;
          u++
        )
          s[u] = arguments[u];
        ((o = s),
          i >= t
            ? (clearTimeout(r),
              (r = null),
              e.apply(void 0, s),
              (n = Date.now()))
            : r == null &&
              (r = setTimeout(function () {
                return e.apply(void 0, o);
              }, t - i)));
      }
      return a;
    }
    i.throttle = e;
  },
  66,
);
