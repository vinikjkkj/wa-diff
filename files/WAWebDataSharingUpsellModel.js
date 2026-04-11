__d(
  "WAWebDataSharingUpsellModel",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = function () {
        if (e == null) {
          var t = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
          );
          e = t === !0;
        }
        return e;
      },
      u = function () {
        e !== !0 &&
          ((e = !0),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE,
            !0,
          ));
      },
      c = { isUpsellEnabled: s, enableUpsell: u };
    l.default = c;
  },
  98,
);
