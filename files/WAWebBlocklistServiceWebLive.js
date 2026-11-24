__d(
  "WAWebBlocklistServiceWebLive",
  ["WAWebBlocklistService", "WAWebUpdateBlocklistDbJob", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebBlocklistService").BlocklistService.make(function* () {
      var e = {
        updateBlocklistDbJob: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebUpdateBlocklistDbJob").updateBlocklistDbJob(t, n);
          });
        },
      };
      return e;
    });
    l.BlocklistServiceWebLive = e;
  },
  98,
);
