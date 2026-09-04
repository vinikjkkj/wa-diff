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
    var e, s, u, c, d, m, p, _, f;
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  yield b(d);
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.addSystemBubble,
            a = t === void 0 ? !0 : t,
            i = e.chat,
            l = e.medias,
            s = e.opts,
            u = s === void 0 ? {} : s,
            _ = e.scheduledTimestampS;
          if (
            !o(
              "WAWebIsScheduledMessagesAvailableForChat",
            ).isScheduledMediaAvailableForChat(i)
          )
            throw r("err")(
              "[scheduled_msg] Scheduled media not available for this chat",
            );
          if (l.length !== 0) {
            var g =
              l.length >
              o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE
                ? l.slice(
                    0,
                    o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE,
                  )
                : l;
            g.length < l.length &&
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Capping scheduled media from ",
                      " to ",
                      "",
                    ])),
                  String(l.length),
                  String(
                    o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE,
                  ),
                )
                .sendLogs("scheduled-media-capped");
            var h = o("WAWebStateUtils").unproxy(i);
            if (
              yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(
                o("WAWebWidToJid").widToChatJid(h.id),
              )
            ) {
              o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog();
              return;
            }
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Scheduling ",
                  " media message(s) for chat ",
                  " at ",
                  "",
                ])),
              String(g.length),
              h.id.toLogString(),
              String(_),
            );
            var y = h.composeQuotedMsg;
            h.composeQuotedMsg = null;
            var C = !1,
              v = [];
            for (var S of g.entries()) {
              var R = S[0],
                L = S[1],
                E = L.media,
                k = {
                  type: E.type,
                  caption: E.caption,
                  mentionedJidList: L.mentionedJidList,
                  groupMentions: L.groupMentions,
                  addEvenWhilePreparing:
                    o("WAWebAttachMediaGetters").getPreviewable(E) &&
                    E.state ===
                      o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                        .PROCESSING,
                  quotedMsg: R === 0 ? y : void 0,
                  isViewOnce: u.isViewOnce,
                  threadId: u.threadId,
                  isScheduledMsg: !0,
                  scheduledTimestampS: _,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                };
              try {
                var I = yield E.sendToChat({ chat: h, options: k });
                if (
                  I.ackErrorCode ===
                  o("WAWebScheduledMsgConstants")
                    .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
                ) {
                  ((C = !0), I.msg != null && v.push(I.msg.id.toString()));
                  break;
                }
              } catch (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
              (C &&
                (yield (f || (f = n("Promise"))).all(
                  v.map(function (e) {
                    return o(
                      "WAWebScheduledMsgRevealKeyStore",
                    ).updateRevealKeyStatus(e, "FAILED");
                  }),
                ),
                o(
                  "WAWebScheduledMsgLimitDialog.react",
                ).showScheduledMsgLimitReachedDialog()),
              a)
            )
              try {
                yield b(h);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg] Failed to add scheduled system message",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("scheduled-media-sys-error");
              }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] persist ScheduledMessageCreated bubble -",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("scheduled-msg-sys-persist-error");
          }
          var n = new (o("WAWebMsgModel").Msg)(t);
          e.msgs.add(n);
        })),
        v.apply(this, arguments)
      );
    }
    ((l.sendScheduledTextMsgToChat = g), (l.sendScheduledMediaMsgToChat = y));
  },
  98,
);
