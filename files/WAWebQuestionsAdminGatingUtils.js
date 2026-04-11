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
    function s(t) {
      var n,
        r = (n = t.newsletterMetadata) == null ? void 0 : n.membershipType;
      return r == null || !e.includes(r)
        ? !1
        : o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterQuestionsCapabilityEnabled(t)
          ? !0
          : o("WAWebABProps").getABPropConfigValue(
              "channels_question_admin_enabled",
            );
    }
    l.isQuestionsFeatureEnabledForAdmins = s;
  },
  98,
);
