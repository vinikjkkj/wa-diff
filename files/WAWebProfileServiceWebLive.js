__d(
  "WAWebProfileServiceWebLive",
  ["JSResourceForInteraction", "WAWebProfileService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebPushNameBridge").__setRef(
        "WAWebProfileServiceWebLive",
      ),
      s = o("WAWebProfileService").ProfileService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = {
            setPushName: function (n) {
              return o("WebDi.Async").fromPromise(function () {
                return t(n);
              });
            },
          };
        return n;
      });
    l.ProfileServiceWebLive = s;
  },
  98,
);
