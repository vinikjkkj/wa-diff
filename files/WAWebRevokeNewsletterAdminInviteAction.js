__d(
  "WAWebRevokeNewsletterAdminInviteAction",
  [
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterRevokeAdminInviteJob",
    "WAWebNewsletterValidationUtils",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      var a;
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
      if (!(t != null && (a = t.newsletterMetadata) != null && a.iAmOwner()))
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
        var i,
          l = o("WAWebWidFactory").asUserWidOrThrow(n.id),
          c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            t.id.toJid(),
          );
        (t == null ||
          (i = t.newsletterMetadata) == null ||
          (i = i.pendingAdmins) == null ||
          i.remove(n.id),
          await o(
            "WAWebNewsletterRevokeAdminInviteJob",
          ).revokeNewsletterAdminInvite(c, l));
      } catch (e) {
        var d = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[revokeNewsletterAdminInvite] revoke failed",
                ])),
            )
            .catching(d)
            .tags("newsletter")
            .sendLogs("revoke-admin-invite-on-newsletter-failed"),
          d
        );
      }
    }
    l.revokeNewsletterAdminInviteAction = c;
  },
  98,
);
