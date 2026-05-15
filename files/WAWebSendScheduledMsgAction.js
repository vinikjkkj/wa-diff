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
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              var p = babelHelpers.extends({}, d, {
                isScheduledMsg: !0,
                scheduledTimestampS: i,
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
                ).validateMissingAccountLid(c, p, "addAndSendTextMsg");
                var f = new (o("WAWebMsgModel").Msg)(p),
                  g = !!(
                    (_ = c.groupMetadata) != null && _.isLidAddressingMode
                  ),
                  h = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                    c.id,
                    o("WAWebWamMsgUtils").msgIsLid(p, c.id, g),
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
                              [p],
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
                m(c, p.id.id);
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
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
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
          from: e.id,
          to: e.id,
          t: o("WATimeUtils").unixTime(),
          isNewMsg: !0,
          local: !0,
        },
        i = new (o("WAWebMsgModel").Msg)(a);
      e.msgs.add(i);
    }
    l.sendScheduledTextMsgToChat = c;
  },
  98,
);
