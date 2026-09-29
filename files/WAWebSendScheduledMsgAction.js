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
    "WAWebSendMsgResultAction",
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.addSystemBubble,
            i = a === void 0 ? !0 : a,
            l = t.chat,
            c = t.options,
            d = c === void 0 ? {} : c,
            m = t.scheduledTimestampS,
            p = t.text;
          if (
            !o(
              "WAWebIsScheduledMessagesAvailableForChat",
            ).isScheduledMessagesAvailableForChat(l)
          )
            throw r("err")(
              "[scheduled_msg] Scheduled messages not available for this chat",
            );
          var _ = o("WAWebStateUtils").unproxy(l),
            f = yield o("WAWebSendTextMsgChatAction").createTextMsgData(
              _,
              p,
              d,
            );
          if (f == null) return !1;
          var g = o("WAWebWidToJid").widToChatJid(_.id);
          if (yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(g))
            return (
              o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog(),
              !1
            );
          var h = babelHelpers.extends({}, f, {
            isScheduledMsg: !0,
            scheduledTimestampS: m,
            viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
          });
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Scheduling message for chat ",
                " at ",
                "",
              ])),
            _.id.toLogString(),
            String(m),
          );
          var y = o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
            C = null;
          try {
            var v;
            yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              _,
              h,
              "addAndSendTextMsg",
            );
            var S = new (o("WAWebMsgModel").Msg)(h),
              R = !!((v = _.groupMetadata) != null && v.isLidAddressingMode),
              L = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                _.id,
                o("WAWebWamMsgUtils").msgIsLid(h, _.id, R),
              );
            ((S.wamMessageSendReporter = new (o(
              "WAWebMessageSendReporter",
            ).MessageSendReporter)(
              S,
              babelHelpers.extends({}, L, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              }),
            )),
              (S.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: S.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(S),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(S),
              })),
              yield o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e, t;
                    ((e = S.wamMessageSendPerfReporter) == null ||
                      e.startSavedStage(),
                      yield o("WAWebDBProcessMessage").storeMessages([h], _.id),
                      (t = S.wamMessageSendPerfReporter) == null ||
                        t.postSavedStage());
                    var n = yield o("WAWebSendMsgRecordAction").sendMsgRecord(
                      S,
                    );
                    return ((y = n.messageSendResult), (C = n.ackErrorCode), n);
                  }),
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
            (C ===
              o("WAWebScheduledMsgConstants")
                .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE &&
              (yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
                h.id.toString(),
                "FAILED",
              ),
              o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog()),
            i)
          )
            try {
              yield b(_);
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
          return y === o("WAWebSendMsgResultAction").SendMsgResult.OK;
        })),
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
            var g = l.find(function (e) {
              var t = e.media;
              return !o(
                "WAWebScheduledMsgConstants",
              ).SCHEDULABLE_MEDIA_TYPES.has(t.type);
            });
            if (g != null)
              throw r("err")(
                "[scheduled_msg] Cannot schedule media of type " + g.media.type,
              );
            var h =
              l.length >
              o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE
                ? l.slice(
                    0,
                    o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE,
                  )
                : l;
            h.length < l.length &&
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
            var y = o("WAWebStateUtils").unproxy(i),
              C = o("WAWebWidToJid").widToChatJid(y.id);
            if (yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(C)) {
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
              String(h.length),
              y.id.toLogString(),
              String(_),
            );
            var v = y.composeQuotedMsg;
            y.composeQuotedMsg = null;
            var S = !1,
              R = [];
            for (var L of h.entries()) {
              var E = L[0],
                k = L[1],
                I = k.media,
                T = {
                  type: I.type,
                  caption: I.caption,
                  mentionedJidList: k.mentionedJidList,
                  groupMentions: k.groupMentions,
                  addEvenWhilePreparing:
                    o("WAWebAttachMediaGetters").getPreviewable(I) &&
                    I.state ===
                      o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                        .PROCESSING,
                  quotedMsg: E === 0 ? v : void 0,
                  isViewOnce: u.isViewOnce,
                  threadId: u.threadId,
                  isScheduledMsg: !0,
                  scheduledTimestampS: _,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                };
              try {
                var D = yield I.sendToChat({ chat: y, options: T });
                if (
                  D.ackErrorCode ===
                  o("WAWebScheduledMsgConstants")
                    .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
                ) {
                  ((S = !0), D.msg != null && R.push(D.msg.id.toString()));
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
              (S &&
                (yield (f || (f = n("Promise"))).all(
                  R.map(function (e) {
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
                yield b(y);
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
            isNewMsg: !0,
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
