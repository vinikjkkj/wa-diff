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
                  S = t.offline != null && !m,
                  R = "online";
                m ? (R = "reparsing") : S && (R = "offline");
                var L = yield v(e, t, i, s),
                  E = L.newMsgs;
                if (
                  (h == null || h(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var I = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: E }),
                    I == null || I());
                }
                var T = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                E.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      S,
                      t.statusSetting,
                    );
                });
                for (var D = null, x = [], $ = [], P = 0; P < E.length; P++) {
                  var N,
                    M,
                    w,
                    A,
                    F = E[P],
                    O = F.messageSecret,
                    B = !!(O && (N = F.id.remote) != null && N.isBot()),
                    W =
                      (M =
                        (w = F.invokedBotWid) == null ? void 0 : w.isBot()) !=
                      null
                        ? M
                        : !1,
                    q = F.botGroupParticipant,
                    U = F.id.participant,
                    V = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
                      F.botGroupParticipants,
                      q,
                    ),
                    H =
                      (A = V == null ? void 0 : V.participants) != null
                        ? A
                        : [];
                  $.push.apply(
                    $,
                    H.filter(function (e) {
                      return e instanceof r("WAWebWid");
                    }),
                  );
                  var G = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
                    authorWid: F.id.participant,
                    botGroupParticipant: q,
                    chatWid: F.id.remote,
                    isBotInvoke: W,
                  });
                  (O &&
                    (B || W || G) &&
                    F.isForwarded !== !0 &&
                    (W && (D = F),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      F.id.toString(),
                      O,
                    )),
                    G &&
                      V != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        F.id.toString(),
                        V.participants,
                        V.isLegacySingular,
                      ),
                    F.id.remote.isGroup() &&
                      V != null &&
                      b(U, V, S, m) &&
                      x.push({
                        groupWid: F.id.remote,
                        participantWids: V.participants,
                      }),
                    (E[P] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(F)));
                }
                if (
                  (o("WAWebSyncGroupBotSupportFields")
                    .maybeLazySyncGroupBotSupportFields($, x)
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
                  D != null)
                ) {
                  var z = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(D);
                  z && E.unshift(z);
                }
                var j;
                if (
                  (y.isUser() &&
                    (j = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: E,
                      chatWid: y,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var K = E.filter(C);
                  if (K.length) {
                    var Q = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      y,
                      K,
                    );
                    E.unshift.apply(E, Q);
                  }
                }
                var X = yield k(E, y);
                if (
                  (X != null && E.unshift(X),
                  r("WAWebWid").isCAPISupportAccount(y) &&
                    !y.isSupportAgentBot())
                ) {
                  var Y = E.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  Y === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: y,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(y),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var J = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: E,
                    isOffline: S,
                    latestPrivacyMode:
                      (p = j) == null ? void 0 : p.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (f =
                        (g = j) == null ? void 0 : g.shouldQueryContactInfo) !=
                      null
                        ? f
                        : !1,
                  },
                  Z = S ? null : new (o("WAResolvable").Resolvable)(),
                  ee =
                    Z == null
                      ? o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !1,
                          msgData: E,
                        })
                      : o(
                          "WAWebMessageProcessDBPipeline",
                        ).processMsgDataDBPipeline({
                          flushImmediatly: !0,
                          msgData: E,
                          uiNotified: Z,
                        });
                try {
                  if (
                    (E.forEach(function (e) {
                      return void o(
                        "WAWebGroupHistoryNoticeHandler",
                      ).maybeHandleGroupHistoryNotice(e);
                    }),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isMainStreamReadyMd || m)
                  ) {
                    T == null || T();
                    var te = o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd;
                    te &&
                      (o(
                        "WAWebOfflineResumeCounters",
                      ).maybeLogAwaitUnflushedMsgWrite(S),
                      yield ee);
                    var ne = o(
                        "WAWebMessagePostprocessRenderable",
                      ).postprocessRenderableMessages(J),
                      re = o(
                        "WAWebCoexV2MessageAckProjection",
                      ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                        E,
                        ee,
                        ne,
                        { deferUntilMessagePersisted: S && !te },
                      );
                    if (
                      S &&
                      o(
                        "WAWebOfflineHandler",
                      ).OfflineMessageHandler.getResumeType() ===
                        o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                    ) {
                      (_ || (_ = n("Promise")))
                        .all([ne, re])
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
                    yield (_ || (_ = n("Promise"))).all([ne, re]);
                    return;
                  }
                  yield o(
                    "WAWebCoexV2MessageAckProjection",
                  ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                    E,
                    ee,
                    null,
                    { deferUntilMessagePersisted: S },
                  );
                } finally {
                  Z == null || Z.resolve(void 0);
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
