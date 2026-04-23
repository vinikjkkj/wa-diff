__d(
  "WAWebWhatsNewNux",
  ["WAWebNux", "WAWebNuxCoolOff"],
  function (t, n, r, o, a, i, l) {
    var e = {
      COOL_OFF_DURATION_IN_DAYS: 30,
      MAX_DISMISSES: 1e3,
      MAX_VIEWS_IN_DAYS: 1e3,
      MAX_CLICKS: 1e3,
      VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1e3,
      CLICKS_BEFORE_COOL_OFF: 1e3,
      COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.WHATS_NEW,
    };
    function s() {
      return new (o("WAWebNuxCoolOff").CoolOffNux)(
        o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.WHATS_NEW,
        e,
      );
    }
    function u() {
      return s().shouldShow();
    }
    ((l.createWhatsNewNux = s), (l.shouldShowWhatsNewNux = u));
  },
  98,
);
