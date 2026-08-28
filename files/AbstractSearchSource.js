__d(
  "AbstractSearchSource",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (function () {
        function t() {}
        var r = t.prototype;
        return (
          (r.bootstrap = function (r) {
            var t = this;
            return (
              this.$1 ||
                (this.$1 = new (e || (e = n("Promise")))(function (e) {
                  t.bootstrapImpl(e);
                })),
              r == null ? this.$1.then() : this.$1.then(r)
            );
          }),
          (r.search = function (t, n, r) {
            this.searchImpl(t, n, r);
          }),
          (r.bootstrapImpl = function (t) {
            t();
          }),
          (r.searchImpl = function (t, n, r) {
            var e = new Error(
              "Abstract method #searchImpl is not implemented.",
            );
            throw (e.stack, e);
          }),
          (r.clearBootstrappedData = function () {
            this.$1 = null;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
