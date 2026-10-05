__d(
  "WAWebE2EProtoGenerator",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBackendApi",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotReplaceMentionWidsWithPushnames",
    "WAWebBotUtils",
    "WAWebButtonsMessageProtoUtils",
    "WAWebConversionTupleCollection",
    "WAWebE2EProtoUtils",
    "WAWebGenerateBotMetadata",
    "WAWebGenerateThreadIds",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePluginGenerateProtobuf",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPairedMediaTypeProtoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebSpoilerFutureproofProtoUtils",
    "WAWebStructuredClone",
    "WAWebURLUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isArrayNullOrEmpty",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["messageContextInfo"],
      s = ["messageContextInfo"],
      u = ["messageContextInfo"],
      c = ["participant", "remoteJid", "stanzaId"],
      d = ["quotedMessage"],
      m;
    function p(e, t, n) {
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
    function _(e) {
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
    function f(e, t) {
      var n,
        r = b(e);
      return C(r, t, (n = e.utm) != null ? n : void 0);
    }
    function g(e) {
      return C(e);
    }
    function h(e, t) {
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
            ? {
                mentionedJid: a,
                groupMentions: i,
                statusAttributions: [],
                experienceIds: [],
              }
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
        t.quotedMessage = v(e.quotedMsg, s, l, void 0, "quoted");
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
    function y(e) {
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
    function C(e, t, n) {
      var a = {};
      if ((h(e, a), e.mentionedJidList && e.mentionedJidList.length > 0)) {
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
        e.isSpoiler === !0 && (a.isSpoiler = !0),
        e.questionReplyQuotedMessage &&
          (a.questionReplyQuotedMessage = {
            serverQuestionId: e.questionReplyQuotedMessage.questionServerId,
            quotedQuestion: v(
              e.questionReplyQuotedMessage.quotedQuestion,
              void 0,
              {
                isQuestion: !0,
                groupMentions: [],
                mentionedJid: [],
                statusAttributions: [],
                experienceIds: [],
              },
              void 0,
              "quoted",
            ),
            quotedResponse: v(
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
      var f = y(e),
        g = f.afterReadDuration,
        C = f.ephemeralDuration;
      if (
        (C != null && C > 0 && (a.expiration = C),
        e.ephemeralSettingTimestamp &&
          (a.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp),
        g != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          ((a.afterReadDuration = g),
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
        var b = {};
        (e.cannotBeRanked && (b.cannotBeRanked = e.cannotBeRanked),
          e.canBeReshared && (b.canBeReshared = e.canBeReshared),
          (a.featureEligibilities = b));
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
      var L = o("WAWebPairedMediaTypeProtoUtils").pairedMediaTypeToProto(
        e.pairedMediaType,
      );
      return (
        L != null && (a.pairedMediaType = L),
        v(e, t, r("isEmptyObject")(a) ? void 0 : a)
      );
    }
    function b(e) {
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
    function v(e, t, n, a, i) {
      var l, s, u, c;
      (t === void 0 && (t = {}), n === void 0 && (n = void 0));
      var d = S(e, t, n, a, i);
      try {
        var p = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedOutgoingMessageAssociationContextInfo(
          e.associationType,
          e.parentMsgKey,
        );
        p &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            p,
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
          i !== "quoted" &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            { messageSecret: e.messageSecret },
          )),
        o("WAWebBotBaseGating").isBotEnabled() ||
          e.botGroupParticipant != null ||
          ((s = e.to) == null ? void 0 : s.isSupportAgentBot()) === !0 ||
          (((u = e.id) == null ? void 0 : u.remote) != null &&
            o("WAWebBotUtils").isHatchBot(e.id.remote)))
      ) {
        var _,
          f = (_ = d.messageContextInfo) == null ? void 0 : _.botMetadata,
          g = o("WAWebGenerateBotMetadata").mergeBotMetadata(
            f,
            o("WAWebGenerateBotMetadata").generateBotMetadata(e),
          );
        g != null &&
          g !== f &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            { botMetadata: g },
          ));
      }
      if (!r("isArrayNullOrEmpty")(e.threadIds)) {
        var h = o("WAWebGenerateThreadIds").generateThreadIds(e);
        d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
          threadId: h,
        });
      }
      if (
        ((d = P(d, e, n)),
        o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(e.type, e.subtype) &&
          i !== "quoted")
      ) {
        var y, C;
        d.messageContextInfo = babelHelpers.extends({}, d.messageContextInfo, {
          messageSecret:
            (y =
              (C = d.messageContextInfo) == null ? void 0 : C.messageSecret) !=
            null
              ? y
              : e.messageSecret,
        });
      }
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.COMMENT &&
          ((c = d.messageContextInfo) == null ? void 0 : c.messageSecret) !=
            null &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            { messageSecret: null },
          )),
        e.limitSharing &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            { limitSharingV2: e.limitSharing },
          )),
        d
      );
    }
    function S(e, t, n, r, a) {
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
            v(e, t, n, r)
          );
      }
      return r;
    }
    function R(e, t) {
      return t.type === "ptt"
        ? { viewOnceMessageV2Extension: { message: e } }
        : { viewOnceMessage: { message: e } };
    }
    function L(t) {
      var n = t.messageContextInfo,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { documentWithCaptionMessage: { message: r } },
        n != null ? { messageContextInfo: n } : void 0,
      );
    }
    function E(e) {
      return { lottieStickerMessage: { message: e } };
    }
    function k(e) {
      return { groupMentionedMessage: { message: e } };
    }
    function I(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return babelHelpers.extends(
        { botForwardedMessage: { message: n } },
        t != null ? { messageContextInfo: t } : void 0,
      );
    }
    function T(e) {
      return { questionMessage: { message: e } };
    }
    function D(e) {
      return { questionReplyMessage: { message: e } };
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
          e.messageContextInfo != null
            ? babelHelpers.extends({}, e, { messageContextInfo: void 0 })
            : e;
      if (
        ((n == null ? void 0 : n.isQuestion) === !0 && (c = T(c)),
        n != null && n.questionReplyQuotedMessage && (c = D(c)),
        t.associationType != null &&
          (t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
            ? (c = $(c))
            : o("WAWebAssociationProtoUtils").shouldWrapAssociatedChildForType(
                t.associationType,
              ) &&
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_wrap_associated_child_message_enabled",
              ) &&
              (c = x(c))),
        t.isViewOnce && (c = R(c, t)),
        t.isDynamicReplyButtonsMsg === !0 &&
          (c = o(
            "WAWebButtonsMessageProtoUtils",
          ).createDynamicReplyButtonsMessage(c, t, n)),
        t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          (a = c.documentMessage) != null &&
          a.caption &&
          (c = L(c)),
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (i = c.stickerMessage) != null &&
          i.isLottie &&
          (c = E(c)),
        n != null && (l = n.groupMentions) != null && l.length && (c = k(c)),
        !((s = t.invokedBotWid) != null && s.isFbidBot()) &&
          (((u = t.invokedBotWid) != null && u.isPnBot()) ||
            t.subtype === "bot_request_welcome") &&
          o("WAWebBotBaseGating").isBotEnabled())
      ) {
        var d;
        c.messageContextInfo = babelHelpers.extends({}, c.messageContextInfo, {
          messageSecret: t.messageSecret,
          botMetadata: babelHelpers.extends(
            {},
            ((d = e.messageContextInfo) == null ? void 0 : d.botMetadata) || {},
            t.botTargetSenderJid instanceof r("WAWebWid")
              ? { invokerJid: t.botTargetSenderJid.toJid() }
              : {},
          ),
        });
      }
      return (
        t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
          t.isForwarded === !0 &&
          (c = I(c)),
        (n == null ? void 0 : n.isSpoiler) === !0 &&
          (c = o(
            "WAWebSpoilerFutureproofProtoUtils",
          ).createSpoilerFutureproofMessage(c, n)),
        e.messageContextInfo != null &&
          (c = babelHelpers.extends({}, c, {
            messageContextInfo: babelHelpers.extends(
              {},
              e.messageContextInfo,
              c.messageContextInfo,
            ),
          })),
        c
      );
    }
    function N(e) {
      ((e.imageMessage = void 0),
        (e.videoMessage = void 0),
        (e.documentMessage = void 0),
        (e.audioMessage = void 0),
        (e.ptvMessage = void 0),
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
            e.ptvMessage ||
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
      "spoilerMessage",
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
    function F(e, t, n, r) {
      var a;
      if (
        e.quotedMessage == null ||
        (n && !t && !r) ||
        e.participant == null ||
        ((a = o("WAWebWidFactory").createWid(e.participant)) == null
          ? void 0
          : a.isBot()) === !0
      )
        return e;
      var i = e.participant,
        l = e.remoteJid,
        s = e.stanzaId,
        u = babelHelpers.objectWithoutPropertiesLoose(e, c);
      if (t || n) return u;
      var m = u.quotedMessage,
        p = babelHelpers.objectWithoutPropertiesLoose(u, d);
      return p;
    }
    function O(e, t, n, r) {
      var o,
        a = e.botInvokeMessage,
        i =
          a == null || (o = a.message) == null ? void 0 : o.extendedTextMessage,
        l = i == null ? void 0 : i.contextInfo;
      if ((a == null ? void 0 : a.message) != null && i != null && l != null)
        return babelHelpers.extends({}, e, {
          botInvokeMessage: babelHelpers.extends({}, a, {
            message: babelHelpers.extends({}, a.message, {
              extendedTextMessage: babelHelpers.extends({}, i, {
                contextInfo: F(l, t, n, r),
              }),
            }),
          }),
        });
      var s = e.extendedTextMessage,
        u = s == null ? void 0 : s.contextInfo;
      return s == null || u == null
        ? e
        : babelHelpers.extends({}, e, {
            extendedTextMessage: babelHelpers.extends({}, s, {
              contextInfo: F(u, t, n, r),
            }),
          });
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = e.botMessageSecret,
            l = e.isGroupAgentParticipantSend,
            s = l === void 0 ? !1 : l,
            u = e.hasGroupAgentTarget,
            c = u === void 0 ? s : u,
            d = e.hasOpenBotTarget,
            m = d === void 0 ? !1 : d,
            p = e.isOpenBotGroup,
            _ = p === void 0 ? !1 : p,
            f = e.mentionedJidList,
            g = e.message,
            h = e.messageSecret,
            y = r("WAWebStructuredClone")(g),
            C = !1;
          if (
            (_ === !0 &&
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              (C = !0),
            C && !c && A(y),
            s)
          ) {
            var b;
            y.messageContextInfo = babelHelpers.extends(
              {},
              y.messageContextInfo,
              {
                botMessageSecret: null,
                messageSecret:
                  h != null
                    ? h
                    : (b = y.messageContextInfo) == null
                      ? void 0
                      : b.messageSecret,
              },
            );
          } else
            y.messageContextInfo = babelHelpers.extends(
              {},
              y.messageContextInfo,
              { messageSecret: null },
            );
          (i &&
            !s &&
            (y.messageContextInfo = babelHelpers.extends(
              {},
              y.messageContextInfo,
              { botMessageSecret: i },
            )),
            (y = O(y, C, c, m)));
          var v =
            (t = y) == null ||
            (t = t.protocolMessage) == null ||
            (t = t.botFeedbackMessage) == null
              ? void 0
              : t.messageKey;
          v != null && v.remoteJid != null && delete v.remoteJid;
          var S =
            ((n = y) == null || (n = n.protocolMessage) == null
              ? void 0
              : n.type) ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
              ? (a = y) == null || (a = a.protocolMessage) == null
                ? void 0
                : a.key
              : null;
          return (
            S != null && S.remoteJid != null && delete S.remoteJid,
            yield o(
              "WAWebBotReplaceMentionWidsWithPushnames",
            ).replaceMentionWidsWithPushnames(y, f),
            y
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
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
    function U(e) {
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
    function V(e) {
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
    function H(e) {
      var t = r("WAWebStructuredClone")(e);
      return (
        (t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
          capiCreatedGroup: !0,
        })),
        t
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        z.apply(this, arguments)
      );
    }
    ((l.populateMessageContextInfo = p),
      (l.createPeerMsgProtobuf = _),
      (l.createMsgProtobuf = f),
      (l.createAddonProtobuf = g),
      (l.createProtobuf = C),
      (l.getProtobufMessage = v),
      (l.updateBotInvokeMsgProtoCopyForCapi = B),
      (l.updateFbidBotProtobuf = q),
      (l.updateFbidBotInvokeProtobuf = U),
      (l.updateBotProtobuf = V),
      (l.updateGroupMsgProtoWithCapiFlag = H),
      (l.addDebugInfoSupportPayload = G));
  },
  98,
);
