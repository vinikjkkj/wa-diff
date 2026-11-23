__d(
  "WAWebMessageProcessRenderable",
  [
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
    async function b(e, t, n, r) {
      var a = h({ chat: t.chat, messages: e, preMatChat: t.preMatChat }),
        i = await o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(t, n),
        l = L(r);
      (l != null &&
        (a = a.map(function (e) {
          return babelHelpers.extends({}, e, { placeholderPopulationType: l });
        })),
        (a =
          i == null
            ? a
            : a.map(function (e) {
                return babelHelpers.extends({}, e, { privacyModeWhenSent: i });
              })));
      var s = t.addressingMode;
      a =
        s == null
          ? a
          : a.map(function (e) {
              return babelHelpers.extends({}, e, { groupAddressingMode: s });
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
        (a = await o(
          "WAWebPreProcessOrderEphemeralExemption",
        ).preProcessOrderEphemeralExemption(a)),
        (a = a.map(function (e) {
          var t = v(e);
          return t != null
            ? babelHelpers.extends({}, e, { invokedBotWid: t })
            : e;
        })),
        (a = await o(
          "WAWebMaybeUpdateMessageThreadDetails",
        ).maybeUpdateMessageThreadDetails(a)),
        o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(a)
      );
    }
    function v(e) {
      var t;
      return e.messageSecret != null
        ? (t = e.mentionedJidList) == null
          ? void 0
          : t.find(function (e) {
              return e && r("WAWebWid").isWid(e) && e.isBot();
            })
        : null;
    }
    async function S(e, t, n, a, i, l, s, m) {
      var p = await o(
          "WAWebHandleMsgProcessUtils",
        ).withoutProcessedBrazilPaymentStateUpdate({
          msgs: e,
          msgInfo: t,
          msgMeta: i,
          reparsing: s,
        }),
        _ = p.msgs,
        f = p.staged;
      if (_.length === 0) return f;
      var g = null;
      try {
        var h,
          v,
          S,
          R,
          L = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.PreProcessing,
          ),
          T = t.chat,
          D = t.offline != null && !s,
          x = await b(_, t, a, l),
          $ = x.newMsgs;
        L == null || L();
        var P = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.ProcessReportingTokenInfo,
        );
        (await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo(
          { renderableMsgs: $, reparsing: s },
        ),
          P == null || P());
        var N = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.Processing,
        );
        $.forEach(function (e) {
          e.id.fromMe &&
            o("WAWebMsgGetters").getIsStatus(e) &&
            o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
              e.id,
              D,
              t.statusSetting,
            );
        });
        for (var M = null, w = [], A = [], F = 0; F < $.length; F++) {
          var O,
            B,
            W,
            q = $[F],
            U = q.messageSecret,
            V =
              (O = (B = q.invokedBotWid) == null ? void 0 : B.isBot()) != null
                ? O
                : !1,
            H = q.botGroupParticipant,
            G = q.id.participant,
            z = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
              q.botGroupParticipants,
              H,
            ),
            j = (W = z == null ? void 0 : z.participants) != null ? W : [];
          (A.push.apply(
            A,
            j.filter(function (e) {
              return e instanceof r("WAWebWid");
            }),
          ),
            U && V && q.isForwarded !== !0 && (M = q),
            k(q),
            q.id.remote.isGroup() &&
              z != null &&
              C(G, z, D, s) &&
              w.push({
                groupWid: q.id.remote,
                participantWids: z.participants,
              }),
            ($[F] = await o(
              "WAWebBotSignatureVerificationPostProcessor",
            ).verifyForwardedBotMessage(q)));
        }
        if (
          (o("WAWebSyncGroupBotSupportFields")
            .maybeLazySyncGroupBotSupportFields(A, w, {
              sourceGroupWid: T.isGroup() ? T : void 0,
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
                .sendLogs("handle-msg-refresh-group-agent-profiles-error");
            }),
          M != null)
        ) {
          var K = await o(
            "WAWebBotIncomingInvokeSystemMsg",
          ).createSysMsgForIncomingBotInvoke(M);
          K && $.unshift(K);
        }
        var Q;
        if (
          (T.isUser() &&
            (Q = await o(
              "WAWebHandlePrivacyModeChange",
            ).handlePrivacyModeChangeAndCreateChat({
              msgs: $,
              chatWid: T,
              bizInfo: a,
              msgMeta: i,
              msgInfo: t,
            })),
          o("WAWebBotBaseGating").isBotEnabled())
        ) {
          var X = $.filter(y);
          if (X.length) {
            var Y = await o("WAWebHandleBizBotMsgs").handleBizBotMsgs(T, X);
            $.unshift.apply($, Y);
          }
        }
        var J = await E($, T);
        if (
          (J != null && $.unshift(J),
          r("WAWebWid").isCAPISupportAccount(T) && !T.isSupportAgentBot())
        ) {
          var Z = $.some(function (e) {
            return e.shouldShowSupportAISystemMessage === !0;
          });
          Z === !0 &&
            (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: T,
              newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(T),
              handleSingleMsgOrigin: "supportSagaInit",
            }));
        }
        var ee = {
            msgInfo: t,
            messageOverwriteOption: l,
            msgs: $,
            isOffline: D,
            latestPrivacyMode: (h = Q) == null ? void 0 : h.latestPrivacyMode,
            shouldQueryContactInfo:
              (v = (S = Q) == null ? void 0 : S.shouldQueryContactInfo) != null
                ? v
                : !1,
          },
          te = o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
          ne =
            (m == null || (R = m.callerHandles) == null
              ? void 0
              : R.has("flush")) === !0,
          re = I(ne, D, te),
          oe = re.flushImmediately,
          ae = oe ? new (o("WAResolvable").Resolvable)() : null,
          ie =
            ae == null
              ? o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                  flushImmediatly: !1,
                  msgData: $,
                })
              : o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                  flushImmediatly: !0,
                  msgData: $,
                  uiNotified: ae,
                }),
          le = ie.done,
          se = ie.written;
        ((g = { written: se }),
          le.then(function () {
            return o(
              "WAWebLimitSharingProtoUtils",
            ).applyLimitSharingHeldForStoredMsgs($);
          }));
        try {
          if (
            ($.forEach(function (e) {
              return void o(
                "WAWebGroupHistoryNoticeHandler",
              ).maybeHandleGroupHistoryNotice(e);
            }),
            o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || s)
          ) {
            var ue;
            if (
              (N == null || N(),
              (m == null || (ue = m.callerHandles) == null
                ? void 0
                : ue.has("ui")) === !0)
            )
              return {
                uiUpdate: { kind: "renderable", params: ee },
                written: se,
              };
            re.awaited &&
              (o("WAWebOfflineResumeCounters").maybeLogAwaitUnflushedMsgWrite(
                !oe,
                o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              ),
              await le);
            var ce = o(
                "WAWebMessagePostprocessRenderable",
              ).postprocessRenderableMessages(ee),
              de = o(
                "WAWebCoexV2MessageAckProjection",
              ).reconcileCoexV2ReceiptAcksAfterMessagePersisted($, le, ce, {
                deferUntilMessagePersisted: re.deferReceiptReconciliation,
              });
            return D &&
              o("WAWebOfflineHandler").OfflineMessageHandler.getResumeType() ===
                o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
              ? (Promise.all([ce, de]).catch(function (e) {
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
                g)
              : (await Promise.all([ce, de]), g);
          }
          await o(
            "WAWebCoexV2MessageAckProjection",
          ).reconcileCoexV2ReceiptAcksAfterMessagePersisted($, le, null, {
            deferUntilMessagePersisted: D || ne,
          });
        } finally {
          ae == null || ae.resolve(void 0);
        }
      } catch (e) {
        var me;
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
            .sendLogs("handle_msg: error storing/processing single message"),
          g == null &&
            (m == null || (me = m.callerHandles) == null
              ? void 0
              : me.has("errors")) === !0)
        )
          throw e;
      }
      return g;
    }
    function R(e, t) {
      return e ? "reparsing" : t ? "offline" : "online";
    }
    function L(e) {
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
    async function E(e, t) {
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
          i = await o("WAWebApiChatCommon").getChatRecord(t);
        return (i == null || (a = i.limitSharing) == null
          ? void 0
          : a.sharingLimited) !== !0
          ? null
          : (await f(t.toString(), {
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
    }
    function k(e) {
      var t,
        n = e.messageSecret,
        r = v(e) != null,
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
    function I(e, t, n) {
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
    ((l.overrideParentKeyForAssociations = h),
      (l.isBizBotDisclosureMsg = y),
      (l.shouldCollectGroupAgentRosterGossip = C),
      (l.processRenderableMessages = S),
      (l.maybeCreateOpusSystemMsg = E),
      (l.cacheMsmsgDecryptData = k));
  },
  98,
);
