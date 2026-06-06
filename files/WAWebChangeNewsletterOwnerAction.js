__d(
  "WAWebChangeNewsletterOwnerAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterChangeOwnerJob",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a, i;
          if (!o("WAWebChatGetters").getIsNewsletter(t))
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] not a newsletter",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("change-owner-of-non-newsletter"),
              r("err")("change-owner-of-non-newsletter")
            );
          if (!((a = t.newsletterMetadata) != null && a.iAmOwner()))
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] only owner can transfer",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("non-newsletter-owner-transferring-ownership"),
              r("err")("non-newslette-owner-transferring-ownership")
            );
          if (o("WAWebUserPrefsMeUser").isMeAccount(n.id))
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] cannot transfer to self",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("transferring-newsletter-to-self"),
              r("err")("transferring-newsletter-to-self")
            );
          var l =
            (i = t.newsletterMetadata) == null
              ? void 0
              : i.subscribers.get(n.id);
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] contact not in newsletter",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("contact-not-found-in-newsletter-subscriber-list"),
              r("err")("contact-not-found-in-newsletter-subscriber-list")
            );
          if (
            l.membership !==
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
          )
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] non-admin role=",
                      "",
                    ])),
                  l.membership,
                )
                .tags("newsletter")
                .sendLogs("transferring-newsletter-ownership-to-non-admin"),
              r("err")("transferring-newsletter-ownership-to-non-admin")
            );
          try {
            var p = o("WAWebWidFactory").asUserWidOrThrow(n.id),
              _ = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              );
            (yield o("WAWebNewsletterChangeOwnerJob").changeNewsletterOwner(
              _,
              p,
            ),
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateMyNewsletterMembershipRole({
                newsletter: t,
                newRole: o("WAWebCommonNewsletterEnums")
                  .NewsletterMembershipType.Admin,
              }),
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateNewsletterMemberRole({
                newsletter: t,
                member: n,
                newRole: o("WAWebCommonNewsletterEnums")
                  .NewsletterMembershipType.Owner,
              }));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[changeNewsletterOwnerAction] transfer failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("change-newsletter-owner-failed"),
              e
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.changeNewsletterOwnerAction = p;
  },
  98,
);
