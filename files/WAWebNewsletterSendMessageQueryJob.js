__d(
  "WAWebNewsletterSendMessageQueryJob",
  [
    "WASmaxMessagePublishNewsletterRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
        e.newsletterJid,
      );
      var t = {
          messageTo: e.newsletterJid,
          clientNewsletterAndServerOrNewsletterIDMixinGroupArgs: s(e),
        },
        n = await o("WASmaxMessagePublishNewsletterRPC").sendNewsletterRPC(t);
      switch (n.name) {
        case "NewsletterResponseSuccess":
          return {
            success: !0,
            ack: {
              t: n.value
                .newsletterQuestionResponseOrNewsletterMessageAckMixinGroup
                .value.t,
            },
            serverId:
              n.value.newsletterQuestionResponseOrNewsletterMessageAckMixinGroup
                .value.serverId,
          };
        case "NewsletterResponseNegative":
          return { success: !1, ack: { t: n.value.t, error: n.value.error } };
      }
    }
    function s(e) {
      switch (e.type) {
        case "reaction":
          return u(e);
        case "pollVote":
          return c(e);
        case "newsletterQuestionResponse":
          return d(e);
        default:
          return { newsletterClientID: m(e) };
      }
    }
    function u(e) {
      var t = e.reactionCode,
        n =
          t != null && t !== ""
            ? { newsletterReaction: { reactionCode: t } }
            : { isNewsletterReactionRevoke: !0 };
      return {
        newsletterClientAndServerID: {
          messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
          messageServerId: e.parentMsgServerId,
          newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs:
            n,
        },
      };
    }
    function c(e) {
      var t = {
        voteArgs: e.votes.map(function (e) {
          return { voteElementValue: e };
        }),
      };
      return {
        newsletterClientAndServerID: {
          messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
          messageServerId: e.parentMsgServerId,
          newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs:
            { newsletterPollVote: t },
        },
      };
    }
    function d(e) {
      return {
        newsletterClientAndServerID: {
          messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
          messageServerId: e.parentMsgServerId,
          newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs:
            {
              newsletterQuestionResponsePublish: {
                payloadMixinArgs: { plaintextElementValue: e.payload },
              },
            },
        },
      };
    }
    function m(e) {
      switch (e.type) {
        case "editText":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: {
              newsletterEdit: {
                hasWAMOSub: e.isWamoSub,
                newsletterQuestionReplyOrTextOrMediaMixinGroupArgs: {
                  newsletterText: {
                    payloadMixinArgs: { plaintextElementValue: e.payload },
                  },
                },
              },
            },
          };
        case "editMedia": {
          var t =
            e.contentId == null
              ? null
              : {
                  senderContentTypeMediaRCATMixinArgs: {
                    plaintextContentId: e.contentId,
                  },
                };
          return babelHelpers.extends(
            { messageId: o("WAStanzaUtils").toStanzaId(e.messageId) },
            t,
            {
              newsletterClientIdContentArgs: {
                newsletterEdit: {
                  hasWAMOSub: e.isWamoSub,
                  newsletterQuestionReplyOrTextOrMediaMixinGroupArgs: {
                    newsletterMedia: {
                      payloadMixinArgs: { plaintextElementValue: e.payload },
                      plaintextMediatype: e.mediaType,
                    },
                  },
                },
              },
            },
          );
        }
        case "revoke":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: {
              newsletterRevoke: { hasWAMOSub: e.isWamoSub },
            },
          };
        case "pollCreation":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: {
              newsletterPollCreation: {
                payloadMixinArgs: { plaintextElementValue: e.payload },
                hasWAMOSub: e.isWamoSub,
                metaContenttype: e.contentType,
              },
            },
          };
        case "pollResultSnapshot":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: {
              newsletterPollResultSnapshot: {
                payloadMixinArgs: { plaintextElementValue: e.payload },
                hasWAMOSub: e.isWamoSub,
              },
            },
          };
        case "text":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: babelHelpers.extends(
              {},
              p(
                {
                  newsletterText: {
                    payloadMixinArgs: { plaintextElementValue: e.payload },
                    hasWAMOSub: e.isWamoSub,
                  },
                },
                e.isQuestion,
                e.questionReplyQuotedMessage,
              ),
            ),
          };
        case "url":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            senderContentTypeMediaRCATMixinArgs: {
              plaintextContentId: e.contentId,
            },
            newsletterClientIdContentArgs: babelHelpers.extends(
              {},
              p(
                {
                  newsletterMediaPublish: {
                    plaintextMediatype: e.type,
                    payloadMixinArgs: { plaintextElementValue: e.payload },
                    messageMediaId: e.mediaHandle,
                    hasWAMOSub: e.isWamoSub,
                    messageAssociationTypeMixinArgs:
                      e.messageAssociationTypeMixinArgs,
                  },
                },
                e.isQuestion,
                e.questionReplyQuotedMessage,
              ),
            ),
          };
        case "audio":
        case "avatar_sticker":
        case "document":
        case "gif":
        case "image":
        case "ptt":
        case "sticker":
        case "sticker_pack":
        case "vcard":
        case "video":
          return {
            messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
            newsletterClientIdContentArgs: babelHelpers.extends(
              {},
              p(
                {
                  newsletterMediaPublish: {
                    plaintextMediatype: e.type,
                    payloadMixinArgs: { plaintextElementValue: e.payload },
                    messageMediaId: e.mediaHandle,
                    hasWAMOSub: e.isWamoSub,
                    messageAssociationTypeMixinArgs:
                      e.messageAssociationTypeMixinArgs,
                  },
                },
                e.isQuestion,
                e.questionReplyQuotedMessage,
              ),
            ),
          };
        default:
          throw (e.type, r("err")("Wrong code path for " + e.type));
      }
    }
    function p(e, t, n) {
      if (t)
        return {
          newsletterQuestionPublish: {
            newsletterTextOrMediaPublishMixinGroupArgs: e,
          },
        };
      if (n) {
        var o, a;
        if (
          ((o = n.quotedResponse.questionResponseInfo) == null
            ? void 0
            : o.responseServerId) == null
        )
          throw r("err")("Missing response server id for question reply");
        return {
          newsletterQuestionReplyPublish: {
            metaParentServerId: n.questionServerId,
            metaResponseServerId:
              (a = n.quotedResponse.questionResponseInfo) == null
                ? void 0
                : a.responseServerId,
            newsletterTextOrMediaPublishMixinGroupArgs: e,
          },
        };
      }
      return e;
    }
    l.querySendNewsletterMessage = e;
  },
  98,
);
