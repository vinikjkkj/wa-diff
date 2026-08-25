__d(
  "WAWebVoipCallLogTimestamp",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return !Number.isFinite(e) || e <= 0
        ? o("WATimeUtils").unixTime()
        : (t = o("WATimeUtils").castMillisTimeToUnixTime(
              o("WATimeUtils").castToMillisTime(e),
            )) != null
          ? t
          : o("WATimeUtils").unixTime();
    }
    l.resolveCallLogTimestampFromOfferTime = e;
  },
  98,
);
