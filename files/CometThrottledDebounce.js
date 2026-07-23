__d(
  "CometThrottledDebounce",
  ["clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = 0,
        a = 0,
        i = null,
        l,
        s,
        u = function () {
          i != null && (r("clearTimeout")(i), (i = null));
        },
        c = function () {
          var c = Array.from(arguments),
            d = Date.now();
          ((l = this), (s = c), (o = d));
          var m = function () {
            (s != null && e.apply(l, s),
              (l = s = null),
              (a = Date.now()),
              (i = null));
          };
          a + n < d
            ? (u(), m())
            : o + t > d && (u(), (i = r("setTimeout")(m, t)));
        };
      return (
        (c.cancel = function () {
          ((s = l = null), u());
        }),
        c
      );
    }
    l.default = e;
  },
  98,
);
