__d(
  "WAWebPresenceServiceClient",
  ["WAWebPresenceService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        setPresenceAvailable: function () {
          return e(o("WAWebPresenceService").PresenceService, function (e) {
            return e.setPresenceAvailable();
          });
        },
        setPresenceUnavailable: function () {
          return e(o("WAWebPresenceService").PresenceService, function (e) {
            return e.setPresenceUnavailable();
          });
        },
        subscribeGroupPresence: function (n) {
          return e(o("WAWebPresenceService").PresenceService, function (e) {
            return e.subscribeGroupPresence(n);
          });
        },
        subscribeUserPresence: function (n) {
          return e(o("WAWebPresenceService").PresenceService, function (e) {
            return e.subscribeUserPresence(n);
          });
        },
      };
    }
    l.presenceServiceClient = e;
  },
  98,
);
