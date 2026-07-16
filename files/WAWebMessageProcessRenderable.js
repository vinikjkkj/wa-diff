__d(
  "WAWebMessageProcessRenderable",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotIncomingInvokeSystemMsg",
    "WAWebBotSignatureVerificationPostProcessor",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebCurrentUser",
    "WAWebGetPrivacyModeWhenSent",
    "WAWebGroupHistoryNoticeHandler",
    "WAWebHandleBizBotMsgs",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePrivacyModeChange",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebMaybeUpdateMessageThreadDetails",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePostprocessRenderable",
    "WAWebMessageProcessDBPipeline",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeTypes",
    "WAWebPreProcessOrderEphemeralExemption",
    "WAWebProtobufsProtocol.pb",
    "WAWebSagaSystemMsg",
    "WAWebStatusDBMessageInfo",
    "WAWebWamEnumPlaceholderPopulationType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "cr:37261",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (e = n("cr:37261")) != null ? e : {},
      _ = p.opusProcessChat;
    function f(e, t) {
      var n = r("WAWebMsgKey").from({
        fromMe: e.fromMe,
        id: e.id,
        participant: e.participant,
        remote: t,
      });
      return (
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "processRenderableMessagesForLid: override msgKey: ",
                " --> ",
                "",
              ])),
            e.toString(),
            n.toString(),
          ),
        n
      );
    }
    function g(e, t, n) {
      return e == null || !t.isRegularUser()
        ? n
        : n.map(function (e) {
            return o("WAWebMessageAssociation.flow").isAssociatedMsg(e)
              ? babelHelpers.extends({}, e, {
                  parentMsgKey: f(e.parentMsgKey, t),
                })
              : e;
          });
    }
    function h(e) {
      return (
        !!e.bizBotType &&
        !o("WAWebMsgGetters").getIsCAPISupport(e) &&
        !o("WAWebMsgGetters").getIsCoexV2Relay(e)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = g(t.preMatChat, t.chat, e),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = S(a);
            (s != null &&
              (i = i.map(function (e) {
                return babelHelpers.extends({}, e, {
                  placeholderPopulationType: s,
                });
              })),
              (i =
                l == null
                  ? i
                  : i.map(function (e) {
                      return babelHelpers.extends({}, e, {
                        privacyModeWhenSent: l,
                      });
                    })));
            var u = t.addressingMode;
            i =
              u == null
                ? i
                : i.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      groupAddressingMode: u,
                    });
                  });
            var c = n.decisionId,
              d = n.sourceType,
              m = n.decisionSources;
            return (
              (c != null || d != null || m != null) &&
                (i = i.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    decisionId: c,
                    sourceType: d,
                    decisionSources: m,
                  });
                })),
              (i = yield o(
                "WAWebPreProcessOrderEphemeralExemption",
              ).preProcessOrderEphemeralExemption(i)),
              (i = i.map(function (e) {
                var t,
                  n =
                    e.messageSecret != null
                      ? (t = e.mentionedJidList) == null
                        ? void 0
                        : t.find(function (e) {
                            return e && r("WAWebWid").isWid(e) && e.isBot();
                          })
                      : null;
                return n != null
                  ? babelHelpers.extends({}, e, { invokedBotWid: n })
                  : e;
              })),
              (i = yield o(
                "WAWebMaybeUpdateMessageThreadDetails",
              ).maybeUpdateMessageThreadDetails(i)),
              o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(i)
            );
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o, a, i) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, c) {
            if (e.length !== 0) {
              try {
                var d,
                  p,
                  _,
                  f = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.PreProcessing,
                  ),
                  g = t.chat,
                  C = t.offline != null && !c,
                  b = "online";
                c ? (b = "reparsing") : C && (b = "offline");
                var v = yield y(e, t, i, s),
                  S = v.newMsgs;
                if (
                  (f == null || f(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var L = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: S }),
                    L == null || L());
                }
                var E = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                S.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      C,
                      t.statusSetting,
                    );
                });
                for (var k = null, I = 0; I < S.length; I++) {
                  var T,
                    D,
                    x,
                    $ = S[I],
                    P = $.messageSecret,
                    N = !!(P && (T = $.id.remote) != null && T.isBot()),
                    M =
                      (D =
                        (x = $.invokedBotWid) == null ? void 0 : x.isBot()) !=
                      null
                        ? D
                        : !1,
                    w = $.botGroupParticipant,
                    A =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                      w instanceof r("WAWebWid") &&
                      w.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
                    F =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      w instanceof r("WAWebWid") &&
                      w.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
                  (P &&
                    (N || M || A || F) &&
                    $.isForwarded !== !0 &&
                    (M && (k = $),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      $.id.toString(),
                      P,
                    )),
                    (A || F) &&
                      w != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        $.id.toString(),
                        w,
                      ),
                    (S[I] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage($)));
                }
                if (k != null) {
                  var O = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(k);
                  O && S.unshift(O);
                }
                var B;
                if (
                  (g.isUser() &&
                    (B = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: S,
                      chatWid: g,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var W = S.filter(h);
                  if (W.length) {
                    var q = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      g,
                      W,
                    );
                    S.unshift.apply(S, q);
                  }
                }
                var U = yield R(S, g);
                if (
                  (U != null && S.unshift(U),
                  r("WAWebWid").isCAPISupportAccount(g))
                ) {
                  var V = S.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  V === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: g,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(g),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var H = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: S,
                    isOffline: C,
                    latestPrivacyMode:
                      (d = B) == null ? void 0 : d.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (p =
                        (_ = B) == null ? void 0 : _.shouldQueryContactInfo) !=
                      null
                        ? p
                        : !1,
                  },
                  G = o(
                    "WAWebMessageProcessDBPipeline",
                  ).processMsgDataDBPipeline(S, !C);
                if (
                  (S.forEach(function (e) {
                    return void o(
                      "WAWebGroupHistoryNoticeHandler",
                    ).maybeHandleGroupHistoryNotice(e);
                  }),
                  o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd || c)
                ) {
                  (E == null || E(),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd && (yield G));
                  var z = o(
                    "WAWebMessagePostprocessRenderable",
                  ).postprocessRenderableMessages(H);
                  if (
                    C &&
                    o(
                      "WAWebOfflineHandler",
                    ).OfflineMessageHandler.getResumeType() ===
                      o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                  )
                    return;
                  yield z;
                  return;
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "processRenderableMessage: msgId:",
                        ", failed with error: ",
                        "",
                      ])),
                    t.externalId,
                    e,
                  )
                  .tags("messaging")
                  .sendLogs(
                    "handle_msg: error storing/processing single message",
                  );
              }
              return (m || (m = n("Promise"))).resolve();
            }
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e ===
        o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE ||
        e ===
          o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.FUTURE_PROOF ||
        e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG
        ? null
        : e === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.RETRY
          ? o("WAWebWamEnumPlaceholderPopulationType")
              .PLACEHOLDER_POPULATION_TYPE.RETRY
          : e ===
              o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.PEER_RETRY
            ? o("WAWebWamEnumPlaceholderPopulationType")
                .PLACEHOLDER_POPULATION_TYPE.PEER_MESSAGE
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || _ == null)
            return null;
          var n = o("WAWebABProps").getABPropConfigValue("opus_t");
          if (n == null) return null;
          var r = e.some(function (e) {
            return (
              e.t != null &&
              e.t >= n &&
              !(
                e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                (e.subtype === "sender_revoke" || e.subtype === "admin_revoke")
              )
            );
          });
          if (!r) return null;
          try {
            var a,
              i = yield o("WAWebApiChatCommon").getChatRecord(t);
            return (i == null || (a = i.limitSharing) == null
              ? void 0
              : a.sharingLimited) !== !0
              ? null
              : (yield _(t.toString(), {
                  skipSystemMessage: !0,
                  skipSharingLimitedCheck: !0,
                }),
                babelHelpers.extends(
                  {},
                  o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(t, {
                    sharingLimited: !1,
                    trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                      .UNKNOWN,
                  }),
                  { t: n },
                ));
          } catch (e) {
            return (
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("opus-incoming-fail")
                : o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .sendLogs("opus-incoming-fail"),
              null
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    ((l.overrideParentKeyForAssociations = g),
      (l.isBizBotDisclosureMsg = h),
      (l.processRenderableMessages = b),
      (l.maybeCreateOpusSystemMsg = R));
  },
  98,
);
