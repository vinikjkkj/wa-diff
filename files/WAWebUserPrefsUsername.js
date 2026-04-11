__d(
  "WAWebUserPrefsUsername",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.UsernameState,
      );
      return e === "ACTIVE" || e === "RESERVED" ? e : null;
    }
    function s(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.UsernameState,
        e,
      );
    }
    ((l.getUsernameState = e), (l.setUsernameState = s));
  },
  98,
);
