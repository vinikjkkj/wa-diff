__d(
  "WAWebUserPrefsHasLoggedIn",
  ["WAWebLocalStorage", "WAWebUserPrefsLoginKeys"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !!(
        (r("WAWebLocalStorage") != null &&
          r("WAWebLocalStorage").getItem(
            o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD,
          )) ||
        (r("WAWebLocalStorage") != null &&
          r("WAWebLocalStorage").getItem(
            o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LID,
          ))
      );
    }
    l.hasLoggedInLightweight = e;
  },
  98,
);
