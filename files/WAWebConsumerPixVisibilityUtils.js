__d(
  "WAWebConsumerPixVisibilityUtils",
  ["WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().pix;
      return e === "all" || e === "none" || e === "contact_blacklist"
        ? e
        : "contacts";
    }
    l.getInitialPixVisibility = e;
  },
  98,
);
