__d(
  "CometThrottledDebounce",
  ["clearTimeout", "performanceAbsoluteNow", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o) {
      var a = 0,
        i = 0,
        l = null,
        s,
        u,
        c = function () {
          l != null && (r("clearTimeout")(l), (l = null));
        },
        d = function () {
          var d = Array.from(arguments),
            m = (e || (e = r("performanceAbsoluteNow")))();
          ((s = this), (u = d), (a = m));
          var p = function () {
            (u != null && t.apply(s, u),
              (s = u = null),
              (i = (e || (e = r("performanceAbsoluteNow")))()),
              (l = null));
          };
          i + o < m
            ? (c(), p())
            : a + n > m && (c(), (l = r("setTimeout")(p, n)));
        };
      return (
        (d.cancel = function () {
          ((u = s = null), c());
        }),
        d
      );
    }
    l.default = s;
  },
  98,
);
