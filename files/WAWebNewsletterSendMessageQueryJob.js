__d(
  "WAWebNewsletterSendMessageQueryJob",
  [
    "WASmaxMessagePublishNewsletterRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
    "err",
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
              messageTo: e.newsletterJid,
              clientNewsletterAndServerOrNewsletterIDMixinGroupArgs: u(e),
            },
            n = yield o("WASmaxMessagePublishNewsletterRPC").sendNewsletterRPC(
              t,
            );
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
                  n.value
                    .newsletterQuestionResponseOrNewsletterMessageAckMixinGroup
                    .value.serverId,
              };
            case "NewsletterResponseNegative":
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
      switch (e.type) {
        case "reaction":
          return c(e);
        case "pollVote":
          return d(e);
        case "newsletterQuestionResponse":
          return m(e);
        default:
          return { newsletterClientID: p(e) };
      }
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
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
    function p(e) {
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
              _(
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
              _(
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
              _(
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
    function _(e, t, n) {
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
