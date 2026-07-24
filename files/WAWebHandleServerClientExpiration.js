__d(
  "WAWebHandleServerClientExpiration",
  ["WATimeUtils", "WAWebBuildConstants", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null)
        o("WAWebUserPrefsMultiDevice").clearServerClientExpirationOverride();
      else {
        var t,
          n =
            (t = o(
              "WAWebUserPrefsMultiDevice",
            ).getServerClientExpirationOverride()) == null
              ? void 0
              : t.timestamp;
        if (n != null && e >= n) return;
        var r = o("WATimeUtils").futureUnixTime(
            3 * o("WATimeUtils").DAY_SECONDS,
          ),
          a = Math.max(r, e);
        o("WAWebUserPrefsMultiDevice").setServerClientExpirationOverride(
          "" + a,
          o("WAWebBuildConstants").VERSION_BASE,
        );
      }
    }
    l.handleServerClientExpiration = e;
  },
  98,
);
