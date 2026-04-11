__d(
  "WAWebScreenLockTimerOptions",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebUserPrefsScreenLock",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 15 * o("WATimeUtils").MINUTE_SECONDS;
    function c() {
      return [
        {
          value: o("WATimeUtils").MINUTE_SECONDS,
          label: s._(/*BTDS*/ "After 1 minute"),
          summaryText: s._(/*BTDS*/ "After 1 minute"),
        },
        {
          value: u,
          label: s._(/*BTDS*/ "After 15 minutes"),
          summaryText: s._(/*BTDS*/ "After 15 minutes"),
        },
        {
          value: o("WATimeUtils").HOUR_SECONDS,
          label: s._(/*BTDS*/ "After 1 hour"),
          summaryText: s._(/*BTDS*/ "After 1 hour"),
        },
        {
          value: 8 * o("WATimeUtils").HOUR_SECONDS,
          label: s._(/*BTDS*/ "After 8 hours"),
          summaryText: s._(/*BTDS*/ "After 8 hours"),
        },
      ];
    }
    function d(t) {
      var n, a;
      if (t === 0) return s._(/*BTDS*/ "Require password to unlock WhatsApp");
      var i =
        (n = c().find(function (e) {
          return e.value === t;
        })) == null
          ? void 0
          : n.summaryText;
      return i != null
        ? i
        : (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "App lock auto lock option ",
                " does not exist",
              ])),
            t,
          ),
          o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(u),
          r("WANullthrows")(
            (a = c().find(function (e) {
              return e.value === u;
            })) == null
              ? void 0
              : a.summaryText,
          ));
    }
    ((l.DEFAULT_SCREEN_LOCK_DURATION_SECONDS = u),
      (l.getScreenLockTimerOptions = c),
      (l.getScreenLockAutoTimerLabelForSummary = d));
  },
  226,
);
