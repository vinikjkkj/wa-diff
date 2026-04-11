__d(
  "WAWebDebounce",
  ["debounceCore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      t === void 0 && (t = 100);
      var o = 0,
        a = null,
        i = [],
        l = r("debounceCore")(
          e,
          t,
          n == null ? void 0 : n.context,
          void 0,
          void 0,
          n == null ? void 0 : n.leading,
        ),
        s = function () {
          l.isPending() &&
            (l.reset(),
            self.clearTimeout(a),
            (o = Date.now()),
            e.apply(n == null ? void 0 : n.context, i));
        };
      function u() {
        for (
          var e = n == null ? void 0 : n.maxWait,
            t = arguments.length,
            r = new Array(t),
            u = 0;
          u < t;
          u++
        )
          r[u] = arguments[u];
        return (
          (i = [].concat(r)),
          (o = l.isPending() ? o : Date.now()),
          e != null &&
            a == null &&
            (a = self.setTimeout(function () {
              Date.now() - o >= e && l.isPending() && s();
            }, e)),
          l.apply(void 0, r)
        );
      }
      var c = function () {
        (l.reset(), window.clearTimeout(a));
      };
      return (
        (u.reset = c),
        (u.cancel = c),
        (u.isPending = l.isPending),
        (u.flush = s),
        u
      );
    }
    l.default = e;
  },
  98,
);
