__d(
  "WAWebStatusUpdatesServiceWebLive",
  ["WAWebContactStatusBridge", "WAWebStatusUpdatesService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStatusUpdatesService").StatusUpdatesService.make(
      function* () {
        var e = {
          queryStatusAll: function () {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebContactStatusBridge").queryStatusAll();
            });
          },
          sendReadStatus: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebContactStatusBridge").sendReadStatus(t, n, r);
            });
          },
        };
        return e;
      },
    );
    l.StatusUpdatesServiceWebLive = e;
  },
  98,
);
