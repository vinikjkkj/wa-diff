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
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsStatusAttributions.pb",
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
        r = h(e);
      return g(r, t, (n = e.utm) != null ? n : void 0);
    }
    function p(e) {
      return g(e);
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
        t.quotedMessage = y(e.quotedMsg, s, l, void 0, "quoted");
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
    function f(e) {
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
    function g(e, t, n) {
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
            quotedQuestion: y(
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
            quotedResponse: y(
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
          g = d.creatorName;
        a.forwardedAiBotMessageInfo = {
          botJid: o("WAWebE2EProtoUtils").encodeJid(m),
          botName: p,
          creatorName: g,
        };
      }
      var h = f(e),
        C = h.afterReadDuration,
        b = h.ephemeralDuration;
      if (
        (b != null && b > 0 && (a.expiration = b),
        e.ephemeralSettingTimestamp &&
          (a.ephemeralSettingTimestamp = e.ephemeralSettingTimestamp),
        C != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          ((a.afterReadDuration = C),
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
      return y(e, t, r("isEmptyObject")(a) ? void 0 : a);
    }
    function h(e) {
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
    function y(e, t, n, a, i) {
      var l, s;
      (t === void 0 && (t = {}), n === void 0 && (n = void 0));
      var c = C(e, t, n, a, i);
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
          !(
            i === "quoted" &&
            o(
              "WAWebMessagingGatingUtils",
            ).isRemoveMessageSecretFromQuotedEnabled()
          ) &&
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
        ((c = $(c, e, n)),
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
    function C(e, t, n, r, a) {
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
            y(e, t, n, r)
          );
      }
      return r;
    }
    function b(e, t) {
      return t.type === "ptt"
        ? { viewOnceMessageV2Extension: { message: e } }
        : { viewOnceMessage: { message: e } };
    }
    function v(t) {
      var n = t.messageContextInfo,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends(
        { documentWithCaptionMessage: { message: r } },
        n != null ? { messageContextInfo: n } : void 0,
      );
    }
    function S(e) {
      return { lottieStickerMessage: { message: e } };
    }
    function R(e) {
      return { groupMentionedMessage: { message: e } };
    }
    function L(e) {
      return { botInvokeMessage: { message: e } };
    }
    function E(e) {
      return { pollCreationMessageV4: { message: e } };
    }
    function k(e) {
      return { questionMessage: { message: e } };
    }
    function I(e) {
      return { questionReplyMessage: { message: e } };
    }
    function T(e) {
      return { newsletterAdminProfileMessage: { message: e } };
    }
    function D(e) {
      return {
        associatedChildMessage: {
          message: babelHelpers.extends({}, e, { messageContextInfo: void 0 }),
        },
        messageContextInfo: e.messageContextInfo,
      };
    }
    function x(e) {
      var t = e.messageContextInfo,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return {
        pollCreationOptionImageMessage: { message: n },
        messageContextInfo: t,
      };
    }
    function $(e, t, n) {
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
          o("WAWebPollCreationUtils").PollContentType.IMAGE && (d = E(d)),
        (n == null ? void 0 : n.isQuestion) === !0 && (d = k(d)),
        n != null && n.questionReplyQuotedMessage && (d = I(d)),
        t.newsletterAdminProfile != null && (d = T(d)),
        t.associationType != null &&
          (t.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
            ? (d = x(d))
            : o(
                "WAWebMessageAssociationGatingUtils",
              ).isFutureproofAssociatedChildEnabled() && (d = D(d))),
        t.isViewOnce && (d = b(d, t)),
        t.isDynamicReplyButtonsMsg === !0 &&
          (d = o(
            "WAWebButtonsMessageProtoUtils",
          ).createDynamicReplyButtonsMessage(d, t, n)),
        t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          (a = d.documentMessage) != null &&
          a.caption &&
          (d = v(d)),
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          (i = d.stickerMessage) != null &&
          i.isLottie &&
          (d = S(d)),
        n != null && (l = n.groupMentions) != null && l.length && (d = R(d)),
        !((s = t.invokedBotWid) != null && s.isFbidBot()) &&
          (((u = t.invokedBotWid) != null && u.isPnBot()) ||
            t.subtype === "bot_request_welcome") &&
          ((d = L(d)), o("WAWebBotBaseGating").isBotEnabled()))
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
    function P(e) {
      ((e.imageMessage = void 0),
        (e.videoMessage = void 0),
        (e.documentMessage = void 0),
        (e.audioMessage = void 0),
        (e.stickerMessage = void 0),
        (e.lottieStickerMessage = void 0),
        (e.stickerPackMessage = void 0),
        (e.albumMessage = void 0));
    }
    function N(e) {
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
    var M = [
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
    function w(e) {
      var t = e;
      (N(t) && P(t),
        M.forEach(function (e) {
          var n,
            r = (n = t[e]) == null ? void 0 : n.message;
          r != null && N(r) && P(r);
        }));
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            p = r("lodash").cloneDeep(m),
            _ = !1;
          (c === !0 &&
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            (_ = !0),
            _ === !0 && w(p),
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
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
    function B(e) {
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
    function W(e) {
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
    function q(e) {
      var t = r("lodash").cloneDeep(e);
      return (
        (t.messageContextInfo = babelHelpers.extends({}, t.messageContextInfo, {
          capiCreatedGroup: !0,
        })),
        t
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        V.apply(this, arguments)
      );
    }
    ((l.populateMessageContextInfo = c),
      (l.createPeerMsgProtobuf = d),
      (l.createMsgProtobuf = m),
      (l.createAddonProtobuf = p),
      (l.createProtobuf = g),
      (l.getProtobufMessage = y),
      (l.updateBotInvokeMsgProtoCopyForCapi = A),
      (l.updateFbidBotProtobuf = O),
      (l.updateFbidBotInvokeProtobuf = B),
      (l.updateBotProtobuf = W),
      (l.updateGroupMsgProtoWithCapiFlag = q),
      (l.addDebugInfoSupportPayload = U));
  },
  98,
);
