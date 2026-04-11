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
    "WAWebHandleSingleMsgFactory",
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
                    yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
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
                var n, a, i, l, _;
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
                var f = o(
                    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
                  ).getPrivacyModeFromModel(t.id),
                  g = yield o(
                    "WAWebMaybeGetAppendedAiThreadAttributes",
                  ).maybeGetAppendedAiThreadAttributes(e),
                  h = g[0],
                  y = g[1];
                o(
                  "WAWebBotFrontendLoggingUtils",
                ).maybeLogFirstPromptSentInAiThread(
                  t,
                  babelHelpers.extends({}, e, { threadIds: h }),
                );
                var C =
                    (a = e.botModeSelection) != null
                      ? a
                      : o(
                          "WAWebMaybeGetBotModeSelection",
                        ).maybeGetBotModeSelection(t, e),
                  b = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
                  v = babelHelpers.extends({}, e, {
                    agentId: o("WAWebBizAgentAction").getAgentId(e),
                    threadIds:
                      (i = o(
                        "WAWebMaybeGetAppendedViewRepliesThreadId",
                      ).maybeGetAppendedViewRepliesThreadId(
                        babelHelpers.extends({}, e, { threadIds: h }),
                      )) != null
                        ? i
                        : h,
                    aiThreadInfo: y,
                    botModeSelection: C,
                    botModeOverride:
                      (l = e.botModeOverride) != null ? l : void 0,
                    botMetricsMetadata: b,
                  });
                f && (v.privacyModeWhenSent = f);
                var S = yield o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeDisableEphemeralityForMsg(t, v),
                  R = S.msgData,
                  L = S.systemMsgs,
                  E = new (o("WAWebMsgModel").Msg)(R),
                  k = o("WAWebMsgCollection").MsgCollection.add(E)[0];
                if (k) {
                  var I,
                    T,
                    D = !!(
                      (I = t.groupMetadata) != null && I.isLidAddressingMode
                    ),
                    x = o(
                      "WAWebMsgInfoUtils",
                    ).getGroupMessageSendReporterOptions(
                      t.id,
                      o("WAWebWamMsgUtils").msgIsLid(k, t.id, D),
                    );
                  if (
                    ((k.wamMessageSendReporter = new (o(
                      "WAWebMessageSendReporter",
                    ).MessageSendReporter)(k, x)),
                    (k.wamMessageSendPerfReporter = new (o(
                      "WAWebMessageSendPerfReporter",
                    ).MessageSendPerfReporter)({
                      chatWid: k.to,
                      mediaType: o("WAWebWamMsgUtils").getWamMediaType(k),
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(k),
                    })),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before system messages ",
                          "",
                        ])),
                      t.id.toLogString(),
                    ),
                    (_ = yield r("WAWebEmptyChatSystemMsg")(k, t)),
                    !_)
                  ) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before ephemeral system messages",
                        ])),
                    );
                    var $ = o(
                      "WAWebBizShowOrderEphemeralSystemAction",
                    ).getMaybeSystemMsgForOrderEphemeralExemption(k, t);
                    $ && (_ = [$]);
                  }
                  (L && (_ = [].concat(_ != null ? _ : [], L)),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat after system messages",
                        ])),
                    ));
                  var P = _ ? [].concat(_, [R]) : [R];
                  return (
                    (T = k.wamMessageSendPerfReporter) == null ||
                      T.startSavedStage(),
                    o("WAWebDBProcessMessage")
                      .storeMessages(P, t.id)
                      .then(function () {
                        var e;
                        if (
                          ((e = k.wamMessageSendPerfReporter) == null ||
                            e.postSavedStage(),
                          o("WAWebThreadMsgUtils").isThreadMsg(R) &&
                            o(
                              "WAWebDBThreadMetadataBulkHelper",
                            ).persistNewMessagesThreadMetadataInBulk([R]),
                          k.type ===
                            o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                        ) {
                          var t = parseInt(k.inviteCodeExp, 10),
                            n = k.from.isLid()
                              ? o("WAWebLidMigrationUtils").toLid(k.to)
                              : k.to;
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
                              k.from.toString(),
                              n.toString(),
                              k.inviteGrp,
                              t,
                            )
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
                          return _ ? { msg: k, systemMsgs: _ } : { msg: k };
                        });
                      })
                  );
                }
                throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", v);
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
