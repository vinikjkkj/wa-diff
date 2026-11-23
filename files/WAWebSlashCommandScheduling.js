__d(
  "WAWebSlashCommandScheduling",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebLexicalUtils",
    "WAWebModalManager",
    "WAWebScheduleSelfReminderAction",
    "WAWebScheduleTimePickerLoadable",
    "WAWebScheduledMsgActionLogger",
    "WAWebScheduledMsgConstants",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsInput",
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
    function C(e, t, n, r) {
      var a = e.chat,
        i = e.editor,
        l = e.onScheduleSend;
      if (l != null) {
        var s = i.getEditorState();
        (o("WAWebSlashCommandsComposer").replaceCommandWord(i, t, n),
          o("WAWebScheduledMsgActionLogger").logScheduledMsgOpenPicker(a),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(b, {
              chat: a,
              onClosedWithoutTime: function () {
                (i.setEditorState(s, {
                  tag: o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
                }),
                  i.focus(),
                  o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                    action: "command_cancel",
                    command: t.slice(1),
                    chat: a,
                  }));
              },
              onSchedule: function (n) {
                var e = r == null ? void 0 : r(n);
                l(n, function (n) {
                  (e == null || e(n),
                    o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                      action: "command_done",
                      command: t.slice(1),
                      chat: a,
                    }));
                });
              },
            }),
          ));
      }
    }
    function b(e) {
      var t = e.chat,
        n = e.onClosedWithoutTime,
        a = e.onSchedule,
        i = c(!1);
      return (
        r("useWAWebOnUnmount")(function () {
          i.current || n();
        }),
        u.jsx(
          o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable,
          {
            isGroup: o("WAWebChatGetters").getIsGroup(t),
            onCancel: o("WAWebModalManager").closeModalManager,
            onFirstDateTimeChange: function () {
              return o(
                "WAWebScheduledMsgActionLogger",
              ).logScheduledMsgSelectDateTime(t);
            },
            onSchedule: function (t) {
              ((i.current = !0),
                o("WAWebModalManager").closeModalManager(),
                a(t));
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
