__d(
  "useWAWebShouldShowNewsletterUnfollowUpsell",
  [
    "WAWebCommonNewsletterEnums",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubUtils",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebFrontendChatGetters").getNewsletterMetadata]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebChatValues").useChatValues(e.id, n),
        a = r[0],
        i;
      t[1] !== a
        ? ((i =
            o("WAWebNewsletterWamoSubUtils").iHavePaidSubscription(a) &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubConsumerExperienceEnabled()),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s =
          (a == null ? void 0 : a.membershipType) ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType
              .Subscriber && !l;
      return s;
    }
    l.useShouldShowNewsletterUnfollowUpsell = e;
  },
  98,
);
