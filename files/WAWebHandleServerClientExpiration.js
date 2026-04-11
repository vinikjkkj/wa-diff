__d(
  "WAWebHandleServerClientExpiration",
  [
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebUpdaterHardExpireTime",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = parseInt(r("WAWebUpdaterHardExpireTime"), 10);
      if (e == null)
        o("WAWebUserPrefsMultiDevice").clearServerClientExpirationOverride();
      else {
        var n,
          a =
            (n = o(
              "WAWebUserPrefsMultiDevice",
            ).getServerClientExpirationOverride()) == null
              ? void 0
              : n.timestamp;
        if ((a != null && e >= a) || e >= t) return;
        var i = o("WATimeUtils").futureUnixTime(
            3 * o("WATimeUtils").DAY_SECONDS,
          ),
          l = Math.max(i, Math.min(e, t));
        o("WAWebUserPrefsMultiDevice").setServerClientExpirationOverride(
          "" + l,
          o("WAWebBuildConstants").VERSION_BASE,
        );
      }
    }
    l.handleServerClientExpiration = e;
  },
  98,
);
