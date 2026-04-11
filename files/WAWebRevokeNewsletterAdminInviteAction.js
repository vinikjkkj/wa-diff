__d(
  "WAWebRevokeNewsletterAdminInviteAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterRevokeAdminInviteJob",
    "WAWebNewsletterValidationUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebChatGetters").getIsNewsletter(t))
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[revokeNewsletterAdminInvite] non-newsletter chat",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("revoke-admin-invite-on-non-newsletter"),
              r("err")("revoke-admin-invite-on-non-newsletter")
            );
          if (
            !o("WAWebNewsletterMembershipUtil").iAmOwner(
              t == null ? void 0 : t.newsletterMetadata,
            )
          )
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[revokeNewsletterAdminInvite] owner-only action",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("non-channel-owner-revoking-an-admin-invite"),
              r("err")("non-channel-owner-revoking-an-admin-invite")
            );
          try {
            var a,
              i = o("WAWebWidFactory").asUserWidOrThrow(n.id),
              l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              );
            (t == null ||
              (a = t.newsletterMetadata) == null ||
              (a = a.pendingAdmins) == null ||
              a.remove(n.id),
              yield o(
                "WAWebNewsletterRevokeAdminInviteJob",
              ).revokeNewsletterAdminInvite(l, i));
          } catch (e) {
            var c = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[revokeNewsletterAdminInvite] revoke failed",
                    ])),
                )
                .catching(c)
                .tags("newsletter")
                .sendLogs("revoke-admin-invite-on-newsletter-failed"),
              c
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.revokeNewsletterAdminInviteAction = c;
  },
  98,
);
