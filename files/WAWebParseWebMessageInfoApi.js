__d(
  "WAWebParseWebMessageInfoApi",
  [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebEphemeralKeepInChat",
    "WAWebGroupHistoryProtoUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
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
        p,
        _,
        f = t.key,
        g = o("WAWebDecodeJid").decodeJidAndValidate(f.remoteJid, "remoteJid"),
        h = o("WAWebParseWebMessageInfoUtils").getMeJid(t),
        y = f.fromMe === !0 ? g : h,
        C = f.fromMe === !0 ? h : g,
        b = o("WAWebParseWebMessageInfoUtils").buildMsgKey(t, f);
      if (b != null) {
        var v = b.author,
          S = b.msgKey;
        if (y === "broadcast") {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: broadcast",
              ])),
          );
          return;
        }
        var R = !1;
        R = t.reactions.some(function (e) {
          return e.text != null;
        });
        var L = {
          id: S,
          from: C,
          to: y,
          participant: S.participant,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          t: (a = t.messageTimestamp) != null ? a : 0,
          ack: t.status - 1,
          author: v,
          invis: !!t.ignore,
          star: !!t.starred,
          broadcast: f.fromMe === !0 && t.broadcast,
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
          hasReaction: R,
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
            ((p = t.premiumMessageInfo) == null
              ? void 0
              : p.serverCampaignId) != null
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
          hsmTag: (_ = t.hsmTag) != null ? _ : void 0,
        };
        if (
          (r("WAWebWid").isCAPISupportAccount(S.remote) &&
            (t.isSupportAiMessage != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (L.isSupportAIMessage = t.isSupportAiMessage),
            t.supportAiCitations != null &&
              t.supportAiCitations.length > 0 &&
              (L.supportCitations = t.supportAiCitations)),
          o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled())
        ) {
          var E;
          L.reportingTokenInfo =
            t.reportingTokenInfo != null
              ? {
                  reportingTag:
                    (E = t.reportingTokenInfo) == null
                      ? void 0
                      : E.reportingTag,
                  version: o("WAWebReportingTokenConstants")
                    .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                }
              : null;
        }
        if (t.keepInChat != null)
          try {
            var k = o(
              "WAWebEphemeralKeepInChat",
            ).parseKeepInChatHistorySyncMessage(t);
            k != null && Object.assign(L, k);
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseWebMessageInfo: KIC fields are malformed",
                ])),
            );
          }
        var I = o(
          "WAWebGroupHistoryProtoUtils",
        ).getGroupHistoryIndividualMessageInfoMetadataFromProto(
          t.groupHistoryIndividualMessageInfo,
        );
        if (
          (I != null && (L.groupHistoryIndividualMessageInfo = I), t.message)
        ) {
          var T = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: t.message,
            message: L,
            msgContext: "history",
            paymentInfo: t.paymentInfo,
            finalLocation: t.finalLiveLocation,
            quotedPaymentInfo: t.quotedPaymentInfo,
            bizSource: L.bizSource,
            historyLidPnMappings: n,
          });
          return (m(t, T), T);
        }
        o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).parseLimitSharingFromProtocolHistorySyncMessage(t, L);
        var D = o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, L);
        return (d(D), D);
      }
    }
    function d(e) {
      if (
        !(
          e == null ||
          e.subtype !==
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated
        )
      ) {
        var t = e.id;
        t == null ||
          typeof t.id != "string" ||
          t.id.startsWith("SYSSCHED") ||
          (e.id = new (r("WAWebMsgKey"))({
            fromMe: t.fromMe === !0,
            remote: t.remote,
            id: "SYSSCHED" + t.id,
            participant: t.participant,
          }));
      }
    }
    function m(e, t) {
      var n,
        a,
        i = e.scheduledMessageMetadata;
      if (!(i == null || t == null)) {
        var l = i.revealKey,
          s = i.revealKeyId,
          c = i.scheduledTime;
        if (!(l == null || s == null || c == null)) {
          var d = (n = t.id) == null ? void 0 : n.remote,
            m = (a = t.id) == null ? void 0 : a.id;
          if (!(d == null || m == null)) {
            var _ = o("WAWebWidToJid").widToChatJid(d),
              f = typeof t.body == "string" ? t.body : null,
              g = o("WATimeUtils").castToUnixTime(Number(c)),
              h = new Uint8Array(l);
            (p({
              msgId: m,
              chatId: _,
              revealKeyId: s,
              revealKey: h,
              scheduledTimestampS: g,
              body: f,
            }).catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][history_sync] scheduled message not persisted; inline row is hidden but scheduled-messages list will be empty for msg ",
                      "",
                    ])),
                  m,
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
              e.body != null && e.body !== ""
                ? { conversation: e.body }
                : { conversation: "" },
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
        _.apply(this, arguments)
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
