__d(
  "WAWebPresenceServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebPresenceService",
    "WebDi.Async",
    "WebDi.Fx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebContactPresenceBridge",
      ).__setRef("WAWebPresenceServiceWebLive"),
      s = o("WAWebPresenceService").PresenceService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.setPresenceAvailable,
          r = t.setPresenceUnavailable,
          a = t.subscribeGroupPresence,
          i = t.subscribeUserPresence,
          l = {
            setPresenceAvailable: function () {
              return o("WebDi.Fx").sync(function () {
                return n();
              });
            },
            setPresenceUnavailable: function () {
              return o("WebDi.Fx").sync(function () {
                return r();
              });
            },
            subscribeGroupPresence: function (t) {
              return o("WebDi.Fx").sync(function () {
                return a(t);
              });
            },
            subscribeUserPresence: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
          };
        return l;
      });
    l.PresenceServiceWebLive = s;
  },
  98,
);
