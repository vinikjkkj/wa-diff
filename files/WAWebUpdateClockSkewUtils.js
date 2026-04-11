__d(
  "WAWebUpdateClockSkewUtils",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebClockSkewDifferenceTWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = Date.now() / 1e3,
        n = Math.round(t - e),
        r = Math.round(n / o("WATimeUtils").HOUR_SECONDS);
      (r !== 0 &&
        o("WAWebABProps").getABPropConfigValue("log_clock_skew") &&
        new (o(
          "WAWebClockSkewDifferenceTWamEvent",
        ).ClockSkewDifferenceTWamEvent)({ clockSkewHourly: r * -1 }).commit(),
        o("WATimeUtils").setClockSkew(n),
        o("WAWebBackendApi").frontendFireAndForget("setWebClockSkew", {
          newClockSkew: n,
        }));
    }
    l.updateClockSkew = e;
  },
  98,
);
