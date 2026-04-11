__d(
  "WAWebPinMsgConstants",
  ["$InternalEnum", "WATimeUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e = { INVALID: 0, PIN: 1, UNPIN: 2 },
      s = n("$InternalEnum").Mirrored([
        "FiveSeconds",
        "FifteenSeconds",
        "OneMinute",
        "OneDay",
        "SevenDays",
        "ThirtyDays",
      ]),
      u = s.SevenDays;
    function c(e) {
      switch (e) {
        case s.FiveSeconds:
          return 5;
        case s.FifteenSeconds:
          return 15;
        case s.OneMinute:
          return o("WATimeUtils").MINUTE_SECONDS;
        case s.OneDay:
          return o("WATimeUtils").DAY_SECONDS;
        case s.SevenDays:
          return 7 * o("WATimeUtils").DAY_SECONDS;
        case s.ThirtyDays:
          return 30 * o("WATimeUtils").DAY_SECONDS;
      }
    }
    function d(e) {
      switch (e) {
        case 5:
          return s.FiveSeconds;
        case 15:
          return s.FifteenSeconds;
        case o("WATimeUtils").MINUTE_SECONDS:
          return s.OneMinute;
        case o("WATimeUtils").DAY_SECONDS:
          return s.OneDay;
        case 7 * o("WATimeUtils").DAY_SECONDS:
          return s.SevenDays;
        case 30 * o("WATimeUtils").DAY_SECONDS:
          return s.ThirtyDays;
        default:
          throw r("err")("Unexpeded pin expiry duration");
      }
    }
    ((l.PIN_STATE = e),
      (l.PinExpiryDurationOption = s),
      (l.DEFAULT_PIN_EXPIRY_DURATION_OPTION = u),
      (l.getPinExpiryDuration = c),
      (l.getPinExpiryOption = d));
  },
  98,
);
