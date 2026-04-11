__d(
  "Deferred",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    (e || (e = n("Promise"))).resolve();
    var l = (function () {
      function t(t) {
        var r = this,
          o = t || e || (e = n("Promise"));
        ((this.$1 = !1),
          (this.$2 = new o(function (e, t) {
            ((r.$3 = e), (r.$4 = t));
          })));
      }
      var r = t.prototype;
      return (
        (r.getPromise = function () {
          return this.$2;
        }),
        (r.resolve = function (t) {
          ((this.$1 = !0), this.$3(t));
        }),
        (r.reject = function (t) {
          ((this.$1 = !0), this.$4(t));
        }),
        (r.isSettled = function () {
          return this.$1;
        }),
        t
      );
    })();
    i.default = l;
  },
  66,
);
