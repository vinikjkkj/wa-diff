__d(
  "WAWebStatusUpdatesServiceWebLive",
  ["JSResourceForInteraction", "WAWebStatusUpdatesService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebContactStatusBridge").__setRef(
        "WAWebStatusUpdatesServiceWebLive",
      ),
      s = o("WAWebStatusUpdatesService").StatusUpdatesService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = t.queryStatusAll,
            r = t.sendReadStatus,
            a = {
              queryStatusAll: function () {
                return o("WebDi.Async").fromPromise(function () {
                  return n();
                });
              },
              sendReadStatus: function (t, n, a) {
                return o("WebDi.Async").fromPromise(function () {
                  return r(t, n, a);
                });
              },
            };
          return a;
        },
      );
    l.StatusUpdatesServiceWebLive = s;
  },
  98,
);
