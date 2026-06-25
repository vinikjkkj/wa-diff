__d(
  "WAWebNetworkStatusWorker",
  ["WAGenericStateManager"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = new (o("WAGenericStateManager").WAGenericStateManager)(!0);
        }
        var t = e.prototype;
        return (
          (t.acceptUpdate = function (t) {
            this.$1.set(t);
          }),
          (t.waitIfOffline = function () {
            return this.$1.waitForValue(!0);
          }),
          e
        );
      })(),
      s = new e();
    ((l.NetworkStatusWorker = e), (l.networkStatusWorker = s));
  },
  98,
);
