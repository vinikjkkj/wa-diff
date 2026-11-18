__d(
  "WAWebSlashCommandScheduling",
  [
    "fbt",
    "WAWebChatGetters",
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
    "WDSIconIcNotifications.react",
    "WDSIconIcSchedule.react",
    "react",
    "react-compiler-runtime",
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
        ? s._(
            /*BTDS*/ '_j{"*":"You can schedule up to {maximum} messages in a chat"}',
            [
              s._param(
                "maximum",
                o("WAWebScheduledMsgConstants").SCHEDULED_MSG_MAX_PER_CHAT,
                [0],
              ),
            ],
          )
        : null;
    }
    var p = {
        name: "remindus",
        group: "scheduling",
        Icon: r("WDSIconIcNotifications.react"),
        color: "orange",
        text: "required",
        getDescription: function () {
          return s._(/*BTDS*/ "Remind this chat at a time you pick");
        },
        getTextPrompt: function () {
          return s._(/*BTDS*/ "Type the reminder");
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
        Icon: r("WDSIconIcSchedule.react"),
        color: "skyBlue",
        text: "required",
        getDescription: function () {
          return s._(/*BTDS*/ "Send this message later");
        },
        getTextPrompt: function () {
          return s._(/*BTDS*/ "Type your message");
        },
        getRunLabel: f,
        isAvailable: d,
        getDisabledReason: m,
        run: function (t, n) {
          return C(t, o("WAWebSlashCommandsInput").getCommandWord("delay"), "");
        },
      };
    function f() {
      return s._(/*BTDS*/ "Press Enter to pick a time");
    }
    function g(e) {
      return function (t) {
        (o("WAWebSlashCommandsReminderToast").showReminderSetToast(e),
          o("WAWebScheduleSelfReminderAction").storeReminderMark(t, e));
      };
    }
    function h() {
      return s._(/*BTDS*/ "Reminder:").toString();
    }
    function y(e, t) {
      var n = e.getEditorState();
      window.setTimeout(function () {
        e.getEditorState() === n && e.setEditorState(t);
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
                (i.setEditorState(s),
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
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a = e.onClosedWithoutTime,
        i = e.onSchedule,
        l = c(!1),
        s;
      (t[0] !== a
        ? ((s = function () {
            l.current || a();
          }),
          (t[0] = a),
          (t[1] = s))
        : (s = t[1]),
        r("useWAWebOnUnmount")(s));
      var d;
      t[2] !== n
        ? ((d = o("WAWebChatGetters").getIsGroup(n)), (t[2] = n), (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== n
        ? ((m = function () {
            return o(
              "WAWebScheduledMsgActionLogger",
            ).logScheduledMsgSelectDateTime(n);
          }),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== i
        ? ((p = function (t) {
            ((l.current = !0),
              o("WAWebModalManager").closeModalManager(),
              i(t));
          }),
          (t[6] = i),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== d || t[9] !== m || t[10] !== p
          ? ((_ = u.jsx(
              o("WAWebScheduleTimePickerLoadable")
                .WAWebScheduleTimePickerLoadable,
              {
                isGroup: d,
                onCancel: o("WAWebModalManager").closeModalManager,
                onFirstDateTimeChange: m,
                onSchedule: p,
              },
            )),
            (t[8] = d),
            (t[9] = m),
            (t[10] = p),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    ((l.WAWebSlashCommandRemindUs = p),
      (l.WAWebSlashCommandDelay = _),
      (l.getPickTimeLabel = f));
  },
  226,
);
