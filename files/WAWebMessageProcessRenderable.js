__d(
  "WAWebMessageProcessRenderable",
  [
    "Promise",
    "WALogger",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotIncomingInvokeSystemMsg",
    "WAWebBotSignatureVerificationPostProcessor",
    "WAWebBotUtils",
    "WAWebCurrentUser",
    "WAWebGetPrivacyModeWhenSent",
    "WAWebHandleBizBotMsgs",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandlePrivacyModeChange",
    "WAWebHandleSingleMsgFactory",
    "WAWebMaybeUpdateMessageThreadDetails",
    "WAWebMessageAssociation.flow",
    "WAWebMessagePostprocessRenderable",
    "WAWebMessageProcessDBPipeline",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsmsgMsgSecretCache",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeTypes.flow",
    "WAWebPreProcessOrderEphemeralExemption",
    "WAWebSagaSystemMsg",
    "WAWebStatusDBMessageInfo",
    "WAWebWamEnumPlaceholderPopulationType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, n) {
      var a = r("WAWebMsgKey").from({
        fromMe: t.fromMe,
        id: t.id,
        participant: t.participant,
        remote: n,
      });
      return (
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "processRenderableMessagesForLid: override msgKey: ",
                " --> ",
                "",
              ])),
            t.toString(),
            a.toString(),
          ),
        a
      );
    }
    function d(e, t, n) {
      return e == null || !t.isRegularUser()
        ? n
        : n.map(function (e) {
            return o("WAWebMessageAssociation.flow").isAssociatedMsg(e)
              ? babelHelpers.extends({}, e, {
                  parentMsgKey: c(e.parentMsgKey, t),
                })
              : e;
          });
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = d(t.preMatChat, t.chat, e),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = g(a);
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
              m = n.sourceType,
              p = n.decisionSources;
            return (
              (c != null || m != null || p != null) &&
                (i = i.map(function (e) {
                  return babelHelpers.extends({}, e, {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o, a, i) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, c, d) {
            if (e.length !== 0) {
              try {
                var p,
                  _,
                  f,
                  g = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.PreProcessing,
                  ),
                  h = t.chat,
                  y = t.offline != null && !d,
                  C = "online";
                d ? (C = "reparsing") : y && (C = "offline");
                var b = yield m(e, t, i, c),
                  v = b.newMsgs;
                if (
                  (g == null || g(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var S = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: v }),
                    S == null || S());
                }
                var R = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Processing,
                );
                v.forEach(function (e) {
                  e.id.fromMe &&
                    o("WAWebMsgGetters").getIsStatus(e) &&
                    r("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                      e.id,
                      y,
                      t.statusSetting,
                    );
                });
                for (var L = null, E = 0; E < v.length; E++) {
                  var k,
                    I,
                    T,
                    D = v[E],
                    x = D.messageSecret,
                    $ = !!(x && (k = D.id.remote) != null && k.isBot()),
                    P =
                      (I =
                        (T = D.invokedBotWid) == null ? void 0 : T.isBot()) !=
                      null
                        ? I
                        : !1,
                    N = D.botGroupParticipant,
                    M =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                      N instanceof r("WAWebWid") &&
                      N.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
                    w =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      N instanceof r("WAWebWid") &&
                      N.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
                  (x &&
                    ($ || P || M || w) &&
                    D.isForwarded !== !0 &&
                    (P && (L = D),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      D.id.toString(),
                      x,
                    )),
                    (M || w) &&
                      N != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        D.id.toString(),
                        N,
                      ),
                    (v[E] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(D)));
                }
                if (L != null) {
                  var A = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(L);
                  A && v.unshift(A);
                }
                var F;
                if (
                  (h.isUser() &&
                    (F = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: v,
                      chatWid: h,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var O = v.filter(function (e) {
                    return (
                      !!e.bizBotType &&
                      !o("WAWebMsgGetters").getIsCAPISupport(e)
                    );
                  });
                  if (O.length) {
                    var B = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      h,
                      O,
                    );
                    v.unshift.apply(v, B);
                  }
                }
                if (r("WAWebWid").isCAPISupportAccount(h)) {
                  var W = v.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  W === !0 &&
                    (yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                      chatId: h,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(h),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var q = {
                    msgInfo: t,
                    messageOverwriteOption: c,
                    msgs: v,
                    isOffline: y,
                    latestPrivacyMode:
                      (p = F) == null ? void 0 : p.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (_ =
                        (f = F) == null ? void 0 : f.shouldQueryContactInfo) !=
                      null
                        ? _
                        : !1,
                  },
                  U = o(
                    "WAWebMessageProcessDBPipeline",
                  ).processMsgDataDBPipeline(v, !y);
                if (
                  o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd ||
                  d
                ) {
                  (R == null || R(),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd && (yield U));
                  var V = o(
                    "WAWebMessagePostprocessRenderable",
                  ).postprocessRenderableMessages(q);
                  if (
                    y &&
                    o(
                      "WAWebOfflineHandler",
                    ).OfflineMessageHandler.getResumeType() ===
                      o("WAWebOfflineResumeTypes.flow").ResumeType.NonBlocking
                  )
                    return;
                  yield V;
                  return;
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
              return (u || (u = n("Promise"))).resolve();
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
    ((l.overrideParentKeyForAssociations = d),
      (l.processRenderableMessages = _));
  },
  98,
);
