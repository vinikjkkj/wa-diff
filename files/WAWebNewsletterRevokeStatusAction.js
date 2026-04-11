__d(
  "WAWebNewsletterRevokeStatusAction",
  [
    "WALogger",
    "WAWebDBMessageDelete",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterRevokeStatusQueryJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled()
          )
            throw r("err")(
              "[newsletter][status] Status creation is not enabled",
            );
          var a = n.id.remote,
            i = o("WAWebWidToJid").widToNewsletterJid(a);
          try {
            var l = yield o(
              "WAWebNewsletterRevokeStatusQueryJob",
            ).queryRevokeNewsletterStatus({
              newsletterJid: i,
              statusId: n.id.id,
            });
            if (l.success) {
              var u = n.id.toString();
              (t.revokeMsgs([u]),
                yield o("WAWebDBMessageDelete").removeStatusMessage([n]));
            } else
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status][revoke] Revoke failed: ",
                      "",
                    ])),
                  l.ack.error,
                )
                .sendLogs("newsletter-status-revoke-action-failed");
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][revoke] Revoke request failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("newsletter-status-revoke-request-error");
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.revokeNewsletterStatusAction = u;
  },
  98,
);
