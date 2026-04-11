__d(
  "PromiseResult",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function t() {
          var t = this;
          this.promise = new (e || (e = n("Promise")))(function (e, n) {
            ((t.$1 = e), (t.$2 = n));
          });
        }
        var r = t.prototype;
        return (
          (r.resolve = function (t) {
            this.$1(t);
          }),
          (r.reject = function (t) {
            this.$2(t);
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
