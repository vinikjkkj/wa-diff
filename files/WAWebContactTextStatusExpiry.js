__d(
  "WAWebContactTextStatusExpiry",
  [
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(t) {
      var n = t.textStatusExpiryTs;
      n != null &&
        (t.meTextStatusExpiryTimer != null &&
          r("WAWebAlarm").clearTimeout(t.meTextStatusExpiryTimer),
        n < o("WATimeUtils").unixTime()
          ? self.setTimeout(function () {
              u(t);
            })
          : (t.meTextStatusExpiryTimer = r("WAWebAlarm").setGlobalTimeout(
              function () {
                return u(t);
              },
              n * e,
              t.meTextStatusExpiryTimer,
            )));
    }
    function u(e) {
      var t;
      (r("WAWebAlarm").clearTimeout(e.meTextStatusExpiryTimer),
        e.unset(["meTextStatusExpiryTimer"]),
        o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
          contactId: e.id,
          textString: (t = o("WAWebTextStatusUtils"))
            .CLEAR_TEXT_STATUS_STRING_VAL,
          emoji: t.CLEAR_TEXT_STATUS_EMOJI_VAL,
          ephemeralDuration: t.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
          newUpdateTime: t.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
          source: "clear-self-expiry",
        }));
    }
    l.setupContactTextStatusExpiration = s;
  },
  98,
);
