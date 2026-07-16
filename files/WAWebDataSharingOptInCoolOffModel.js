__d(
  "WAWebDataSharingOptInCoolOffModel",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
      if (e == null) {
        var n = r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
        );
        e = o("WATimeUtils").castToUnixTime(typeof n == "number" ? n : 0);
      }
      return o("WATimeUtils").isInFuture(o("WATimeUtils").futureUnixTime(t, e));
    }
    function u() {
      ((e = o("WATimeUtils").unixTime()),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_COOL_OFF,
          e,
        ));
    }
    var c = function () {
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
