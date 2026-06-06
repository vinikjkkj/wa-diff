__d(
  "WAWebDemoteNewsletterAdminAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDemoteAdminJob",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      var a, i;
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
        !(t != null && (a = t.newsletterMetadata) != null && a.iAmOwner()) &&
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
        !(t != null && (i = t.newsletterMetadata) != null && i.iAmAdmin()) &&
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
        var l = o("WAWebWidFactory").asUserWidOrThrow(n.id),
          d = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            t.id.toJid(),
          );
        (await o("WAWebNewsletterDemoteAdminJob").demoteNewsletterAdmin(d, l),
          o("WAWebUserPrefsMeUser").isMeAccount(n.id)
            ? await o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateMyNewsletterMembershipRole({
                newsletter: t,
                newRole: o("WAWebCommonNewsletterEnums")
                  .NewsletterMembershipType.Subscriber,
              })
            : await o(
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
    }
    l.demoteNewsletterAdminAction = d;
  },
  98,
);
