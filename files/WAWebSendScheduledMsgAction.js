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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, a, i) {
      if (
        (i === void 0 && (i = {}),
        !o(
          "WAWebIsScheduledMessagesAvailableForChat",
        ).isScheduledMessagesAvailableForChat(t))
      )
        throw r("err")(
          "[scheduled_msg] Scheduled messages not available for this chat",
        );
      var l = o("WAWebStateUtils").unproxy(t),
        c = await o("WAWebSendTextMsgChatAction").createTextMsgData(l, n, i);
      if (c != null) {
        var d = babelHelpers.extends({}, c, {
          isScheduledMsg: !0,
          scheduledTimestampS: a,
          viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
        });
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] Scheduling message for chat ",
              " at ",
              "",
            ])),
          l.id.toLogString(),
          String(a),
        );
        try {
          var p;
          await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
            l,
            d,
            "addAndSendTextMsg",
          );
          var _ = new (o("WAWebMsgModel").Msg)(d),
            f = !!((p = l.groupMetadata) != null && p.isLidAddressingMode),
            g = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
              l.id,
              o("WAWebWamMsgUtils").msgIsLid(d, l.id, f),
            );
          ((_.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(
            _,
            babelHelpers.extends({}, g, {
              frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            }),
          )),
            (_.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: _.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(_),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(_),
            })),
            await o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                async function () {
                  var e, t;
                  ((e = _.wamMessageSendPerfReporter) == null ||
                    e.startSavedStage(),
                    await o("WAWebDBProcessMessage").storeMessages([d], l.id),
                    (t = _.wamMessageSendPerfReporter) == null ||
                      t.postSavedStage());
                  var n = await o("WAWebSendMsgRecordAction").sendMsgRecord(_);
                  return n;
                },
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
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
          await m(l);
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
    }
    async function m(e) {
      var t = o("WAWebContactSystemMsg").genNotificationMsg(e.id, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
        kind: o("WAWebMsgType").MsgKind.Notification,
        subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
          .ScheduledMessageCreated,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      });
      try {
        await o("WAWebDBProcessMessage").storeMessages([t], e.id);
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
    }
    l.sendScheduledTextMsgToChat = d;
  },
  98,
);
