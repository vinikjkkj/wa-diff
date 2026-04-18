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
    "WAWebOfflineResumeTypes.flow",
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
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = g(t.preMatChat, t.chat, e),
              l = yield o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(
                t,
                n,
              ),
              s = v(a);
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a, i) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  y = t.offline != null && !c,
                  C = "online";
                c ? (C = "reparsing") : y && (C = "offline");
                var b = yield h(e, t, i, s),
                  v = b.newMsgs;
                if (
                  (f == null || f(),
                  o(
                    "WAWebMessagingGatingUtils",
                  ).isWebReportingTokenDelayProcessingEnabled())
                ) {
                  var R = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.ProcessReportingTokenInfo,
                  );
                  (yield o(
                    "WAWebHandleMsgValidate",
                  ).validateAndProcessReportingTokenInfo({ renderableMsgs: v }),
                    R == null || R());
                }
                var L = o(
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
                for (var E = null, k = 0; k < v.length; k++) {
                  var I,
                    T,
                    D,
                    x = v[k],
                    $ = x.messageSecret,
                    P = !!($ && (I = x.id.remote) != null && I.isBot()),
                    N =
                      (T =
                        (D = x.invokedBotWid) == null ? void 0 : D.isBot()) !=
                      null
                        ? T
                        : !1,
                    M = x.botGroupParticipant,
                    w =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                      M instanceof r("WAWebWid") &&
                      M.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
                    A =
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      M instanceof r("WAWebWid") &&
                      M.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
                  ($ &&
                    (P || N || w || A) &&
                    x.isForwarded !== !0 &&
                    (N && (E = x),
                    o(
                      "WAWebMsmsgMsgSecretCache",
                    ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                      x.id.toString(),
                      $,
                    )),
                    (w || A) &&
                      M != null &&
                      o(
                        "WAWebMsmsgMsgSecretCache",
                      ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                        x.id.toString(),
                        M,
                      ),
                    (v[k] = yield o(
                      "WAWebBotSignatureVerificationPostProcessor",
                    ).verifyForwardedBotMessage(x)));
                }
                if (E != null) {
                  var F = yield o(
                    "WAWebBotIncomingInvokeSystemMsg",
                  ).createSysMsgForIncomingBotInvoke(E);
                  F && v.unshift(F);
                }
                var O;
                if (
                  (g.isUser() &&
                    (O = yield o(
                      "WAWebHandlePrivacyModeChange",
                    ).handlePrivacyModeChangeAndCreateChat({
                      msgs: v,
                      chatWid: g,
                      bizInfo: i,
                      msgMeta: l,
                      msgInfo: t,
                    })),
                  o("WAWebBotBaseGating").isBotEnabled())
                ) {
                  var B = v.filter(function (e) {
                    return (
                      !!e.bizBotType &&
                      !o("WAWebMsgGetters").getIsCAPISupport(e)
                    );
                  });
                  if (B.length) {
                    var W = yield o("WAWebHandleBizBotMsgs").handleBizBotMsgs(
                      g,
                      B,
                    );
                    v.unshift.apply(v, W);
                  }
                }
                var q = yield S(v, g);
                if (
                  (q != null && v.unshift(q),
                  r("WAWebWid").isCAPISupportAccount(g))
                ) {
                  var U = v.some(function (e) {
                    return e.shouldShowSupportAISystemMessage === !0;
                  });
                  U === !0 &&
                    (yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: g,
                      newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(g),
                      handleSingleMsgOrigin: "supportSagaInit",
                    }));
                }
                var V = {
                    msgInfo: t,
                    messageOverwriteOption: s,
                    msgs: v,
                    isOffline: y,
                    latestPrivacyMode:
                      (d = O) == null ? void 0 : d.latestPrivacyMode,
                    shouldQueryContactInfo:
                      (p =
                        (_ = O) == null ? void 0 : _.shouldQueryContactInfo) !=
                      null
                        ? p
                        : !1,
                  },
                  H = o(
                    "WAWebMessageProcessDBPipeline",
                  ).processMsgDataDBPipeline(v, !y);
                if (
                  o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd ||
                  c
                ) {
                  (L == null || L(),
                    o("WAWebBackendEventBus").BackendEventBus
                      .isOfflineDeliveryEnd && (yield H));
                  var G = o(
                    "WAWebMessagePostprocessRenderable",
                  ).postprocessRenderableMessages(V);
                  if (
                    y &&
                    o(
                      "WAWebOfflineHandler",
                    ).OfflineMessageHandler.getResumeType() ===
                      o("WAWebOfflineResumeTypes.flow").ResumeType.NonBlocking
                  )
                    return;
                  yield G;
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        R.apply(this, arguments)
      );
    }
    ((l.overrideParentKeyForAssociations = g),
      (l.processRenderableMessages = C),
      (l.maybeCreateOpusSystemMsg = S));
  },
  98,
);
