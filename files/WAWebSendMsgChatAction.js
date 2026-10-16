__d(
  "WAWebSendMsgChatAction",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebAppTracker",
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
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessagingGatingUtils",
    "WAWebMiscErrors",
    "WAWebMsgCollection",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
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
      return R(o("WAWebStateUtils").unproxy(e), t);
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
            return S(a, l(i));
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
      var l,
        f = (_ || (_ = n("Promise"))).resolve(a).then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n, a, i, _, f, g;
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
                var h = o(
                    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
                  ).getPrivacyModeFromModel(t.id),
                  y = yield o(
                    "WAWebMaybeGetAppendedAiThreadAttributes",
                  ).maybeGetAppendedAiThreadAttributes(e),
                  C = y[0],
                  v = y[1];
                o(
                  "WAWebBotFrontendLoggingUtils",
                ).maybeLogFirstPromptSentInAiThread(
                  t,
                  babelHelpers.extends({}, e, { threadIds: C }),
                );
                var S =
                    (a = e.botModeSelection) != null
                      ? a
                      : o(
                          "WAWebMaybeGetBotModeSelection",
                        ).maybeGetBotModeSelection(t, e),
                  R =
                    (i =
                      (_ = e.botModeOverride) != null
                        ? _
                        : o(
                            "WAWebMaybeGetBotModeSelection",
                          ).maybeGetBotDynamicModeSelection(t, e)) != null
                      ? i
                      : void 0,
                  L = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(e),
                  E = babelHelpers.extends({}, e, {
                    messageSecret: (yield b(t, e))
                      ? self.crypto.getRandomValues(new Uint8Array(32))
                      : e.messageSecret,
                    agentId: o("WAWebBizAgentAction").getAgentId(e),
                    threadIds:
                      (f = o(
                        "WAWebMaybeGetAppendedViewRepliesThreadId",
                      ).maybeGetAppendedViewRepliesThreadId(
                        babelHelpers.extends({}, e, { threadIds: C }),
                      )) != null
                        ? f
                        : C,
                    aiThreadInfo: v,
                    botModeSelection: S,
                    botModeOverride: R,
                    botMetricsMetadata: L,
                  });
                h && (E.privacyModeWhenSent = h);
                var k = yield o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeDisableEphemeralityForMsg(t, E),
                  I = k.msgData,
                  T = k.systemMsgs,
                  D = new (o("WAWebMsgModel").Msg)(I),
                  x = o("WAWebMsgCollection").MsgCollection.add(D)[0];
                if (x) {
                  var $, P;
                  l = o(
                    "WAWebRichTextFormatMessageSendLogger",
                  ).maybeCreateRichTextFormatMessageSendCommit(x, t.id);
                  var N = !!(
                      ($ = t.groupMetadata) != null && $.isLidAddressingMode
                    ),
                    M = o(
                      "WAWebMsgInfoUtils",
                    ).getGroupMessageSendReporterOptions(
                      t.id,
                      o("WAWebWamMsgUtils").msgIsLid(x, t.id, N),
                    );
                  if (
                    ((x.wamMessageSendReporter = new (o(
                      "WAWebMessageSendReporter",
                    ).MessageSendReporter)(
                      x,
                      babelHelpers.extends({}, M, {
                        frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                      }),
                    )),
                    (x.wamMessageSendPerfReporter = new (o(
                      "WAWebMessageSendPerfReporter",
                    ).MessageSendPerfReporter)({
                      chatWid: x.to,
                      mediaType: o("WAWebWamMsgUtils").getWamMediaType(x),
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(x),
                    })),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before system messages ",
                          "",
                        ])),
                      t.id.toLogString(),
                    ),
                    (g = yield r("WAWebEmptyChatSystemMsg")(x, t)),
                    !g)
                  ) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before ephemeral system messages",
                        ])),
                    );
                    var w = o(
                      "WAWebBizShowOrderEphemeralSystemAction",
                    ).getMaybeSystemMsgForOrderEphemeralExemption(x, t);
                    w && (g = [w]);
                  }
                  T && (g = [].concat(g != null ? g : [], T));
                  var A = o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeGetOpusSystemMsg(t, "opus-send-msg-fail");
                  (A && (g = [A].concat(g != null ? g : [])),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat after system messages",
                        ])),
                    ));
                  var F = g ? [].concat(g, [I]) : [I];
                  return (
                    (P = x.wamMessageSendPerfReporter) == null ||
                      P.startSavedStage(),
                    o("WAWebDBProcessMessage")
                      .storeMessages(F, t.id)
                      .then(function () {
                        var e;
                        if (
                          ((e = x.wamMessageSendPerfReporter) == null ||
                            e.postSavedStage(),
                          o("WAWebThreadMsgUtils").isThreadMsg(I) &&
                            o(
                              "WAWebDBThreadMetadataBulkHelper",
                            ).persistNewMessagesThreadMetadataInBulk([I]),
                          x.type ===
                            o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                        ) {
                          var t = parseInt(x.inviteCodeExp, 10),
                            n = x.from.isLid()
                              ? o("WAWebLidMigrationUtils").toLid(x.to)
                              : x.to;
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
                              from: x.from.toString(),
                              groupId: x.inviteGrp,
                              to: n.toString(),
                            })
                            .then(function () {
                              return o(
                                "WAWebApiGroupInviteV4Store",
                              ).persistGroupInviteV4Msg(x.id.toString(), {
                                id: x.id.toString(),
                                from: x.from.toString(),
                                to: n.toString(),
                                groupId: x.inviteGrp,
                                expiration: t,
                                expired: o("WATimeUtils").unixTime() >= t,
                              });
                            });
                        }
                      })
                      .then(function () {
                        return x.waitForPrep().then(function () {
                          return g ? { msg: x, systemMsgs: g } : { msg: x };
                        });
                      })
                  );
                }
                throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", E);
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        g = S(
          t,
          f.then(function (e) {
            return (
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.SendMessage,
              ),
              e
            );
          }),
        ),
        h = i
          ? g.then(i).then(function () {
              return g;
            })
          : g,
        y = R(t, h).then(function (e) {
          return (
            e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (l == null || l()),
            e
          );
        });
      return [g, y];
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.messageSecret != null
            ? !1
            : o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
                o(
                  "WAWebMessagePluginGenerateReportingTokenContent",
                ).isMsgTypeReportingTokenCompatible(t.type, t.subtype)
              ? !0
              : o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(
                  e.id,
                );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return e.addQueue
        .enqueue(t)
        .then(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
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
                  o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(
                    e,
                    [l],
                  ),
                  l
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
    function R(e, t) {
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
