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
    "WAWebSendHdImagePair",
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
            var b;
            yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              _,
              h,
              "addAndSendTextMsg",
            );
            var v = new (o("WAWebMsgModel").Msg)(h),
              R = !!((b = _.groupMetadata) != null && b.isLidAddressingMode),
              L = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                _.id,
                o("WAWebWamMsgUtils").msgIsLid(h, _.id, R),
              );
            ((v.wamMessageSendReporter = new (o(
              "WAWebMessageSendReporter",
            ).MessageSendReporter)(
              v,
              babelHelpers.extends({}, L, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              }),
            )),
              (v.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: v.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(v),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(v),
              })),
              yield o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e, t;
                    ((e = v.wamMessageSendPerfReporter) == null ||
                      e.startSavedStage(),
                      yield o("WAWebDBProcessMessage").storeMessages([h], _.id),
                      (t = v.wamMessageSendPerfReporter) == null ||
                        t.postSavedStage());
                    var n = yield o("WAWebSendMsgRecordAction").sendMsgRecord(
                      v,
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
              yield S(_);
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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.originalAttachment;
          return r != null &&
            t.mediaPrep != null &&
            t.state !==
              o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR &&
            (t.state !==
              o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING ||
              n.addEvenWhilePreparing === !0) &&
            o("WAWebSendHdImagePair").shouldSendAsHdImagePair(e, t, n)
            ? o("WAWebSendHdImagePair").sendHdImagePair({
                chat: e,
                childPrep: t.mediaPrep,
                fileOrigin: t.fileOrigin,
                options: n,
                parentPlaceholderProps: o(
                  "WAWebAttachMediaGetters",
                ).getPreviewable(t)
                  ? o("WAWebSendHdImagePair").getParentPlaceholderProps(t)
                  : void 0,
                source: r,
              })
            : t.sendToChat({ chat: e, options: n });
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
            if (u.isViewOnce === !0)
              throw r("err")("[scheduled_msg] Cannot schedule view-once media");
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
            var C = o("WAWebStateUtils").unproxy(i),
              b = o("WAWebWidToJid").widToChatJid(C.id);
            if (yield o("WAWebScheduledMsgStore").isChatAtScheduleLimit(b)) {
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
              C.id.toLogString(),
              String(_),
            );
            var v = C.composeQuotedMsg;
            C.composeQuotedMsg = null;
            var R = !1,
              L = [];
            for (var E of h.entries()) {
              var k = E[0],
                I = E[1],
                T = I.media,
                D = {
                  type: T.type,
                  caption: T.caption,
                  mentionedJidList: I.mentionedJidList,
                  groupMentions: I.groupMentions,
                  addEvenWhilePreparing:
                    o("WAWebAttachMediaGetters").getPreviewable(T) &&
                    T.state ===
                      o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                        .PROCESSING,
                  quotedMsg: k === 0 ? v : void 0,
                  threadId: u.threadId,
                  isScheduledMsg: !0,
                  scheduledTimestampS: _,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                };
              try {
                var x = yield y(C, T, D);
                if (
                  x.ackErrorCode ===
                  o("WAWebScheduledMsgConstants")
                    .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
                ) {
                  ((R = !0), x.msg != null && L.push(x.msg.id.toString()));
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
              (R &&
                (yield (f || (f = n("Promise"))).all(
                  L.map(function (e) {
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
                yield S(C);
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    ((l.sendScheduledTextMsgToChat = g), (l.sendScheduledMediaMsgToChat = b));
  },
  98,
);
