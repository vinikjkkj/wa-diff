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
        l = E(r);
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
          L,
          E = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.PreProcessing,
          ),
          D = t.chat,
          x = t.offline != null && !s,
          $ = await b(_, t, a, l),
          P = $.newMsgs;
        E == null || E();
        var N = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.ProcessReportingTokenInfo,
        );
        (await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo(
          { renderableMsgs: P, reparsing: s },
        ),
          N == null || N());
        var M = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.Processing,
        );
        P.forEach(function (e) {
          e.id.fromMe &&
            o("WAWebMsgGetters").getIsStatus(e) &&
            o("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
              e.id,
              x,
              t.statusSetting,
            );
        });
        for (var w = null, A = [], F = [], O = 0; O < P.length; O++) {
          var B,
            W,
            q,
            U = P[O],
            V = U.messageSecret,
            H =
              (B = (W = U.invokedBotWid) == null ? void 0 : W.isBot()) != null
                ? B
                : !1,
            G = U.botGroupParticipant,
            z = U.id.participant,
            j = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
              U.botGroupParticipants,
              G,
            ),
            K = (q = j == null ? void 0 : j.participants) != null ? q : [];
          (F.push.apply(
            F,
            K.filter(function (e) {
              return e instanceof r("WAWebWid");
            }),
          ),
            V && H && U.isForwarded !== !0 && (w = U),
            I(U),
            U.id.remote.isGroup() &&
              j != null &&
              C(z, j, x, s) &&
              A.push({
                groupWid: U.id.remote,
                participantWids: j.participants,
              }),
            (P[O] = await o(
              "WAWebBotSignatureVerificationPostProcessor",
            ).verifyForwardedBotMessage(U)));
        }
        if (
          (o("WAWebSyncGroupBotSupportFields")
            .maybeLazySyncGroupBotSupportFields(F, A, {
              sourceGroupWid: D.isGroup() ? D : void 0,
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
          w != null)
        ) {
          var Q = await o(
            "WAWebBotIncomingInvokeSystemMsg",
          ).createSysMsgForIncomingBotInvoke(w);
          Q && P.unshift(Q);
        }
        var X;
        if (
          (D.isUser() &&
            (X = await o(
              "WAWebHandlePrivacyModeChange",
            ).handlePrivacyModeChangeAndCreateChat({
              msgs: P,
              chatWid: D,
              bizInfo: a,
              msgMeta: i,
              msgInfo: t,
            })),
          o("WAWebBotBaseGating").isBotEnabled())
        ) {
          var Y = P.filter(y);
          if (Y.length) {
            var J = await o("WAWebHandleBizBotMsgs").handleBizBotMsgs(D, Y);
            P.unshift.apply(P, J);
          }
        }
        var Z = await k(P, D);
        if (
          (Z != null && P.unshift(Z),
          r("WAWebWid").isCAPISupportAccount(D) && !D.isSupportAgentBot())
        ) {
          var ee = P.some(function (e) {
            return e.shouldShowSupportAISystemMessage === !0;
          });
          ee === !0 &&
            (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: D,
              newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(D),
              handleSingleMsgOrigin: "supportSagaInit",
            }));
        }
        var te = {
            msgInfo: t,
            messageOverwriteOption: l,
            msgs: P,
            isOffline: x,
            latestPrivacyMode: (h = X) == null ? void 0 : h.latestPrivacyMode,
            shouldQueryContactInfo:
              (v = (S = X) == null ? void 0 : S.shouldQueryContactInfo) != null
                ? v
                : !1,
          },
          ne = o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
          re =
            (m == null || (L = m.callerHandles) == null
              ? void 0
              : L.has("flush")) === !0,
          oe = T(re, x, ne),
          ae = oe.flushImmediately,
          ie = R(P, ae),
          le = ie.msgWritePromise,
          se = ie.uiNotified,
          ue = ie.written;
        ((g = { written: ue }),
          le.then(function () {
            return o(
              "WAWebLimitSharingProtoUtils",
            ).applyLimitSharingHeldForStoredMsgs(P);
          }));
        try {
          if (
            (P.forEach(function (e) {
              return void o(
                "WAWebGroupHistoryNoticeHandler",
              ).maybeHandleGroupHistoryNotice(e);
            }),
            o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || s)
          ) {
            var ce;
            if (
              (M == null || M(),
              (m == null || (ce = m.callerHandles) == null
                ? void 0
                : ce.has("ui")) === !0)
            )
              return {
                uiUpdate: { kind: "renderable", params: te },
                written: ue,
              };
            oe.awaited &&
              (o("WAWebOfflineResumeCounters").maybeLogAwaitUnflushedMsgWrite(
                !ae,
                o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              ),
              await le);
            var de = o(
                "WAWebMessagePostprocessRenderable",
              ).postprocessRenderableMessages(te),
              me = o(
                "WAWebCoexV2MessageAckProjection",
              ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(P, le, de, {
                deferUntilMessagePersisted: oe.deferReceiptReconciliation,
              });
            return x &&
              o("WAWebOfflineHandler").OfflineMessageHandler.getResumeType() ===
                o("WAWebOfflineResumeTypes").ResumeType.NonBlocking
              ? (Promise.all([de, me]).catch(function (e) {
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
              : (await Promise.all([de, me]), g);
          }
          await o(
            "WAWebCoexV2MessageAckProjection",
          ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(P, le, null, {
            deferUntilMessagePersisted: x || re,
          });
        } finally {
          se == null || se.resolve(void 0);
        }
      } catch (e) {
        var pe;
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
            (m == null || (pe = m.callerHandles) == null
              ? void 0
              : pe.has("errors")) === !0)
        )
          throw e;
      }
      return g;
    }
    function R(e, t) {
      var n = t ? new (o("WAResolvable").Resolvable)() : null,
        r =
          n == null
            ? o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                flushImmediatly: !1,
                msgData: e,
              })
            : o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline({
                flushImmediatly: !0,
                msgData: e,
                uiNotified: n,
              }),
        a = r.done,
        i = r.written;
      return { msgWritePromise: a, uiNotified: n, written: i };
    }
    function L(e, t) {
      return e ? "reparsing" : t ? "offline" : "online";
    }
    function E(e) {
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
    async function k(e, t) {
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
    function I(e) {
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
    function T(e, t, n) {
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
      (l.maybeCreateOpusSystemMsg = k),
      (l.cacheMsmsgDecryptData = I));
  },
  98,
);
