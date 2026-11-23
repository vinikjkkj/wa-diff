__d(
  "WAWebNewsletterSendStatusQueryJob",
  [
    "WASmaxStatusPublishPostNewsletterStatusRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
        e.newsletterJid,
      );
      var t = {
          statusTo: e.newsletterJid,
          clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs:
            s(e),
        },
        n = await o(
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
          return { success: !1, ack: { t: n.value.t, error: n.value.error } };
      }
    }
    function s(e) {
      return e.type === "reaction"
        ? {
            postNewsletterStatusClientAndServerID: {
              statusId: o("WAStanzaUtils").toStanzaId(e.reactionId),
              statusServerId: e.parentStatusServerId,
              statusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroupArgs:
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
              newsletterClientIdContentArgs: u(e),
            },
          };
    }
    function u(e) {
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
