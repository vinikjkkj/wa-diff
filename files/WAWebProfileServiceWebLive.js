__d(
  "WAWebProfileServiceWebLive",
  ["WAWebProfileService", "WAWebPushNameBridge", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebProfileService").ProfileService.make(function* () {
      var e = {
        setPushName: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return r("WAWebPushNameBridge")(t);
          });
        },
      };
      return e;
    });
    l.ProfileServiceWebLive = e;
  },
  98,
);
