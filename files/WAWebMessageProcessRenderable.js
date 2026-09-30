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
    "WAWebSyncGroupBotSupportFields",
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
      _,
      f = (e = n("cr:37261")) != null ? e : {},
      g = f.opusProcessChat;
    function h(e, t) {
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
    function y(e) {
      var t = e.chat,
        n = e.messages,
        r = e.preMatChat;
      return r == null || !t.isRegularUser()
        ? n
        : n.map(function (e) {
            return o("WAWebMessageAssociation.flow").isAssociatedMsg(e)
              ? babelHelpers.extends({}, e, {
                  parentMsgKey: h(e.parentMsgKey, t),
                })
              : e;
          });
    }
    function C(e) {
      return (
        !!e.bizBotType &&
        !o("WAWebMsgGetters").getIsCAPISupport(e) &&
        !o("WAWebMsgGetters").getIsCoexV2Relay(e)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = y({ chat: t.chat, messages: e, preMatChat: t.preMatChat }),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = L(a);
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o, a, i) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, m) {
            if (e.length !== 0) {
              try {
                var p,
                  f,
                  g,
                  h = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.PreProcessing,
                  ),
                  y = t.chat,
                  v = t.offline != null && !m,
                  S = "online";
                m ? (S = "reparsing") : v && (S = "offline");
                var R = yield b(e, t, i, s),
                  L = R.newMsgs;
                if (
                  (h == null || h(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var k = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: L }),
                    k == null || k());
                }
                var I = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                L.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      v,
                      t.statusSetting,
                    );
                });
                for (var T = null, D = [], x = [], $ = 0; $ < L.length; $++) {
                  var P,
                    N,
                    M,
                    w,
                    A = L[$],
                    F = A.messageSecret,
                    O = !!(F && (P = A.id.remote) != null && P.isBot()),
                    B =
                      (N =
                        (M = A.invokedBotWid) == null ? void 0 : M.isBot()) !=
                      null
                        ? N
                        : !1,
                    W = A.botGroupParticipant,
                    q = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
                      A.botGroupParticipants,
                      W,
                    ),
                    U =
                      (w = q == null ? void 0 : q.participants) != null
                        ? w
                        : [];
                  x.push.apply(
                    x,
                    U.filter(function (e) {
                      return e instanceof r("WAWebWid");
                    }),
                  );
                  var V = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
                    authorWid: A.id.participant,
                    botGroupParticipant: W,
                    chatWid: A.id.remote,
                    isBotInvoke: B,
                  });
                  (F &&
                    (O || B || V) &&
                    A.isForwarded !== !0 &&
                    (B && (T = A),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      A.id.toString(),
                      F,
                    )),
                    V &&
                      q != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        A.id.toString(),
                        q.participants,
                        q.isLegacySingular,
                      ),
                    !v &&
                      !m &&
                      A.id.remote.isGroup() &&
                      (q == null ? void 0 : q.isLegacySingular) === !1 &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).getBotGroupParticipantForResponse(
                        q,
                        A.id.participant,
                        !0,
                      ) != null &&
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isGroupBotParticipantEnabled(A.id.participant) &&
                      D.push(A.id.remote),
                    (L[$] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(A)));
                }
                if (
                  (o("WAWebSyncGroupBotSupportFields")
                    .maybeLazySyncGroupBotSupportFields(x, D)
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "processRenderableMessage: failed to refresh group agent profiles",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs(
                          "handle-msg-refresh-group-agent-profiles-error",
                        );
                    }),
                  T != null)
                ) {
                  var H = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(T);
                  H && L.unshift(H);
                }
                var G;
                if (
                  (y.isUser() &&
                    (G = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: L,
                      chatWid: y,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var z = L.filter(C);
                  if (z.length) {
                    var j = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      y,
                      z,
                    );
                    L.unshift.apply(L, j);
                  }
                }
                var K = yield E(L, y);
                if (
                  (K != null && L.unshift(K),
                  r("WAWebWid").isCAPISupportAccount(y) &&
                    !y.isSupportAgentBot())
                ) {
                  var Q = L.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  Q === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: y,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(y),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var X = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: L,
                    isOffline: v,
                    latestPrivacyMode:
                      (p = G) == null ? void 0 : p.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (f =
                        (g = G) == null ? void 0 : g.shouldQueryContactInfo) !=
                      null
                        ? f
                        : !1,
                  },
                  Y = v ? null : new (o("WAResolvable").Resolvable)(),
                  J =
                    Y == null
                      ? o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !1,
                          msgData: L,
                        })
                      : o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !0,
                          msgData: L,
                          uiNotified: Y,
                        });
                try {
                  if (
                    (L.forEach(function (e) {
                      return void o(
                        "WAWebGroupHistoryNoticeHandler",
                      ).maybeHandleGroupHistoryNotice(e);
                    }),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isMainStreamReadyMd || m)
                  ) {
                    I == null || I();
                    var Z = o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd;
                    Z &&
                      (o(
                        "WAWebOfflineResumeCounters",
                      ).maybeLogAwaitUnflushedMsgWrite(v),
                      yield J);
                    var ee = o(
                        "WAWebMessagePostprocessRenderable",
                      ).postprocessRenderableMessages(X),
                      te = o(
                        "WAWebCoexV2MessageAckProjection",
                      ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                        L,
                        J,
                        ee,
                        { deferUntilMessagePersisted: v && !Z },
                      );
                    if (
                      v &&
                      o(
                        "WAWebOfflineHandler",
                      ).OfflineMessageHandler.getResumeType() ===
                        o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                    ) {
                      (_ || (_ = n("Promise")))
                        .all([ee, te])
                        .catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    yield (_ || (_ = n("Promise"))).all([ee, te]);
                    return;
                  }
                  yield o(
                    "WAWebCoexV2MessageAckProjection",
                  ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                    L,
                    J,
                    null,
                    { deferUntilMessagePersisted: v },
                  );
                } finally {
                  Y == null || Y.resolve(void 0);
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
              return (_ || (_ = n("Promise"))).resolve();
            }
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || g == null)
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
              : (yield g(t.toString(), {
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
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("opus-incoming-fail")
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[opus] incoming msg fallback failed",
                        ])),
                    )
                    .sendLogs("opus-incoming-fail"),
              null
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.overrideParentKeyForAssociations = y),
      (l.isBizBotDisclosureMsg = C),
      (l.processRenderableMessages = S),
      (l.maybeCreateOpusSystemMsg = E));
  },
  98,
);
