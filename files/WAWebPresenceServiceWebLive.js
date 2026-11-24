__d(
  "WAWebPresenceServiceWebLive",
  [
    "WAWebContactPresenceBridge",
    "WAWebPresenceService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPresenceService").PresenceService.make(function* () {
      var e = {
        setPresenceAvailable: function () {
          return o("WebDi.Fx").sync(function () {
            return o("WAWebContactPresenceBridge").setPresenceAvailable();
          });
        },
        setPresenceUnavailable: function () {
          return o("WebDi.Fx").sync(function () {
            return o("WAWebContactPresenceBridge").setPresenceUnavailable();
          });
        },
        subscribeGroupPresence: function (t) {
          return o("WebDi.Fx").sync(function () {
            return o("WAWebContactPresenceBridge").subscribeGroupPresence(t);
          });
        },
        subscribeUserPresence: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebContactPresenceBridge").subscribeUserPresence(t);
          });
        },
      };
      return e;
    });
    l.PresenceServiceWebLive = e;
  },
  98,
);
