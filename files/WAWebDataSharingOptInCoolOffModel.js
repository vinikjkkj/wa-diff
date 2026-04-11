__d(
  "WAWebDataSharingOptInCoolOffModel",
  [
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = function () {
        var t = o("WAWebBizGatingUtils").smbDataSharingOptInCoolOffSeconds();
        if (e == null) {
          var n = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
          );
          e = o("WATimeUtils").castToUnixTime(typeof n == "number" ? n : 0);
        }
        return o("WATimeUtils").isInFuture(
          o("WATimeUtils").futureUnixTime(t, e),
        );
      },
      u = function () {
        ((e = o("WATimeUtils").unixTime()),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
            e,
          ));
      },
      c = function () {
        r("gkx")("26258") ||
          ((e = null),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
            null,
          ));
      },
      d = {
        isCoolOffActive: s,
        startCoolOff: u,
        resetCoolOffStartTimestamp: c,
      };
    l.DataSharingOptInCoolOffModel = d;
  },
  98,
);
