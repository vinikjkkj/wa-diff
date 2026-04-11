__d(
  "CometDebounce",
  ["clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t === void 0 ? {} : t,
        o = n.leading,
        a = n.wait,
        i = !0,
        l;
      function s() {
        for (var t = arguments.length, n = new Array(t), u = 0; u < t; u++)
          n[u] = arguments[u];
        var c;
        if (o === !0) {
          if (
            ((c = function () {
              ((i = !0), (l = null));
            }),
            !i)
          ) {
            (r("clearTimeout")(l), (l = r("setTimeout")(c, a)));
            return;
          }
          ((i = !1), e.apply(void 0, n));
        } else
          (s.reset(),
            (c = function () {
              ((l = null), e.apply(void 0, n));
            }));
        l = r("setTimeout")(c, a);
      }
      return (
        (s.isPending = function () {
          return l != null;
        }),
        (s.reset = function () {
          (r("clearTimeout")(l), (l = null), (i = !0));
        }),
        s
      );
    }
    l.default = e;
  },
  98,
);
