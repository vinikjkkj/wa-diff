__d(
  "WAWebNewsletterDeleteMyQuestionResponseQuery",
  [
    "WASmaxMessagePublishNewsletterRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
        e.newsletterJid,
      );
      var t = await o("WASmaxMessagePublishNewsletterRPC").sendNewsletterRPC({
        messageTo: e.newsletterJid,
        clientNewsletterAndServerOrNewsletterIDMixinGroupArgs: {
          newsletterClientAndServerID: {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            messageServerId: e.questionServerId,
            newsletterClientAndServerIdContentArgs: {
              newsletterQuestionResponseRevoke: {
                metaResponseServerId: e.responseServerId,
              },
            },
          },
        },
      });
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "NewsletterResponseSuccess" &&
          "value" in e
        ) {
          var t = e.value;
          return {
            success: !0,
            ack: {
              t: t
                .newsletterQuestionResponseOrNewsletterScheduledMessageOrNewsletterMessageAckMixinGroup
                .value.t,
            },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "NewsletterResponseNegative" &&
          "value" in e
        ) {
          var n = e.value;
          return { success: !1, ack: { t: n.t, error: n.error } };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(t);
    }
    l.deleteMyQuestionResponseQuery = e;
  },
  98,
);
