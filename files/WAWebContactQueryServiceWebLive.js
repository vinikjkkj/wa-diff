__d(
  "WAWebContactQueryServiceWebLive",
  ["WAWebContactQueryService", "WAWebQueryExistsJob", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebContactQueryService").ContactQueryService.make(
      function* () {
        var e = {
          queryPhoneExists: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebQueryExistsJob").queryPhoneExists(t, n);
            });
          },
        };
        return e;
      },
    );
    l.ContactQueryServiceWebLive = e;
  },
  98,
);
