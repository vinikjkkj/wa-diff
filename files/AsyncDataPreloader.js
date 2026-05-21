__d(
  "AsyncDataPreloader",
  ["AsyncData", "isEmptyObject"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = (function () {
        function t(t) {
          var n = this,
            a = t.id;
          ((this.$1 = a),
            (this.$2 = o("AsyncData").getPreloaderRef_INTERNAL(this.$1)),
            this.$2.onLoaded(function (t) {
              r("isEmptyObject")(t) && e.set(n.getPreloaderName(), !0);
            }),
            e.set(this.getPreloaderName(), !1));
        }
        var n = t.prototype;
        return (
          (n.getID = function () {
            return this.$1;
          }),
          (n.peek = function () {
            return this.$2.peek();
          }),
          (n.onLoaded = function (n) {
            return (
              e.set(this.getPreloaderName(), !0),
              this.$2.onLoaded(n),
              this
            );
          }),
          (n.onError = function (n) {
            return (
              e.set(this.getPreloaderName(), !0),
              this.$2.onError(n),
              this
            );
          }),
          (n.cleanup = function () {
            o("AsyncData").cleanup(this.$1);
          }),
          (n.getContextProvider = function () {
            return null;
          }),
          (n.getPreloaderName = function () {
            return this.$1.replace(/^adp_(.*)_[a-z0-9]+$/, "$1");
          }),
          (t.getUsageMap = function () {
            return e;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
