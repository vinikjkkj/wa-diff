__d(
  "WAWebNewsletterRevokeStatusAction",
  [
    "WALogger",
    "WAWebDBMessageDelete",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterRevokeStatusQueryJob",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a = o("WAWebWidFactory").asNewsletterWidOrThrow(n.id.remote),
        i = r("WAWebNewsletterMetadataCollection").get(a);
      if ((i == null ? void 0 : i.iAmAdminOrOwner()) !== !0)
        throw r("err")("[newsletter][status] User is not admin or owner");
      var l = o("WAWebWidToJid").widToNewsletterJid(a);
      try {
        var u = await o(
          "WAWebNewsletterRevokeStatusQueryJob",
        ).queryRevokeNewsletterStatus({ newsletterJid: l, statusId: n.id.id });
        if (u.success) {
          var c = n.id.toString();
          return (
            t.revokeMsgs([c]),
            await o("WAWebDBMessageDelete").removeStatusMessage([n]),
            !0
          );
        }
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][revoke] Revoke failed: ",
                  "",
                ])),
              u.ack.error,
            )
            .sendLogs("newsletter-status-revoke-action-failed"),
          !1
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][revoke] Revoke request failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-status-revoke-request-error"),
          !1
        );
      }
    }
    l.revokeNewsletterStatusAction = u;
  },
  98,
);
