__d(
  "WAWebBlocklistServiceWebLive",
  ["JSResourceForInteraction", "WAWebBlocklistService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebUpdateBlocklistDbJob").__setRef(
        "WAWebBlocklistServiceWebLive",
      ),
      s = o("WAWebBlocklistService").BlocklistService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.updateBlocklistDbJob,
          r = {
            updateBlocklistDbJob: function (t, r) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r);
              });
            },
          };
        return r;
      });
    l.BlocklistServiceWebLive = s;
  },
  98,
);
