__d(
  "WAWebUnknownUserDisplayedLogger",
  [
    "WAWebABProps",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameUnknownUserDisplayedWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 216e5,
      s = -1,
      u = 0,
      c = new Set();
    function d(t, n) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var r = o("WAWebABProps").getABPropConfigValue(
          "unknown_user_wam_max_events_per_window",
        );
        if (!(r <= 0)) {
          var a = Math.floor(Date.now() / e);
          a !== s && ((s = a), (u = 0), c.clear());
          var i = n + "_" + t;
          c.has(i) ||
            u >= r ||
            (c.add(i),
            (u += 1),
            new (o(
              "WAWebUsernameUnknownUserDisplayedWamEvent",
            ).UsernameUnknownUserDisplayedWamEvent)({
              unknownUserDisplayContext: t,
            }).commit());
        }
      }
    }
    l.logUnknownUserDisplayed = d;
  },
  98,
);
