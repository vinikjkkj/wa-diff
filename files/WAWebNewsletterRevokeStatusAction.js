__d(
  "WAWebNewsletterRevokeStatusAction",
  [
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebDBMessageDelete",
    "WAWebMessageStoreService",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterRevokeStatusQueryJob",
    "WAWebStatusPosterActionsLogger",
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
      var l = o("WAWebWidToJid").widToNewsletterJid(a),
        u = new (o("WAWebStatusPosterActionsLogger").StatusPosterActionsLogger)(
          void 0,
          a,
        );
      u.logDeleteStatusRequest();
      try {
        var c = await o(
          "WAWebNewsletterRevokeStatusQueryJob",
        ).queryRevokeNewsletterStatus({ newsletterJid: l, statusId: n.id.id });
        if (c.success) {
          var d = n.id.toString();
          return (
            t.revokeMsgs([d]),
            await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).removeStatusMessage
                : o("WAWebDBMessageDelete").removeStatusMessage
            )([n]),
            u.logDeleteStatusSuccess(),
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
              c.ack.error,
            )
            .sendLogs("newsletter-status-revoke-action-failed"),
          u.logDeleteStatusFailure(c.ack.error),
          !1
        );
      } catch (e) {
        var m = r("getErrorSafe")(e);
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][revoke] Revoke request failed",
                ])),
            )
            .catching(m)
            .sendLogs("newsletter-status-revoke-request-error"),
          u.logDeleteStatusFailure(m == null ? void 0 : m.message),
          !1
        );
      }
    }
    l.revokeNewsletterStatusAction = u;
  },
  98,
);
