__d(
  "WAWebSendScheduledMsgAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBProcessMessage",
    "WAWebLidMigrationFrontendUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgInfoUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebScheduledMessagesGatingUtils",
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
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            if (
              (l === void 0 && (l = {}),
              !o(
                "WAWebScheduledMessagesGatingUtils",
              ).isScheduledMessagesSenderEnabled())
            )
              throw r("err")(
                "[scheduled_msg] Scheduled messages sender is not enabled",
              );
            var c = o("WAWebStateUtils").unproxy(t),
              d = yield o("WAWebSendTextMsgChatAction").createTextMsgData(
                c,
                a,
                l,
              );
            if (d != null) {
              var m = babelHelpers.extends({}, d, {
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
                c.id.toLogString(),
                String(i),
              );
              try {
                var _;
                yield o(
                  "WAWebLidMigrationFrontendUtils",
                ).validateMissingAccountLid(c, m, "addAndSendTextMsg");
                var f = new (o("WAWebMsgModel").Msg)(m),
                  g = !!(
                    (_ = c.groupMetadata) != null && _.isLidAddressingMode
                  ),
                  h = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                    c.id,
                    o("WAWebWamMsgUtils").msgIsLid(m, c.id, g),
                  );
                ((f.wamMessageSendReporter = new (o(
                  "WAWebMessageSendReporter",
                ).MessageSendReporter)(
                  f,
                  babelHelpers.extends({}, h, {
                    frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                      .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
                  }),
                )),
                  (f.wamMessageSendPerfReporter = new (o(
                    "WAWebMessageSendPerfReporter",
                  ).MessageSendPerfReporter)({
                    chatWid: f.to,
                    mediaType: o("WAWebWamMsgUtils").getWamMediaType(f),
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(f),
                  })),
                  yield o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob(
                      "sendMessage",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e, t;
                          ((e = f.wamMessageSendPerfReporter) == null ||
                            e.startSavedStage(),
                            yield o("WAWebDBProcessMessage").storeMessages(
                              [m],
                              c.id,
                            ),
                            (t = f.wamMessageSendPerfReporter) == null ||
                              t.postSavedStage());
                          var n = yield o(
                            "WAWebSendMsgRecordAction",
                          ).sendMsgRecord(f);
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
              try {
                yield p(c, m.id.id);
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: e.id,
              id: "SYSSCHED" + t,
            }),
            a = {
              id: n,
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .ScheduledMessageCreated,
              kind: o("WAWebMsgType").MsgKind.Notification,
              from: e.id,
              to: e.id,
              t: o("WATimeUtils").unixTime(),
              isNewMsg: !0,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            };
          try {
            yield o("WAWebDBProcessMessage").storeMessages([a], e.id);
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to persist ScheduledMessageCreated bubble",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("scheduled-msg-sys-persist-error");
          }
          var i = new (o("WAWebMsgModel").Msg)(a);
          e.msgs.add(i);
        })),
        _.apply(this, arguments)
      );
    }
    l.sendScheduledTextMsgToChat = d;
  },
  98,
);
