__d(
  "WAWebLocalStorageUtils",
  ["WAWebLocalStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !(
          r("WAWebLocalStorage") != null &&
          r("WAWebLocalStorage").getItem(
            o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD,
          )
        ) &&
        !(
          r("WAWebLocalStorage") != null &&
          r("WAWebLocalStorage").getItem(o("WAWebUserPrefsKeys").KEYS.LAST_WID)
        )
      );
    }
    function s() {
      return (
        (r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(
              o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
            )) === "1"
      );
    }
    ((l.isUserLoggedOut = e), (l.isLogoutDirtyBitSet = s));
  },
  98,
);
