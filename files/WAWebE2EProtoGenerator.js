__d(
  "WAWebE2EProtoGenerator",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBackendApi",
    "WAWebBizCoexGatingUtils",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
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
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebThreadsGating",
    "WAWebURLUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isArrayNullOrEmpty",
    "isEmptyObject",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["messageContextInfo"],
      s = ["messageContextInfo"],
      u;
    function c(e, t, n) {
      (!t && !n) ||
        (e.messageContextInfo = babelHelpers.extends({}, e.messageContextInfo, {
          deviceListMetadata: {
            senderKeyHash: t == null ? void 0 : t.keyHash,
            senderTimestamp: t == null ? void 0 : t.timestamp,
            senderKeyIndexes: t == null ? void 0 : t.keyIndexes,
            recipientKeyHash: n == null ? void 0 : n.keyHash,
            recipientTimestamp: n == null ? void 0 : n.timestamp,
            recipientKeyIndexes: n == null ? void 0 : n.keyIndexes,
            senderAccountType: o(
              "WAWebBizCoexGatingUtils",
            ).bizHostedDevicesEnabled()
              ? t == null
                ? void 0
                : t.senderAccountType
              : void 0,
            receiverAccountType: o(
              "WAWebBizCoexGatingUtils",
            ).bizHostedDevicesEnabled()
              ? n == null
                ? void 0
                : n.receiverAccountType
              : void 0,
          },
          deviceListMetadataVersion: 2,
        }));
    }
    function d(e) {
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
    function m(e, t) {
      var n,
        r = g(e);
      return f(r, t, (n = e.utm) != null ? n : void 0);
    }
    function p(e) {
      return f(e);
    }
    function _(e, t) {
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
        t.quotedMessage = h(e.quotedMsg, s, l, void 0, "quoted");
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
    function f(e, t, n) {
      var a = {};
      if ((_(e, a), e.mentionedJidList && e.mentionedJidList.length > 0)) {
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
            quotedQuestion: h(
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
            quotedResponse: h(
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
          f = d.creatorName;
        a.forwardedAiBotMessageInfo = {
          botJid: o("WAWebE2EProtoUtils").encodeJid(m),
          botName: p,
          creatorName: f,
        };
      }
      if (
        (e.ephemeralDuration && (a.expiration = e.ephemeralDuration),
        e.ephemeralSettingTimestamp &&
          (a.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp),
        e.afterReadDuration != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          ((a.afterReadDuration = e.afterReadDuration),
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
        var g = {};
        (e.cannotBeRanked && (g.cannotBeRanked = e.cannotBeRanked),
          e.canBeReshared && (g.canBeReshared = e.canBeReshared),
          (a.featureEligibilities = g));
      }
      return (
        e.limitSharing && (a.limitSharingV2 = e.limitSharing),
        h(e, t, r("isEmptyObject")(a) ? void 0 : a)
      );
    }
    function g(e) {
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
    function h(e, t, n, a, i) {
      var l, s;
      (t === void 0 && (t = {}), n === void 0 && (n = void 0));
      var c = y(e, t, n, a, i);
      try {
        var d = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedOutgoingMessageAssociationContextInfo(
          e.associationType,
          e.parentMsgKey,
        );
        d &&
          (c.messageContextInfo = babelHelpers.extends(
            {},
            c.messageContextInfo,
            d,
          ));
      } catch (t) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
          (c.messageContextInfo = babelHelpers.extends(
            {},
            c.messageContextInfo,
            { messageSecret: e.messageSecret },
          )),
        o("WAWebBotBaseGating").isBotEnabled())
      ) {
        var m = o("WAWebGenerateBotMetadata").generateBotMetadata(e);
        c.messageContextInfo = babelHelpers.extends({}, c.messageContextInfo, {
          botMetadata: m,
        });
      }
      if (
        !r("isArrayNullOrEmpty")(e.threadIds) &&
        o("WAWebThreadsGating").isThreadsInfraEnabled()
      ) {
        var p = o("WAWebGenerateThreadIds").generateThreadIds(e);
        c.messageContextInfo = babelHelpers.extends({}, c.messageContextInfo, {
          threadId: p,
        });
      }
      if (
        ((c = D(c, e, n)),
        o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(e.type, e.subtype))
      ) {
        var _, f;
        c.messageContextInfo = babelHelpers.extends({}, c.messageContextInfo, {
          messageSecret:
            (_ =
              (f = c.messageContextInfo) == null ? void 0 : f.messageSecret) !=
            null
              ? _
              : e.messageSecret,
        });
      }
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.COMMENT &&
          ((s = c.messageContextInfo) == null ? void 0 : s.messageSecret) !=
            null &&
          (c.messageContextInfo = babelHelpers.extends(
            {},
            c.messageContextInfo,
            { messageSecret: null },
          )),
        e.limitSharing &&
          (c.messageContextInfo = babelHelpers.extends(
            {},
            c.messageContextInfo,
            { limitSharingV2: e.limitSharing },
          )),
        c
      );
    }
    function y(e, t, n, r, a) {
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
            h(e, t, n, r)
          );
      }
      return r;
    }
    function C(e, t) {
      return t.type === "ptt"
        ? { viewOnceMessageV2Extension: { message: e } }
        : { viewOnceMessage: { message: e } };
    }
    function b(t) {
      var n = t.messageContextInfo,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { documentWithCaptionMessage: { message: r } },
        n != null ? { messageContextInfo: n } : void 0,
      );
    }
    function v(e) {
      return { lottieStickerMessage: { message: e } };
    }
    function S(e) {
      return { groupMentionedMessage: { message: e } };
    }
    function R(e) {
      return { botInvokeMessage: { message: e } };
    }
    function L(e) {
      return { pollCreationMessageV4: { message: e } };
    }
    function E(e) {
      return { questionMessage: { message: e } };
    }
    function k(e) {
      return { questionReplyMessage: { message: e } };
    }
    function I(e) {
      return {
        associatedChildMessage: {
          message: babelHelpers.extends({}, e, { messageContextInfo: void 0 }),
        },
        messageContextInfo: e.messageContextInfo,
      };
    }
    function T(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return {
        pollCreationOptionImageMessage: { message: n },
        messageContextInfo: t,
      };
    }
    function D(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c = e;
      if (
        (t.pollContentType ===
          o("WAWebPollCreationUtils").PollContentType.IMAGE && (c = L(c)),
        (n == null ? void 0 : n.isQuestion) === !0 && (c = E(c)),
        n != null && n.questionReplyQuotedMessage && (c = k(c)),
        t.associationType != null &&
          (t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
            ? (c = T(c))
            : o(
                "WAWebMessageAssociationGatingUtils",
              ).isFutureproofAssociatedChildEnabled() && (c = I(c))),
        t.isViewOnce && (c = C(c, t)),
        t.isDynamicReplyButtonsMsg === !0 &&
          (c = o(
            "WAWebButtonsMessageProtoUtils",
          ).createDynamicReplyButtonsMessage(c, t, n)),
        t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          (a = c.documentMessage) != null &&
          a.caption &&
          (c = b(c)),
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (i = c.stickerMessage) != null &&
          i.isLottie &&
          (c = v(c)),
        n != null && (l = n.groupMentions) != null && l.length && (c = S(c)),
        !((s = t.invokedBotWid) != null && s.isFbidBot()) &&
          (((u = t.invokedBotWid) != null && u.isPnBot()) ||
            t.subtype === "bot_request_welcome") &&
          ((c = R(c)), o("WAWebBotBaseGating").isBotEnabled()))
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
      return c;
    }
    function x(e) {
      ((e.imageMessage = void 0),
        (e.videoMessage = void 0),
        (e.documentMessage = void 0),
        (e.audioMessage = void 0),
        (e.stickerMessage = void 0),
        (e.lottieStickerMessage = void 0),
        (e.stickerPackMessage = void 0),
        (e.albumMessage = void 0));
    }
    function $(e) {
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
    var P = [
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
    function N(e) {
      var t = e;
      ($(t) && x(t),
        P.forEach(function (e) {
          var n,
            r = (n = t[e]) == null ? void 0 : n.message;
          r != null && $(r) && x(r);
        }));
    }
    function M(e, t, n) {
      var a, i, l, s, u;
      n === void 0 && (n = !1);
      var c = r("lodash").cloneDeep(e),
        d = !1;
      (n === !0 &&
        o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
        (d = !0),
        d === !0 && N(c),
        (c.messageContextInfo = babelHelpers.extends({}, c.messageContextInfo, {
          messageSecret: null,
        })),
        t &&
          (c.messageContextInfo = babelHelpers.extends(
            {},
            c.messageContextInfo,
            { botMessageSecret: t },
          )));
      var m =
        (c == null ||
        (a = c.botInvokeMessage) == null ||
        (a = a.message) == null ||
        (a = a.extendedTextMessage) == null
          ? void 0
          : a.contextInfo) ||
        (c == null || (i = c.extendedTextMessage) == null
          ? void 0
          : i.contextInfo);
      if ((m == null ? void 0 : m.quotedMessage) != null) {
        var p;
        m.participant != null &&
          ((p = o("WAWebWidFactory").createWid(m.participant)) == null
            ? void 0
            : p.isBot()) !== !0 &&
          (d !== !0 && delete m.quotedMessage,
          delete m.stanzaId,
          delete m.remoteJid,
          delete m.participant);
      }
      var _ =
        c == null ||
        (l = c.protocolMessage) == null ||
        (l = l.botFeedbackMessage) == null
          ? void 0
          : l.messageKey;
      _ != null && _.remoteJid != null && delete _.remoteJid;
      var f =
        (c == null || (s = c.protocolMessage) == null ? void 0 : s.type) ===
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
          ? c == null || (u = c.protocolMessage) == null
            ? void 0
            : u.key
          : null;
      return (f != null && f.remoteJid != null && delete f.remoteJid, c);
    }
    function w(e) {
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
          i = r("lodash").cloneDeep(e);
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
    function A(e) {
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
          n = r("lodash").cloneDeep(e);
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
    function F(e) {
      var t = e,
        n = (e == null ? void 0 : e.protocolMessage) != null;
      if (n) {
        var o, a;
        ((t = r("lodash").cloneDeep(e)),
          (o = t.protocolMessage) == null ||
            (o = o.key) == null ||
            delete o.remoteJid,
          (a = t.protocolMessage) == null ||
            (a = a.key) == null ||
            delete a.participant);
      }
      return t;
    }
    function O(e) {
      var t = r("lodash").cloneDeep(e);
      return (
        (t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
          capiCreatedGroup: !0,
        })),
        t
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        W.apply(this, arguments)
      );
    }
    ((l.populateMessageContextInfo = c),
      (l.createPeerMsgProtobuf = d),
      (l.createMsgProtobuf = m),
      (l.createAddonProtobuf = p),
      (l.createProtobuf = f),
      (l.getProtobufMessage = h),
      (l.updateBotInvokeMsgProtoCopyForCapi = M),
      (l.updateFbidBotProtobuf = w),
      (l.updateFbidBotInvokeProtobuf = A),
      (l.updateBotProtobuf = F),
      (l.updateGroupMsgProtoWithCapiFlag = O),
      (l.addDebugInfoSupportPayload = B));
  },
  98,
);
