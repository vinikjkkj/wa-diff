__d(
  "WAWebQuestionsAdminGatingUtils",
  [
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterExtendedGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin,
      o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner,
    ];
    function s(e) {
      return u(e.newsletterMetadata);
    }
    function u(t) {
      var n = t == null ? void 0 : t.membershipType;
      return n == null || !e.includes(n)
        ? !1
        : o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQuestionsCapabilityEnabledFor(t)
          ? !0
          : o("WAWebABProps").getABPropConfigValue(
              "channels_question_admin_enabled",
            );
    }
    function c(t) {
      var n,
        r = (n = t.newsletterMetadata) == null ? void 0 : n.membershipType;
      return r == null || !e.includes(r)
        ? !1
        : o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQuestionsM2CapabilityEnabled(t)
          ? !0
          : o("WAWebABProps").getABPropConfigValue(
              "channels_question_admin_m2_enabled",
            );
    }
    function d(t) {
      var n,
        r = (n = t.newsletterMetadata) == null ? void 0 : n.membershipType;
      return r == null || !e.includes(r)
        ? !1
        : o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQuestionsResponsesStarringCapabilityEnabled(t)
          ? !0
          : o("WAWebABProps").getABPropConfigValue(
              "channels_question_admin_starring_enabled",
            );
    }
    ((l.isQuestionsFeatureEnabledForAdmins = s),
      (l.isQuestionsFeatureEnabledForAdminsFor = u),
      (l.isQuestionsM2FeatureEnabledForAdmins = c),
      (l.isQuestionsResponseStarringEnabled = d));
  },
  98,
);
