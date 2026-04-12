__d(
  "useWAWebShouldShowNewsletterUnfollowUpsell",
  [
    "WAWebCommonNewsletterEnums",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubUtils",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
        ]),
        n = t[0],
        r =
          o("WAWebNewsletterWamoSubUtils").iHavePaidSubscription(n) &&
          o("WAWebNewsletterGatingUtils").isWamoSubConsumerExperienceEnabled(),
        a =
          (n == null ? void 0 : n.membershipType) ===
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType
              .Subscriber && !r;
      return a;
    }
    l.useShouldShowNewsletterUnfollowUpsell = e;
  },
  98,
);
