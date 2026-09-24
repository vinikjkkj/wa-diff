__d(
  "WAWebMessageProcessRenderable",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotIncomingInvokeSystemMsg",
    "WAWebBotSignatureVerificationPostProcessor",
    "WAWebBotUtils",
    "WAWebCoexV2MessageAckProjection",
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
    "WAWebOfflineResumeCounters",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (e = n("cr:37261")) != null ? e : {},
      f = _.opusProcessChat;
    function g(e, t) {
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
    function h(e) {
      var t = e.chat,
        n = e.messages,
        r = e.preMatChat;
      return r == null || !t.isRegularUser()
        ? n
        : n.map(function (e) {
            return o("WAWebMessageAssociation.flow").isAssociatedMsg(e)
              ? babelHelpers.extends({}, e, {
                  parentMsgKey: g(e.parentMsgKey, t),
                })
              : e;
          });
    }
    function y(e) {
      return (
        !!e.bizBotType &&
        !o("WAWebMsgGetters").getIsCAPISupport(e) &&
        !o("WAWebMsgGetters").getIsCoexV2Relay(e)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = h({ chat: t.chat, messages: e, preMatChat: t.preMatChat }),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = R(a);
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a, i) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, d) {
            if (e.length !== 0) {
              try {
                var m,
                  _,
                  f,
                  g = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.PreProcessing,
                  ),
                  h = t.chat,
                  b = t.offline != null && !d,
                  v = "online";
                d ? (v = "reparsing") : b && (v = "offline");
                var S = yield C(e, t, i, s),
                  R = S.newMsgs;
                if (
                  (g == null || g(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var E = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: R }),
                    E == null || E());
                }
                var k = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                R.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      b,
                      t.statusSetting,
                    );
                });
                for (var I = null, T = 0; T < R.length; T++) {
                  var D,
                    x,
                    $,
                    P = R[T],
                    N = P.messageSecret,
                    M = !!(N && (D = P.id.remote) != null && D.isBot()),
                    w =
                      (x =
                        ($ = P.invokedBotWid) == null ? void 0 : $.isBot()) !=
                      null
                        ? x
                        : !1,
                    A = P.botGroupParticipant,
                    F =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                      A instanceof r("WAWebWid") &&
                      A.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
                    O =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      A instanceof r("WAWebWid") &&
                      A.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
                  (N &&
                    (M || w || F || O) &&
                    P.isForwarded !== !0 &&
                    (w && (I = P),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      P.id.toString(),
                      N,
                    )),
                    (F || O) &&
                      A != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        P.id.toString(),
                        A,
                      ),
                    (R[T] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(P)));
                }
                if (I != null) {
                  var B = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(I);
                  B && R.unshift(B);
                }
                var W;
                if (
                  (h.isUser() &&
                    (W = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: R,
                      chatWid: h,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var q = R.filter(y);
                  if (q.length) {
                    var U = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      h,
                      q,
                    );
                    R.unshift.apply(R, U);
                  }
                }
                var V = yield L(R, h);
                if (
                  (V != null && R.unshift(V),
                  r("WAWebWid").isCAPISupportAccount(h) &&
                    !h.isSupportAgentBot())
                ) {
                  var H = R.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  H === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: h,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(h),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var G = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: R,
                    isOffline: b,
                    latestPrivacyMode:
                      (m = W) == null ? void 0 : m.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (_ =
                        (f = W) == null ? void 0 : f.shouldQueryContactInfo) !=
                      null
                        ? _
                        : !1,
                  },
                  z = b ? null : new (o("WAResolvable").Resolvable)(),
                  j =
                    z == null
                      ? o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !1,
                          msgData: R,
                        })
                      : o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !0,
                          msgData: R,
                          uiNotified: z,
                        });
                try {
                  if (
                    (R.forEach(function (e) {
                      return void o(
                        "WAWebGroupHistoryNoticeHandler",
                      ).maybeHandleGroupHistoryNotice(e);
                    }),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isMainStreamReadyMd || d)
                  ) {
                    k == null || k();
                    var K = o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd;
                    K &&
                      (o(
                        "WAWebOfflineResumeCounters",
                      ).maybeLogAwaitUnflushedMsgWrite(b),
                      yield j);
                    var Q = o(
                        "WAWebMessagePostprocessRenderable",
                      ).postprocessRenderableMessages(G),
                      X = o(
                        "WAWebCoexV2MessageAckProjection",
                      ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                        R,
                        j,
                        Q,
                        { deferUntilMessagePersisted: b && !K },
                      );
                    if (
                      b &&
                      o(
                        "WAWebOfflineHandler",
                      ).OfflineMessageHandler.getResumeType() ===
                        o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                    ) {
                      (p || (p = n("Promise"))).all([Q, X]).catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "processRenderableMessage: non-blocking message processing failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("messaging")
                          .sendLogs(
                            "handle_msg: error storing/processing single message",
                          );
                      });
                      return;
                    }
                    yield (p || (p = n("Promise"))).all([Q, X]);
                    return;
                  }
                  yield o(
                    "WAWebCoexV2MessageAckProjection",
                  ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                    R,
                    j,
                    null,
                    { deferUntilMessagePersisted: b },
                  );
                } finally {
                  z == null || z.resolve(void 0);
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
              return (p || (p = n("Promise"))).resolve();
            }
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || f == null)
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
              : (yield f(t.toString(), {
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
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("opus-incoming-fail")
                : o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .sendLogs("opus-incoming-fail"),
              null
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    ((l.overrideParentKeyForAssociations = h),
      (l.isBizBotDisclosureMsg = y),
      (l.processRenderableMessages = v),
      (l.maybeCreateOpusSystemMsg = L));
  },
  98,
);
