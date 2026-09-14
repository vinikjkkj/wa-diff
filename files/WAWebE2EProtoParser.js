__d(
  "WAWebE2EProtoParser",
  [
    "WALogger",
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
    "WAWebExperienceIdReceive",
    "WAWebFutureproofProtoUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationValidation",
    "WAWebMessagePluginParseProtobuf",
    "WAWebMsgAIProvenance",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebParseForwardedAiBotMessageInfo",
    "WAWebParseForwardedNewsletterMessageInfo",
    "WAWebProtobufsE2E.pb",
    "WAWebQuestionsProtoUtils",
    "WAWebQuotedMessageProtoUtils",
    "WAWebStatusGatingUtils",
    "WAWebThreadsMetadataProtoUtils",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebViewMode.flow",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "isArrayNullOrEmpty",
    "justknobx",
    "nullthrows",
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
      b,
      v = 3;
    function S(t) {
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
        C = R({
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
      return (
        T({ contextInfo: b, message: v, msgContext: p, quotedPaymentInfo: g }),
        M(v, y, p),
        v
      );
    }
    function R(e) {
      var t = e.bizInfo,
        n = e.bizSource,
        r = e.depth,
        a = r === void 0 ? 0 : r,
        i = e.editAttr,
        l = e.finalLocation,
        c = e.historyLidPnMappings,
        d = e.message,
        m = e.messageProtobuf,
        p = e.msgBotInfo,
        _ = e.msgContext,
        f = e.msgMeta,
        g = e.paymentInfo,
        h = e.quotedPaymentInfo,
        y = e.rcat,
        C = m.callLogMesssage,
        b = o(
          "WAWebAssociationProtoUtils",
        ).validateMessageAssociationInMessageContextInfo(
          d,
          m.messageContextInfo,
          _,
          c,
        ),
        v =
          b != null
            ? o(
                "WAWebAssociationProtoUtils",
              ).getValidatedAssociationFieldsFromProto(b, d, _)
            : null;
      if (
        v != null &&
        v.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN
      )
        return {
          contextInfo: null,
          msgData: L({
            baseMessage: d,
            associationType: v.associationType,
            parentMsgKey: v.associationParentMsgKey,
            viewMode: v.viewMode,
          }),
        };
      var S = o("WAWebMessagePluginParseProtobuf").parseProtobuf({
        messageProtobuf: m,
        baseMessage: d,
        msgContext: _,
        paymentInfo: g,
        quotedPaymentInfo: h,
        editAttr: i,
        bizInfo: t,
        finalLocation: l,
        rcat: y,
        bizSource: n,
        msgMeta: f,
        messageAssociation: b,
        msgBotInfo: p,
      });
      if (S) {
        var R =
          (S == null ? void 0 : S.msgData.type) ===
            o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          (S == null ? void 0 : S.msgData.futureproofType) != null;
        if (
          !R &&
          (o("WAWebQuestionsProtoUtils").shouldFutureProofQuestionMessage(S) ||
            E(S))
        ) {
          var T = d,
            D = babelHelpers.extends({}, T, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: "unknown",
              subtype: void 0,
            });
          return { contextInfo: null, msgData: D };
        }
        if (b != null) {
          var M = o(
            "WAWebAssociationProtoUtils",
          ).convertAssociationTypeFromProtoToClientSupportedAssociationType(
            b.associationType,
          );
          if (
            !R &&
            M !==
              o("WAWebMessageAssociation.flow").MessageAssociationType
                .BOT_PLUGIN &&
            (S == null ? void 0 : S.msgData.associationType) !== M &&
            !k(m)
          ) {
            var w;
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
                  S == null ? void 0 : S.msgData.type,
                  M,
                  S == null ? void 0 : S.msgData.associationType,
                  i,
                  m == null || (w = m.protocolMessage) == null
                    ? void 0
                    : w.type,
                  f == null ? void 0 : f.type,
                  f == null ? void 0 : f.pollType,
                  f == null ? void 0 : f.eventType,
                  p == null ? void 0 : p.botEditType,
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
            d,
            m,
            _,
          ),
          I(S.msgData),
          S
        );
      }
      var A = m.deviceSentMessage;
      (A && x(d, A, _, a), C && P(d, C));
      var F = m.groupStatusMessageV2;
      F != null && N(d, F, _, a);
      var O = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(m);
      if (O != null)
        $({
          depth: a,
          message: d,
          futureproofMessage: O,
          msgContext: _,
          topLevelMessageContextInfo: m.messageContextInfo,
          editAttr: i,
        });
      else if (v != null && m.associatedChildMessage != null)
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "parseMsgProto: unopened associated child wrapper, associationType: ",
                  ", msgContext: ",
                  ", viewMode: ",
                  "",
                ])),
              v.associationType,
              _,
              v.viewMode,
            )
            .tags("messaging")
            .sendLogs("parseMsgProto-unopened-associated-child", {
              sampling: 0.01,
            }),
          {
            contextInfo: null,
            msgData: L({
              baseMessage: d,
              associationType: o("WAWebMessageAssociation.flow")
                .MessageAssociationType.UNKNOWN,
              parentMsgKey: v.associationParentMsgKey,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            }),
          }
        );
      return { contextInfo: null, msgData: d };
    }
    function L(e) {
      var t = e.associationType,
        n = e.baseMessage,
        r = e.parentMsgKey,
        a = e.viewMode;
      return babelHelpers.extends({}, n, {
        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
        kind: "associatedUnknown",
        associationType: t,
        parentMsgKey: r,
        viewMode: a,
      });
    }
    function E(e) {
      var t = e.msgData;
      return r("WAWebNewsletterIsNewsletterMsg")(t)
        ? t.isFromTemplate === !0 ||
            t.hydratedButtons != null ||
            t.isDynamicReplyButtonsMsg === !0 ||
            t.dynamicReplyButtons != null ||
            t.carouselCardsParsed != null
        : !1;
    }
    function k(e) {
      var t, n;
      return (
        (e == null || (t = e.protocolMessage) == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT ||
        (e == null || (n = e.secretEncryptedMessage) == null
          ? void 0
          : n.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .MESSAGE_EDIT
      );
    }
    function I(e) {
      e.isViewOnce === !0 &&
        ([
          "body",
          "caption",
          "dashManifestUrl",
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
    function T(e) {
      var t = e.contextInfo,
        n = e.message,
        r = e.msgContext,
        a = e.quotedPaymentInfo;
      t &&
        (D(n, t, r, a),
        o("WAWebE2EProtoParserForCtwaContext").parseCtwaContextProto(n, t));
    }
    function D(e, t, n, a) {
      var i = t.quotedMessage,
        l = t.mentionedJid,
        s = t.groupMentions;
      if (i != null && i.reactionMessage == null) {
        var u = e.selectedCarouselCardIndex != null;
        e.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
          quotedMsg: i,
          msgContext: n,
          isCarouselCardReply: u,
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
          a &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
        (e.mentionedJidList = Array.isArray(l)
          ? l.map(o("WAWebDecodeJid").decodeJid)
          : l),
        (e.groupMentions = Array.isArray(s)
          ? s.map(function (e) {
              return {
                groupSubject: e.groupSubject,
                groupJid: o("WAWebDecodeJid").decodeJid(e.groupJid),
              };
            })
          : s),
        (e.isForwarded = t.isForwarded),
        (e.isQuestion = t.isQuestion),
        (e.isSpoiler = t.isSpoiler),
        (e.forwardingScore = t.forwardingScore),
        o("WAWebExperienceIdReceive").maybeStampExperienceIds(e, t, n),
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
      var p = t.disappearingMode;
      if (p != null) {
        var _ = o(
          "WAWebDisappearingModeProtoUtils",
        ).protoToDisappearingModeInitiator(e, p);
        _ != null && (e.disappearingModeInitiator = _);
        var f = o("WAWebDisappearingModeProtoUtils").protoToDisappearingMode(
          e,
          p,
        );
        f != null &&
          ((e.disappearingModeTrigger = f.disappearingModeTrigger),
          (e.disappearingModeInitiatedByMe = f.initiatedByMe));
      }
      if (
        (t.actionLink != null && (e.actionLink = t.actionLink),
        t.afterReadDuration != null &&
          o("WAWebAfterReadUtils").isAfterReadEnabled() &&
          (e.afterReadDuration = t.afterReadDuration),
        t.smbClientCampaignId != null &&
          (e.smbClientCampaignId = t.smbClientCampaignId),
        r("WAWebNewsletterIsNewsletterMsg")(e) &&
          o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled())
      ) {
        var g = o("WAWebMsgAIProvenance").aiProvenanceFromProto(t.aiProvenance);
        g != null && (e.aiProvenance = g);
      }
      if (t.forwardedNewsletterMessageInfo != null)
        try {
          e.forwardedNewsletterMessageInfo = o(
            "WAWebParseForwardedNewsletterMessageInfo",
          ).parseForwardedNewsletterMessageInfo(
            t.forwardedNewsletterMessageInfo,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "parseContextInfoProto: failed to parse forwarded newsletter info",
                ])),
            )
            .sendLogs("Failed to parse Forwarded Newsletter Message Info.");
        }
      var h = t.forwardedAiBotMessageInfo;
      if (h != null && o("WAWebBotBaseGating").isAiForwardAttributionEnabled())
        try {
          e.forwardedAiBotMessageInfo = o(
            "WAWebParseForwardedAiBotMessageInfo",
          ).parseForwardedAiBotMessageInfo(h);
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
          (e.statusAttributions = t.statusAttributions),
        t.statusAudienceMetadata != null &&
          o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled() &&
          (e.statusAudienceMetadata = t.statusAudienceMetadata));
      var y = t.featureEligibilities;
      ((y == null ? void 0 : y.cannotBeRanked) != null &&
        (e.cannotBeRanked = y.cannotBeRanked),
        (y == null ? void 0 : y.canBeReshared) != null &&
          (e.canBeReshared = y.canBeReshared));
    }
    function x(e, t, n, a) {
      if ((a === void 0 && (a = 0), r("justknobx")._("2451") && a >= v)) {
        o("WALogger")
          .WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "parseDeviceSentMessage: nesting depth exceeded limit of ",
                "",
              ])),
            v,
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
          S({
            messageProtobuf: t.message,
            message: e,
            msgContext: n,
            depth: a + 1,
          }),
        ));
    }
    function $(e) {
      var t = e.depth,
        n = t === void 0 ? 0 : t,
        a = e.editAttr,
        i = e.futureproofMessage,
        l = e.message,
        s = e.msgContext,
        u = e.topLevelMessageContextInfo;
      if (r("justknobx")._("2451") && n >= v) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "parseFutureproofMessageProto: nesting depth exceeded limit of ",
                "",
              ])),
            v,
          )
          .tags("messaging")
          .sendLogs("parse-futureproof-msg-max-depth");
        return;
      }
      var c = r("nullthrows")(i.message),
        d = [],
        m =
          u == null
            ? babelHelpers.extends({}, c.messageContextInfo, { threadId: d })
            : babelHelpers.extends({}, c.messageContextInfo, u, {
                threadId: d,
              });
      Object.assign(
        l,
        S({
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
    function P(e, t) {
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
    function N(e, t, n, a) {
      if ((a === void 0 && (a = 0), r("justknobx")._("2451") && a >= v)) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "parseGroupStatusMessageV2: nesting depth exceeded limit of ",
                "",
              ])),
            v,
          )
          .tags("messaging")
          .sendLogs("parse-group-status-msg-max-depth");
        return;
      }
      (t == null ? void 0 : t.message) != null
        ? ((e.isGroupStatus = !0),
          Object.assign(
            e,
            S({
              messageProtobuf: t.message,
              message: e,
              msgContext: n,
              depth: a + 1,
            }),
          ))
        : o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[parseGroupStatusMessageV2] Unable to parse possible group status message",
                ])),
            )
            .sendLogs("parse-group-status-message-skipped");
    }
    function M(e, t, n) {
      var a, i, l, s, u, c, d;
      if (t) {
        t.messageSecret != null &&
          n !== "quoted" &&
          n !== "history_quoted" &&
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "InAppSupport: Logs upload failed for ticketId=",
                            "",
                          ])),
                        p.ticket_id,
                      )
                    : o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.parseMsgProto = S),
      (l.parseContextInfo = T),
      (l.parseContextInfoProto = D),
      (l.parseMessageContextInfoProto = M));
  },
  98,
);
