__d(
  "WAWebParseWebMessageInfoApi",
  [
    "WABase64",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebBotTypes",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebEphemeralKeepInChat",
    "WAWebGroupHistoryProtoUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebParseWebMessageInfoUtils",
    "WAWebReportingTokenConstants",
    "WAWebViewMode.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      var a,
        i,
        l,
        u,
        c,
        d,
        m,
        p = t.key,
        _ = o("WAWebDecodeJid").decodeJidAndValidate(p.remoteJid, "remoteJid"),
        f = o("WAWebParseWebMessageInfoUtils").getMeJid(t),
        g = p.fromMe === !0 ? _ : f,
        h = p.fromMe === !0 ? f : _,
        y = o("WAWebParseWebMessageInfoUtils").buildMsgKey(t, p);
      if (y != null) {
        var C = y.author,
          b = y.msgKey;
        if (g === "broadcast") {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: broadcast",
              ])),
          );
          return;
        }
        var v = !1;
        v = t.reactions.some(function (e) {
          return e.text != null;
        });
        var S = {
          id: b,
          from: h,
          to: g,
          participant: b.participant,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          t: (a = t.messageTimestamp) != null ? a : 0,
          ack: t.status - 1,
          author: C,
          invis: !!t.ignore,
          star: !!t.starred,
          broadcast: p.fromMe === !0 && t.broadcast,
          notifyName: t.pushName || "",
          encFilehash: t.mediaCiphertextSha256
            ? o("WABase64").encodeB64(t.mediaCiphertextSha256)
            : void 0,
          shareDuration: t.duration,
          labels: t.labels,
          ephemeralStartTimestamp: t.ephemeralStartTimestamp,
          expiredTimestamp: o("WAWebAfterReadUtils").isAfterReadEnabled()
            ? t.ephemeralExpirationTimestamp
            : null,
          ephemeralOutOfSync: t.ephemeralOutOfSync,
          bizPrivacyStatus: t.bizPrivacyStatus,
          verifiedBizName: t.verifiedBizName,
          reactions: t.reactions,
          hasReaction: v,
          agentId: t.agentId,
          revokeTimestamp: t.revokeMessageTimestamp,
          kicKey: void 0,
          kicState: void 0,
          pollInvalidated:
            ((i = t.pollAdditionalMetadata) == null
              ? void 0
              : i.pollInvalidated) === !0,
          eventInvalidated:
            ((l = t.eventAdditionalMetadata) == null ? void 0 : l.isStale) ===
            !0,
          replyCount: (u = t.commentMetadata) == null ? void 0 : u.replyCount,
          originalSelfAuthor: o("WAWebDecodeJid").decodeJidAndValidate(
            t.originalSelfAuthorUserJidString,
            "originalSelfAuthorUserJidString",
          ),
          kicTimestampMs: void 0,
          pinInChat: t.pinInChat,
          pmCampaignId:
            (c = t.premiumMessageInfo) == null ? void 0 : c.serverCampaignId,
          galaxyFlowDisabled:
            t.interactiveMessageAdditionalMetadata != null
              ? t.interactiveMessageAdditionalMetadata.isGalaxyFlowCompleted ===
                !0
              : void 0,
          bizSource:
            ((d = t.premiumMessageInfo) == null
              ? void 0
              : d.serverCampaignId) != null
              ? "smb_promo"
              : void 0,
          bizBotType:
            t.is1PBizBotMessage === !0
              ? o("WAWebBotTypes").BizBotType.BIZ_1P
              : null,
          botTargetSenderJid:
            t.botMessageInvokerJid != null
              ? o("WAWebDecodeJid").decodeJidAndValidate(
                  t.botMessageInvokerJid,
                  "botMessageInvokerJid",
                )
              : null,
          groupHistoryBundleInfo: t.groupHistoryBundleInfo,
          hsmTag: (m = t.hsmTag) != null ? m : void 0,
        };
        if (
          (r("WAWebWid").isCAPISupportAccount(b.remote) &&
            (t.isSupportAiMessage != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (S.isSupportAIMessage = t.isSupportAiMessage),
            t.supportAiCitations != null &&
              t.supportAiCitations.length > 0 &&
              (S.supportCitations = t.supportAiCitations)),
          o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled())
        ) {
          var R;
          S.reportingTokenInfo =
            t.reportingTokenInfo != null
              ? {
                  reportingTag:
                    (R = t.reportingTokenInfo) == null
                      ? void 0
                      : R.reportingTag,
                  version: o("WAWebReportingTokenConstants")
                    .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                }
              : null;
        }
        if (t.keepInChat != null)
          try {
            var L = o(
              "WAWebEphemeralKeepInChat",
            ).parseKeepInChatHistorySyncMessage(t);
            L != null && Object.assign(S, L);
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseWebMessageInfo: KIC fields are malformed",
                ])),
            );
          }
        var E = o(
          "WAWebGroupHistoryProtoUtils",
        ).getGroupHistoryIndividualMessageInfoMetadataFromProto(
          t.groupHistoryIndividualMessageInfo,
        );
        return (
          E != null && (S.groupHistoryIndividualMessageInfo = E),
          t.message
            ? o("WAWebE2EProtoParser").parseMsgProto({
                messageProtobuf: t.message,
                message: S,
                msgContext: "history",
                paymentInfo: t.paymentInfo,
                finalLocation: t.finalLiveLocation,
                quotedPaymentInfo: t.quotedPaymentInfo,
                bizSource: S.bizSource,
                historyLidPnMappings: n,
              })
            : (o(
                "WAWebParseLimitSharingHistorySyncProto",
              ).parseLimitSharingFromProtocolHistorySyncMessage(t, S),
              o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, S))
        );
      }
    }
    ((l.buildMsgKey = o("WAWebParseWebMessageInfoUtils").buildMsgKey),
      (l.parseMsgStubProto = o(
        "WAWebParseWebMessageInfoUtils",
      ).parseMsgStubProto),
      (l.parseWebMessageInfo = u));
  },
  98,
);
