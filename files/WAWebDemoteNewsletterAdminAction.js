__d(
  "WAWebDemoteNewsletterAdminAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDemoteAdminJob",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebChatGetters").getIsNewsletter(t))
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[demoteNewsletterAdminAction] not a newsletter",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("demote-admins-of-non-newsletter"),
              r("err")("demote-admins-of-non-newsletter")
            );
          if (
            !o("WAWebNewsletterMembershipUtil").iAmOwner(
              t == null ? void 0 : t.newsletterMetadata,
            ) &&
            !o("WAWebUserPrefsMeUser").isMeAccount(n.id)
          )
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[demoteNewsletterAdminAction] only owner can demote admins",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("non-channel-owner-dismissing-other-admins"),
              r("err")("non-channel-owner-dismissing-other-admins")
            );
          if (
            !o("WAWebNewsletterMembershipUtil").iAmAdmin(
              t == null ? void 0 : t.newsletterMetadata,
            ) &&
            o("WAWebUserPrefsMeUser").isMeAccount(n.id)
          )
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[demoteNewsletterAdminAction] only admin can demote self",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("non-channel-admins-dismissing-themselves"),
              r("err")("non-channel-admins-dismissing-themselves")
            );
          try {
            var a = o("WAWebWidFactory").asUserWidOrThrow(n.id),
              i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              );
            (yield o("WAWebNewsletterDemoteAdminJob").demoteNewsletterAdmin(
              i,
              a,
            ),
              o("WAWebUserPrefsMeUser").isMeAccount(n.id)
                ? yield o(
                    "WAWebNewsletterBridgeApi",
                  ).NewsletterBridgeApi.updateMyNewsletterMembershipRole({
                    newsletter: t,
                    newRole: o("WAWebCommonNewsletterEnums")
                      .NewsletterMembershipType.Subscriber,
                  })
                : yield o(
                    "WAWebNewsletterBridgeApi",
                  ).NewsletterBridgeApi.updateNewsletterMemberRole({
                    newsletter: t,
                    member: n,
                    newRole: o("WAWebCommonNewsletterEnums")
                      .NewsletterMembershipType.Subscriber,
                  }));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[demoteNewsletterAdminAction] demote failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("demote-admins-on-newsletter-failed"),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.demoteNewsletterAdminAction = d;
  },
  98,
);
