__d(
  "WAWebSlashCommandFileATask",
  [
    "fbt",
    "WAWebCopyToClipboard",
    "WAWebEmployeeCommandHandoff",
    "WAWebEmployeeCommandLimits",
    "WAWebExternalLink.react",
    "WAWebMsgGetters",
    "WAWebSlashCommandHandBack",
    "WAWebSlashCommandThanks",
    "WAWebSlashCommandThanksRecipient",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsInput",
    "WAWebSlashCommandsToolText",
    "WAWebSlashCommandsUsageLogger",
    "WDSIconWdsIcClipboardFilled.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.internalfb.com/tasks/?source=whatsapp_web&n=",
      u = "https://www.internalfb.com/tasks/",
      c = "https://www.internalfb.com/intern/whatsapp/file_task/start/";
    function d(t) {
      var n = m(o("WAWebSlashCommandThanks").capPrefillText(t));
      return e + encodeURIComponent(JSON.stringify(n));
    }
    function m(e) {
      var t = e.split("\n"),
        n = Math.max(
          0,
          t.findIndex(function (e) {
            return e.trim() !== "";
          }),
        ),
        r = t[n].trim(),
        a = t.slice(n + 1),
        i = o("WAWebEmployeeCommandLimits").capText(
          r,
          o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.taskTitle,
        ),
        l = o("WAWebEmployeeCommandLimits").capText(
          (i === r ? a : [r].concat(a)).join("\n").trim(),
          o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.taskDescription,
        );
      return l.length > 0 ? { title: i, description: l } : { title: i };
    }
    function p(e) {
      var t = m(e),
        n = t.description,
        r = t.title;
      return n != null
        ? "title_and_description"
        : r !== ""
          ? "title_only"
          : "none";
    }
    var _ = {
      name: "fileatask",
      group: "work_tools",
      Icon: r("WDSIconWdsIcClipboardFilled.react"),
      color: "purple",
      text: "required",
      getDescription: function () {
        return s._(/*BTDS*/ "Turn this text into a task");
      },
      getTextPrompt: function (t) {
        return b(t) !== ""
          ? f()
          : s._(/*BTDS*/ "Type the task title, then press Enter");
      },
      getRunLabel: function () {
        return o("WAWebEmployeeCommandHandoff").canHandOff("task")
          ? s._(/*BTDS*/ "Press Enter to file the task and add its link")
          : g();
      },
      isAvailable: function () {
        return o("WAWebEmployeeCommandHandoff").canOfferHandoff("task");
      },
      canRunWithoutText: function (t) {
        return b(t) !== "";
      },
      run: function (t, n) {
        var e,
          r = y(
            o("WAWebSlashCommandsToolText").nameComposerMentions(
              n,
              (e = t.mentions) != null ? e : [],
            ),
            b(t),
            t,
          );
        if (!o("WAWebEmployeeCommandHandoff").canHandOff("task")) {
          R(t, n, r, "disabled", null);
          return;
        }
        if (v(t, n, r)) h(t);
        else {
          R(t, n, r, "popup_blocked", null);
          return;
        }
        o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
          action: "command_done",
          command: "fileatask",
          chat: t.chat,
          prefilled: p(r),
        });
      },
    };
    function f() {
      return o("WAWebEmployeeCommandHandoff").canHandOff("task")
        ? s._(
            /*BTDS*/ "Press Enter to file the quoted message and add its link",
          )
        : g();
    }
    function g() {
      return s._(/*BTDS*/ "Press Enter, then finish filing it in Tasks");
    }
    function h(e) {
      (o("WAWebSlashCommandsComposer").clearComposerNow(e.editor),
        e.clearQuotedMsg());
    }
    function y(e, t, n) {
      if (t === "") return e;
      var r = C(n).toString() + "\n" + t;
      if (e === "") {
        var o;
        return (
          ((o = t.split("\n").find(function (e) {
            return e.trim() !== "";
          })) != null
            ? o
            : "") +
          "\n" +
          r
        );
      }
      return e + "\n\n" + r;
    }
    function C(e) {
      var t = e.quotedMsg,
        n = t != null ? o("WAWebMsgGetters").getSender(t) : null,
        r =
          n != null
            ? o("WAWebSlashCommandThanksRecipient").getContactName(n)
            : null;
      return r != null
        ? s._(/*BTDS*/ "Quoted WhatsApp message from {sender name}:", [
            s._param("sender name", r),
          ])
        : s._(/*BTDS*/ "Quoted WhatsApp message from someone:");
    }
    function b(e) {
      var t,
        n = e.quotedMsg;
      if (n == null) return "";
      var r =
        o("WAWebMsgGetters").getType(n) === "chat"
          ? o("WAWebMsgGetters").getBody(n)
          : (t = o("WAWebMsgGetters").getCaption(n)) != null
            ? t
            : "";
      return o("WAWebSlashCommandsToolText")
        .nameMessageMentions(r, o("WAWebMsgGetters").getMentionedJidList(n))
        .trim();
    }
    function v(e, t, n) {
      var r = m(n),
        a = o("WAWebEmployeeCommandHandoff").createHandoffNonce(),
        i = null;
      o("WAWebSlashCommandsUsageLogger").expectHandBack(
        "fileatask",
        e.chat,
        p(n),
      );
      var l = o("WAWebEmployeeCommandHandoff").startHandoff({
        fallbackUrl: d(n),
        getData: function () {
          return r;
        },
        kind: "task",
        nonce: a,
        onFailure: function (o, a) {
          return R(e, t, n, o, i, a);
        },
        onResult: function (n) {
          return S(e, r.title, n, i);
        },
        startUrl: c,
        windowName: "wa_employee_task_" + a,
      });
      return (
        l &&
          (i = o("WAWebSlashCommandHandBack").showHandBackProgressToast(
            s._(/*BTDS*/ "Filing task\u2026"),
          )),
        l
      );
    }
    function S(e, t, n, r) {
      var a = e.chat,
        i = "https://www.internalfb.com/" + n,
        l =
          s
            ._(/*BTDS*/ "Filed {task number}: {task title}", [
              s._param("task number", n),
              s._param("task title", t),
            ])
            .toString() +
          "\n" +
          i,
        u = o("WAWebSlashCommandHandBack").putDraftInChat(e, l);
      (o("WAWebSlashCommandHandBack").showHandBackOutcomeToast({
        chat: a,
        link: i,
        outcome: u,
        progress: r,
        testid: "slash-command-filed-task",
        text: {
          added: s._(/*BTDS*/ "Task {task number} filed", [
            s._param("task number", n),
          ]),
          addedInChat: function (t) {
            return s._(/*BTDS*/ "Filed {task number} in {chat name}", [
              s._param("task number", n),
              s._param("chat name", t),
            ]);
          },
          ready: s._(/*BTDS*/ "Filed {task number}", [
            s._param("task number", n),
          ]),
        },
      }),
        o("WAWebSlashCommandsUsageLogger").logFileTaskResult({
          chat: a,
          outcome: u,
        }));
    }
    function R(e, t, n, r, a, i) {
      if ((i === void 0 && (i = !1), r === "timeout")) {
        (o("WAWebSlashCommandHandBack").showHandBackNoAnswer({
          noAnswer: s._(/*BTDS*/ "Tasks didn't answer"),
          noAnswerAction: {
            actionText: s._(/*BTDS*/ "Open Tasks"),
            onAction: function () {
              (o("WAWebSlashCommandsUsageLogger").logFallbackOpen(
                "fileatask",
                e.chat,
              ),
                o("WAWebExternalLink.react").openExternalLink(u, {
                  noApiCmdHandling: !0,
                }));
            },
            testid: "slash-command-file-task-check-tasks",
          },
          checkFirst: s._(
            /*BTDS*/ "It may have been filed. If it wasn't, copy your text to try again.",
          ),
          lastingAction: {
            actionText: s._(/*BTDS*/ "Copy text"),
            onAction: function () {
              o("WAWebCopyToClipboard").copyTextToClipboard(
                t === "" ? C(e).toString() + "\n" + b(e) : n,
              );
            },
            testid: "slash-command-file-task-copy-text",
          },
          progress: a,
        }),
          o("WAWebSlashCommandHandBack").restoreReplyToEmptyComposer(e),
          o("WAWebSlashCommandsUsageLogger").logFileTaskResult({
            chat: e.chat,
            fallbackReason: r,
            fallbackOpened: i,
          }));
        return;
      }
      (r !== "popup_blocked" &&
        o("WAWebSlashCommandHandBack").putDraftInChat(
          e,
          o("WAWebSlashCommandsInput").getCommandWord("fileatask") + " " + t,
        ),
        o("WAWebSlashCommandHandBack").showHandBackFallback({
          fallbackOpened: i,
          progress: a,
          reason: r,
          text: {
            failed: s._(/*BTDS*/ "Couldn't file the task automatically"),
            blocked: s._(/*BTDS*/ "Finish filing it in Tasks"),
            open: {
              actionText: s._(/*BTDS*/ "Open Tasks"),
              onAction: function () {
                (o("WAWebSlashCommandsUsageLogger").logFallbackOpen(
                  "fileatask",
                  e.chat,
                ),
                  L(n));
              },
              testid: "slash-command-file-task-open-tasks",
            },
          },
        }),
        o("WAWebSlashCommandsUsageLogger").logFileTaskResult({
          chat: e.chat,
          fallbackReason: r,
          fallbackOpened: i,
        }));
    }
    function L(e) {
      o("WAWebExternalLink.react").openExternalLink(d(e), {
        noApiCmdHandling: !0,
      });
    }
    ((l.FILE_TASK_START_URL = c),
      (l.getCreateTaskUrl = d),
      (l.getTaskTemplate = m),
      (l.WAWebSlashCommandFileATask = _));
  },
  226,
);
