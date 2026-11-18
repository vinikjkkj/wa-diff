__d(
  "WAWebSlashCommandRemindMe",
  [
    "fbt",
    "Lexical",
    "WALogger",
    "WAWebModalManager",
    "WAWebScheduleSelfReminderAction",
    "WAWebScheduleTimePickerLoadable",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebSlashCommandScheduling",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsReminderToast",
    "WAWebSlashCommandsUsageLogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcPerson.react",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        name: "remindme",
        group: "scheduling",
        Icon: r("WDSIconIcPerson.react"),
        color: "orange",
        text: "required",
        getDescription: function () {
          return s._(/*BTDS*/ "Remind only you, while WhatsApp Web is open");
        },
        getTextPrompt: function () {
          return s._(/*BTDS*/ "Type what to remind you about");
        },
        getRunLabel: o("WAWebSlashCommandScheduling").getPickTimeLabel,
        isAvailable: function () {
          return o(
            "WAWebScheduledMessagesGatingUtils",
          ).isScheduledMessagesSenderEnabled();
        },
        run: function (t, n) {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebScheduleTimePickerLoadable")
                .WAWebScheduleTimePickerLoadable,
              {
                onCancel: function () {
                  (o("WAWebModalManager").closeModalManager(),
                    t.editor.focus(),
                    o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                      action: "command_cancel",
                      command: "remindme",
                      chat: t.chat,
                    }));
                },
                onSchedule: function (r) {
                  (o("WAWebModalManager").closeModalManager(), p(t, n, r));
                },
              },
            ),
          );
        },
        scheduleAt: function (t, n, r) {
          return (p(t, n, r), { handled: !0 });
        },
      },
      m = new WeakSet();
    function p(t, n, a) {
      var i = t.chat,
        l = t.clearQuotedMsg,
        s = t.editor,
        u = t.quotedMsg;
      if (!m.has(s)) {
        m.add(s);
        var c = _(s);
        o("WAWebScheduleSelfReminderAction")
          .scheduleSelfReminder({
            quotedMsg: u,
            scheduledTimestampS: a,
            text: n,
          })
          .then(function (e) {
            if (e !== "scheduled") {
              (h(e), f(i, g(e)));
              return;
            }
            if (_(s) === c) {
              var t;
              (o("WAWebSlashCommandsComposer").replaceComposerText(s, ""),
                ((t = i.composeQuotedMsg) != null ? t : null) ===
                  (u != null ? u : null) && l());
            }
            (o("WAWebSlashCommandsReminderToast").showReminderSetToast(a),
              o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                action: "command_done",
                command: "remindme",
                chat: i,
              }));
          })
          .catch(function (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[slash_commands] #remindme failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("slash-command-remindme-failed"),
              h("failed"),
              f(i, "error"));
          })
          .finally(function () {
            m.delete(s);
          });
      }
    }
    function _(e) {
      return e.getEditorState().read(function () {
        return o("Lexical").$getRoot().getTextContent();
      });
    }
    function f(e, t) {
      o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
        action: "command_fail",
        command: "remindme",
        chat: e,
        failureReason: t,
      });
    }
    function g(e) {
      return e === "disabled"
        ? "disabled"
        : e === "empty_text"
          ? "empty_text"
          : e === "invalid_time"
            ? "invalid_time"
            : e === "unavailable"
              ? "unavailable"
              : e === "scheduled" || e === "failed"
                ? "schedule_failed"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function h(e) {
      var t = y(e);
      t != null &&
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: t }),
        );
    }
    function y(e) {
      return e === "scheduled" || e === "disabled"
        ? null
        : e === "empty_text"
          ? s._(/*BTDS*/ "Add what you want to be reminded about")
          : e === "invalid_time"
            ? s._(/*BTDS*/ "Pick a different time for your reminder")
            : e === "unavailable" || e === "failed"
              ? s._(/*BTDS*/ "Couldn't set reminder")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.WAWebSlashCommandRemindMe = d;
  },
  226,
);
