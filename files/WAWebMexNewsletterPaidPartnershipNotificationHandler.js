__d(
  "WAWebMexNewsletterPaidPartnershipNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t, n) {
      if (!o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][dsa26-pp] receiver disabled",
            ])),
        );
        return;
      }
      var a = n.xwa2_notify_newsletter_paid_partnership_update;
      if (a == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][dsa26-pp] null response data",
            ])),
        );
        return;
      }
      var i = a.message_type,
        l = a.newsletter_id,
        d = a.server_id;
      try {
        var m = o("WAJids").toNewsletterJid(l),
          p =
            i === "STATUS"
              ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus
              : o("WAWebDBMessageUtils").InternalIdPrefix.Default,
          _ = await o("WAWebNewsletterDBUtils").getMessageByServerId(
            Number(d),
            m,
            p,
          );
        if (_ == null) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][dsa26-pp] msgKey not found, serverId=",
                ", messageType=",
                "",
              ])),
            d,
            i != null ? i : "unknown",
          );
          return;
        }
        (await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkCreateOrMerge([
            { id: _.id.toString(), hasPaidPartnershipLabel: !0 },
          ]),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateNewsletterMsgPaidPartnershipLabel",
            { id: _.id },
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][dsa26-pp] notification handling failed",
              ])),
          )
          .tags("newsletter")
          .catching(r("getErrorSafe")(e))
          .sendLogs("newsletter-dsa26-pp-notification-handling-failed");
      }
    }
    l.mexHandleNewsletterPaidPartnership = d;
  },
  98,
);
