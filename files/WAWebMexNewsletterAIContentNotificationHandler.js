__d(
  "WAWebMexNewsletterAIContentNotificationHandler",
  [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageUtils",
    "WAWebMsgAIProvenance",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t, n) {
      if (!o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][sgi-ai-content] receiver disabled",
            ])),
        );
        return;
      }
      var a = n.xwa2_notify_newsletter_ai_content_update;
      if (a == null) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletter][sgi-ai-content] null response data",
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
                "[newsletter][sgi-ai-content] msg not found, serverId=",
                ", messageType=",
                "",
              ])),
            d,
            i != null ? i : "unknown",
          );
          return;
        }
        var f = o("WAWebMsgAIProvenance").withSelfDisclosed(_.aiProvenance);
        (await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkCreateOrMerge([{ id: _.id.toString(), aiProvenance: f }]),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateNewsletterMsgAiContentLabel",
            { id: _.id },
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][sgi-ai-content] notification handling failed",
              ])),
          )
          .tags("newsletter", "sgi", "wa-ice", "wa-spice-web")
          .catching(r("getErrorSafe")(e))
          .sendLogs("newsletter-sgi-ai-content-notification-handling-failed");
      }
    }
    l.mexHandleNewsletterAIContent = d;
  },
  98,
);
