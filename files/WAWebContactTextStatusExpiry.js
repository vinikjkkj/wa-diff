__d(
  "WAWebContactTextStatusExpiry",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = new WeakMap();
    function c(e) {
      d(e);
      var t = e.textStatusExpiryTs;
      if (t != null) {
        var n = function () {
          return m(e, t);
        };
        if (t <= o("WATimeUtils").unixTime()) {
          u.set(
            e,
            self.setTimeout(function () {
              (u.delete(e), n());
            }),
          );
          return;
        }
        e.textStatusExpiryTimer = r("WAWebAlarm").setGlobalTimeout(n, t * s);
      }
    }
    function d(e) {
      e.textStatusExpiryTimer != null &&
        (r("WAWebAlarm").clearTimeout(e.textStatusExpiryTimer),
        (e.textStatusExpiryTimer = null));
      var t = u.get(e);
      t != null && (self.clearTimeout(t), u.delete(e));
    }
    function m(t, n) {
      t.textStatusExpiryTs === n &&
        ((t.textStatusExpiryTimer = null),
        o("WAWebUpdateTextStatusForContact")
          .updateTextStatusForContact({
            contactId: t.id,
            textString: o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_STRING_VAL,
            emoji: o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_EMOJI_VAL,
            ephemeralDuration: o("WAWebTextStatusUtils")
              .CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
            newUpdateTime: o("WAWebTextStatusUtils")
              .CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
            expectedExpiryTs: n,
            source: "clear-expiry",
          })
          .catch(function (a) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[textStatus] could not clear an expired About",
                  ])),
              )
              .catching(r("getErrorSafe")(a))
              .sendLogs("text-status-expiry-clear-failed"),
              p(t, n));
          }));
    }
    function p(e, t) {
      e.textStatusExpiryTs === t &&
        e.set({
          textStatusString: o("WAWebTextStatusUtils")
            .CLEAR_TEXT_STATUS_STRING_VAL,
          textStatusEmoji: o("WAWebTextStatusUtils")
            .CLEAR_TEXT_STATUS_EMOJI_VAL,
          textStatusEphemeralDuration: o("WAWebTextStatusUtils")
            .CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL,
          textStatusLastUpdateTime: o("WAWebTextStatusUtils")
            .CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL,
          textStatusExpiryTs: null,
        });
    }
    l.setupContactTextStatusExpiration = c;
  },
  98,
);
