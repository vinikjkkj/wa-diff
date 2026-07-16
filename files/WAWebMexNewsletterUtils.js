__d(
  "WAWebMexNewsletterUtils",
  ["WAJids", "WAWebBackendErrors", "WAWebCommonNewsletterEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case "OWNER":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        case "SUBSCRIBER":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType
            .Subscriber;
        case "ADMIN":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
        case "GUEST":
          return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
      }
    }
    function s(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All:
          return "ALL";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .Basic:
          return "BASIC";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .None:
          return "NONE";
        case o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting
          .Blocklist:
          return "BLOCKLIST";
      }
    }
    function u(e) {
      if (e != null && e.id != null) {
        var t, n, r, a;
        return (
          ((t = e.state) == null ? void 0 : t.type) === "SUSPENDED" &&
            (a = { error: "423" }),
          ((n = e.state) == null ? void 0 : n.type) === "NON_EXISTING" &&
            (r = { error: "404" }),
          {
            jid: o("WAJids").toNewsletterJid(e.id),
            subscriberNotFoundMixin: r,
            newsletterSuspendedErrorMixin: a,
          }
        );
      }
      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
        500,
        "unexpected_mex_mutation_response",
      );
    }
    ((l.mapRoleToMembership = e),
      (l.mapReactionCodesSettingToMexInput = s),
      (l.convertMutationResponse = u));
  },
  98,
);
