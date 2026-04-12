__d(
  "useWAWebCagEventsAwarenessBanner.react",
  [
    "WATimeUtils",
    "WAWebChatGroupUtils",
    "WAWebNux",
    "WAWebUserPrefsEvents",
    "useWAWebIAmCommunityAdmin",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = r("useWAWebNux")(o("WAWebNux").NUX.CAG_EVENTS_AWARENESS_BANNER),
        a = n[0],
        i = n[1],
        l = n[2],
        s = r("useWAWebIAmCommunityAdmin")(
          (t = e.groupMetadata) == null || (t = t.getParentGroupChat()) == null
            ? void 0
            : t.groupMetadata,
        ),
        u = a && s && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
      if (u) {
        var c = o(
          "WAWebUserPrefsEvents",
        ).getCagEventsAwarenessBannerFirstSeenTimestamp();
        c != null &&
          (u = o("WATimeUtils").happenedWithin(
            c,
            o("WATimeUtils").WEEK_SECONDS,
          ));
      }
      return [u, l];
    }
    l.default = e;
  },
  98,
);
