__d(
  "WAWebE2EProtoGenerator",
  [
    "WALogger",
    "WAProtoCompile",
    "WAProtoUtils",
    "WATypeUtils",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotReplaceMentionWidsWithPushnames",
    "WAWebButtonsMessageProtoUtils",
    "WAWebConversionTupleCollection",
    "WAWebE2EProtoUtils",
    "WAWebGenerateBotMetadata",
    "WAWebGenerateThreadIds",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessagePluginGenerateProtobuf",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStructuredClone",
    "WAWebURLUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "isArrayNullOrEmpty",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["messageContextInfo"],
      s = ["messageContextInfo"],
      u = ["messageContextInfo"],
      c;
    function d(e, t, n) {
      (!t && !n) ||
        (e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
          deviceListMetadata: {
            senderKeyHash: t == null ? void 0 : t.keyHash,
            senderTimestamp: t == null ? void 0 : t.timestamp,
            senderKeyIndexes: t == null ? void 0 : t.keyIndexes,
            recipientKeyHash: n == null ? void 0 : n.keyHash,
            recipientTimestamp: n == null ? void 0 : n.timestamp,
            recipientKeyIndexes: n == null ? void 0 : n.keyIndexes,
            senderAccountType: t == null ? void 0 : t.senderAccountType,
            receiverAccountType: n == null ? void 0 : n.receiverAccountType,
          },
          deviceListMetadataVersion: 2,
        }));
    }
    function m(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL
        ? {}
        : e.subtype === "app_state_sync_key_share"
          ? {
              protocolMessage: {
                type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                  .APP_STATE_SYNC_KEY_SHARE,
                appStateSyncKeyShare: e.appStateSyncKeyShare,
              },
            }
          : e.subtype === "app_state_sync_key_request"
            ? {
                protocolMessage: {
                  type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                    .APP_STATE_SYNC_KEY_REQUEST,
                  appStateSyncKeyRequest: e.appStateSyncKeyRequest,
                },
              }
            : e.subtype === "app_state_fatal_exception_notification"
              ? {
                  protocolMessage: {
                    type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                      .APP_STATE_FATAL_EXCEPTION_NOTIFICATION,
                    appStateFatalExceptionNotification:
                      e.appStateFatalExceptionNotification,
                  },
                }
              : e.subtype === "peer_data_operation_request_message"
                ? {
                    protocolMessage: {
                      type: o("WAWebProtobufsE2E.pb")
                        .Message$ProtocolMessage$Type
                        .PEER_DATA_OPERATION_REQUEST_MESSAGE,
                      peerDataOperationRequestMessage:
                        e.peerDataOperationRequestMessage,
                    },
                  }
                : e.subtype === "peer_data_operation_request_response_message"
                  ? {
                      protocolMessage: {
                        type: o("WAWebProtobufsE2E.pb")
                          .Message$ProtocolMessage$Type
                          .PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE,
                        peerDataOperationRequestResponseMessage:
                          e.peerDataOperationRequestResponseMessage,
                      },
                    }
                  : {};
    }
    function p(e, t) {
      var n,
        r = y(e);
      return h(r, t, (n = e.utm) != null ? n : void 0);
    }
    function _(e) {
      return h(e);
    }
    function f(e, t) {
      if (e.quotedMsg) {
        var n = e.quotedMsg.mentionedJidList,
          r = e.quotedMsg.groupMentions,
          a = [],
          i = [];
        (Array.isArray(n) &&
          n.length > 0 &&
          a.push.apply(a, n.map(o("WAWebE2EProtoUtils").encodeJid)),
          Array.isArray(r) &&
            r.length > 0 &&
            i.push.apply(
              i,
              r.map(function (e) {
                return {
                  groupSubject: e.groupSubject,
                  groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid),
                };
              }),
            ));
        var l =
          a.length > 0 || i.length > 0
            ? { mentionedJid: a, groupMentions: i, statusAttributions: [] }
            : void 0;
        ((t.stanzaId = e.quotedStanzaID),
          (t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(e.quotedRemoteJid)),
          (t.participant = o("WAWebE2EProtoUtils").encodeJid(
            e.quotedParticipant,
          )));
        var s = {
          duration: e.quotedMsg.duration,
          directPath: e.quotedMsg.directPath,
          encFilehash: e.quotedMsg.encFilehash,
          filehash: e.quotedMsg.filehash,
          height: e.quotedMsg.height,
          mediaKey: e.quotedMsg.mediaKey,
          mediaKeyTimestamp: o("WATypeUtils").isNumber(
            e.quotedMsg.mediaKeyTimestamp,
          )
            ? e.quotedMsg.mediaKeyTimestamp
            : void 0,
          mimetype: e.quotedMsg.mimetype,
          url: e.quotedMsg.clientUrl || e.quotedMsg.deprecatedMms3Url,
          width: e.quotedMsg.width,
        };
        t.quotedMessage = C(e.quotedMsg, s, l, void 0, "quoted");
      } else
        e.quotedRemoteJid && e.quotedGroupSubject && e.quotedParentGroupJid
          ? ((t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(
              e.quotedRemoteJid,
            )),
            (t.groupSubject = e.quotedGroupSubject),
            (t.parentGroupJid = o("WAWebE2EProtoUtils").encodeJid(
              e.quotedParentGroupJid,
            )))
          : e.quotedRemoteJid &&
            (t.remoteJid = o("WAWebE2EProtoUtils").encodeJid(
              e.quotedRemoteJid,
            ));
    }
    function g(e) {
      var t = e.ephemeralDuration,
        n = e.afterReadDuration;
      return n == null &&
        t != null &&
        t > 0 &&
        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
        o("WAWebAfterReadUtils").isAfterReadDuration(t)
        ? {
            ephemeralDuration: o(
              "WAWebAfterReadUtils",
            ).getAfterReadFallbackDuration(),
            afterReadDuration: t,
          }
        : { ephemeralDuration: t, afterReadDuration: n };
    }
    function h(e, t, n) {
      var a = {};
      if ((f(e, a), e.mentionedJidList && e.mentionedJidList.length > 0)) {
        var i = e.mentionedJidList;
        a.mentionedJid = i.map(o("WAWebE2EProtoUtils").encodeJid);
      }
      if (
        (e.groupMentions &&
          e.groupMentions.length > 0 &&
          (a.groupMentions = e.groupMentions.map(function (e) {
            return {
              groupSubject: e.groupSubject,
              groupJid: o("WAWebE2EProtoUtils").encodeJid(e.groupJid),
            };
          })),
        e.conversionTuple && Object.assign(a, e.conversionTuple),
        e.isForwarded && (a.isForwarded = e.isForwarded),
        e.isQuestion && (a.isQuestion = e.isQuestion),
        e.questionReplyQuotedMessage &&
          (a.questionReplyQuotedMessage = {
            serverQuestionId: e.questionReplyQuotedMessage.questionServerId,
            quotedQuestion: C(
              e.questionReplyQuotedMessage.quotedQuestion,
              void 0,
              {
                isQuestion: !0,
                groupMentions: [],
                mentionedJid: [],
                statusAttributions: [],
              },
              void 0,
              "quoted",
            ),
            quotedResponse: C(
              e.questionReplyQuotedMessage.quotedResponse,
              void 0,
              void 0,
              void 0,
              "quoted",
            ),
          }),
        e.forwardingScore && (a.forwardingScore = e.forwardingScore),
        e.nonJidMentions != null && (a.nonJidMentions = e.nonJidMentions),
        e.groupId && (a.groupId = e.groupId),
        e.groupIndex && (a.groupIndex = e.groupIndex),
        e.groupSize && (a.groupSize = e.groupSize),
        e.forwardedNewsletterMessageInfo)
      ) {
        var l = e.forwardedNewsletterMessageInfo,
          s = l.newsletterId,
          u = l.newsletterName,
          c = l.serverMessageId;
        a.forwardedNewsletterMessageInfo = {
          newsletterJid: o("WAWebE2EProtoUtils").encodeJid(s),
          newsletterName: u,
          serverMessageId: c,
        };
      }
      if (e.forwardedAiBotMessageInfo) {
        var d = e.forwardedAiBotMessageInfo,
          m = d.botId,
          p = d.botName,
          _ = d.creatorName;
        a.forwardedAiBotMessageInfo = {
          botJid: o("WAWebE2EProtoUtils").encodeJid(
            o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceDeprecatedBotPnWithFbid(m),
          ),
          botName: p,
          creatorName: _,
        };
      }
      var h = g(e),
        y = h.afterReadDuration,
        b = h.ephemeralDuration;
      if (
        (b != null && b > 0 && (a.expiration = b),
        e.ephemeralSettingTimestamp &&
          (a.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp),
        y != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          ((a.afterReadDuration = y),
          (a.expiration = o(
            "WAWebAfterReadUtils",
          ).getAfterReadFallbackDuration())),
        (e.disappearingModeInitiator ||
          (e.disappearingModeTrigger != null && e.to.isGroup())) &&
          (a.disappearingMode = o(
            "WAWebE2EProtoUtils",
          ).disappearingModeInitiatorToProto(
            e.disappearingModeInitiator,
            e.disappearingModeTrigger,
            e.disappearingModeInitiatedByMe,
          )),
        e.ctwaContext &&
          (a.externalAdReply = {
            sourceUrl: e.ctwaContext.sourceUrl,
            sourceId: e.ctwaContext.sourceId,
            sourceType: e.ctwaContext.sourceType,
            body: e.ctwaContext.description,
            title: e.ctwaContext.title,
            thumbnailUrl: e.ctwaContext.thumbnailUrl,
            thumbnail: e.ctwaContext.thumbnail
              ? o("WAWebE2EProtoUtils").encodeBytes(e.ctwaContext.thumbnail)
              : void 0,
            mediaType: e.ctwaContext.mediaType,
            mediaUrl: e.ctwaContext.mediaUrl,
          }),
        n &&
          (a.utm = {
            utmCampaign: n.campaign != null ? n.campaign : void 0,
            utmSource: n.source != null ? n.source : void 0,
          }),
        e.cannotBeRanked || e.canBeReshared)
      ) {
        var v = {};
        (e.cannotBeRanked && (v.cannotBeRanked = e.cannotBeRanked),
          e.canBeReshared && (v.canBeReshared = e.canBeReshared),
          (a.featureEligibilities = v));
      }
      if (
        (e.limitSharing && (a.limitSharingV2 = e.limitSharing),
        Array.isArray(e.statusAttributions) && e.statusAttributions.length > 0)
      ) {
        a.statusAttributions = e.statusAttributions;
        var S = e.statusAttributions.some(function (e) {
          return (
            e.type ===
            o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type
              .RESHARE
          );
        });
        S &&
          (a.statusAttributionType = o(
            "WAWebProtobufsE2E.pb",
          ).ContextInfo$StatusAttributionType.RESHARED_FROM_POST);
      }
      if (
        e.aiProvenance != null &&
        o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()
      ) {
        var R = o("WAWebMsgAIProvenance").aiProvenanceToProto(e.aiProvenance);
        R != null && (a.aiProvenance = R);
      }
      return C(e, t, r("isEmptyObject")(a) ? void 0 : a);
    }
    function y(e) {
      var t = e.id,
        n = e.toJSON();
      (delete n.status,
        delete n.mimetype,
        delete n.height,
        delete n.width,
        delete n.recipients,
        delete n.chat,
        delete n.broadcast,
        delete n.ack,
        delete n.invis,
        delete n.filehash,
        delete n.recvFresh,
        delete n.mediaData,
        r("WAWebURLUtils").isHttp(e.clientUrl) || delete n.clientUrl,
        r("WAWebURLUtils").isHttp(e.deprecatedMms3Url) ||
          delete n.deprecatedMms3Url,
        o("WAWebLimitSharingGatingUtils").isOpusEnabled() &&
          delete n.limitSharing);
      for (var a in n) n[a] == null && delete n[a];
      var i = r("WAWebConversionTupleCollection").get(t.remote);
      return (i && (n.conversionTuple = i.serialize()), n);
    }
    function C(e, t, n, a, i) {
      var l, s;
      (t === void 0 && (t = {}), n === void 0 && (n = void 0));
      var u = b(e, t, n, a, i);
      try {
        var d = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedOutgoingMessageAssociationContextInfo(
          e.associationType,
          e.parentMsgKey,
        );
        d &&
          (u.messageContextInfo = babelHelpers.extends(
            {},
            u.messageContextInfo,
            d,
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[getProtobufMessage] assoc ctx gen failed ",
                "/",
                ": ",
                "",
              ])),
            e.type,
            e.associationType,
            t,
          )
          .sendLogs(
            "getProtobufMessage: failed to generate associated message context info",
          );
      }
      if (
        (!(
          o("WAWebBotBaseGating").isBotEnabled() &&
          (l = e.invokedBotWid) != null &&
          l.isBot()
        ) &&
          e.messageSecret &&
          !(
            i === "quoted" &&
            o(
              "WAWebMessagingGatingUtils",
            ).isRemoveMessageSecretFromQuotedEnabled()
          ) &&
          (u.messageContextInfo = babelHelpers.extends(
            {},
            u.messageContextInfo,
            { messageSecret: e.messageSecret },
          )),
        o("WAWebBotBaseGating").isBotEnabled() || e.botGroupParticipant != null)
      ) {
        var m,
          p = (m = u.messageContextInfo) == null ? void 0 : m.botMetadata,
          _ = o("WAWebGenerateBotMetadata").mergeBotMetadata(
            p,
            o("WAWebGenerateBotMetadata").generateBotMetadata(e),
          );
        _ != null &&
          _ !== p &&
          (u.messageContextInfo = babelHelpers.extends(
            {},
            u.messageContextInfo,
            { botMetadata: _ },
          ));
      }
      if (!r("isArrayNullOrEmpty")(e.threadIds)) {
        var f = o("WAWebGenerateThreadIds").generateThreadIds(e);
        u.messageContextInfo = babelHelpers.extends({}, u.messageContextInfo, {
          threadId: f,
        });
      }
      if (
        ((u = P(u, e, n)),
        o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(e.type, e.subtype) &&
          !(
            i === "quoted" &&
            o(
              "WAWebMessagingGatingUtils",
            ).isRemoveMessageSecretFromQuotedEnabled()
          ))
      ) {
        var g, h;
        u.messageContextInfo = babelHelpers.extends({}, u.messageContextInfo, {
          messageSecret:
            (g =
              (h = u.messageContextInfo) == null ? void 0 : h.messageSecret) !=
            null
              ? g
              : e.messageSecret,
        });
      }
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.COMMENT &&
          ((s = u.messageContextInfo) == null ? void 0 : s.messageSecret) !=
            null &&
          (u.messageContextInfo = babelHelpers.extends(
            {},
            u.messageContextInfo,
            { messageSecret: null },
          )),
        e.limitSharing &&
          (u.messageContextInfo = babelHelpers.extends(
            {},
            u.messageContextInfo,
            { limitSharingV2: e.limitSharing },
          )),
        u
      );
    }
    function b(e, t, n, r, a) {
      (t === void 0 && (t = {}),
        n === void 0 && (n = void 0),
        r === void 0 && (r = {}));
      var i = o("WAWebMessagePluginGenerateProtobuf").generateProtobuf({
        message: r,
        msgContext: a,
        contextInfo: n,
        json: e,
        mediaMetadata: t,
      });
      if (i != null) return i;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return { conversation: e.body };
        case "template":
          return (
            e.subtype === "text"
              ? ((e.type = "chat"),
                e.title && (e.body = "*" + e.title + "*\n" + e.body))
              : (e.type = e.subtype),
            C(e, t, n, r)
          );
      }
      return r;
    }
    function v(e, t) {
      return t.type === "ptt"
        ? { viewOnceMessageV2Extension: { message: e } }
        : { viewOnceMessage: { message: e } };
    }
    function S(t) {
      var n = t.messageContextInfo,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { documentWithCaptionMessage: { message: r } },
        n != null ? { messageContextInfo: n } : void 0,
      );
    }
    function R(e) {
      return { lottieStickerMessage: { message: e } };
    }
    function L(e) {
      return { groupMentionedMessage: { message: e } };
    }
    function E(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return babelHelpers.extends(
        { botForwardedMessage: { message: n } },
        t != null ? { messageContextInfo: t } : void 0,
      );
    }
    function k(e) {
      return { pollCreationMessageV4: { message: e } };
    }
    function I(e) {
      return { questionMessage: { message: e } };
    }
    function T(e) {
      return { questionReplyMessage: { message: e } };
    }
    function D(e) {
      return { newsletterAdminProfileMessage: { message: e } };
    }
    function x(e) {
      return {
        associatedChildMessage: {
          message: babelHelpers.extends({}, e, { messageContextInfo: void 0 }),
        },
        messageContextInfo: e.messageContextInfo,
      };
    }
    function $(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return {
        pollCreationOptionImageMessage: { message: n },
        messageContextInfo: t,
      };
    }
    function P(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c =
          e.messageContextInfo != null &&
          o("WAWebMessagingGatingUtils").isMoveMessageSecretTopLevelEnabled()
            ? e.messageContextInfo
            : null,
        d =
          c != null
            ? babelHelpers.extends({}, e, { messageContextInfo: void 0 })
            : e;
      if (
        (t.pollContentType ===
          o("WAWebPollCreationUtils").PollContentType.IMAGE && (d = k(d)),
        (n == null ? void 0 : n.isQuestion) === !0 && (d = I(d)),
        n != null && n.questionReplyQuotedMessage && (d = T(d)),
        t.newsletterAdminProfile != null && (d = D(d)),
        t.associationType != null &&
          (t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
            ? (d = $(d))
            : o(
                "WAWebMessageAssociationGatingUtils",
              ).isFutureproofAssociatedChildEnabled() && (d = x(d))),
        t.isViewOnce && (d = v(d, t)),
        t.isDynamicReplyButtonsMsg === !0 &&
          (d = o(
            "WAWebButtonsMessageProtoUtils",
          ).createDynamicReplyButtonsMessage(d, t, n)),
        t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          (a = d.documentMessage) != null &&
          a.caption &&
          (d = S(d)),
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (i = d.stickerMessage) != null &&
          i.isLottie &&
          (d = R(d)),
        n != null && (l = n.groupMentions) != null && l.length && (d = L(d)),
        !((s = t.invokedBotWid) != null && s.isFbidBot()) &&
          (((u = t.invokedBotWid) != null && u.isPnBot()) ||
            t.subtype === "bot_request_welcome") &&
          o("WAWebBotBaseGating").isBotEnabled())
      ) {
        var m;
        d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
          messageSecret: t.messageSecret,
          botMetadata: babelHelpers.extends(
            {},
            ((m = e.messageContextInfo) == null ? void 0 : m.botMetadata) || {},
            t.botTargetSenderJid instanceof r("WAWebWid")
              ? { invokerJid: t.botTargetSenderJid.toJid() }
              : {},
          ),
        });
      }
      return (
        t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          t.isForwarded === !0 &&
          (d = E(d)),
        c != null &&
          (d = babelHelpers.extends({}, d, {
            messageContextInfo: babelHelpers.extends(
              {},
              c,
              d.messageContextInfo,
            ),
          })),
        d
      );
    }
    function N(e) {
      ((e.imageMessage = void 0),
        (e.videoMessage = void 0),
        (e.documentMessage = void 0),
        (e.audioMessage = void 0),
        (e.stickerMessage = void 0),
        (e.lottieStickerMessage = void 0),
        (e.stickerPackMessage = void 0),
        (e.albumMessage = void 0));
    }
    function M(e) {
      return e == null
        ? !1
        : !!(
            e.imageMessage ||
            e.videoMessage ||
            e.documentMessage ||
            e.audioMessage ||
            e.stickerMessage ||
            e.lottieStickerMessage ||
            e.stickerPackMessage ||
            e.albumMessage
          );
    }
    var w = [
      "deviceSentMessage",
      "viewOnceMessage",
      "ephemeralMessage",
      "documentWithCaptionMessage",
      "viewOnceMessageV2",
      "editedMessage",
      "viewOnceMessageV2Extension",
      "groupMentionedMessage",
      "botInvokeMessage",
      "statusMentionMessage",
      "pollCreationOptionImageMessage",
      "associatedChildMessage",
      "groupStatusMentionMessage",
      "pollCreationMessageV4",
      "statusAddYours",
      "groupStatusMessage",
      "limitSharingMessage",
      "questionMessage",
      "groupStatusMessageV2",
      "botForwardedMessage",
      "questionReplyMessage",
    ];
    function A(e) {
      var t = e;
      (M(t) && N(t),
        w.forEach(function (e) {
          var n,
            r = (n = t[e]) == null ? void 0 : n.message;
          r != null && M(r) && N(r);
        }));
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s = e.botMessageSecret,
            u = e.isOpenBotGroup,
            c = u === void 0 ? !1 : u,
            d = e.mentionedJidList,
            m = e.message,
            p = r("WAWebStructuredClone")(m),
            _ = !1;
          (c === !0 &&
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            (_ = !0),
            _ === !0 && A(p),
            (p.messageContextInfo = babelHelpers.extends(
              {},
              p.messageContextInfo,
              { messageSecret: null },
            )),
            s &&
              (p.messageContextInfo = babelHelpers.extends(
                {},
                p.messageContextInfo,
                { botMessageSecret: s },
              )));
          var f =
            (p == null ||
            (t = p.botInvokeMessage) == null ||
            (t = t.message) == null ||
            (t = t.extendedTextMessage) == null
              ? void 0
              : t.contextInfo) ||
            (p == null || (n = p.extendedTextMessage) == null
              ? void 0
              : n.contextInfo);
          if ((f == null ? void 0 : f.quotedMessage) != null) {
            var g;
            f.participant != null &&
              ((g = o("WAWebWidFactory").createWid(f.participant)) == null
                ? void 0
                : g.isBot()) !== !0 &&
              (_ !== !0 && delete f.quotedMessage,
              delete f.stanzaId,
              delete f.remoteJid,
              delete f.participant);
          }
          var h =
            p == null ||
            (a = p.protocolMessage) == null ||
            (a = a.botFeedbackMessage) == null
              ? void 0
              : a.messageKey;
          h != null && h.remoteJid != null && delete h.remoteJid;
          var y =
            (p == null || (i = p.protocolMessage) == null ? void 0 : i.type) ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
              ? p == null || (l = p.protocolMessage) == null
                ? void 0
                : l.key
              : null;
          return (
            y != null && y.remoteJid != null && delete y.remoteJid,
            yield o(
              "WAWebBotReplaceMentionWidsWithPushnames",
            ).replaceMentionWidsWithPushnames(p, d),
            p
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      var t,
        n,
        a,
        i = e,
        l =
          (t =
            e == null ||
            (n = e.botInvokeMessage) == null ||
            (n = n.message) == null ||
            (n = n.extendedTextMessage) == null ||
            (n = n.contextInfo) == null
              ? void 0
              : n.participant) != null
            ? t
            : e == null ||
                (a = e.extendedTextMessage) == null ||
                (a = a.contextInfo) == null
              ? void 0
              : a.participant;
      if (l != null) {
        var s = o("WAWebWidFactory").createWid(l);
        if (!s.isBot()) {
          var u, c, d;
          i = r("WAWebStructuredClone")(e);
          var m =
            (u =
              (c = i) == null ||
              (c = c.botInvokeMessage) == null ||
              (c = c.message) == null ||
              (c = c.extendedTextMessage) == null
                ? void 0
                : c.contextInfo) != null
              ? u
              : (d = i) == null || (d = d.extendedTextMessage) == null
                ? void 0
                : d.contextInfo;
          if (m != null) {
            var p = o("WAWebLidMigrationUtils").toLid(s);
            m.participant = o("WAWebE2EProtoUtils").encodeJid(p);
          }
        }
      }
      return i;
    }
    function W(e) {
      var t,
        n = e,
        a =
          e == null || (t = e.protocolMessage) == null || (t = t.key) == null
            ? void 0
            : t.participant;
      if (a != null) {
        var i = o("WAWebWidFactory").createWid(a);
        if (!i.isBot() && !i.isLid()) {
          var l;
          n = r("WAWebStructuredClone")(e);
          var s =
            (l = n) == null || (l = l.protocolMessage) == null ? void 0 : l.key;
          if (s != null) {
            var u = o("WAWebLidMigrationUtils").toLid(i);
            s.participant = o("WAWebE2EProtoUtils").encodeJid(u);
          }
        }
      }
      return n;
    }
    function q(e) {
      var t = e,
        n = (e == null ? void 0 : e.protocolMessage) != null;
      if (n) {
        var o, a;
        ((t = r("WAWebStructuredClone")(e)),
          (o = t.protocolMessage) == null ||
            (o = o.key) == null ||
            delete o.remoteJid,
          (a = t.protocolMessage) == null ||
            (a = a.key) == null ||
            delete a.participant);
      }
      return t;
    }
    function U(e) {
      if (e == null || !r("WAWebWid").isWid(e)) return null;
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
    }
    function V(e) {
      var t = U(e);
      if (t == null || !t.isUser() || t.isBot() || t.isLid()) return null;
      var n = o("WAWebLidMigrationUtils").toLid(t);
      return n != null ? o("WAWebE2EProtoUtils").encodeJid(n) : null;
    }
    function H(e) {
      var t = U(e);
      return t != null && t.isUser() && !t.isBot() && !t.isLid();
    }
    function G(e) {
      var t = [];
      for (var n of e) {
        var r = V(n);
        r != null ? t.push(r) : H(n) || t.push(n);
      }
      return t;
    }
    function z(e) {
      var t = V(e);
      if (t != null) return t;
      if (!H(e)) return e;
    }
    var j = 32;
    function K(e) {
      return Q(
        r("WAWebStructuredClone")(e),
        o("WAWebProtobufsE2E.pb").MessageSpec,
        0,
      );
    }
    function Q(e, t, n) {
      if (n > j)
        throw r("err")("coexv2 relay sanitize exceeded max nesting depth");
      for (
        var a = o("WAProtoCompile").compileSpec(t),
          i = a.meta,
          l = a.names,
          s = a.types,
          u = 0;
        u < l.length;
        u++
      ) {
        var c = e[l[u]];
        if (c != null) {
          if (o("WAProtoUtils").isMessageType(s[u])) {
            var d = o("WAProtoUtils").isRepeatedField(s[u]) ? c : [c];
            for (var m of d) Q(m, i[u], n + 1);
          } else if (o("WAProtoUtils").isStringType(s[u]))
            if (o("WAProtoUtils").isRepeatedField(s[u])) e[l[u]] = G(c);
            else {
              var p = z(c);
              p == null ? delete e[l[u]] : (e[l[u]] = p);
            }
        }
      }
      return e;
    }
    function X(e) {
      var t = r("WAWebStructuredClone")(e);
      return (
        (t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
          capiCreatedGroup: !0,
        })),
        t
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getDebugInfo",
            {
              addLanguageFields: !0,
              convertFields: !0,
              addUserAgentDetails: !0,
            },
          );
          t.sagaKey = "saga_v1_enabled";
          var n = babelHelpers.extends(
            { version: 1, debug_information: t },
            o("WAWebABPropsSaga").getIsSagaV1CarouselEnabled()
              ? { citations_carousel: !0 }
              : {},
          );
          e.messageContextInfo = babelHelpers.extends(
            {},
            e.messageContextInfo,
            { supportPayload: JSON.stringify(n) },
          );
        })),
        J.apply(this, arguments)
      );
    }
    ((l.populateMessageContextInfo = d),
      (l.createPeerMsgProtobuf = m),
      (l.createMsgProtobuf = p),
      (l.createAddonProtobuf = _),
      (l.createProtobuf = h),
      (l.getProtobufMessage = C),
      (l.updateBotInvokeMsgProtoCopyForCapi = F),
      (l.updateFbidBotProtobuf = B),
      (l.updateFbidBotInvokeProtobuf = W),
      (l.updateBotProtobuf = q),
      (l.sanitizeCoexV2RelayMessage = K),
      (l.updateGroupMsgProtoWithCapiFlag = X),
      (l.addDebugInfoSupportPayload = Y));
  },
  98,
);
