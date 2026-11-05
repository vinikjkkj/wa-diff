__d(
  "WAWebSendScheduledMsgAction",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebBackendRuntime",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebIsScheduledMessagesAvailableForChat",
    "WAWebLidMigrationFrontendUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgLimitDialog.react",
    "WAWebScheduledMsgPreflight",
    "WAWebScheduledMsgRetryPicker",
    "WAWebScheduledMsgRevealKeyStore",
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
            l = t.allowPreflightRetry,
            c = l === void 0 ? !1 : l,
            d = t.chat,
            m = t.onScheduled,
            p = t.options,
            _ = p === void 0 ? {} : p,
            f = t.scheduledTimestampS,
            h = t.text;
          if (
            !o(
              "WAWebIsScheduledMessagesAvailableForChat",
            ).isScheduledMessagesAvailableForChat(d)
          )
            throw r("err")(
              "[scheduled_msg] Scheduled messages not available for this chat",
            );
          var y = o("WAWebStateUtils").unproxy(d);
          if (
            h == null ||
            h.trim() === "" ||
            !(yield o("WAWebScheduledMsgPreflight").canScheduleMessage(
              o("WAWebWidToJid").widToChatJid(y.id),
              function () {
                return o(
                  "WAWebScheduledMsgRetryPicker",
                ).openScheduledMsgRetryPicker({
                  isGroup: d.id.isGroup(),
                  scheduledTimestampS: f,
                  onSchedule: function (t) {
                    return g({
                      addSystemBubble: i,
                      allowPreflightRetry: c,
                      chat: d,
                      onScheduled: m,
                      options: _,
                      scheduledTimestampS: t,
                      text: h,
                    });
                  },
                });
              },
              c && i,
            ))
          )
            return !1;
          var C = yield o("WAWebSendTextMsgChatAction").createTextMsgData(
            y,
            h,
            _,
          );
          if (C == null) return !1;
          var b = babelHelpers.extends({}, C, {
            isScheduledMsg: !0,
            scheduledTimestampS: f,
            viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
          });
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Scheduling message for chat ",
                " at ",
                "",
              ])),
            y.id.toLogString(),
            String(f),
          );
          var v = o(
              "WAWebSendTextMsgChatAction",
            ).maybeCreateTextMsgRichTextFormatSendCommit(b, y.id),
            R = o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
            L = null;
          try {
            var E;
            yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              y,
              b,
              "addAndSendTextMsg",
            );
            var k = new (o("WAWebMsgModel").Msg)(b),
              I = !!((E = y.groupMetadata) != null && E.isLidAddressingMode),
              T = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                y.id,
                o("WAWebWamMsgUtils").msgIsLid(b, y.id, I),
              );
            ((k.wamMessageSendReporter = new (o(
              "WAWebMessageSendReporter",
            ).MessageSendReporter)(
              k,
              babelHelpers.extends({}, T, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              }),
            )),
              (k.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: k.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(k),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(k),
              })),
              yield o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e, t;
                    ((e = k.wamMessageSendPerfReporter) == null ||
                      e.startSavedStage(),
                      yield (
                        o("WAWebBackendRuntime").isWebDiBackendEnabled()
                          ? o("WAWebBackendRuntime").runtime(
                              o("WAWebMessageStoreService").MessageStoreService,
                            ).storeMessages
                          : o("WAWebDBProcessMessage").storeMessages
                      )([b], y.id),
                      (t = k.wamMessageSendPerfReporter) == null ||
                        t.postSavedStage());
                    var n = yield (
                      o("WAWebBackendRuntime").isWebDiBackendEnabled()
                        ? o("WAWebBackendRuntime").runtime(
                            o("WAWebMessageSendService").MessageSendService,
                          ).sendMsgRecord
                        : o("WAWebSendMsgRecordAction").sendMsgRecord
                    )(k);
                    return ((R = n.messageSendResult), (L = n.ackErrorCode), n);
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
            (L ===
              o("WAWebScheduledMsgConstants")
                .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE &&
              (yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
                b.id.toString(),
                "FAILED",
              ),
              o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog()),
            R === o("WAWebSendMsgResultAction").SendMsgResult.OK &&
              (v == null || v(), m == null || m(b.id)),
            i)
          )
            try {
              yield S(y);
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
          return R === o("WAWebSendMsgResultAction").SendMsgResult.OK;
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
            var C = o("WAWebStateUtils").unproxy(i);
            if (
              yield o("WAWebScheduledMsgPreflight").canScheduleMessage(
                o("WAWebWidToJid").widToChatJid(C.id),
              )
            ) {
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
              var b = C.composeQuotedMsg;
              C.composeQuotedMsg = null;
              var v = !1,
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
                    quotedMsg: E === 0 ? b : void 0,
                    threadId: u.threadId,
                    isScheduledMsg: !0,
                    scheduledTimestampS: _,
                    viewMode:
                      o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                  };
                try {
                  var D = yield y(C, I, T);
                  if (
                    D.ackErrorCode ===
                    o("WAWebScheduledMsgConstants")
                      .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
                  ) {
                    ((v = !0), D.msg != null && R.push(D.msg.id.toString()));
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
                (v &&
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
            yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).storeMessages
                : o("WAWebDBProcessMessage").storeMessages
            )([t], e.id);
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
