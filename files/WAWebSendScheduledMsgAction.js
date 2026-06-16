__d(
  "WAWebSendScheduledMsgAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
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
    "WAWebSendMsgRecordAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              var _ = babelHelpers.extends({}, m, {
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
              try {
                var f;
                yield o(
                  "WAWebLidMigrationFrontendUtils",
                ).validateMissingAccountLid(d, _, "addAndSendTextMsg");
                var g = new (o("WAWebMsgModel").Msg)(_),
                  h = !!(
                    (f = d.groupMetadata) != null && f.isLidAddressingMode
                  ),
                  y = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                    d.id,
                    o("WAWebWamMsgUtils").msgIsLid(_, d.id, h),
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
                              [_],
                              d.id,
                            ),
                            (t = g.wamMessageSendPerfReporter) == null ||
                              t.postSavedStage());
                          var n = yield o(
                            "WAWebSendMsgRecordAction",
                          ).sendMsgRecord(g);
                          return n;
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
              if (c)
                try {
                  yield p(d);
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] persist ScheduledMessageCreated bubble -",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("scheduled-msg-sys-persist-error");
          }
          var n = new (o("WAWebMsgModel").Msg)(t);
          e.msgs.add(n);
        })),
        _.apply(this, arguments)
      );
    }
    l.sendScheduledTextMsgToChat = d;
  },
  98,
);
