__d(
  "WAWebParseWebMessageInfoApi",
  [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebBotTypes",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebEphemeralKeepInChat",
    "WAWebEphemeralityTypes",
    "WAWebGroupHistoryProtoUtils",
    "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebParseWebMessageInfoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConstants",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgStore",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      var a,
        i,
        l,
        u,
        c,
        m,
        p,
        _ = t.key,
        f = o("WAWebDecodeJid").decodeJidAndValidate(_.remoteJid, "remoteJid"),
        g = o("WAWebParseWebMessageInfoUtils").getMeJid(t),
        h = _.fromMe === !0 ? f : g,
        y = _.fromMe === !0 ? g : f,
        C = o("WAWebParseWebMessageInfoUtils").buildMsgKey(t, _);
      if (C != null) {
        var b = C.author,
          v = C.msgKey;
        if (h === "broadcast") {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: broadcast",
              ])),
          );
          return;
        }
        var S = !1;
        S = t.reactions.some(function (e) {
          return e.text != null;
        });
        var R = {
          id: v,
          from: y,
          to: h,
          participant: v.participant,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          t: (a = t.messageTimestamp) != null ? a : 0,
          ack: t.status - 1,
          author: b,
          invis: !!t.ignore,
          star: !!t.starred,
          broadcast: _.fromMe === !0 && t.broadcast,
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
          hasReaction: S,
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
            ((m = t.premiumMessageInfo) == null
              ? void 0
              : m.serverCampaignId) != null
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
          hsmTag: (p = t.hsmTag) != null ? p : void 0,
        };
        if (
          (r("WAWebWid").isCAPISupportAccount(v.remote) &&
            (t.isSupportAiMessage != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (R.isSupportAIMessage = t.isSupportAiMessage),
            t.supportAiCitations != null &&
              t.supportAiCitations.length > 0 &&
              (R.supportCitations = t.supportAiCitations)),
          o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled())
        ) {
          var L;
          R.reportingTokenInfo =
            t.reportingTokenInfo != null
              ? {
                  reportingTag:
                    (L = t.reportingTokenInfo) == null
                      ? void 0
                      : L.reportingTag,
                  version: o("WAWebReportingTokenConstants")
                    .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                }
              : null;
        }
        if (t.keepInChat != null)
          try {
            var E = o(
              "WAWebEphemeralKeepInChat",
            ).parseKeepInChatHistorySyncMessage(t);
            E != null && Object.assign(R, E);
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseWebMessageInfo: KIC fields are malformed",
                ])),
            );
          }
        var k = o(
          "WAWebGroupHistoryProtoUtils",
        ).getGroupHistoryIndividualMessageInfoMetadataFromProto(
          t.groupHistoryIndividualMessageInfo,
        );
        if (
          (k != null && (R.groupHistoryIndividualMessageInfo = k), t.message)
        ) {
          var I = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: t.message,
            message: R,
            msgContext: "history",
            paymentInfo: t.paymentInfo,
            finalLocation: t.finalLiveLocation,
            quotedPaymentInfo: t.quotedPaymentInfo,
            bizSource: R.bizSource,
            historyLidPnMappings: n,
          });
          return (d(t, I), I);
        }
        return (
          o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).parseLimitSharingFromProtocolHistorySyncMessage(t, R),
          o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, R)
        );
      }
    }
    function d(e, t) {
      var n,
        a,
        i,
        l,
        s = e.scheduledMessageMetadata;
      if (!(s == null || t == null)) {
        var c = s.revealKey,
          d = s.revealKeyId,
          p = s.scheduledTime;
        if (!(c == null || d == null || p == null)) {
          var _ = (n = t.id) == null ? void 0 : n.remote,
            f = (a = t.id) == null ? void 0 : a.id;
          if (!(_ == null || f == null)) {
            var g = o("WAWebWidToJid").widToChatJid(_),
              h = typeof t.body == "string" ? t.body : null,
              y = o("WATimeUtils").castToUnixTime(Number(p)),
              C = new Uint8Array(c),
              b = {
                ephemeralDuration:
                  typeof t.ephemeralDuration == "number"
                    ? t.ephemeralDuration
                    : null,
                ephemeralSettingTimestamp:
                  typeof t.ephemeralSettingTimestamp == "number"
                    ? t.ephemeralSettingTimestamp
                    : null,
                afterReadDuration:
                  typeof t.afterReadDuration == "number"
                    ? t.afterReadDuration
                    : null,
                disappearingModeInitiator:
                  typeof t.disappearingModeInitiator == "string" &&
                  (i = o(
                    "WAWebEphemeralityTypes",
                  ).DisappearingModeInitiator.cast(
                    t.disappearingModeInitiator,
                  )) != null
                    ? i
                    : null,
                disappearingModeTrigger:
                  typeof t.disappearingModeTrigger == "string" &&
                  (l = o("WAWebEphemeralityTypes").DisappearingModeTrigger.cast(
                    t.disappearingModeTrigger,
                  )) != null
                    ? l
                    : null,
                disappearingModeInitiatedByMe:
                  typeof t.disappearingModeInitiatedByMe == "boolean"
                    ? t.disappearingModeInitiatedByMe
                    : null,
              };
            (m({
              msgId: f,
              chatId: g,
              revealKeyId: d,
              revealKey: C,
              scheduledTimestampS: y,
              body: h,
              ephemeral: b,
            }).catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][history_sync] persist failed msg=",
                      "",
                    ])),
                  f,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-history-sync-persist-failed");
            }),
              (t.viewMode =
                o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE));
          }
        }
      }
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
            ).buildHistorySyncInnerProto(e.body, e.ephemeral),
            n = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t)
              .readByteArrayView(),
            a = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(
              n,
              e.revealKey,
            ),
            i = a.encIv,
            l = a.encPayload,
            s = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
              msgId: e.msgId,
              chatId: e.chatId,
              revealKeyId: e.revealKeyId,
              revealKey: e.revealKey,
              scheduledTimestampS: e.scheduledTimestampS,
              encPayload: new Uint8Array(l),
              encIv: new Uint8Array(i),
            });
          if (!s) throw r("err")("per-chat scheduled message limit reached");
        })),
        p.apply(this, arguments)
      );
    }
    ((l.buildMsgKey = o("WAWebParseWebMessageInfoUtils").buildMsgKey),
      (l.parseMsgStubProto = o(
        "WAWebParseWebMessageInfoUtils",
      ).parseMsgStubProto),
      (l.parseWebMessageInfo = c));
  },
  98,
);
