__d(
  "WAWebUserPrefsContextualBanner",
  ["$InternalEnum", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      VIEWED: 0,
      DISMISSED: 1,
      CLICKED: 2,
      SYNCED: 9,
    });
    function s(t) {
      var n = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.BANNER_STATES,
      );
      if (n == null || typeof n != "object") return null;
      var a = n[String(t)],
        i = typeof a == "object" ? (a == null ? void 0 : a.state) : null;
      return typeof i == "number" ? e.cast(i) : null;
    }
    function u(e, t) {
      var n,
        a = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.BANNER_STATES,
        );
      if (a == null || typeof a != "object") {
        var i;
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").KEYS.BANNER_STATES,
          ((i = {}), (i[String(e)] = { state: t }), i),
        );
      }
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.BANNER_STATES,
        babelHelpers.extends(
          {},
          a,
          ((n = {}), (n[String(e)] = { state: t }), n),
        ),
      );
    }
    function c(e) {
      u(e, null);
    }
    ((l.BannerState = e),
      (l.getBannerState = s),
      (l.setBannerState = u),
      (l.clearBannerState = c));
  },
  98,
);
