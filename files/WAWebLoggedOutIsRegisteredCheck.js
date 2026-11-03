__d(
  "WAWebLoggedOutIsRegisteredCheck",
  ["WAWebLocalStorage", "WAWebUserPrefsKeys", "WAWebUserPrefsLoginKeys"],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (r("WAWebLocalStorage") == null) return !1;
      var e = r("WAWebLocalStorage").getItem(
        o("WAWebUserPrefsKeys").MD_KEYS.NOISE_INFO,
      );
      if (e == null) return !1;
      var t = r("WAWebLocalStorage").getItem(
        o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
      );
      return t != null;
    }
    l.isRegisteredLightweight = e;
  },
  98,
);
