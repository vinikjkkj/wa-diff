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
    "WAWebHandleMsgProcessUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePrivacyModeChange",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebMaybeUpdateMessageThreadDetails",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePostprocessRenderable",
    "WAWebMessageProcessDBPipeline",
    "WAWebMessageQueueImpl",
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
      return (
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        !n &&
          !r &&
          e != null &&
          o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(e) &&
          (t == null ? void 0 : t.isLegacySingular) === !1 &&
          o("WAWebMsmsgMsgSecretCache").getBotGroupParticipantForResponse(
            t,
            e,
            !0,
          ) != null
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = y({ chat: t.chat, messages: e, preMatChat: t.preMatChat }),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = E(a);
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
              d = n.deliveryContextSourceType,
              m = n.sourceType,
              p = n.decisionSources;
            return (
              (c != null || d != null || m != null || p != null) &&
                (i = i.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    deliveryContextSourceType: d,
                    decisionId: c,
                    sourceType: m,
                    decisionSources: p,
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
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o, a, i) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, m) {
            var p = yield o(
              "WAWebHandleMsgProcessUtils",
            ).withoutProcessedBrazilPaymentStateUpdate({
              msgs: e,
              msgInfo: t,
              msgMeta: l,
              reparsing: m,
            });
            if (p.length !== 0) {
              try {
                var f,
                  g,
                  h,
                  y = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.PreProcessing,
                  ),
                  S = t.chat,
                  R = t.offline != null && !m,
                  L = "online";
                m ? (L = "reparsing") : R && (L = "offline");
                var E = yield v(p, t, i, s),
                  I = E.newMsgs;
                if (
                  (y == null || y(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var T = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: I }),
                    T == null || T());
                }
                var D = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                I.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      R,
                      t.statusSetting,
                    );
                });
                for (var x = null, $ = [], P = [], N = 0; N < I.length; N++) {
                  var M,
                    w,
                    A,
                    F,
                    O = I[N],
                    B = O.messageSecret,
                    W = !!(B && (M = O.id.remote) != null && M.isBot()),
                    q =
                      (w =
                        (A = O.invokedBotWid) == null ? void 0 : A.isBot()) !=
                      null
                        ? w
                        : !1,
                    U = O.botGroupParticipant,
                    V = O.id.participant,
                    H = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
                      O.botGroupParticipants,
                      U,
                    ),
                    G =
                      (F = H == null ? void 0 : H.participants) != null
                        ? F
                        : [];
                  P.push.apply(
                    P,
                    G.filter(function (e) {
                      return e instanceof r("WAWebWid");
                    }),
                  );
                  var z = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
                    authorWid: O.id.participant,
                    botGroupParticipant: U,
                    chatWid: O.id.remote,
                    isBotInvoke: q,
                  });
                  (B &&
                    (W || q || z) &&
                    O.isForwarded !== !0 &&
                    (q && (x = O),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      O.id.toString(),
                      B,
                    )),
                    z &&
                      H != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        O.id.toString(),
                        H.participants,
                        H.isLegacySingular,
                      ),
                    O.id.remote.isGroup() &&
                      H != null &&
                      b(V, H, R, m) &&
                      $.push({
                        groupWid: O.id.remote,
                        participantWids: H.participants,
                      }),
                    (I[N] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(O)));
                }
                if (
                  (o("WAWebSyncGroupBotSupportFields")
                    .maybeLazySyncGroupBotSupportFields(P, $, {
                      sourceGroupWid: S.isGroup() ? S : void 0,
                    })
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
                  x != null)
                ) {
                  var j = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(x);
                  j && I.unshift(j);
                }
                var K;
                if (
                  (S.isUser() &&
                    (K = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: I,
                      chatWid: S,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var Q = I.filter(C);
                  if (Q.length) {
                    var X = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      S,
                      Q,
                    );
                    I.unshift.apply(I, X);
                  }
                }
                var Y = yield k(I, S);
                if (
                  (Y != null && I.unshift(Y),
                  r("WAWebWid").isCAPISupportAccount(S) &&
                    !S.isSupportAgentBot())
                ) {
                  var J = I.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  J === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: S,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(S),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var Z = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: I,
                    isOffline: R,
                    latestPrivacyMode:
                      (f = K) == null ? void 0 : f.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (g =
                        (h = K) == null ? void 0 : h.shouldQueryContactInfo) !=
                      null
                        ? g
                        : !1,
                  },
                  ee = R ? null : new (o("WAResolvable").Resolvable)(),
                  te =
                    ee == null
                      ? o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !1,
                          msgData: I,
                        })
                      : o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !0,
                          msgData: I,
                          uiNotified: ee,
                        });
                te.then(function () {
                  return o(
                    "WAWebLimitSharingProtoUtils",
                  ).applyLimitSharingHeldForStoredMsgs(I);
                });
                try {
                  if (
                    (I.forEach(function (e) {
                      return void o(
                        "WAWebGroupHistoryNoticeHandler",
                      ).maybeHandleGroupHistoryNotice(e);
                    }),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isMainStreamReadyMd || m)
                  ) {
                    D == null || D();
                    var ne = o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd;
                    ne &&
                      (o(
                        "WAWebOfflineResumeCounters",
                      ).maybeLogAwaitUnflushedMsgWrite(
                        R,
                        o("WAWebMessageQueueImpl").getMessageQueueImpl(),
                      ),
                      yield te);
                    var re = o(
                        "WAWebMessagePostprocessRenderable",
                      ).postprocessRenderableMessages(Z),
                      oe = o(
                        "WAWebCoexV2MessageAckProjection",
                      ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                        I,
                        te,
                        re,
                        { deferUntilMessagePersisted: R && !ne },
                      );
                    if (
                      R &&
                      o(
                        "WAWebOfflineHandler",
                      ).OfflineMessageHandler.getResumeType() ===
                        o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                    ) {
                      (_ || (_ = n("Promise")))
                        .all([re, oe])
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
                    yield (_ || (_ = n("Promise"))).all([re, oe]);
                    return;
                  }
                  yield o(
                    "WAWebCoexV2MessageAckProjection",
                  ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                    I,
                    te,
                    null,
                    { deferUntilMessagePersisted: R },
                  );
                } finally {
                  ee == null || ee.resolve(void 0);
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        I.apply(this, arguments)
      );
    }
    ((l.overrideParentKeyForAssociations = y),
      (l.isBizBotDisclosureMsg = C),
      (l.shouldCollectGroupAgentRosterGossip = b),
      (l.processRenderableMessages = R),
      (l.maybeCreateOpusSystemMsg = k));
  },
  98,
);
