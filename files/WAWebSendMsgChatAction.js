__d(
  "WAWebSendMsgChatAction",
  [
    "WACommonTaskScheduler",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiGroupInviteV4Store",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizShowOrderEphemeralSystemAction",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotLoggingUtils",
    "WAWebDBProcessMessage",
    "WAWebDBRevokeInviteV4",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return h(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function f(e, t) {
      return C(o("WAWebStateUtils").unproxy(e), t);
    }
    async function g(e, t) {
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e,
          "voipCallLog",
        ),
        r = n.chat,
        a = o("WAWebMsgCollection").MsgCollection.add(
          babelHelpers.extends({}, t),
        )[0];
      if (a) {
        var i = async function (n) {
          return (
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: r.id,
              newMsg: t,
              handleSingleMsgOrigin: "voipNotification",
            }),
            { msg: n }
          );
        };
        return y(r, i(a));
      }
      return Promise.resolve(null);
    }
    function h(t, n, a) {
      (a === void 0 && (a = void 0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "_addAndSendMsgToChat start chatId: ",
              "",
            ])),
          t.id.toLogString(),
        ));
      var i = Promise.resolve(n).then(async function (e) {
          var n, a, i, l, _, f;
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "_addAndSendMsgToChat consistent msg id? ",
                ". ",
                ", ",
                "",
              ])),
            t.id.equals(e.id.remote),
            t.id.toLogString(),
            (n = e.id.remote) == null ? void 0 : n.toLogString(),
          ),
            await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              t,
              e,
              "addAndSendMsgToChat",
            ));
          var g = o(
              "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
            ).getPrivacyModeFromModel(t.id),
            h = await o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(e),
            y = h[0],
            C = h[1];
          o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, e, { threadIds: y }),
          );
          var b =
              (a = e.botModeSelection) != null
                ? a
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    e,
                  ),
            v =
              (i =
                (l = e.botModeOverride) != null
                  ? l
                  : o(
                      "WAWebMaybeGetBotModeSelection",
                    ).maybeGetBotDynamicModeSelection(t, e)) != null
                ? i
                : void 0,
            S = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
            R = babelHelpers.extends({}, e, {
              agentId: o("WAWebBizAgentAction").getAgentId(e),
              threadIds:
                (_ = o(
                  "WAWebMaybeGetAppendedViewRepliesThreadId",
                ).maybeGetAppendedViewRepliesThreadId(
                  babelHelpers.extends({}, e, { threadIds: y }),
                )) != null
                  ? _
                  : y,
              aiThreadInfo: C,
              botModeSelection: b,
              botModeOverride: v,
              botMetricsMetadata: S,
            });
          g && (R.privacyModeWhenSent = g);
          var L = await o(
              "WAWebSendMsgChatActionUtils",
            ).maybeDisableEphemeralityForMsg(t, R),
            E = L.msgData,
            k = L.systemMsgs,
            I = new (o("WAWebMsgModel").Msg)(E),
            T = o("WAWebMsgCollection").MsgCollection.add(I)[0];
          if (T) {
            var D,
              x,
              $ = !!((D = t.groupMetadata) != null && D.isLidAddressingMode),
              P = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                t.id,
                o("WAWebWamMsgUtils").msgIsLid(T, t.id, $),
              );
            if (
              ((T.wamMessageSendReporter = new (o(
                "WAWebMessageSendReporter",
              ).MessageSendReporter)(
                T,
                babelHelpers.extends({}, P, {
                  frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                    .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                }),
              )),
              (T.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: T.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(T),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(T),
              })),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat before system messages ",
                    "",
                  ])),
                t.id.toLogString(),
              ),
              (f = await r("WAWebEmptyChatSystemMsg")(T, t)),
              !f)
            ) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat before ephemeral system messages",
                  ])),
              );
              var N = o(
                "WAWebBizShowOrderEphemeralSystemAction",
              ).getMaybeSystemMsgForOrderEphemeralExemption(T, t);
              N && (f = [N]);
            }
            k && (f = [].concat(f != null ? f : [], k));
            var M = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              t,
              "opus-send-msg-fail",
            );
            (M && (f = [M].concat(f != null ? f : [])),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "_addAndSendMsgToChat after system messages",
                  ])),
              ));
            var w = f ? [].concat(f, [E]) : [E];
            return (
              (x = T.wamMessageSendPerfReporter) == null || x.startSavedStage(),
              o("WAWebDBProcessMessage")
                .storeMessages(w, t.id)
                .then(function () {
                  var e;
                  if (
                    ((e = T.wamMessageSendPerfReporter) == null ||
                      e.postSavedStage(),
                    o("WAWebThreadMsgUtils").isThreadMsg(E) &&
                      o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([E]),
                    T.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                  ) {
                    var t = parseInt(T.inviteCodeExp, 10),
                      n = T.from.isLid()
                        ? o("WAWebLidMigrationUtils").toLid(T.to)
                        : T.to;
                    if (!n) {
                      var r = o(
                        "WAWebLid1X1MigrationGating",
                      ).Lid1X1MigrationUtils.isLidMigrated();
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-invites] isLidMigrated: ",
                            "",
                          ])),
                        r,
                      );
                      var a =
                        "[group-invites] failed to get lid mapping when revoking existing duplicate group invite";
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "",
                            ])),
                          a,
                        )
                        .sendLogs(a);
                      return;
                    }
                    return o("WAWebDBRevokeInviteV4")
                      .revokeGroupInviteV4({
                        expiration: t,
                        from: T.from.toString(),
                        groupId: T.inviteGrp,
                        to: n.toString(),
                      })
                      .then(function () {
                        return o(
                          "WAWebApiGroupInviteV4Store",
                        ).persistGroupInviteV4Msg(T.id.toString(), {
                          id: T.id.toString(),
                          from: T.from.toString(),
                          to: n.toString(),
                          groupId: T.inviteGrp,
                          expiration: t,
                          expired: o("WATimeUtils").unixTime() >= t,
                        });
                      });
                  }
                })
                .then(function () {
                  return T.waitForPrep().then(function () {
                    return f ? { msg: T, systemMsgs: f } : { msg: T };
                  });
                })
            );
          }
          throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", R);
        }),
        l = y(t, i),
        _ = a
          ? l.then(a).then(function () {
              return l;
            })
          : l,
        f = C(t, _);
      return [l, f];
    }
    function y(e, t) {
      return e.addQueue
        .enqueue(t)
        .then(async function (t) {
          var n,
            a = t.msg,
            i = t.systemMsgs;
          if (
            (o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
            o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_msg_send_handler",
            ) &&
              (o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? await r("WACommonTaskScheduler").yield()
                : await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
            (n = a.wamMessageSendPerfReporter) == null ||
              n.startRenderedStage(),
            i)
          ) {
            var l = i.map(function (e) {
              return new (o("WAWebMsgModel").Msg)(e);
            });
            e.msgs.add(l);
          }
          var s = e.msgs.add(a)[0];
          return (
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              s,
            ]),
            s
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
    function C(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          async function () {
            var n = await e.sendQueue.enqueue(t);
            return o("WAWebSendMsgRecordAction").sendMsgRecord(n);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.addAndSendMsgToChat = _),
      (l.resendMsgToChat = f),
      (l.addVoipCallLogMsgToChat = g));
  },
  98,
);
