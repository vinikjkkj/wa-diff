__d(
  "WAWebMessageProcessRenderable",
  [
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
    "WAWebGroupHistoryGating",
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
    "WAWebOfflineResumeTypes.flow",
    "WAWebPreProcessOrderEphemeralExemption",
    "WAWebProtobufsProtocol.pb",
    "WAWebSagaSystemMsg",
    "WAWebStatusDBMessageInfo",
    "WAWebWamEnumPlaceholderPopulationType",
    "WAWebWid",
    "cr:37261",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (e = n("cr:37261")) != null ? e : {},
      p = m.opusProcessChat;
    function _(e, t) {
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
    function f(e, t, n) {
      return e == null || !t.isRegularUser()
        ? n
        : n.map(function (e) {
            return o("WAWebMessageAssociation.flow").isAssociatedMsg(e)
              ? babelHelpers.extends({}, e, {
                  parentMsgKey: _(e.parentMsgKey, t),
                })
              : e;
          });
    }
    async function g(e, t, n, a) {
      var i = f(t.preMatChat, t.chat, e),
        l = await o("WAWebGetPrivacyModeWhenSent").getPrivacyModeWhenSent(t, n),
        s = y(a);
      (s != null &&
        (i = i.map(function (e) {
          return babelHelpers.extends({}, e, { placeholderPopulationType: s });
        })),
        (i =
          l == null
            ? i
            : i.map(function (e) {
                return babelHelpers.extends({}, e, { privacyModeWhenSent: l });
              })));
      var u = t.addressingMode;
      i =
        u == null
          ? i
          : i.map(function (e) {
              return babelHelpers.extends({}, e, { groupAddressingMode: u });
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
        (i = await o(
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
        (i = await o(
          "WAWebMaybeUpdateMessageThreadDetails",
        ).maybeUpdateMessageThreadDetails(i)),
        o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(i)
      );
    }
    async function h(e, t, n, a, i, l, s) {
      if (e.length !== 0) {
        try {
          var c,
            d,
            m,
            p = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.PreProcessing,
            ),
            _ = t.chat,
            f = t.offline != null && !s,
            h = "online";
          s ? (h = "reparsing") : f && (h = "offline");
          var y = await g(e, t, a, l),
            b = y.newMsgs;
          if (
            (p == null || p(),
            o(
              "WAWebMessagingGatingUtils",
            ).isWebReportingTokenDelayProcessingEnabled())
          ) {
            var v = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.ProcessReportingTokenInfo,
            );
            (await o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({ renderableMsgs: b }),
              v == null || v());
          }
          var S = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.Processing,
          );
          b.forEach(function (e) {
            e.id.fromMe &&
              o("WAWebMsgGetters").getIsStatus(e) &&
              r("WAWebStatusDBMessageInfo").updatePeerStatusReceiptInfo(
                e.id,
                f,
                t.statusSetting,
              );
          });
          for (var R = null, L = 0; L < b.length; L++) {
            var E,
              k,
              I,
              T = b[L],
              D = T.messageSecret,
              x = !!(D && (E = T.id.remote) != null && E.isBot()),
              $ =
                (k = (I = T.invokedBotWid) == null ? void 0 : I.isBot()) != null
                  ? k
                  : !1,
              P = T.botGroupParticipant,
              N =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                P instanceof r("WAWebWid") &&
                P.equals(o("WAWebBotUtils").META_BOT_FBID_WID),
              M =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                P instanceof r("WAWebWid") &&
                P.equals(o("WAWebBotUtils").META_BOT_TEE_FBID_WID);
            (D &&
              (x || $ || N || M) &&
              T.isForwarded !== !0 &&
              ($ && (R = T),
              o(
                "WAWebMsmsgMsgSecretCache",
              ).msmsgMsgSecretCache.addMsmsgMsgSecretToCache(
                T.id.toString(),
                D,
              )),
              (N || M) &&
                P != null &&
                o(
                  "WAWebMsmsgMsgSecretCache",
                ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                  T.id.toString(),
                  P,
                ),
              (b[L] = await o(
                "WAWebBotSignatureVerificationPostProcessor",
              ).verifyForwardedBotMessage(T)));
          }
          if (R != null) {
            var w = await o(
              "WAWebBotIncomingInvokeSystemMsg",
            ).createSysMsgForIncomingBotInvoke(R);
            w && b.unshift(w);
          }
          var A;
          if (
            (_.isUser() &&
              (A = await o(
                "WAWebHandlePrivacyModeChange",
              ).handlePrivacyModeChangeAndCreateChat({
                msgs: b,
                chatWid: _,
                bizInfo: a,
                msgMeta: i,
                msgInfo: t,
              })),
            o("WAWebBotBaseGating").isBotEnabled())
          ) {
            var F = b.filter(function (e) {
              return (
                !!e.bizBotType && !o("WAWebMsgGetters").getIsCAPISupport(e)
              );
            });
            if (F.length) {
              var O = await o("WAWebHandleBizBotMsgs").handleBizBotMsgs(_, F);
              b.unshift.apply(b, O);
            }
          }
          var B = await C(b, _);
          if (
            (B != null && b.unshift(B), r("WAWebWid").isCAPISupportAccount(_))
          ) {
            var W = b.some(function (e) {
              return e.shouldShowSupportAISystemMessage === !0;
            });
            W === !0 &&
              (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: _,
                newMsg: o("WAWebSagaSystemMsg").genSagaInitSystemMsg(_),
                handleSingleMsgOrigin: "supportSagaInit",
              }));
          }
          var q = {
              msgInfo: t,
              messageOverwriteOption: l,
              msgs: b,
              isOffline: f,
              latestPrivacyMode: (c = A) == null ? void 0 : c.latestPrivacyMode,
              shouldQueryContactInfo:
                (d = (m = A) == null ? void 0 : m.shouldQueryContactInfo) !=
                null
                  ? d
                  : !1,
            },
            U = o("WAWebMessageProcessDBPipeline").processMsgDataDBPipeline(
              b,
              !f,
            );
          if (
            (o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryPostJoinSenderEnabled() &&
              b.forEach(function (e) {
                return void o(
                  "WAWebGroupHistoryNoticeHandler",
                ).maybeHandleGroupHistoryNotice(e);
              }),
            o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || s)
          ) {
            (S == null || S(),
              o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
                (await U));
            var V = o(
              "WAWebMessagePostprocessRenderable",
            ).postprocessRenderableMessages(q);
            if (
              f &&
              o("WAWebOfflineHandler").OfflineMessageHandler.getResumeType() ===
                o("WAWebOfflineResumeTypes.flow").ResumeType.NonBlocking
            )
              return;
            await V;
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
            .sendLogs("handle_msg: error storing/processing single message");
        }
        return Promise.resolve();
      }
    }
    function y(e) {
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
    async function C(e, t) {
      if (!o("WAWebLimitSharingGatingUtils").isOpusFlagOn() || p == null)
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
          : (await p(t.toString(), {
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
    }
    ((l.overrideParentKeyForAssociations = f),
      (l.processRenderableMessages = h),
      (l.maybeCreateOpusSystemMsg = C));
  },
  98,
);
