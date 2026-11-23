__d(
  "WAWebContactQueryServiceWebLive",
  ["JSResourceForInteraction", "WAWebContactQueryService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebQueryExistsJob").__setRef(
        "WAWebContactQueryServiceWebLive",
      ),
      s = o("WAWebContactQueryService").ContactQueryService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.queryPhoneExists,
          r = {
            queryPhoneExists: function (t, r) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r);
              });
            },
          };
        return r;
      });
    l.ContactQueryServiceWebLive = s;
  },
  98,
);
