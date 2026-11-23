__d(
  "WAWebSendMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebAppTracker",
    "WAWebBackendRuntime",
    "WAWebBizAgentAction",
    "WAWebBizShowOrderEphemeralSystemAction",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotLoggingUtils",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBRevokeInviteV4",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMessagingGatingUtils",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPathfinderMessageSent",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebQbmMessageReplyLogEventLazy",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebVoipCallLogMessageTarget",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return p(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function d(e, t) {
      return g(o("WAWebStateUtils").unproxy(e), t);
    }
    async function m(e, t, n) {
      var r = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e,
          "voipCallLog",
          {
            buildFirstIncomingMsg: function (n) {
              return o("WAWebVoipCallLogMessageTarget").withCallLogChatId(t, n);
            },
          },
        ),
        a = r.chat,
        i = o("WAWebVoipCallLogMessageTarget").withCallLogChatId(t, a.id),
        l = o("WAWebMsgCollection").MsgCollection.add(
          babelHelpers.extends({}, i),
        )[0];
      if (l) {
        var s = async function (t) {
          return (
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: a.id,
              newMsg: i,
              handleSingleMsgOrigin: "voipNotification",
              messageOverwriteOption: n,
            }),
            { msg: t }
          );
        };
        return f(a, s(l));
      }
      return Promise.resolve(null);
    }
    function p(t, n, a) {
      (a === void 0 && (a = void 0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "_addAndSendMsgToChat start chatId: ",
              "",
            ])),
          t.id.toLogString(),
        ));
      var i,
        l = Promise.resolve(n).then(async function (e) {
          var n, a, l, c, d;
          await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
            t,
            e,
            "addAndSendMsgToChat",
          );
          var m = o(
              "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
            ).getPrivacyModeFromModel(t.id),
            p = await o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(e),
            f = p[0],
            g = p[1];
          o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, e, { threadIds: f }),
          );
          var h =
              (n = e.botModeSelection) != null
                ? n
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    e,
                  ),
            y =
              (a =
                (l = e.botModeOverride) != null
                  ? l
                  : o(
                      "WAWebMaybeGetBotModeSelection",
                    ).maybeGetBotDynamicModeSelection(t, e)) != null
                ? a
                : void 0,
            C = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
            b = babelHelpers.extends({}, e, {
              messageSecret: (await _(t, e))
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : e.messageSecret,
              agentId: o("WAWebBizAgentAction").getAgentId(e),
              threadIds:
                (c = o(
                  "WAWebMaybeGetAppendedViewRepliesThreadId",
                ).maybeGetAppendedViewRepliesThreadId(
                  babelHelpers.extends({}, e, { threadIds: f }),
                )) != null
                  ? c
                  : f,
              aiThreadInfo: g,
              botModeSelection: h,
              botModeOverride: y,
              botMetricsMetadata: C,
            });
          m && (b.privacyModeWhenSent = m);
          var v = await o(
              "WAWebSendMsgChatActionUtils",
            ).maybeDisableEphemeralityForMsg(t, b),
            S = v.msgData,
            R = v.systemMsgs,
            L = new (o("WAWebMsgModel").Msg)(S),
            E = o("WAWebMsgCollection").MsgCollection.add(L)[0];
          if (E) {
            var k, I, T;
            i = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(E, t.id);
            var D = !!((k = t.groupMetadata) != null && k.isLidAddressingMode),
              x = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                t.id,
                o("WAWebWamMsgUtils").msgIsLid(E, t.id, D),
              );
            if (
              ((E.wamMessageSendReporter = new (o(
                "WAWebMessageSendReporter",
              ).MessageSendReporter)(
                E,
                babelHelpers.extends({}, x, {
                  frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                    .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                }),
              )),
              (E.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: E.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(E),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(E),
              })),
              (d = await r("WAWebEmptyChatSystemMsg")(E, t)),
              !d)
            ) {
              var $ = o(
                "WAWebBizShowOrderEphemeralSystemAction",
              ).getMaybeSystemMsgForOrderEphemeralExemption(E, t);
              $ && (d = [$]);
            }
            R && (d = [].concat(d != null ? d : [], R));
            var P = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              t,
              "opus-send-msg-fail",
            );
            P && (d = [P].concat(d != null ? d : []));
            var N = d ? [].concat(d, [S]) : [S];
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat prepared: msgId=",
                    " consistent=",
                    " chatId=",
                    " remote=",
                    " systemMsgs=",
                    "",
                  ])),
                E.id.id,
                t.id.equals(e.id.remote),
                t.id.toLogString(),
                (I = e.id.remote) == null ? void 0 : I.toLogString(),
                N.length - 1,
              ),
              (T = E.wamMessageSendPerfReporter) == null || T.startSavedStage(),
              (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).storeMessages
                : o("WAWebDBProcessMessage").storeMessages)(N, t.id)
                .then(function () {
                  var e;
                  if (
                    ((e = E.wamMessageSendPerfReporter) == null ||
                      e.postSavedStage(),
                    o(
                      "WAWebPathfinderMessageSent",
                    ).recordPathfinderMessageSentAfterCommit(E),
                    o("WAWebThreadMsgUtils").isThreadMsg(S) &&
                      o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([S]),
                    E.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                  ) {
                    var t = parseInt(String(E.inviteCodeExp), 10),
                      n = E.from.isLid()
                        ? o("WAWebLidMigrationUtils").toLid(E.to)
                        : E.to;
                    if (!n) {
                      var r =
                        "[group-invites] failed to get lid mapping when revoking existing duplicate group invite";
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "",
                            ])),
                          r,
                        )
                        .sendLogs(r);
                      return;
                    }
                    return o("WAWebDBRevokeInviteV4")
                      .revokeGroupInviteV4({
                        expiration: t,
                        from: E.from.toString(),
                        groupId: E.inviteGrp,
                        to: n.toString(),
                      })
                      .then(function () {
                        return o(
                          "WAWebApiGroupInviteV4Store",
                        ).persistGroupInviteV4Msg(E.id.toString(), {
                          id: E.id.toString(),
                          from: E.from.toString(),
                          to: n.toString(),
                          groupId: E.inviteGrp,
                          expiration: t,
                          expired: o("WATimeUtils").unixTime() >= t,
                        });
                      });
                  }
                })
                .then(function () {
                  return E.waitForPrep().then(function () {
                    return d ? { msg: E, systemMsgs: d } : { msg: E };
                  });
                })
            );
          }
          throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", b);
        }),
        c = f(
          t,
          l.then(function (e) {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.SendMessage,
              ),
              e
            );
          }),
        );
      c.then(function (e) {
        return o("WAWebQbmMessageReplyLogEventLazy").logQbmMessageReply({
          chat: t,
          replyMessageType: e.type,
          replyMsg: e,
        });
      }).catch(r("WAWebNoop"));
      var d = a
          ? c.then(a).then(function () {
              return c;
            })
          : c,
        m = g(t, d).then(function (e) {
          return (
            e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (i == null || i()),
            e
          );
        });
      return [c, m];
    }
    async function _(e, t) {
      return t.messageSecret != null
        ? !1
        : o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(t.type, t.subtype)
          ? !0
          : o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(e.id);
    }
    function f(e, t) {
      return e.addQueue
        .enqueue(t)
        .then(async function (t) {
          var n,
            r = t.msg,
            a = t.systemMsgs;
          if (
            ((n = r.wamMessageSendPerfReporter) == null ||
              n.startRenderedStage(),
            a)
          ) {
            var i = a.map(function (e) {
              return new (o("WAWebMsgModel").Msg)(e);
            });
            e.msgs.add(i);
          }
          var l = e.msgs.add(r)[0];
          return (
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              l,
            ]),
            l
          );
        })
        .then(function (t) {
          var n;
          return (
            (e.createdLocally = !1),
            (n = t.wamMessageSendPerfReporter) == null || n.postRenderedStage(),
            t
          );
        });
    }
    function g(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            var n = await e.sendQueue.enqueue(t);
            return (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageSendService").MessageSendService,
                  ).sendMsgRecord
                : o("WAWebSendMsgRecordAction").sendMsgRecord
            )(n);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.addAndSendMsgToChat = c),
      (l.resendMsgToChat = d),
      (l.addVoipCallLogMsgToChat = m));
  },
  98,
);
