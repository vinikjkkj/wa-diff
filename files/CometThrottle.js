__d(
  "CometThrottle",
  ["FBLogger", "clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n === void 0 ? {} : n,
        a = o.leading,
        i = o.trailing,
        l,
        s,
        u,
        c = null,
        d = 0,
        m = function () {
          var t = l;
          l = null;
          var n = s;
          if (((s = null), t == null))
            throw r("FBLogger")("comet_infra").mustfixThrow(
              "It should be impossible for `cachedArgs` to be `null` at the moment we invoke the throttled function. Investigate why this is the case.",
            );
          return e.apply(n, t);
        },
        p = function () {
          ((d = a === !1 ? 0 : new Date()), (c = null), (u = m()));
        },
        _ = function () {
          ((l = s = null), c != null && (r("clearTimeout")(c), (c = null)));
        };
      function f() {
        var e = new Date();
        !d && a === !1 && (d = e);
        var n = t - (e - d);
        return (
          n <= 0
            ? (r("clearTimeout")(c),
              (c = null),
              (d = e),
              (l = arguments),
              (s = this),
              (u = m()))
            : i !== !1 &&
              ((l = arguments),
              (s = this),
              c == null && (c = r("setTimeout")(p, n))),
          u
        );
      }
      return ((f.cancel = _), f);
    }
    l.default = e;
  },
  98,
);
