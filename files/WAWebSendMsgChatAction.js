__d(
  "WAWebSendMsgChatAction",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t, n) {
      return C(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function g(e, t) {
      return v(o("WAWebStateUtils").unproxy(e), t);
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "voipCallLog",
            ),
            a = r.chat,
            i = o("WAWebMsgCollection").MsgCollection.add(
              babelHelpers.extends({}, t),
            )[0];
          if (i) {
            var l = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return (
                    yield o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: a.id,
                      newMsg: t,
                      handleSingleMsgOrigin: "voipNotification",
                    }),
                    { msg: e }
                  );
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
            return b(a, l(i));
          }
          return (_ || (_ = n("Promise"))).resolve(null);
        })),
        y.apply(this, arguments)
      );
    }
    function C(t, a, i) {
      (i === void 0 && (i = void 0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "_addAndSendMsgToChat start chatId: ",
              "",
            ])),
          t.id.toLogString(),
        ));
      var l = (_ || (_ = n("Promise"))).resolve(a).then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
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
                  yield o(
                    "WAWebLidMigrationFrontendUtils",
                  ).validateMissingAccountLid(t, e, "addAndSendMsgToChat"));
                var g = o(
                    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
                  ).getPrivacyModeFromModel(t.id),
                  h = yield o(
                    "WAWebMaybeGetAppendedAiThreadAttributes",
                  ).maybeGetAppendedAiThreadAttributes(e),
                  y = h[0],
                  C = h[1];
                o(
                  "WAWebBotFrontendLoggingUtils",
                ).maybeLogFirstPromptSentInAiThread(
                  t,
                  babelHelpers.extends({}, e, { threadIds: y }),
                );
                var b =
                    (a = e.botModeSelection) != null
                      ? a
                      : o(
                          "WAWebMaybeGetBotModeSelection",
                        ).maybeGetBotModeSelection(t, e),
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
                var L = yield o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeDisableEphemeralityForMsg(t, R),
                  E = L.msgData,
                  k = L.systemMsgs,
                  I = new (o("WAWebMsgModel").Msg)(E),
                  T = o("WAWebMsgCollection").MsgCollection.add(I)[0];
                if (T) {
                  var D,
                    x,
                    $ = !!(
                      (D = t.groupMetadata) != null && D.isLidAddressingMode
                    ),
                    P = o(
                      "WAWebMsgInfoUtils",
                    ).getGroupMessageSendReporterOptions(
                      t.id,
                      o("WAWebWamMsgUtils").msgIsLid(T, t.id, $),
                    );
                  if (
                    ((T.wamMessageSendReporter = new (o(
                      "WAWebMessageSendReporter",
                    ).MessageSendReporter)(T, P)),
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
                    (f = yield r("WAWebEmptyChatSystemMsg")(T, t)),
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
                  var M = o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeGetOpusSystemMsg(t, "opus-send-msg-fail");
                  (M && (f = [M].concat(f != null ? f : [])),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat after system messages",
                        ])),
                    ));
                  var w = f ? [].concat(f, [E]) : [E];
                  return (
                    (x = T.wamMessageSendPerfReporter) == null ||
                      x.startSavedStage(),
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
                          T.type ===
                            o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
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
                            .revokeGroupInviteV4(
                              T.from.toString(),
                              n.toString(),
                              T.inviteGrp,
                              t,
                            )
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
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        f = b(t, l),
        g = i
          ? f.then(i).then(function () {
              return f;
            })
          : f,
        h = v(t, g);
      return [f, h];
    }
    function b(e, t) {
      return e.addQueue
        .enqueue(t)
        .then(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
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
                      ? yield r("WACommonTaskScheduler").yield()
                      : yield o("WAPromiseDelays").releaseToEventLoop()),
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
                  o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                    e,
                    [s],
                  ),
                  s
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .then(function (t) {
          var n;
          return (
            (e.createdLocally = !1),
            (n = t.wamMessageSendPerfReporter) == null || n.postRenderedStage(),
            t
          );
        });
    }
    function v(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessage",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield e.sendQueue.enqueue(t);
            return o("WAWebSendMsgRecordAction").sendMsgRecord(n);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.addAndSendMsgToChat = f),
      (l.resendMsgToChat = g),
      (l.addVoipCallLogMsgToChat = h));
  },
  98,
);
