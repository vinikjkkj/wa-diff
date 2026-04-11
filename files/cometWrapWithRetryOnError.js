__d(
  "cometWrapWithRetryOnError",
  ["relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("relay-runtime").Observable.create(function (n) {
        var r,
          o = (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(function () {
            r = e.subscribe({
              complete: n.complete,
              error: function (r) {
                var e = function (t) {
                    n.error(t != null ? t : r);
                  },
                  a = t(r, o, e);
                a || n.error(r);
              },
              next: n.next,
            });
          });
        return (
          o(),
          function () {
            return r.unsubscribe();
          }
        );
      });
    }
    l.default = e;
  },
  98,
);
