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
    "WAWebHandleMsgTypes",
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
          function* (e, t, n, r) {
            var a = y({ chat: t.chat, messages: e, preMatChat: t.preMatChat }),
              i = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              l = I(r);
            (l != null &&
              (a = a.map(function (e) {
                return babelHelpers.extends({}, e, {
                  placeholderPopulationType: l,
                });
              })),
              (a =
                i == null
                  ? a
                  : a.map(function (e) {
                      return babelHelpers.extends({}, e, {
                        privacyModeWhenSent: i,
                      });
                    })));
            var s = t.addressingMode;
            a =
              s == null
                ? a
                : a.map(function (e) {
                    return babelHelpers.extends({}, e, {
                      groupAddressingMode: s,
                    });
                  });
            var u = n.decisionId,
              c = n.deliveryContextSourceType,
              d = n.sourceType,
              m = n.decisionSources;
            return (
              (u != null || c != null || d != null || m != null) &&
                (a = a.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    deliveryContextSourceType: c,
                    decisionId: u,
                    sourceType: d,
                    decisionSources: m,
                  });
                })),
              (a = yield o(
                "WAWebPreProcessOrderEphemeralExemption",
              ).preProcessOrderEphemeralExemption(a)),
              (a = a.map(function (e) {
                var t = R(e);
                return t != null
                  ? babelHelpers.extends({}, e, { invokedBotWid: t })
                  : e;
              })),
              (a = yield o(
                "WAWebMaybeUpdateMessageThreadDetails",
              ).maybeUpdateMessageThreadDetails(a)),
              o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(a)
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t;
      return e.messageSecret != null
        ? (t = e.mentionedJidList) == null
          ? void 0
          : t.find(function (e) {
              return e && r("WAWebWid").isWid(e) && e.isBot();
            })
        : null;
    }
    function L(e, t, n, r, o, a, i, l) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, m, p) {
            var f = yield o(
                "WAWebHandleMsgProcessUtils",
              ).withoutProcessedBrazilPaymentStateUpdate({
                msgs: e,
                msgInfo: t,
                msgMeta: l,
                reparsing: m,
              }),
              g = f.msgs,
              h = f.staged;
            if (g.length === 0) return h;
            var y = null;
            try {
              var S,
                R,
                L,
                E,
                k = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.PreProcessing,
                ),
                I = t.chat,
                D = t.offline != null && !m,
                P = yield v(g, t, i, s),
                N = P.newMsgs;
              k == null || k();
              var M = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.ProcessReportingTokenInfo,
              );
              (yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({
                renderableMsgs: N,
                reparsing: m,
              }),
                M == null || M());
              var w = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.Processing,
              );
              N.forEach(function (e) {
                e.id.fromMe &&
                  o("WAWebMsgGetters").getIsStatus(e) &&
                  o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                    e.id,
                    D,
                    t.statusSetting,
                  );
              });
              for (var A = null, F = [], O = [], B = 0; B < N.length; B++) {
                var W,
                  q,
                  U,
                  V = N[B],
                  H = V.messageSecret,
                  G =
                    (W = (q = V.invokedBotWid) == null ? void 0 : q.isBot()) !=
                    null
                      ? W
                      : !1,
                  z = V.botGroupParticipant,
                  j = V.id.participant,
                  K = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
                    V.botGroupParticipants,
                    z,
                  ),
                  Q =
                    (U = K == null ? void 0 : K.participants) != null ? U : [];
                (O.push.apply(
                  O,
                  Q.filter(function (e) {
                    return e instanceof r("WAWebWid");
                  }),
                ),
                  H && G && V.isForwarded !== !0 && (A = V),
                  x(V),
                  V.id.remote.isGroup() &&
                    K != null &&
                    b(j, K, D, m) &&
                    F.push({
                      groupWid: V.id.remote,
                      participantWids: K.participants,
                    }),
                  (N[B] = yield o(
                    "WAWebBotSignatureVerificationPostProcessor",
                  ).verifyForwardedBotMessage(V)));
              }
              if (
                (o("WAWebSyncGroupBotSupportFields")
                  .maybeLazySyncGroupBotSupportFields(O, F, {
                    sourceGroupWid: I.isGroup() ? I : void 0,
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
                A != null)
              ) {
                var X = yield o(
                  "WAWebBotIncomingInvokeSystemMsg",
                ).createSysMsgForIncomingBotInvoke(A);
                X && N.unshift(X);
              }
              var Y;
              if (
                (I.isUser() &&
                  (Y = yield o(
                    "WAWebHandlePrivacyModeChange",
                  ).handlePrivacyModeChangeAndCreateChat({
                    msgs: N,
                    chatWid: I,
                    bizInfo: i,
                    msgMeta: l,
                    msgInfo: t,
                  })),
                o("WAWebBotBaseGating").isBotEnabled())
              ) {
                var J = N.filter(C);
                if (J.length) {
                  var Z = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                    I,
                    J,
                  );
                  N.unshift.apply(N, Z);
                }
              }
              var ee = yield T(N, I);
              if (
                (ee != null && N.unshift(ee),
                r("WAWebWid").isCAPISupportAccount(I) && !I.isSupportAgentBot())
              ) {
                var te = N.some(function (e) {
                  return e.shouldShowSupportAISystemMessage === !0;
                });
                te === !0 &&
                  (yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: I,
                    newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(I),
                    handleSingleMsgOrigin: "supportSagaInit",
                  }));
              }
              var ne = {
                  msgInfo: t,
                  messageOverwriteOption: s,
                  msgs: N,
                  isOffline: D,
                  latestPrivacyMode:
                    (S = Y) == null ? void 0 : S.latestPrivacyMode,
                  shouldQueryContactInfo:
                    (R = (L = Y) == null ? void 0 : L.shouldQueryContactInfo) !=
                    null
                      ? R
                      : !1,
                },
                re = o("WAWebBackendEventBus").BackendEventBus
                  .isOfflineDeliveryEnd,
                oe =
                  (p == null || (E = p.callerHandles) == null
                    ? void 0
                    : E.has("flush")) === !0,
                ae = $(oe, D, re),
                ie = ae.flushImmediately,
                le = ie ? new (o("WAResolvable").Resolvable)() : null,
                se =
                  le == null
                    ? o(
                        "WAWebMessageProcessDBPipeline",
                      ).processMsgDataDBPipeline({
                        flushImmediatly: !1,
                        msgData: N,
                      })
                    : o(
                        "WAWebMessageProcessDBPipeline",
                      ).processMsgDataDBPipeline({
                        flushImmediatly: !0,
                        msgData: N,
                        uiNotified: le,
                      }),
                ue = se.done,
                ce = se.written;
              ((y = { written: ce }),
                ue.then(function () {
                  return o(
                    "WAWebLimitSharingProtoUtils",
                  ).applyLimitSharingHeldForStoredMsgs(N);
                }));
              try {
                if (
                  (N.forEach(function (e) {
                    return void o(
                      "WAWebGroupHistoryNoticeHandler",
                    ).maybeHandleGroupHistoryNotice(e);
                  }),
                  o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd || m)
                ) {
                  var de;
                  if (
                    (w == null || w(),
                    (p == null || (de = p.callerHandles) == null
                      ? void 0
                      : de.has("ui")) === !0)
                  )
                    return {
                      uiUpdate: { kind: "renderable", params: ne },
                      written: ce,
                    };
                  ae.awaited &&
                    (o(
                      "WAWebOfflineResumeCounters",
                    ).maybeLogAwaitUnflushedMsgWrite(
                      !ie,
                      o("WAWebMessageQueueImpl").getMessageQueueImpl(),
                    ),
                    yield ue);
                  var me = o(
                      "WAWebMessagePostprocessRenderable",
                    ).postprocessRenderableMessages(ne),
                    pe = o(
                      "WAWebCoexV2MessageAckProjection",
                    ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                      N,
                      ue,
                      me,
                      {
                        deferUntilMessagePersisted:
                          ae.deferReceiptReconciliation,
                      },
                    );
                  return D &&
                    o(
                      "WAWebOfflineHandler",
                    ).OfflineMessageHandler.getResumeType() ===
                      o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
                    ? ((_ || (_ = n("Promise")))
                        .all([me, pe])
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
                        }),
                      y)
                    : (yield (_ || (_ = n("Promise"))).all([me, pe]), y);
                }
                yield o(
                  "WAWebCoexV2MessageAckProjection",
                ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(N, ue, null, {
                  deferUntilMessagePersisted: D || oe,
                });
              } finally {
                le == null || le.resolve(void 0);
              }
            } catch (e) {
              var _e;
              if (
                (o("WALogger")
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
                  ),
                y == null &&
                  (p == null || (_e = p.callerHandles) == null
                    ? void 0
                    : _e.has("errors")) === !0)
              )
                throw e;
            }
            return y;
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return e ? "reparsing" : t ? "offline" : "online";
    }
    function I(e) {
      return e ===
        o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE ||
        e === o("WAWebHandleMsgTypes").MessageOverwriteOption.FUTURE_PROOF ||
        e === o("WAWebHandleMsgTypes").MessageOverwriteOption.VOIP_CALL_LOG
        ? null
        : e === o("WAWebHandleMsgTypes").MessageOverwriteOption.RETRY
          ? o("WAWebWamEnumPlaceholderPopulationType")
              .PLACEHOLDER_POPULATION_TYPE.RETRY
          : e === o("WAWebHandleMsgTypes").MessageOverwriteOption.PEER_RETRY
            ? o("WAWebWamEnumPlaceholderPopulationType")
                .PLACEHOLDER_POPULATION_TYPE.PEER_MESSAGE
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t,
        n = e.messageSecret,
        r = R(e) != null,
        a = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
          e.botGroupParticipants,
          e.botGroupParticipant,
        ),
        i = o("WAWebBotGroupGatingUtils").isGroupBotMessage({
          authorWid: e.id.participant,
          botGroupParticipant: e.botGroupParticipant,
          chatWid: e.id.remote,
          isBotInvoke: r,
        }),
        l = !!(n && (t = e.id.remote) != null && t.isBot());
      (n &&
        (l || r || i) &&
        e.isForwarded !== !0 &&
        o(
          "WAWebMsmsgMsgSecretCache",
        ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(e.id.toString(), n, e.t),
        i &&
          a != null &&
          o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
            e.id.toString(),
            a.participants,
            a.isLegacySingular,
          ));
    }
    function $(e, t, n) {
      return e
        ? { awaited: !1, deferReceiptReconciliation: !0, flushImmediately: !1 }
        : {
            awaited: n,
            deferReceiptReconciliation: t && !n,
            flushImmediately: o(
              "WAWebMessageQueueImpl",
            ).shouldFlushMessageImmediately(t, n),
          };
    }
    ((l.overrideParentKeyForAssociations = y),
      (l.isBizBotDisclosureMsg = C),
      (l.shouldCollectGroupAgentRosterGossip = b),
      (l.processRenderableMessages = L),
      (l.maybeCreateOpusSystemMsg = T),
      (l.cacheMsmsgDecryptData = x));
  },
  98,
);
