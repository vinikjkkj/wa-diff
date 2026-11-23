__d(
  "WAWebSendScheduledMsgAction",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n = t.addSystemBubble,
        a = n === void 0 ? !0 : n,
        i = t.allowPreflightRetry,
        l = i === void 0 ? !1 : i,
        c = t.chat,
        d = t.onScheduled,
        m = t.options,
        p = m === void 0 ? {} : m,
        _ = t.scheduledTimestampS,
        g = t.text;
      if (
        !o(
          "WAWebIsScheduledMessagesAvailableForChat",
        ).isScheduledMessagesAvailableForChat(c)
      )
        throw r("err")(
          "[scheduled_msg] Scheduled messages not available for this chat",
        );
      var h = o("WAWebStateUtils").unproxy(c);
      if (
        g == null ||
        g.trim() === "" ||
        !(await o("WAWebScheduledMsgPreflight").canScheduleMessage(
          o("WAWebWidToJid").widToChatJid(h.id),
          function () {
            return o(
              "WAWebScheduledMsgRetryPicker",
            ).openScheduledMsgRetryPicker({
              isGroup: c.id.isGroup(),
              scheduledTimestampS: _,
              onSchedule: function (t) {
                return f({
                  addSystemBubble: a,
                  allowPreflightRetry: l,
                  chat: c,
                  onScheduled: d,
                  options: p,
                  scheduledTimestampS: t,
                  text: g,
                });
              },
            });
          },
          l && a,
        ))
      )
        return !1;
      var C = await o("WAWebSendTextMsgChatAction").createTextMsgData(h, g, p);
      if (C == null) return !1;
      var b = babelHelpers.extends({}, C, {
        isScheduledMsg: !0,
        scheduledTimestampS: _,
        viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
      });
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] Scheduling message for chat ",
            " at ",
            "",
          ])),
        h.id.toLogString(),
        String(_),
      );
      var v = o(
          "WAWebSendTextMsgChatAction",
        ).maybeCreateTextMsgRichTextFormatSendCommit(b, h.id),
        S = o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN,
        R = null;
      try {
        var L;
        await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
          h,
          b,
          "addAndSendTextMsg",
        );
        var E = new (o("WAWebMsgModel").Msg)(b),
          k = !!((L = h.groupMetadata) != null && L.isLidAddressingMode),
          I = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
            h.id,
            o("WAWebWamMsgUtils").msgIsLid(b, h.id, k),
          );
        ((E.wamMessageSendReporter = new (o(
          "WAWebMessageSendReporter",
        ).MessageSendReporter)(
          E,
          babelHelpers.extends({}, I, {
            frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          }),
        )),
          (E.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: E.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(E),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(E),
          })),
          await o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessage",
              async function () {
                var e, t;
                ((e = E.wamMessageSendPerfReporter) == null ||
                  e.startSavedStage(),
                  await (
                    o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebMessageStoreService").MessageStoreService,
                        ).storeMessages
                      : o("WAWebDBProcessMessage").storeMessages
                  )([b], h.id),
                  (t = E.wamMessageSendPerfReporter) == null ||
                    t.postSavedStage());
                var n = await (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMessageSendService").MessageSendService,
                      ).sendMsgRecord
                    : o("WAWebSendMsgRecordAction").sendMsgRecord
                )(E);
                return ((S = n.messageSendResult), (R = n.ackErrorCode), n);
              },
              { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
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
        (R ===
          o("WAWebScheduledMsgConstants")
            .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE &&
          (await o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
            b.id.toString(),
            "FAILED",
          ),
          o(
            "WAWebScheduledMsgLimitDialog.react",
          ).showScheduledMsgLimitReachedDialog()),
        S === o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          (v == null || v(), d == null || d(b.id)),
        a)
      )
        try {
          await y(h);
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
      return S === o("WAWebSendMsgResultAction").SendMsgResult.OK;
    }
    async function g(e, t, n) {
      var r = t.originalAttachment;
      return r != null &&
        t.mediaPrep != null &&
        t.state !== o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR &&
        (t.state !==
          o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING ||
          n.addEvenWhilePreparing === !0) &&
        o("WAWebSendHdImagePair").shouldSendAsHdImagePair(e, t, n)
        ? o("WAWebSendHdImagePair").sendHdImagePair({
            chat: e,
            childPrep: t.mediaPrep,
            fileOrigin: t.fileOrigin,
            options: n,
            parentPlaceholderProps: o("WAWebAttachMediaGetters").getPreviewable(
              t,
            )
              ? o("WAWebSendHdImagePair").getParentPlaceholderProps(t)
              : void 0,
            source: r,
          })
        : t.sendToChat({ chat: e, options: n });
    }
    async function h(e) {
      var t = e.addSystemBubble,
        n = t === void 0 ? !0 : t,
        a = e.chat,
        i = e.medias,
        l = e.opts,
        s = l === void 0 ? {} : l,
        u = e.scheduledTimestampS;
      if (
        !o(
          "WAWebIsScheduledMessagesAvailableForChat",
        ).isScheduledMediaAvailableForChat(a)
      )
        throw r("err")(
          "[scheduled_msg] Scheduled media not available for this chat",
        );
      if (i.length !== 0) {
        var _ = i.find(function (e) {
          var t = e.media;
          return !o("WAWebScheduledMsgConstants").SCHEDULABLE_MEDIA_TYPES.has(
            t.type,
          );
        });
        if (_ != null)
          throw r("err")(
            "[scheduled_msg] Cannot schedule media of type " + _.media.type,
          );
        if (s.isViewOnce === !0)
          throw r("err")("[scheduled_msg] Cannot schedule view-once media");
        var f =
          i.length > o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE
            ? i.slice(
                0,
                o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE,
              )
            : i;
        f.length < i.length &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Capping scheduled media from ",
                  " to ",
                  "",
                ])),
              String(i.length),
              String(
                o("WAWebScheduledMsgConstants").MAX_MEDIA_MSGS_TO_SCHEDULE,
              ),
            )
            .sendLogs("scheduled-media-capped");
        var h = o("WAWebStateUtils").unproxy(a);
        if (
          await o("WAWebScheduledMsgPreflight").canScheduleMessage(
            o("WAWebWidToJid").widToChatJid(h.id),
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
            String(f.length),
            h.id.toLogString(),
            String(u),
          );
          var C = h.composeQuotedMsg;
          h.composeQuotedMsg = null;
          var b = !1,
            v = [];
          for (var S of f.entries()) {
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
                quotedMsg: R === 0 ? C : void 0,
                threadId: s.threadId,
                isScheduledMsg: !0,
                scheduledTimestampS: u,
                viewMode:
                  o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
              };
            try {
              var I = await g(h, E, k);
              if (
                I.ackErrorCode ===
                o("WAWebScheduledMsgConstants")
                  .SCHEDULED_MSG_RESOURCE_LIMIT_NACK_CODE
              ) {
                ((b = !0), I.msg != null && v.push(I.msg.id.toString()));
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
            (b &&
              (await Promise.all(
                v.map(function (e) {
                  return o(
                    "WAWebScheduledMsgRevealKeyStore",
                  ).updateRevealKeyStatus(e, "FAILED");
                }),
              ),
              o(
                "WAWebScheduledMsgLimitDialog.react",
              ).showScheduledMsgLimitReachedDialog()),
            n)
          )
            try {
              await y(h);
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
    }
    async function y(e) {
      var t = o("WAWebContactSystemMsg").genNotificationMsg(e.id, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
        kind: o("WAWebMsgType").MsgKind.Notification,
        subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
          .ScheduledMessageCreated,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        isNewMsg: !0,
      });
      try {
        await (
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
    }
    ((l.sendScheduledTextMsgToChat = f), (l.sendScheduledMediaMsgToChat = h));
  },
  98,
);
