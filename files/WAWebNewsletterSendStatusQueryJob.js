__d(
  "WAWebNewsletterSendStatusQueryJob",
  [
    "WASmaxStatusPublishPostNewsletterStatusRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
            e.newsletterJid,
          );
          var t = {
              statusTo: e.newsletterJid,
              clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs:
                u(e),
            },
            n = yield o(
              "WASmaxStatusPublishPostNewsletterStatusRPC",
            ).sendPostNewsletterStatusRPC(t);
          switch (n.name) {
            case "PostNewsletterStatusResponseSuccess":
              return {
                success: !0,
                ack: { t: n.value.t },
                serverId: n.value.serverId,
              };
            case "PostNewsletterStatusResponseNegative":
              return {
                success: !1,
                ack: { t: n.value.t, error: n.value.error },
              };
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return e.type === "reaction"
        ? {
            postNewsletterStatusClientAndServerID: {
              statusId: o("WAStanzaUtils").toStanzaId(e.reactionId),
              statusServerId: e.parentStatusServerId,
              statusNewsletterReactionStatusNewsletterReactionOrStatusNewsletterReactionRevokeMixinGroupArgs:
                e.reactionCode === ""
                  ? { isStatusNewsletterReactionRevoke: !0 }
                  : {
                      statusNewsletterReaction: {
                        reactionCode: e.reactionCode,
                      },
                    },
            },
          }
        : {
            postNewsletterStatusClientID: {
              statusId: o("WAStanzaUtils").toStanzaId(e.messageId),
              newsletterClientIdContentArgs: c(e),
            },
          };
    }
    function c(e) {
      switch (e.type) {
        case "text":
          return {
            statusNewsletterText: {
              newsletterPlaintextPayloadMixinArgs: {
                plaintextElementValue: e.payload,
              },
            },
          };
        case "media":
          return {
            statusNewsletterMediaPublish: {
              plaintextMediatype: e.mediaType,
              statusMediaId: e.mediaHandle,
              newsletterPlaintextPayloadMixinArgs: {
                plaintextElementValue: e.payload,
              },
            },
          };
      }
    }
    l.querySendNewsletterStatus = e;
  },
  98,
);
