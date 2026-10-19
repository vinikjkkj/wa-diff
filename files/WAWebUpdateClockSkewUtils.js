__d(
  "WAWebUpdateClockSkewUtils",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebClockSkewDifferenceTWamEvent",
    "cr:2960",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = Date.now() / 1e3,
        r = Math.round(t - e),
        a = Math.round(r / o("WATimeUtils").HOUR_SECONDS);
      (a !== 0 &&
        o("WAWebABProps").getABPropConfigValue("log_clock_skew") &&
        new (o(
          "WAWebClockSkewDifferenceTWamEvent",
        ).ClockSkewDifferenceTWamEvent)({ clockSkewHourly: a * -1 }).commit(),
        o("WATimeUtils").setClockSkew(r),
        o("WAWebBackendApi").frontendFireAndForget("setWebClockSkew", {
          newClockSkew: r,
        }),
        n("cr:2960") == null ||
          n("cr:2960").reportLoginServerTime(
            o("WATimeUtils").castUnixTimeToMillisTime(e),
          ));
    }
    l.updateClockSkew = e;
  },
  98,
);
