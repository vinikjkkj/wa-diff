__d(
  "WAWebParseWebMessageInfoApi",
  [
    "WABase64",
    "WACryptoUtils",
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
    "WAWebGroupHistoryStoredHint",
    "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
    "WAWebLoggerUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgHistorySyncExtensions",
    "WAWebMsgType",
    "WAWebODS",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebParseWebMessageInfoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConstants",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 32,
      m = 0.01;
    function p(t, n) {
      var a,
        i,
        l,
        u,
        c,
        d,
        m,
        p = t.key,
        f = o("WAWebDecodeJid").decodeJidAndValidate(p.remoteJid, "remoteJid"),
        h = o("WAWebParseWebMessageInfoUtils").getMeJid(t),
        b = p.fromMe === !0 ? f : h,
        v = p.fromMe === !0 ? h : f,
        S = o("WAWebParseWebMessageInfoUtils").buildMsgKey(t, p);
      if (S != null) {
        var R = S.author,
          L = S.msgKey;
        if (b === "broadcast") {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "drop: broadcast",
              ])),
          );
          return;
        }
        var E = !1;
        E = t.reactions.some(function (e) {
          return e.text != null;
        });
        var k = babelHelpers.extends(
          {
            id: L,
            from: v,
            to: b,
            participant: L.participant,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            t: (a = t.messageTimestamp) != null ? a : 0,
            ack: t.status - 1,
            author: R,
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
            hasReaction: E,
            agentId: t.agentId,
            revokeTimestamp: t.revokeMessageTimestamp,
            kicKey: void 0,
            kicState: void 0,
            pollInvalidated:
              ((i = t.pollAdditionalMetadata) == null
                ? void 0
                : i.pollInvalidated) === !0,
          },
          o("WAWebMsgHistorySyncExtensions").parseHistorySyncMsgExtensions(t),
          {
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
                ? t.interactiveMessageAdditionalMetadata
                    .isGalaxyFlowCompleted === !0
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
          },
        );
        if (
          (r("WAWebWid").isCAPISupportAccount(L.remote) &&
            (t.isSupportAiMessage != null &&
              o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled() &&
              (k.isSupportAIMessage = t.isSupportAiMessage),
            t.supportAiCitations != null &&
              t.supportAiCitations.length > 0 &&
              (k.supportCitations = t.supportAiCitations)),
          o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled())
        ) {
          var I;
          k.reportingTokenInfo =
            t.reportingTokenInfo != null
              ? {
                  reportingTag:
                    (I = t.reportingTokenInfo) == null
                      ? void 0
                      : I.reportingTag,
                  version: o("WAWebReportingTokenConstants")
                    .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                }
              : null;
        }
        if (t.keepInChat != null)
          try {
            var T = o(
              "WAWebEphemeralKeepInChat",
            ).parseKeepInChatHistorySyncMessage(t);
            T != null && (k = babelHelpers.extends({}, k, T));
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseWebMessageInfo: KIC fields are malformed",
                ])),
            );
          }
        var D = o(
          "WAWebGroupHistoryProtoUtils",
        ).getGroupHistoryIndividualMessageInfoMetadataFromProto(
          t.groupHistoryIndividualMessageInfo,
        );
        D != null && (k.groupHistoryIndividualMessageInfo = D);
        var x = _(k, t);
        if (t.message) {
          var $ = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: t.message,
            message: k,
            msgContext: "history",
            paymentInfo: t.paymentInfo,
            finalLocation: t.finalLiveLocation,
            quotedPaymentInfo: t.quotedPaymentInfo,
            bizSource: k.bizSource,
            historyLidPnMappings: n,
          });
          return (y(t, $), C(t, $), g(t, $, x), $);
        }
        o(
          "WAWebParseLimitSharingHistorySyncProto",
        ).parseLimitSharingFromProtocolHistorySyncMessage(t, k);
        var P = o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, k);
        return o(
          "WAWebGroupHistoryStoredHint",
        ).maybeRestoreGroupHistoryStoredHint(P, t);
      }
    }
    function _(e, t) {
      var n = t.message != null ? f(t) : null;
      return (n != null && (e.messageSecret = n), n);
    }
    function f(e) {
      var t = e.messageSecret;
      if (!(t == null || !r("justknobx")._("7525"))) {
        if (t.byteLength !== d) {
          h("invalid_length");
          return;
        }
        return new Uint8Array(t);
      }
    }
    function g(e, t, n) {
      var r,
        a,
        i,
        l =
          (r =
            (a = e.message) == null || (a = a.protocolMessage) == null
              ? void 0
              : a.editedMessage) != null
            ? r
            : e.message;
      n != null &&
        t.messageSecret != null &&
        (l == null || (i = l.messageContextInfo) == null
          ? void 0
          : i.messageSecret) == null &&
        o("WACryptoUtils").uint8ArraysEqual(t.messageSecret, n) &&
        h("fallback_used");
    }
    function h(e) {
      o("WAWebLoggerUtils").passesSampling(m) &&
        r("WAWebODS").incr("web.history_sync.wmi_message_secret." + e, 1 / m);
    }
    function y(e, t) {
      var n,
        a,
        i,
        l,
        s,
        c = e.scheduledMessageMetadata;
      if (
        !(c == null || t == null) &&
        ((n = e.key) == null ? void 0 : n.fromMe) === !0
      ) {
        var d = c.revealKey,
          m = c.revealKeyId,
          p = c.scheduledTime;
        if (!(d == null || m == null || p == null)) {
          var _ = (a = t.id) == null ? void 0 : a.remote,
            f =
              ((i = t.id) == null ? void 0 : i.id) != null
                ? t.id.toString()
                : null;
          if (!(_ == null || f == null)) {
            var g = o("WAWebWidToJid").widToChatJid(_),
              h = typeof t.body == "string" ? t.body : null,
              y = o("WATimeUtils").castToUnixTime(Number(p)),
              C = new Uint8Array(d),
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
                  (l = o(
                    "WAWebEphemeralityTypes",
                  ).DisappearingModeInitiator.cast(
                    t.disappearingModeInitiator,
                  )) != null
                    ? l
                    : null,
                disappearingModeTrigger:
                  typeof t.disappearingModeTrigger == "string" &&
                  (s = o("WAWebEphemeralityTypes").DisappearingModeTrigger.cast(
                    t.disappearingModeTrigger,
                  )) != null
                    ? s
                    : null,
                disappearingModeInitiatedByMe:
                  typeof t.disappearingModeInitiatedByMe == "boolean"
                    ? t.disappearingModeInitiatedByMe
                    : null,
              };
            (v({
              msgId: f,
              chatId: g,
              revealKeyId: m,
              revealKey: C,
              scheduledTimestampS: y,
              body: h,
              ephemeral: b,
              sourceProto: e.message,
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
    function C(e, t) {
      var n;
      if (e.scheduledMessageMetadata == null) {
        var a = (n = e.message) == null ? void 0 : n.conditionalRevealMessage;
        if (a != null) {
          var i = e.key;
          if (!(i == null || i.fromMe === !0)) {
            var l = o("WAWebParseWebMessageInfoUtils").buildMsgKey(e, i);
            if (l != null) {
              var s = l.msgKey,
                u = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(
                  a,
                );
              if (u != null) {
                var d = s.remote,
                  m = s.id;
                if (!(d == null || m == null)) {
                  var p = b(d, s.participant),
                    _ = o("WAWebScheduledMsgOutgoingMsgKey")
                      .buildScheduledMsgIncomingMsgKey(m, d, p)
                      .toString();
                  (o("WAWebScheduledMsgRevealKeyStore")
                    .storeRevealKey({
                      msgId: _,
                      chatId: o("WAWebWidToJid").widToChatJid(d),
                      revealKeyId: u.revealKeyId,
                      revealKey: new Uint8Array(0),
                      encPayload: new Uint8Array(u.encPayload),
                      encIv: new Uint8Array(u.encIv),
                      scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
                      status: "PENDING",
                      createdAt: o("WATimeUtils").unixTime(),
                      senderJid: p,
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[scheduled_msg][history_sync] recv CR park failed msg=",
                              "",
                            ])),
                          m,
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("scheduled-msg-history-sync-cr-park-failed");
                    }),
                    t != null &&
                      (t.viewMode =
                        o(
                          "WAWebViewMode.flow",
                        ).ViewModeType.SCHEDULED_MESSAGE));
                }
              }
            }
          }
        }
      }
    }
    function b(e, t) {
      return e.isGroup()
        ? t != null && !o("WAWebUserUtils").isMeAccount(t)
          ? t.toString()
          : null
        : e.toString();
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
            ).buildHistorySyncInnerProto({
              body: e.body,
              ephemeral: e.ephemeral,
              sourceProto: e.sourceProto,
            }),
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
        S.apply(this, arguments)
      );
    }
    ((l.parseWebMessageInfo = p),
      (l.getWebMessageInfoSecret = f),
      (l.maybeCountWebMessageInfoSecretFallback = g));
  },
  98,
);
