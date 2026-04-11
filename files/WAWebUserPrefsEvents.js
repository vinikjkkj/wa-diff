__d(
  "WAWebUserPrefsEvents",
  ["WATimeUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      if (e != null) return e;
      var t = parseInt(
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs
            .CagEventsAwarenessBannerFirstSeenTimestamp,
        ),
        10,
      );
      return (Number.isNaN(t) || (e = o("WATimeUtils").castToUnixTime(t)), e);
    }
    function u() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs
          .CagEventsAwarenessBannerFirstSeenTimestamp,
        o("WATimeUtils").unixTime(),
      );
    }
    function c() {
      var e = s();
      return e == null
        ? o("WATimeUtils").unixTime()
        : o("WATimeUtils").futureUnixTime(o("WATimeUtils").WEEK_SECONDS, e);
    }
    ((l.getCagEventsAwarenessBannerFirstSeenTimestamp = s),
      (l.setCagEventsAwarenessBannerFirstSeenTimestamp = u),
      (l.getCagEventsAwarenessBannerAutoDismissalExpiration = c));
  },
  98,
);
