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
    "WAWebPathfinderAccountToken",
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
    function c(e, t, n, r) {
      return p({
        chat: o("WAWebStateUtils").unproxy(e),
        msgPropsOrPromise: t,
        beforeSend: n,
        pathfinderAccountToken: o(
          "WAWebPathfinderAccountToken",
        ).resolvePathfinderCaptureAccountToken(
          r == null ? void 0 : r.pathfinderAccountToken,
        ),
      });
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
    function p(t) {
      var n = t.beforeSend,
        a = t.chat,
        i = t.msgPropsOrPromise,
        l = t.pathfinderAccountToken;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "_addAndSendMsgToChat start chatId: ",
            "",
          ])),
        a.id.toLogString(),
      );
      var c,
        d = Promise.resolve(i).then(async function (e) {
          var t, n, i, d, m;
          await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
            a,
            e,
            "addAndSendMsgToChat",
          );
          var p = o(
              "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
            ).getPrivacyModeFromModel(a.id),
            f = await o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(e),
            g = f[0],
            h = f[1];
          o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            a,
            babelHelpers.extends({}, e, { threadIds: g }),
          );
          var y =
              (t = e.botModeSelection) != null
                ? t
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    a,
                    e,
                  ),
            C =
              (n =
                (i = e.botModeOverride) != null
                  ? i
                  : o(
                      "WAWebMaybeGetBotModeSelection",
                    ).maybeGetBotDynamicModeSelection(a, e)) != null
                ? n
                : void 0,
            b = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
            v = babelHelpers.extends({}, e, {
              messageSecret: (await _(a, e))
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : e.messageSecret,
              agentId: o("WAWebBizAgentAction").getAgentId(e),
              threadIds:
                (d = o(
                  "WAWebMaybeGetAppendedViewRepliesThreadId",
                ).maybeGetAppendedViewRepliesThreadId(
                  babelHelpers.extends({}, e, { threadIds: g }),
                )) != null
                  ? d
                  : g,
              aiThreadInfo: h,
              botModeSelection: y,
              botModeOverride: C,
              botMetricsMetadata: b,
            });
          p && (v.privacyModeWhenSent = p);
          var S = await o(
              "WAWebSendMsgChatActionUtils",
            ).maybeDisableEphemeralityForMsg(a, v),
            R = S.msgData,
            L = S.systemMsgs,
            E = new (o("WAWebMsgModel").Msg)(R),
            k = o("WAWebMsgCollection").MsgCollection.add(E)[0];
          if (k) {
            var I, T, D;
            c = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(k, a.id);
            var x = !!((I = a.groupMetadata) != null && I.isLidAddressingMode),
              $ = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                a.id,
                o("WAWebWamMsgUtils").msgIsLid(k, a.id, x),
              );
            if (
              ((k.wamMessageSendReporter = new (o(
                "WAWebMessageSendReporter",
              ).MessageSendReporter)(
                k,
                babelHelpers.extends({}, $, {
                  frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                    .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                }),
              )),
              (k.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: k.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(k),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(k),
              })),
              (m = await r("WAWebEmptyChatSystemMsg")(k, a)),
              !m)
            ) {
              var P = o(
                "WAWebBizShowOrderEphemeralSystemAction",
              ).getMaybeSystemMsgForOrderEphemeralExemption(k, a);
              P && (m = [P]);
            }
            L && (m = [].concat(m != null ? m : [], L));
            var N = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              a,
              "opus-send-msg-fail",
            );
            N && (m = [N].concat(m != null ? m : []));
            var M = m ? [].concat(m, [R]) : [R];
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
                k.id.id,
                a.id.equals(e.id.remote),
                a.id.toLogString(),
                (T = e.id.remote) == null ? void 0 : T.toLogString(),
                M.length - 1,
              ),
              (D = k.wamMessageSendPerfReporter) == null || D.startSavedStage(),
              (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).storeMessages
                : o("WAWebDBProcessMessage").storeMessages)(M, a.id)
                .then(function () {
                  var e;
                  if (
                    ((e = k.wamMessageSendPerfReporter) == null ||
                      e.postSavedStage(),
                    o(
                      "WAWebPathfinderMessageSent",
                    ).recordPathfinderMessageSentAfterCommit(k, l),
                    o("WAWebThreadMsgUtils").isThreadMsg(R) &&
                      o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([R]),
                    k.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                  ) {
                    var t = parseInt(String(k.inviteCodeExp), 10),
                      n = k.from.isLid()
                        ? o("WAWebLidMigrationUtils").toLid(k.to)
                        : k.to;
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
                        from: k.from.toString(),
                        groupId: k.inviteGrp,
                        to: n.toString(),
                      })
                      .then(function () {
                        return o(
                          "WAWebApiGroupInviteV4Store",
                        ).persistGroupInviteV4Msg(k.id.toString(), {
                          id: k.id.toString(),
                          from: k.from.toString(),
                          to: n.toString(),
                          groupId: k.inviteGrp,
                          expiration: t,
                          expired: o("WATimeUtils").unixTime() >= t,
                        });
                      });
                  }
                })
                .then(function () {
                  return k.waitForPrep().then(function () {
                    return m ? { msg: k, systemMsgs: m } : { msg: k };
                  });
                })
            );
          }
          throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", v);
        }),
        m = f(
          a,
          d.then(function (e) {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.SendMessage,
              ),
              e
            );
          }),
        );
      m.then(function (e) {
        return o("WAWebQbmMessageReplyLogEventLazy").logQbmMessageReply({
          chat: a,
          replyMessageType: e.type,
          replyMsg: e,
        });
      }).catch(r("WAWebNoop"));
      var p = n
          ? m.then(n).then(function () {
              return m;
            })
          : m,
        h = g(a, p).then(function (e) {
          return (
            e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (c == null || c()),
            e
          );
        });
      return [m, h];
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
