__d(
  "WAWebE2EProtoGenerator",
  [
    "WALogger",
    "WATypeUtils",
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
    "WAWebMessageAssociationGatingUtils",
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
      c = ["quotedMessage"],
      d = ["participant", "remoteJid", "stanzaId"],
      m = ["quotedMessage"],
      p;
    function _(e, t, n) {
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
    function f(e) {
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
    function g(e, t) {
      var n,
        r = v(e);
      return b(r, t, (n = e.utm) != null ? n : void 0);
    }
    function h(e) {
      return b(e);
    }
    function y(e, t) {
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
        t.quotedMessage = S(e.quotedMsg, s, l, void 0, "quoted");
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
    function C(e) {
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
    function b(e, t, n) {
      var a = {};
      if ((y(e, a), e.mentionedJidList && e.mentionedJidList.length > 0)) {
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
            quotedQuestion: S(
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
            quotedResponse: S(
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
      var f = C(e),
        g = f.afterReadDuration,
        h = f.ephemeralDuration;
      if (
        (h != null && h > 0 && (a.expiration = h),
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
        var v = e.statusAttributions.some(function (e) {
          return (
            e.type ===
            o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type
              .RESHARE
          );
        });
        v &&
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
        S(e, t, r("isEmptyObject")(a) ? void 0 : a)
      );
    }
    function v(e) {
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
    function S(e, t, n, a, i) {
      var l, s, u, c;
      (t === void 0 && (t = {}), n === void 0 && (n = void 0));
      var d = R(e, t, n, a, i);
      try {
        var m = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedOutgoingMessageAssociationContextInfo(
          e.associationType,
          e.parentMsgKey,
        );
        m &&
          (d.messageContextInfo = babelHelpers.extends(
            {},
            d.messageContextInfo,
            m,
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
        ((d = N(d, e, n)),
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
    function R(e, t, n, r, a) {
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
            S(e, t, n, r)
          );
      }
      return r;
    }
    function L(e, t) {
      return t.type === "ptt"
        ? { viewOnceMessageV2Extension: { message: e } }
        : { viewOnceMessage: { message: e } };
    }
    function E(t) {
      var n = t.messageContextInfo,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { documentWithCaptionMessage: { message: r } },
        n != null ? { messageContextInfo: n } : void 0,
      );
    }
    function k(e) {
      return { lottieStickerMessage: { message: e } };
    }
    function I(e) {
      return { groupMentionedMessage: { message: e } };
    }
    function T(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return babelHelpers.extends(
        { botForwardedMessage: { message: n } },
        t != null ? { messageContextInfo: t } : void 0,
      );
    }
    function D(e) {
      return { questionMessage: { message: e } };
    }
    function x(e) {
      return { questionReplyMessage: { message: e } };
    }
    function $(e) {
      return {
        associatedChildMessage: {
          message: babelHelpers.extends({}, e, { messageContextInfo: void 0 }),
        },
        messageContextInfo: e.messageContextInfo,
      };
    }
    function P(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return {
        pollCreationOptionImageMessage: { message: n },
        messageContextInfo: t,
      };
    }
    function N(e, t, n) {
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
        ((n == null ? void 0 : n.isQuestion) === !0 && (c = D(c)),
        n != null && n.questionReplyQuotedMessage && (c = x(c)),
        t.associationType != null &&
          (t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
            ? (c = P(c))
            : o("WAWebAssociationProtoUtils").shouldWrapAssociatedChildForType(
                t.associationType,
              ) &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).shouldWrapAssociatedChildOnSend() &&
              (c = $(c))),
        t.isViewOnce && (c = L(c, t)),
        t.isDynamicReplyButtonsMsg === !0 &&
          (c = o(
            "WAWebButtonsMessageProtoUtils",
          ).createDynamicReplyButtonsMessage(c, t, n)),
        t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          (a = c.documentMessage) != null &&
          a.caption &&
          (c = E(c)),
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (i = c.stickerMessage) != null &&
          i.isLottie &&
          (c = k(c)),
        n != null && (l = n.groupMentions) != null && l.length && (c = I(c)),
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
          (c = T(c)),
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
    function M(e) {
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
    function w(e) {
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
    var A = [
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
    function F(e) {
      var t = e;
      (w(t) && M(t),
        A.forEach(function (e) {
          var n,
            r = (n = t[e]) == null ? void 0 : n.message;
          r != null && w(r) && M(r);
        }));
    }
    function O(e, t, n) {
      var r;
      if (e.quotedMessage == null) return e;
      if (n) {
        var a = e.quotedMessage,
          i = babelHelpers.objectWithoutPropertiesLoose(e, c);
        return i;
      }
      if (
        e.participant == null ||
        ((r = o("WAWebWidFactory").createWid(e.participant)) == null
          ? void 0
          : r.isBot()) === !0
      )
        return e;
      var l = e.participant,
        s = e.remoteJid,
        u = e.stanzaId,
        p = babelHelpers.objectWithoutPropertiesLoose(e, d);
      if (t) return p;
      var _ = p.quotedMessage,
        f = babelHelpers.objectWithoutPropertiesLoose(p, m);
      return f;
    }
    function B(e, t, n) {
      var r,
        o = e.botInvokeMessage,
        a =
          o == null || (r = o.message) == null ? void 0 : r.extendedTextMessage,
        i = a == null ? void 0 : a.contextInfo;
      if ((o == null ? void 0 : o.message) != null && a != null && i != null)
        return babelHelpers.extends({}, e, {
          botInvokeMessage: babelHelpers.extends({}, o, {
            message: babelHelpers.extends({}, o.message, {
              extendedTextMessage: babelHelpers.extends({}, a, {
                contextInfo: O(i, t, n),
              }),
            }),
          }),
        });
      var l = e.extendedTextMessage,
        s = l == null ? void 0 : l.contextInfo;
      return l == null || s == null
        ? e
        : babelHelpers.extends({}, e, {
            extendedTextMessage: babelHelpers.extends({}, l, {
              contextInfo: O(s, t, n),
            }),
          });
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i = e.botMessageSecret,
            l = e.isGroupAgentParticipantSend,
            s = l === void 0 ? !1 : l,
            u = e.isOpenBotGroup,
            c = u === void 0 ? !1 : u,
            d = e.mentionedJidList,
            m = e.message,
            p = e.messageSecret,
            _ = r("WAWebStructuredClone")(m),
            f = !1;
          if (
            (c === !0 &&
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              (f = !0),
            (f || s) && F(_),
            s)
          ) {
            var g;
            _.messageContextInfo = babelHelpers.extends(
              {},
              _.messageContextInfo,
              {
                botMessageSecret: null,
                messageSecret:
                  p != null
                    ? p
                    : (g = _.messageContextInfo) == null
                      ? void 0
                      : g.messageSecret,
              },
            );
          } else
            _.messageContextInfo = babelHelpers.extends(
              {},
              _.messageContextInfo,
              { messageSecret: null },
            );
          (i &&
            !s &&
            (_.messageContextInfo = babelHelpers.extends(
              {},
              _.messageContextInfo,
              { botMessageSecret: i },
            )),
            (_ = B(_, f, s)));
          var h =
            (t = _) == null ||
            (t = t.protocolMessage) == null ||
            (t = t.botFeedbackMessage) == null
              ? void 0
              : t.messageKey;
          h != null && h.remoteJid != null && delete h.remoteJid;
          var y =
            ((n = _) == null || (n = n.protocolMessage) == null
              ? void 0
              : n.type) ===
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
              ? (a = _) == null || (a = a.protocolMessage) == null
                ? void 0
                : a.key
              : null;
          return (
            y != null && y.remoteJid != null && delete y.remoteJid,
            yield o(
              "WAWebBotReplaceMentionWidsWithPushnames",
            ).replaceMentionWidsWithPushnames(_, d),
            _
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
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
    function V(e) {
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
    function H(e) {
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
    function G(e) {
      var t = r("WAWebStructuredClone")(e);
      return (
        (t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
          capiCreatedGroup: !0,
        })),
        t
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        j.apply(this, arguments)
      );
    }
    ((l.populateMessageContextInfo = _),
      (l.createPeerMsgProtobuf = f),
      (l.createMsgProtobuf = g),
      (l.createAddonProtobuf = h),
      (l.createProtobuf = b),
      (l.getProtobufMessage = S),
      (l.updateBotInvokeMsgProtoCopyForCapi = W),
      (l.updateFbidBotProtobuf = U),
      (l.updateFbidBotInvokeProtobuf = V),
      (l.updateBotProtobuf = H),
      (l.updateGroupMsgProtoWithCapiFlag = G),
      (l.addDebugInfoSupportPayload = z));
  },
  98,
);
