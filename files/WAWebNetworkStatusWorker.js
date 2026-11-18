__d(
  "WAWebNetworkStatusWorker",
  ["WAWebNetworkStatusStateManager"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.isOnline = function () {
            return o(
              "WAWebNetworkStatusStateManager",
            ).networkStatusStateManager.get();
          }),
          (t.waitIfOffline = function () {
            return o(
              "WAWebNetworkStatusStateManager",
            ).networkStatusStateManager.waitForValue(!0);
          }),
          e
        );
      })(),
      s = new e();
    ((l.NetworkStatusWorker = e), (l.networkStatusWorker = s));
  },
  98,
);
