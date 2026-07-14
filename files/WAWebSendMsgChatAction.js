__d(
  "WAWebSendMsgChatAction",
  [
    "Promise",
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
                  R =
                    e.messageSecret == null &&
                    (yield o(
                      "WAWebCoexV2RelayEligibility",
                    ).genIsCoexV2RelayEligibleSend(t.id)),
                  L = babelHelpers.extends({}, e, {
                    messageSecret: R
                      ? self.crypto.getRandomValues(new Uint8Array(32))
                      : e.messageSecret,
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
                g && (L.privacyModeWhenSent = g);
                var E = yield o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeDisableEphemeralityForMsg(t, L),
                  k = E.msgData,
                  I = E.systemMsgs,
                  T = new (o("WAWebMsgModel").Msg)(k),
                  D = o("WAWebMsgCollection").MsgCollection.add(T)[0];
                if (D) {
                  var x,
                    $,
                    P = !!(
                      (x = t.groupMetadata) != null && x.isLidAddressingMode
                    ),
                    N = o(
                      "WAWebMsgInfoUtils",
                    ).getGroupMessageSendReporterOptions(
                      t.id,
                      o("WAWebWamMsgUtils").msgIsLid(D, t.id, P),
                    );
                  if (
                    ((D.wamMessageSendReporter = new (o(
                      "WAWebMessageSendReporter",
                    ).MessageSendReporter)(
                      D,
                      babelHelpers.extends({}, N, {
                        frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                      }),
                    )),
                    (D.wamMessageSendPerfReporter = new (o(
                      "WAWebMessageSendPerfReporter",
                    ).MessageSendPerfReporter)({
                      chatWid: D.to,
                      mediaType: o("WAWebWamMsgUtils").getWamMediaType(D),
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(D),
                    })),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before system messages ",
                          "",
                        ])),
                      t.id.toLogString(),
                    ),
                    (f = yield r("WAWebEmptyChatSystemMsg")(D, t)),
                    !f)
                  ) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat before ephemeral system messages",
                        ])),
                    );
                    var M = o(
                      "WAWebBizShowOrderEphemeralSystemAction",
                    ).getMaybeSystemMsgForOrderEphemeralExemption(D, t);
                    M && (f = [M]);
                  }
                  I && (f = [].concat(f != null ? f : [], I));
                  var w = o(
                    "WAWebSendMsgChatActionUtils",
                  ).maybeGetOpusSystemMsg(t, "opus-send-msg-fail");
                  (w && (f = [w].concat(f != null ? f : [])),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_addAndSendMsgToChat after system messages",
                        ])),
                    ));
                  var A = f ? [].concat(f, [k]) : [k];
                  return (
                    ($ = D.wamMessageSendPerfReporter) == null ||
                      $.startSavedStage(),
                    o("WAWebDBProcessMessage")
                      .storeMessages(A, t.id)
                      .then(function () {
                        var e;
                        if (
                          ((e = D.wamMessageSendPerfReporter) == null ||
                            e.postSavedStage(),
                          o("WAWebThreadMsgUtils").isThreadMsg(k) &&
                            o(
                              "WAWebDBThreadMetadataBulkHelper",
                            ).persistNewMessagesThreadMetadataInBulk([k]),
                          D.type ===
                            o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)
                        ) {
                          var t = parseInt(D.inviteCodeExp, 10),
                            n = D.from.isLid()
                              ? o("WAWebLidMigrationUtils").toLid(D.to)
                              : D.to;
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
                              from: D.from.toString(),
                              groupId: D.inviteGrp,
                              to: n.toString(),
                            })
                            .then(function () {
                              return o(
                                "WAWebApiGroupInviteV4Store",
                              ).persistGroupInviteV4Msg(D.id.toString(), {
                                id: D.id.toString(),
                                from: D.from.toString(),
                                to: n.toString(),
                                groupId: D.inviteGrp,
                                expiration: t,
                                expired: o("WATimeUtils").unixTime() >= t,
                              });
                            });
                        }
                      })
                      .then(function () {
                        return D.waitForPrep().then(function () {
                          return f ? { msg: D, systemMsgs: f } : { msg: D };
                        });
                      })
                  );
                }
                throw new (o("WAWebMiscErrors").ModelCreateError)("Msg", L);
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
                  r = t.msg,
                  a = t.systemMsgs;
                if (
                  (o("WAWebAppTracker").AppTracker.start(
                    o("WAWebAppTracker").AppTrackerType.SendMessage,
                  ),
                  o("WAWebABProps").getABPropConfigValue(
                    "web_anr_async_msg_send_handler",
                  ) &&
                    (yield o("WAWebReleaseToEventLoop").releaseToEventLoop()),
                  (n = r.wamMessageSendPerfReporter) == null ||
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
