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
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      var a,
        i,
        l,
        u,
        c,
        d,
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
          return (m(t, T), p(t, T), T);
        }
        return (
          o(
            "WAWebParseLimitSharingHistorySyncProto",
          ).parseLimitSharingFromProtocolHistorySyncMessage(t, L),
          o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, L)
        );
      }
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s = e.scheduledMessageMetadata;
      if (!(s == null || t == null)) {
        var c = s.revealKey,
          d = s.revealKeyId,
          m = s.scheduledTime;
        if (!(c == null || d == null || m == null)) {
          var p = (n = t.id) == null ? void 0 : n.remote,
            _ =
              ((a = t.id) == null ? void 0 : a.id) != null
                ? t.id.toString()
                : null;
          if (!(p == null || _ == null)) {
            var g = o("WAWebWidToJid").widToChatJid(p),
              h = typeof t.body == "string" ? t.body : null,
              y = o("WATimeUtils").castToUnixTime(Number(m)),
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
            (f({
              msgId: _,
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
                  _,
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
    function p(e, t) {
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
                  var p = _(d, s.participant),
                    f = o("WAWebScheduledMsgOutgoingMsgKey")
                      .buildScheduledMsgIncomingMsgKey(m, d, p)
                      .toString();
                  (o("WAWebScheduledMsgRevealKeyStore")
                    .storeRevealKey({
                      msgId: f,
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
    function _(e, t) {
      return e.isGroup()
        ? t != null && !o("WAWebUserPrefsMeUser").isMeAccount(t)
          ? t.toString()
          : null
        : e.toString();
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        g.apply(this, arguments)
      );
    }
    ((l.buildMsgKey = o("WAWebParseWebMessageInfoUtils").buildMsgKey),
      (l.parseMsgStubProto = o(
        "WAWebParseWebMessageInfoUtils",
      ).parseMsgStubProto),
      (l.parseWebMessageInfo = d));
  },
  98,
);
