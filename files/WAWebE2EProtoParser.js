__d(
  "WAWebE2EProtoParser",
  [
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebAssociationProtoUtils",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMetadataProtoUtils",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCrashlog",
    "WAWebDecodeJid",
    "WAWebDisappearingModeProtoUtils",
    "WAWebE2EProtoParserForCtwaContext",
    "WAWebFutureproofProtoUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationValidation",
    "WAWebMessagePluginParseProtobuf",
    "WAWebMsgType",
    "WAWebParseForwardedAiBotMessageInfo",
    "WAWebParseForwardedNewsletterMessageInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsProtoUtils",
    "WAWebQuotedMessageProtoUtils",
    "WAWebStatusGatingUtils",
    "WAWebThreadsGating",
    "WAWebThreadsMetadataProtoUtils",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "isArrayNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(t) {
      var n = t.bizInfo,
        r = t.bizSource,
        a = t.editAttr,
        i = t.finalLocation,
        l = t.historyLidPnMappings,
        s = t.message,
        u = t.messageProtobuf,
        c = t.msgBotInfo,
        d = t.msgContext,
        m = t.msgMeta,
        p = t.paymentInfo,
        _ = t.quotedPaymentInfo,
        f = t.rcat;
      u ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: not Message",
              ])),
          )
          .sendLogs("null-message");
      var g = u.messageContextInfo,
        h = y({
          messageProtobuf: u,
          message: s,
          msgContext: d,
          paymentInfo: p,
          finalLocation: i,
          quotedPaymentInfo: _,
          bizInfo: n,
          editAttr: a,
          rcat: f,
          bizSource: r,
          msgMeta: m,
          msgBotInfo: c,
          historyLidPnMappings: l,
        }),
        C = h.contextInfo,
        v = h.msgData;
      return (b(v, C, d, _), k(v, g, d), v);
    }
    function y(e) {
      var t = e.bizInfo,
        n = e.bizSource,
        r = e.editAttr,
        a = e.finalLocation,
        i = e.historyLidPnMappings,
        l = e.message,
        u = e.messageProtobuf,
        c = e.msgBotInfo,
        d = e.msgContext,
        m = e.msgMeta,
        p = e.paymentInfo,
        _ = e.quotedPaymentInfo,
        f = e.rcat,
        g = u.callLogMesssage,
        h = o(
          "WAWebAssociationProtoUtils",
        ).validateMessageAssociationInMessageContextInfo(
          l,
          u.messageContextInfo,
          d,
          i,
        );
      if (
        h != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        var y = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedAssociationFieldsFromProto(h, l, d);
        if (
          y.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN
        ) {
          var b = l,
            v = babelHelpers.extends({}, b, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: "associatedUnknown",
              associationType: y.associationType,
              parentMsgKey: y.associationParentMsgKey,
              viewMode: y.viewMode,
            });
          return { contextInfo: null, msgData: v };
        }
      }
      var k = o("WAWebMessagePluginParseProtobuf").parseProtobuf({
        messageProtobuf: u,
        baseMessage: l,
        msgContext: d,
        paymentInfo: p,
        quotedPaymentInfo: _,
        editAttr: r,
        bizInfo: t,
        finalLocation: a,
        rcat: f,
        bizSource: n,
        msgMeta: m,
        messageAssociation: h,
        msgBotInfo: c,
      });
      if (k) {
        var I =
          (k == null ? void 0 : k.msgData.type) ===
            o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          (k == null ? void 0 : k.msgData.futureproofType) != null;
        if (
          !I &&
          o("WAWebQuestionsProtoUtils").shouldFutureProofQuestionMessage(k)
        ) {
          var T = l,
            D = babelHelpers.extends({}, T, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: "unknown",
              subtype: void 0,
            });
          return { contextInfo: null, msgData: D };
        }
        if (h != null) {
          var x,
            $ = o(
              "WAWebAssociationProtoUtils",
            ).convertAssociationTypeFromProtoToClientSupportedAssociationType(
              h.associationType,
            );
          if (
            !I &&
            $ !==
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .BOT_PLUGIN &&
            (k == null ? void 0 : k.msgData.associationType) !== $ &&
            (u == null || (x = u.protocolMessage) == null ? void 0 : x.type) !==
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .MESSAGE_EDIT
          ) {
            var P;
            throw (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "parseMsgProto: Association type mismatch, parsedData Msg type: ",
                      ", associationTypeFromProtoCasted: ",
                      ", parsedData associationType: ",
                      ", editAttr: ",
                      ", protocolMessageType: ",
                      ", msgMeta type: ",
                      ", msgMeta pollType: ",
                      ", msgMeta eventType: ",
                      ", botEditType: ",
                      "",
                    ])),
                  k == null ? void 0 : k.msgData.type,
                  $,
                  k == null ? void 0 : k.msgData.associationType,
                  r,
                  u == null || (P = u.protocolMessage) == null
                    ? void 0
                    : P.type,
                  m == null ? void 0 : m.type,
                  m == null ? void 0 : m.pollType,
                  m == null ? void 0 : m.eventType,
                  c == null ? void 0 : c.botEditType,
                )
                .tags("messaging")
                .sendLogs("parseMsgProto-association-type-mismatch", {
                  sampling: 0.01,
                }),
              new (o(
                "WAWebMessageAssociationValidation",
              ).MessageAssociationValidationError)(
                o("WAWebMessageAssociationValidation")
                  .MessageAssociationValidationErrorCode.INVALID_CHILD_MESSAGE,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              )
            );
          }
        }
        return (
          o("WAWebLimitSharingProtoUtils").parseLimitSharingFromMessage(
            l,
            u,
            d,
          ),
          C(k.msgData),
          k
        );
      }
      var N = u.deviceSentMessage;
      (N && S(l, N, d), g && L(l, g));
      var M = u.groupStatusMessageV2;
      M != null &&
        o("WAWebABProps").getABPropConfigValue(
          "group_status_receiver_enabled",
        ) &&
        E(l, M, d);
      var w = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(u);
      return (
        w != null &&
          R({
            message: l,
            futureproofMessage: w,
            msgContext: d,
            topLevelMessageContextInfo: u.messageContextInfo,
            editAttr: r,
          }),
        { contextInfo: null, msgData: l }
      );
    }
    function C(e) {
      e.isViewOnce === !0 &&
        ([
          "body",
          "caption",
          "deprecatedMms3Url",
          "directPath",
          "encFilehash",
          "filehash",
          "mediaKey",
          "mediaKeyTimestamp",
          "scanLengths",
          "scansSidecar",
          "size",
          "staticUrl",
          "thumbnailDirectPath",
          "thumbnailEncSha256",
          "thumbnailSha256",
          "url",
          "height",
          "width",
        ].forEach(function (t) {
          e[t] = void 0;
        }),
        "metadataUrl" in e &&
          e.metadataUrl != null &&
          o(
            "WAWebChannelVideoServerTranscodeGating",
          ).isChannelVideoServerTranscodeUploadEnabled() &&
          (e.metadataUrl = void 0));
    }
    function b(e, t, n, r) {
      t &&
        (v(e, t, n, r),
        o("WAWebE2EProtoParserForCtwaContext").parseCtwaContextProto(e, t));
    }
    function v(e, t, n, r) {
      var a = t.quotedMessage,
        i = t.mentionedJid,
        l = t.groupMentions;
      if (a != null && a.reactionMessage == null) {
        var s = e.selectedCarouselCardIndex != null;
        e.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
          quotedMsg: a,
          msgContext: n,
          isCarouselCardReply: s,
          contextInfo: t,
          targetMessageKey: e.id,
        });
      }
      (o("WAWebQuestionsProtoUtils").maybeAddQuestionReplyQuotedMessage(
        e,
        t.questionReplyQuotedMessage,
      ),
        e.quotedMsg &&
          e.quotedMsg.type === "payment" &&
          r &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "parseContextInfoProto: payment not supported",
              ])),
          ),
        (e.quotedStanzaID = t.stanzaId),
        (e.quotedParticipant = o("WAWebDecodeJid").decodeJid(t.participant)),
        (e.quotedRemoteJid = o("WAWebDecodeJid").decodeJid(t.remoteJid)),
        (e.quotedGroupSubject = o("WAWebDecodeJid").decodeJid(t.groupSubject)),
        (e.quotedParentGroupJid = o("WAWebDecodeJid").decodeJid(
          t.parentGroupJid,
        )),
        (e.quotedType = t.quotedType),
        (e.mentionedJidList = Array.isArray(i)
          ? i.map(o("WAWebDecodeJid").decodeJid)
          : i),
        (e.groupMentions = Array.isArray(l)
          ? l.map(function (e) {
              return {
                groupSubject: e.groupSubject,
                groupJid: o("WAWebDecodeJid").decodeJid(e.groupJid),
              };
            })
          : l),
        (e.isForwarded = t.isForwarded),
        (e.isQuestion = t.isQuestion),
        (e.isSpoiler = t.isSpoiler),
        (e.forwardingScore = t.forwardingScore),
        (e.nonJidMentions =
          t.nonJidMentions != null &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_mention_everyone_receiver_web",
          )
            ? t.nonJidMentions
            : void 0),
        t.expiration != null && (e.ephemeralDuration = t.expiration),
        t.ephemeralSettingTimestamp != null &&
          (e.ephemeralSettingTimestamp = t.ephemeralSettingTimestamp),
        t.ephemeralSharedSecret != null &&
          (e.ephemeralSharedSecret = t.ephemeralSharedSecret));
      var m = t.disappearingMode;
      if (m != null) {
        var p = o(
          "WAWebDisappearingModeProtoUtils",
        ).protoToDisappearingModeInitiator(e, m);
        p != null && (e.disappearingModeInitiator = p);
        var _ = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
          e,
          m,
        );
        _ != null &&
          ((e.disappearingModeTrigger = _.disappearingModeTrigger),
          (e.disappearingModeInitiatedByMe = _.initiatedByMe));
      }
      if (
        (t.actionLink != null && (e.actionLink = t.actionLink),
        t.afterReadDuration != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          (e.afterReadDuration = t.afterReadDuration),
        t.smbClientCampaignId != null &&
          (e.smbClientCampaignId = t.smbClientCampaignId),
        t.forwardedNewsletterMessageInfo != null)
      )
        try {
          e.forwardedNewsletterMessageInfo = o(
            "WAWebParseForwardedNewsletterMessageInfo",
          ).parseForwardedNewsletterMessageInfo(
            t.forwardedNewsletterMessageInfo,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "parseContextInfoProto: failed to parse forwarded newsletter info",
                ])),
            )
            .sendLogs("Failed to parse Forwarded Newsletter Message Info.");
        }
      var f = t.forwardedAiBotMessageInfo;
      if (f != null && o("WAWebBotBaseGating").isAiForwardAttributionEnabled())
        try {
          e.forwardedAiBotMessageInfo = o(
            "WAWebParseForwardedAiBotMessageInfo",
          ).parseForwardedAiBotMessageInfo(f);
        } catch (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "parseContextInfoProto: failed to parse forwarded AI bot message info",
                ])),
            )
            .sendLogs("Failed to parse Forwarded AI Bot Message Info.");
        }
      (o(
        "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
      ).updateMmSignalSharingExpirationWindow(e, t),
        t.statusAttributions != null &&
          t.statusAttributions.length > 0 &&
          o(
            "WAWebStatusGatingUtils",
          ).isStatusCrosspostingAttributionsEnabled() &&
          (e.statusAttributions = t.statusAttributions),
        t.statusAudienceMetadata != null &&
          o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() &&
          (e.statusAudienceMetadata = t.statusAudienceMetadata));
      var g = t.featureEligibilities;
      ((g == null ? void 0 : g.cannotBeRanked) != null &&
        (e.cannotBeRanked = g.cannotBeRanked),
        (g == null ? void 0 : g.canBeReshared) != null &&
          (e.canBeReshared = g.canBeReshared));
    }
    function S(e, t, n) {
      var r = o("WAWebDecodeJid").decodeJid(t.destinationJid);
      ((e.id.remote = r),
        (e.to = r),
        Object.assign(
          e,
          h({ messageProtobuf: t.message, message: e, msgContext: n }),
        ));
    }
    function R(e) {
      var t = e.editAttr,
        n = e.futureproofMessage,
        o = e.message,
        a = e.msgContext,
        i = e.topLevelMessageContextInfo,
        l = r("WANullthrows")(n.message),
        s = [],
        u =
          i == null
            ? babelHelpers.extends({}, l.messageContextInfo, { threadId: s })
            : babelHelpers.extends({}, l.messageContextInfo, i, {
                threadId: s,
              });
      Object.assign(
        o,
        h({
          messageProtobuf: babelHelpers.extends({}, l, {
            messageContextInfo: u,
          }),
          message: o,
          msgContext: a,
          editAttr: t,
        }),
      );
    }
    function L(e, t) {
      e.type = o("WAWebMsgType").MSG_TYPE.CALL_LOG;
      var n = !!t.isVideo;
      t.participants.length > 1
        ? (e.subtype = n
            ? o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissGroupVideo
            : o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissGroup)
        : (e.subtype = n
            ? o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MissVideo
            : o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Miss);
    }
    function E(e, t, n) {
      (t == null ? void 0 : t.message) != null
        ? ((e.isGroupStatus = !0),
          Object.assign(
            e,
            h({ messageProtobuf: t.message, message: e, msgContext: n }),
          ))
        : o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[parseGroupStatusMessageV2] Unable to parse possible group status message",
                ])),
            )
            .sendLogs("parse-group-status-message-skipped");
    }
    function k(e, t, n) {
      var a, i, l, s, u, c, d;
      if (t) {
        t.messageSecret != null &&
          (e.messageSecret = new Uint8Array(t.messageSecret));
        var m =
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          !(
            ((a = e.id) != null && (a = a.participant) != null && a.isBot()) ||
            ((i = e.id) != null && (i = i.remote) != null && i.isBot())
          ) &&
          (t == null || (l = t.botMetadata) == null
            ? void 0
            : l.botGroupMetadata) != null;
        if (
          ((((s = e.id) != null && (s = s.participant) != null && s.isBot()) ||
            ((u = e.id) != null && (u = u.remote) != null && u.isBot()) ||
            m) &&
            o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(e, t, m),
          (t == null || (c = t.botMetadata) == null
            ? void 0
            : c.verificationMetadata) != null &&
            (e.botSignatureVerificationMetadata =
              t.botMetadata.verificationMetadata),
          r("WAWebWid").isCAPISupportAccount(
            e == null || (d = e.id) == null ? void 0 : d.remote,
          ) && (t == null ? void 0 : t.supportPayload) != null)
        ) {
          var h = JSON.parse(t.supportPayload);
          if (
            (h.should_show_system_message != null &&
              (e.shouldShowSupportAISystemMessage =
                h.should_show_system_message),
            h.is_ai_message != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (e.isSupportAIMessage = h.is_ai_message),
            Array.isArray(h.citation_items) &&
              h.citation_items.length > 0 &&
              (e.supportCitations = h.citation_items.map(function (e) {
                return {
                  title: e.title,
                  subtitle: e.subtitle,
                  cmsId: e.cms_id,
                  imageUrl: e.image_url,
                };
              })),
            h.should_upload_client_logs === !0 &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled())
          )
            if (h.ticket_id != null && h.ticket_id !== "no_ticket_created") {
              var y = 864e5;
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Uploading logs for ticketId=",
                    "",
                  ])),
                h.ticket_id,
              );
              var C = {
                reason: o("WAWebCrashlog").SERVER_REQUESTED,
                immediate: !0,
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
                ticketId: h.ticket_id,
                fromTimestamp: Date.now() - y,
              };
              o("WAWebCrashlog")
                .upload(C)
                .then(function (e) {
                  e == null
                    ? o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Logs upload failed for ticketId=",
                            "",
                          ])),
                        h.ticket_id,
                      )
                    : o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Logs upload complete for ticketId=",
                            ", logsId=",
                            "",
                          ])),
                        h.ticket_id,
                        e,
                      );
                });
            } else
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Could not upload logs. No ticketId was provided.",
                  ])),
              );
        }
        (!r("isArrayNullOrEmpty")(t.threadId) &&
          o("WAWebThreadsGating").isThreadsInfraEnabled() &&
          e.id != null &&
          o("WAWebThreadsMetadataProtoUtils").parseThreadsMetadataProto(e, t),
          o("WAWebThreadsMetadataProtoUtils").maybeParseAiThreadInfoFromProto(
            e,
            t,
          ),
          o(
            "WAWebBotModeSelectionProtoUtils",
          ).parseBotModeSelectionMetadataProto(e, t),
          o(
            "WAWebThreadsMetadataProtoUtils",
          ).maybeAddHistoricalAiThreadForMetaAi(e, n));
      }
    }
    ((l.parseMsgProto = h),
      (l.parseContextInfo = b),
      (l.parseContextInfoProto = v),
      (l.parseMessageContextInfoProto = k));
  },
  98,
);
