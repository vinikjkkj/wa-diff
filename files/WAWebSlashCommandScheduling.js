__d(
  "WAWebSlashCommandScheduling",
  [
    "fbt",
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebLexicalUtils",
    "WAWebModalManager",
    "WAWebScheduleSelfReminderAction",
    "WAWebScheduleTimePickerLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebScheduledMsgConstants",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsInput",
    "WAWebSlashCommandsReminderTime",
    "WAWebSlashCommandsReminderToast",
    "WAWebSlashCommandsUsageLogger",
    "WAWebUserUtils",
    "WDSIconIcNotificationsFilled.react",
    "WDSIconIcScheduleFilled.react",
    "react",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = e.onScheduleSend;
      return t != null;
    }
    function m(e) {
      var t = e.isAtScheduleLimit;
      return t
        ? s._(/*BTDS*/ "", [
            s._param(
              "maximum",
              o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT,
              [0],
            ),
          ])
        : null;
    }
    var p = {
        name: "remindus",
        group: "scheduling",
        Icon: r("WDSIconIcNotificationsFilled.react"),
        color: "orange",
        text: "required",
        getDescription: function () {
          return s._(/*BTDS*/ "");
        },
        getTextPrompt: function () {
          return s._(/*BTDS*/ "");
        },
        getRunLabel: f,
        isAvailable: function (t) {
          return d(t) && !o("WAWebUserUtils").isMeAccount(t.chat.id);
        },
        getDisabledReason: m,
        run: function (t, n) {
          return C(
            t,
            o("WAWebSlashCommandsInput").getCommandWord("remindus"),
            h(),
            g,
            o("WAWebSlashCommandsReminderTime").getTypedReminderTime(
              n,
              o("WATimeUtils").unixTime(),
            ),
          );
        },
        scheduleAt: function (t, n, r) {
          var e = t.editor,
            a = e.getEditorState();
          return (
            o("WAWebSlashCommandsComposer").replaceCommandWord(
              e,
              o("WAWebSlashCommandsInput").getCommandWord("remindus"),
              h(),
            ),
            y(e, a),
            { handled: !1, onScheduled: g(r) }
          );
        },
      },
      _ = {
        name: "delay",
        group: "scheduling",
        Icon: r("WDSIconIcScheduleFilled.react"),
        color: "skyBlue",
        text: "required",
        getDescription: function () {
          return s._(/*BTDS*/ "");
        },
        getTextPrompt: function () {
          return s._(/*BTDS*/ "");
        },
        getRunLabel: f,
        isAvailable: d,
        getDisabledReason: m,
        run: function (t, n) {
          return C(t, o("WAWebSlashCommandsInput").getCommandWord("delay"), "");
        },
      };
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g(e) {
      return function (t) {
        (o("WAWebSlashCommandsReminderToast").showReminderSetToast(e),
          o("WAWebScheduleSelfReminderAction").storeReminderMark(t, e));
      };
    }
    function h() {
      return s._(/*BTDS*/ "").toString();
    }
    function y(e, t) {
      var n = e.getEditorState();
      window.setTimeout(function () {
        e.getEditorState() === n &&
          e.setEditorState(t, {
            tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
          });
      }, 0);
    }
    function C(e, t, n, r, a) {
      var i = e.chat,
        l = e.editor,
        s = e.onScheduleSend;
      if (s != null) {
        var c = l.getEditorState();
        (o("WAWebSlashCommandsComposer").replaceCommandWord(l, t, n),
          o("WAWebScheduledMsgActionLogger").logScheduledMsgOpenPicker(i),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(b, {
              chat: i,
              initialScheduledTimestampS: a,
              onClosedWithoutTime: function () {
                (l.setEditorState(c, {
                  tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
                }),
                  l.focus(),
                  o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                    action: "command_cancel",
                    command: t.slice(1),
                    chat: i,
                  }));
              },
              onSchedule: function (n) {
                var e = r == null ? void 0 : r(n);
                s(n, function (n) {
                  (e == null || e(n),
                    o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                      action: "command_done",
                      command: t.slice(1),
                      chat: i,
                    }));
                });
              },
            }),
          ));
      }
    }
    function b(e) {
      var t = e.chat,
        n = e.initialScheduledTimestampS,
        a = e.onClosedWithoutTime,
        i = e.onSchedule,
        l = c(!1);
      return (
        r("useWAWebOnUnmount")(function () {
          l.current || a();
        }),
        u.jsx(
          o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable,
          {
            initialScheduledTimestampS: n != null ? n : void 0,
            isGroup: o("WAWebChatGetters").getIsGroup(t),
            onCancel: o("WAWebModalManager").closeModalManager,
            onFirstDateTimeChange: function () {
              return o(
                "WAWebScheduledMsgActionLogger",
              ).logScheduledMsgSelectDateTime(t);
            },
            onSchedule: function (t) {
              ((l.current = !0),
                o("WAWebModalManager").closeModalManager(),
                i(t));
            },
          },
        )
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.WAWebSlashCommandRemindUs = p),
      (l.WAWebSlashCommandDelay = _),
      (l.getPickTimeLabel = f));
  },
  226,
);
