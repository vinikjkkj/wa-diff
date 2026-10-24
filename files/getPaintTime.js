__d(
  "getPaintTime",
  [
    "cancelAnimationFrame",
    "clearTimeout",
    "performanceNow",
    "requestAnimationFrame",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o = null,
        a,
        i,
        l,
        s = function () {
          var e;
          ((e = o) == null || e.disconnect(),
            r("clearTimeout")(a),
            r("clearTimeout")(i),
            r("cancelAnimationFrame")(l));
        };
      if (
        ((a = r("setTimeout")(function () {
          a = r("setTimeout")(function () {
            a = r("setTimeout")(function () {
              (s(), t(null, (e || (e = r("performanceNow")))()));
            }, 100);
          }, 0);
        }, 16)),
        IntersectionObserver)
      ) {
        var u = {};
        ((o = new IntersectionObserver(function (n) {
          var o,
            a,
            i =
              (o = (a = n[0]) == null ? void 0 : a.time) != null
                ? o
                : (e || (e = r("performanceNow")))();
          (s(), t(i, i));
        }, u)),
          o.observe(n != null ? n : window.document.body));
      } else
        l = r("requestAnimationFrame")(function () {
          i = r("setTimeout")(function () {
            (s(), t(null, (e || (e = r("performanceNow")))()));
          }, 0);
        });
    }
    l.default = s;
  },
  98,
);
