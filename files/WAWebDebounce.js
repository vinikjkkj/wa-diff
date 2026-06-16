__d(
  "WAWebDebounce",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r, o;
      t === void 0 && (t = 100);
      var a = (r = n == null ? void 0 : n.leading) != null ? r : !1,
        i = (o = n == null ? void 0 : n.trailing) != null ? o : !a,
        l = null,
        s = null,
        u = null,
        c = function () {
          (l != null && self.clearTimeout(l), (l = null));
        },
        d = function () {
          (s != null && self.clearTimeout(s), (s = null));
        },
        m = function (r) {
          e.apply(n == null ? void 0 : n.context, r);
        },
        p = function () {
          if (l != null) {
            (c(), d());
            var e = u;
            ((u = null), i && e != null && m(e));
          }
        };
      function _() {
        for (
          var e = n == null ? void 0 : n.maxWait,
            r = a && l == null,
            o = arguments.length,
            _ = new Array(o),
            f = 0;
          f < o;
          f++
        )
          _[f] = arguments[f];
        ((u = r ? null : [].concat(_)),
          c(),
          r && m(_),
          (l = self.setTimeout(function () {
            ((l = null), d());
            var e = u;
            ((u = null), i && e != null && m(e));
          }, t)),
          e != null &&
            s == null &&
            (s = self.setTimeout(function () {
              ((s = null), p());
            }, e)));
      }
      var f = function () {
        (c(), d(), (u = null));
      };
      return (
        (_.reset = f),
        (_.cancel = f),
        (_.isPending = function () {
          return l != null;
        }),
        (_.flush = p),
        _
      );
    }
    i.default = e;
  },
  66,
);
