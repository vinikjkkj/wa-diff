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
    "WAWebThreadsMetadataProtoUtils",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "isArrayNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = 3;
    function v(t) {
      var n = t.bizInfo,
        r = t.bizSource,
        a = t.depth,
        i = a === void 0 ? 0 : a,
        l = t.editAttr,
        s = t.finalLocation,
        u = t.historyLidPnMappings,
        c = t.message,
        d = t.messageProtobuf,
        m = t.msgBotInfo,
        p = t.msgContext,
        _ = t.msgMeta,
        f = t.paymentInfo,
        g = t.quotedPaymentInfo,
        h = t.rcat;
      d ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: not Message",
              ])),
          )
          .sendLogs("null-message");
      var y = d.messageContextInfo,
        C = S({
          messageProtobuf: d,
          message: c,
          msgContext: p,
          paymentInfo: f,
          finalLocation: s,
          quotedPaymentInfo: g,
          bizInfo: n,
          editAttr: l,
          rcat: h,
          bizSource: r,
          msgMeta: _,
          msgBotInfo: m,
          historyLidPnMappings: u,
          depth: i,
        }),
        b = C.contextInfo,
        v = C.msgData;
      return (L(v, b, p, g), x(v, y, p), v);
    }
    function S(e) {
      var t = e.bizInfo,
        n = e.bizSource,
        r = e.depth,
        a = r === void 0 ? 0 : r,
        i = e.editAttr,
        l = e.finalLocation,
        u = e.historyLidPnMappings,
        c = e.message,
        d = e.messageProtobuf,
        m = e.msgBotInfo,
        p = e.msgContext,
        _ = e.msgMeta,
        f = e.paymentInfo,
        g = e.quotedPaymentInfo,
        h = e.rcat,
        y = d.callLogMesssage,
        C = o(
          "WAWebAssociationProtoUtils",
        ).validateMessageAssociationInMessageContextInfo(
          c,
          d.messageContextInfo,
          p,
          u,
        );
      if (
        C != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        var b = o(
          "WAWebAssociationProtoUtils",
        ).getValidatedAssociationFieldsFromProto(C, c, p);
        if (
          b.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN
        ) {
          var v = c,
            S = babelHelpers.extends({}, v, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: "associatedUnknown",
              associationType: b.associationType,
              parentMsgKey: b.associationParentMsgKey,
              viewMode: b.viewMode,
            });
          return { contextInfo: null, msgData: S };
        }
      }
      var L = o("WAWebMessagePluginParseProtobuf").parseProtobuf({
        messageProtobuf: d,
        baseMessage: c,
        msgContext: p,
        paymentInfo: f,
        quotedPaymentInfo: g,
        editAttr: i,
        bizInfo: t,
        finalLocation: l,
        rcat: h,
        bizSource: n,
        msgMeta: _,
        messageAssociation: C,
        msgBotInfo: m,
      });
      if (L) {
        var E =
          (L == null ? void 0 : L.msgData.type) ===
            o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          (L == null ? void 0 : L.msgData.futureproofType) != null;
        if (
          !E &&
          o("WAWebQuestionsProtoUtils").shouldFutureProofQuestionMessage(L)
        ) {
          var x = c,
            $ = babelHelpers.extends({}, x, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: "unknown",
              subtype: void 0,
            });
          return { contextInfo: null, msgData: $ };
        }
        if (C != null) {
          var P,
            N = o(
              "WAWebAssociationProtoUtils",
            ).convertAssociationTypeFromProtoToClientSupportedAssociationType(
              C.associationType,
            );
          if (
            !E &&
            N !==
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .BOT_PLUGIN &&
            (L == null ? void 0 : L.msgData.associationType) !== N &&
            (d == null || (P = d.protocolMessage) == null ? void 0 : P.type) !==
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .MESSAGE_EDIT
          ) {
            var M;
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
                  L == null ? void 0 : L.msgData.type,
                  N,
                  L == null ? void 0 : L.msgData.associationType,
                  i,
                  d == null || (M = d.protocolMessage) == null
                    ? void 0
                    : M.type,
                  _ == null ? void 0 : _.type,
                  _ == null ? void 0 : _.pollType,
                  _ == null ? void 0 : _.eventType,
                  m == null ? void 0 : m.botEditType,
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
            c,
            d,
            p,
          ),
          R(L.msgData),
          L
        );
      }
      var w = d.deviceSentMessage;
      (w && k(c, w, p, a), y && T(c, y));
      var A = d.groupStatusMessageV2;
      A != null && D(c, A, p, a);
      var F = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(d);
      return (
        F != null &&
          I({
            depth: a,
            message: c,
            futureproofMessage: F,
            msgContext: p,
            topLevelMessageContextInfo: d.messageContextInfo,
            editAttr: i,
          }),
        { contextInfo: null, msgData: c }
      );
    }
    function R(e) {
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
    function L(e, t, n, r) {
      t &&
        (E(e, t, n, r),
        o("WAWebE2EProtoParserForCtwaContext").parseCtwaContextProto(e, t));
    }
    function E(e, t, n, r) {
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
    function k(e, t, n, a) {
      if ((a === void 0 && (a = 0), r("justknobx")._("2451") && a >= b)) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "parseDeviceSentMessage: nesting depth exceeded limit of ",
                "",
              ])),
            b,
          )
          .tags("messaging")
          .sendLogs("parse-device-sent-msg-max-depth");
        return;
      }
      var i = o("WAWebDecodeJid").decodeJid(t.destinationJid);
      ((e.id.remote = i),
        (e.to = i),
        Object.assign(
          e,
          v({
            messageProtobuf: t.message,
            message: e,
            msgContext: n,
            depth: a + 1,
          }),
        ));
    }
    function I(e) {
      var t = e.depth,
        n = t === void 0 ? 0 : t,
        a = e.editAttr,
        i = e.futureproofMessage,
        l = e.message,
        s = e.msgContext,
        u = e.topLevelMessageContextInfo;
      if (r("justknobx")._("2451") && n >= b) {
        o("WALogger")
          .WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "parseFutureproofMessageProto: nesting depth exceeded limit of ",
                "",
              ])),
            b,
          )
          .tags("messaging")
          .sendLogs("parse-futureproof-msg-max-depth");
        return;
      }
      var c = r("WANullthrows")(i.message),
        d = [],
        m =
          u == null
            ? babelHelpers.extends({}, c.messageContextInfo, { threadId: d })
            : babelHelpers.extends({}, c.messageContextInfo, u, {
                threadId: d,
              });
      Object.assign(
        l,
        v({
          messageProtobuf: babelHelpers.extends({}, c, {
            messageContextInfo: m,
          }),
          message: l,
          msgContext: s,
          editAttr: a,
          depth: n + 1,
        }),
      );
    }
    function T(e, t) {
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
    function D(e, t, n, a) {
      if ((a === void 0 && (a = 0), r("justknobx")._("2451") && a >= b)) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "parseGroupStatusMessageV2: nesting depth exceeded limit of ",
                "",
              ])),
            b,
          )
          .tags("messaging")
          .sendLogs("parse-group-status-msg-max-depth");
        return;
      }
      (t == null ? void 0 : t.message) != null
        ? ((e.isGroupStatus = !0),
          Object.assign(
            e,
            v({
              messageProtobuf: t.message,
              message: e,
              msgContext: n,
              depth: a + 1,
            }),
          ))
        : o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[parseGroupStatusMessageV2] Unable to parse possible group status message",
                ])),
            )
            .sendLogs("parse-group-status-message-skipped");
    }
    function x(e, t, n) {
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
          var p = JSON.parse(t.supportPayload);
          if (
            (p.should_show_system_message != null &&
              (e.shouldShowSupportAISystemMessage =
                p.should_show_system_message),
            p.is_ai_message != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (e.isSupportAIMessage = p.is_ai_message),
            Array.isArray(p.citation_items) &&
              p.citation_items.length > 0 &&
              (e.supportCitations = p.citation_items.map(function (e) {
                return {
                  title: e.title,
                  subtitle: e.subtitle,
                  cmsId: e.cms_id,
                  imageUrl: e.image_url,
                };
              })),
            p.should_upload_client_logs === !0 &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled())
          )
            if (p.ticket_id != null && p.ticket_id !== "no_ticket_created") {
              var _ = 864e5;
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Uploading logs for ticketId=",
                    "",
                  ])),
                p.ticket_id,
              );
              var f = {
                reason: o("WAWebCrashlog").SERVER_REQUESTED,
                immediate: !0,
                isHighPri: !0,
                logType: o("WAWebCrashlog").LogType.SUPPORT,
                ticketId: p.ticket_id,
                fromTimestamp: Date.now() - _,
              };
              o("WAWebCrashlog")
                .upload(f)
                .then(function (e) {
                  e == null
                    ? o("WALogger").LOG(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Logs upload failed for ticketId=",
                            "",
                          ])),
                        p.ticket_id,
                      )
                    : o("WALogger").LOG(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Logs upload complete for ticketId=",
                            ", logsId=",
                            "",
                          ])),
                        p.ticket_id,
                        e,
                      );
                });
            } else
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Could not upload logs. No ticketId was provided.",
                  ])),
              );
        }
        (!r("isArrayNullOrEmpty")(t.threadId) &&
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
    ((l.parseMsgProto = v),
      (l.parseContextInfo = L),
      (l.parseContextInfoProto = E),
      (l.parseMessageContextInfoProto = x));
  },
  98,
);
