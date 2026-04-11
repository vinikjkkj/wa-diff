__d(
  "WAResolvable",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function () {
        function t() {
          var t = this;
          ((this.$1 = function () {}),
            (this.$2 = !1),
            (this.isSettled = !1),
            (this.promise = new (e || (e = n("Promise")))(function (e) {
              t.$1 = e;
            })));
        }
        var r = t.prototype;
        return (
          (r.resolve = function (t) {
            ((this.$2 = !0), (this.isSettled = !0), this.$1(t));
          }),
          (r.reject = function (r) {
            ((this.isSettled = !0),
              this.resolve((e || (e = n("Promise"))).reject(r)));
          }),
          (r.resolveWasCalled = function () {
            return this.$2;
          }),
          t
        );
      })();
    i.Resolvable = l;
  },
  66,
);
