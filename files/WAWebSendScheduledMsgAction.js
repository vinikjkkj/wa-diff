__d(
  "WAWebSendScheduledMsgAction",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebIsScheduledMessagesAvailableForChat",
    "WAWebLidMigrationFrontendUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgLimitDialog.react",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSendMsgRecordAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, c) {
            if (
              (l === void 0 && (l = {}),
              c === void 0 && (c = !0),
              !o(
                "WAWebIsScheduledMessagesAvailableForChat",
              ).isScheduledMessagesAvailableForChat(t))
            )
              throw r("err")(
                "[scheduled_msg] Scheduled messages not available for this chat",
              );
            var d = o("WAWebStateUtils").unproxy(t),
              m = yield o("WAWebSendTextMsgChatAction").createTextMsgData(
                d,
                a,
                l,
              );
            if (m != null) {
              if (
                yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(
                  o("WAWebWidToJid").widToChatJid(d.id),
                )
              ) {
                o(
                  "WAWebScheduledMsgLimitDialog.react",
                ).showScheduledMsgLimitReachedDialog();
                return;
              }
              var p = babelHelpers.extends({}, m, {
                isScheduledMsg: !0,
                scheduledTimestampS: i,
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
              });
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Scheduling message for chat ",
                    " at ",
                    "",
                  ])),
                d.id.toLogString(),
                String(i),
              );
              var _ = null;
              try {
                var f;
                yield o(
                  "WAWebLidMigrationFrontendUtils",
                ).validateMissingAccountLid(d, p, "addAndSendTextMsg");
                var g = new (o("WAWebMsgModel").Msg)(p),
                  h = !!(
                    (f = d.groupMetadata) != null && f.isLidAddressingMode
                  ),
                  y = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                    d.id,
                    o("WAWebWamMsgUtils").msgIsLid(p, d.id, h),
                  );
                ((g.wamMessageSendReporter = new (o(
                  "WAWebMessageSendReporter",
                ).MessageSendReporter)(
                  g,
                  babelHelpers.extends({}, y, {
                    frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                      .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                  }),
                )),
                  (g.wamMessageSendPerfReporter = new (o(
                    "WAWebMessageSendPerfReporter",
                  ).MessageSendPerfReporter)({
                    chatWid: g.to,
                    mediaType: o("WAWebWamMsgUtils").getWamMediaType(g),
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(g),
                  })),
                  yield o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob(
                      "sendMessage",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e, t;
                          ((e = g.wamMessageSendPerfReporter) == null ||
                            e.startSavedStage(),
                            yield o("WAWebDBProcessMessage").storeMessages(
                              [p],
                              d.id,
                            ),
                            (t = g.wamMessageSendPerfReporter) == null ||
                              t.postSavedStage());
                          var n = yield o(
                            "WAWebSendMsgRecordAction",
                          ).sendMsgRecord(g);
                          return ((_ = n.ackErrorCode), n);
                        },
                      ),
                      {
                        priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                          .UI_ACTION,
                      },
                    )
                    .waitUntilCompleted());
              } catch (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to send scheduled message",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("scheduled-msg-send-error"),
                  e
                );
              }
              if (
                (_ ===
                  o("WAWebScheduledMsgConstants")
                    .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE &&
                  (yield o(
                    "WAWebScheduledMsgRevealKeyStore",
                  ).updateRevealKeyStatus(p.id.toString(), "FAILED"),
                  o(
                    "WAWebScheduledMsgLimitDialog.react",
                  ).showScheduledMsgLimitReachedDialog()),
                c)
              )
                try {
                  yield C(d);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to add scheduled system message",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("scheduled-msg-sys-error");
                }
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (
              (i === void 0 && (i = {}),
              l === void 0 && (l = !0),
              !o(
                "WAWebIsScheduledMessagesAvailableForChat",
              ).isScheduledMediaAvailableForChat(e))
            )
              throw r("err")(
                "[scheduled_msg] Scheduled media not available for this chat",
              );
            if (t.length !== 0) {
              var s = o("WAWebStateUtils").unproxy(e);
              if (
                yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(
                  o("WAWebWidToJid").widToChatJid(s.id),
                )
              ) {
                o(
                  "WAWebScheduledMsgLimitDialog.react",
                ).showScheduledMsgLimitReachedDialog();
                return;
              }
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Scheduling ",
                    " media message(s) for chat ",
                    " at ",
                    "",
                  ])),
                String(t.length),
                s.id.toLogString(),
                String(a),
              );
              var u = s.composeQuotedMsg;
              s.composeQuotedMsg = null;
              var p = !1,
                f = [];
              for (var g of t.entries()) {
                var h = g[0],
                  y = g[1],
                  b = y.media,
                  v = {
                    type: b.type,
                    caption: b.caption,
                    mentionedJidList: y.mentionedJidList,
                    groupMentions: y.groupMentions,
                    addEvenWhilePreparing:
                      o("WAWebAttachMediaGetters").getPreviewable(b) &&
                      b.state ===
                        o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                          .PROCESSING,
                    quotedMsg: h === 0 ? u : void 0,
                    isViewOnce: i.isViewOnce,
                    threadId: i.threadId,
                    isScheduledMsg: !0,
                    scheduledTimestampS: a,
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                  };
                try {
                  var S = yield b.sendToChat({ chat: s, options: v });
                  if (
                    S.ackErrorCode ===
                    o("WAWebScheduledMsgConstants")
                      .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
                  ) {
                    ((p = !0), S.msg != null && f.push(S.msg.id.toString()));
                    break;
                  }
                } catch (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg] Failed to send scheduled media message",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("scheduled-media-send-error"),
                    e
                  );
                }
              }
              if (
                (p &&
                  (yield (_ || (_ = n("Promise"))).all(
                    f.map(function (e) {
                      return o(
                        "WAWebScheduledMsgRevealKeyStore",
                      ).updateRevealKeyStatus(e, "FAILED");
                    }),
                  ),
                  o(
                    "WAWebScheduledMsgLimitDialog.react",
                  ).showScheduledMsgLimitReachedDialog()),
                l)
              )
                try {
                  yield C(s);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg] Failed to add scheduled system message",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("scheduled-media-sys-error");
                }
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebContactSystemMsg").genNotificationMsg(e.id, {
            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
            kind: o("WAWebMsgType").MsgKind.Notification,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageCreated,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          });
          try {
            yield o("WAWebDBProcessMessage").storeMessages([t], e.id);
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] persist ScheduledMessageCreated bubble -",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("scheduled-msg-sys-persist-error");
          }
          var n = new (o("WAWebMsgModel").Msg)(t);
          e.msgs.add(n);
        })),
        b.apply(this, arguments)
      );
    }
    ((l.sendScheduledTextMsgToChat = f), (l.sendScheduledMediaMsgToChat = h));
  },
  98,
);
