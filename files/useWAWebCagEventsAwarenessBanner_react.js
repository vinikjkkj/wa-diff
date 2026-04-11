__d(
  "useWAWebCagEventsAwarenessBanner.react",
  [
    "WATimeUtils",
    "WAWebChatGroupUtils",
    "WAWebNux",
    "WAWebUserPrefsEvents",
    "react-compiler-runtime",
    "useWAWebIAmCommunityAdmin",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(10),
        n = r("useWAWebNux")(o("WAWebNux").NUX.CAG_EVENTS_AWARENESS_BANNER),
        a = n[0],
        i = n[2],
        l;
      if (t[0] !== e.groupMetadata) {
        var s;
        ((l =
          (s = e.groupMetadata) == null || (s = s.getParentGroupChat()) == null
            ? void 0
            : s.groupMetadata),
          (t[0] = e.groupMetadata),
          (t[1] = l));
      } else l = t[1];
      var u = r("useWAWebIAmCommunityAdmin")(l),
        c;
      t[2] !== e || t[3] !== u || t[4] !== a
        ? ((c =
            a && u && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)),
          (t[2] = e),
          (t[3] = u),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var d = c;
      if (d)
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
          var m = o(
            "WAWebUserPrefsEvents",
          ).getCagEventsAwarenessBannerFirstSeenTimestamp();
          (m != null &&
            (d = o("WATimeUtils").happenedWithin(
              m,
              o("WATimeUtils").WEEK_SECONDS,
            )),
            (t[6] = d));
        } else d = t[6];
      var p;
      return (
        t[7] !== i || t[8] !== d
          ? ((p = [d, i]), (t[7] = i), (t[8] = d), (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = e;
  },
  98,
);
