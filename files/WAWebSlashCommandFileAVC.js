__d(
  "WAWebSlashCommandFileAVC",
  [
    "fbt",
    "WAWebEmployeeCommandHandoff",
    "WAWebEmployeeCommandLimits",
    "WAWebExternalLink.react",
    "WAWebLexicalUtils",
    "WAWebSlashCommandHandBack",
    "WAWebSlashCommandsToolText",
    "WAWebSlashCommandsUsageLogger",
    "WDSIconIcVideocam.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.internalfb.com/join_meeting",
      u = "https://www.internalfb.com/intern/whatsapp/vc/start/";
    function c(t) {
      var n = new URLSearchParams({
        source: "whatsapp_web",
        default_create: "zoom",
        meeting_title: t,
      });
      return e + "?" + n.toString();
    }
    var d = new Set(),
      m = {
        name: "fileavc",
        group: "work_tools",
        Icon: r("WDSIconIcVideocam.react"),
        color: "teal",
        text: "none",
        getDescription: y,
        getTextPrompt: y,
        getRunLabel: function () {
          return o("WAWebEmployeeCommandHandoff").canHandOff("vc")
            ? s._(/*BTDS*/ "Press Enter to create a Zoom call")
            : s._(/*BTDS*/ "Press Enter to open Join Meeting in your browser");
        },
        getFollowUpPlaceholder: function (t) {
          var e = t.chat;
          return d.has(e.id.toString()) ? null : _();
        },
        isAvailable: function () {
          return o("WAWebEmployeeCommandHandoff").canOfferHandoff("vc");
        },
        run: function (t, n) {
          var e,
            r = h(
              o("WAWebSlashCommandsToolText").nameComposerMentions(
                n,
                (e = t.mentions) != null ? e : [],
              ),
            ),
            a = n.trim() !== "" ? "title_only" : "none",
            i = t.chat.id.toString();
          if (
            (d.delete(i),
            o("WAWebLexicalUtils").setTextContent(t.editor, ""),
            !o("WAWebEmployeeCommandHandoff").canHandOff("vc"))
          ) {
            (f(t.chat, r, "disabled", !1, null),
              o("WAWebSlashCommandsUsageLogger").logFileAVCResult({
                chat: t.chat,
                fallbackReason: "disabled",
              }));
            return;
          }
          if (p(t, r, a)) (t.clearQuotedMsg(), d.add(i));
          else {
            (f(t.chat, r, "popup_blocked", !1, null),
              o("WAWebSlashCommandsUsageLogger").logFileAVCResult({
                chat: t.chat,
                fallbackReason: "popup_blocked",
              }));
            return;
          }
          o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
            action: "command_done",
            command: "fileavc",
            chat: t.chat,
            prefilled: a,
          });
        },
      };
    function p(e, t, n) {
      var r = e.chat,
        a = o("WAWebEmployeeCommandHandoff").createHandoffNonce(),
        i = null;
      o("WAWebSlashCommandsUsageLogger").expectHandBack("fileavc", r, n);
      var l = o("WAWebEmployeeCommandHandoff").startHandoff({
        fallbackUrl: c(t),
        getData: function () {
          return { title: t };
        },
        kind: "vc",
        nonce: a,
        onFailure: function (a, l) {
          (d.delete(r.id.toString()),
            e.editor.getRootElement() != null &&
              r.active !== !1 &&
              (e.showFollowUpPlaceholder == null ||
                e.showFollowUpPlaceholder(_().toString())),
            o("WAWebSlashCommandHandBack").restoreReplyToEmptyComposer(e),
            f(r, t, a, l, i),
            o("WAWebSlashCommandsUsageLogger").logFileAVCResult({
              chat: r,
              fallbackReason: a,
              fallbackOpened: l,
            }));
        },
        onResult: function (r) {
          return g(e, t, r, i);
        },
        startUrl: u,
        windowName: "wa_employee_vc_" + a,
      });
      return (
        l &&
          (i = o("WAWebSlashCommandHandBack").showHandBackProgressToast(
            s._(/*BTDS*/ "Setting up your Zoom call\u2026"),
          )),
        l
      );
    }
    function _() {
      return s._(/*BTDS*/ "Paste the Zoom link\u2026");
    }
    function f(e, t, n, r, a) {
      var i = {
        actionText: s._(/*BTDS*/ "Open Join Meeting"),
        onAction: function () {
          (o("WAWebSlashCommandsUsageLogger").logFallbackOpen("fileavc", e),
            o("WAWebExternalLink.react").openExternalLink(c(t), {
              noApiCmdHandling: !0,
            }));
        },
        testid: "slash-command-zoom-open-join-meeting",
      };
      if (n === "timeout") {
        o("WAWebSlashCommandHandBack").showHandBackNoAnswer({
          noAnswer: s._(/*BTDS*/ "Join Meeting didn't answer"),
          checkFirst: s._(
            /*BTDS*/ "It may have been created. Check Join Meeting before trying again",
          ),
          actions: [i],
          progress: a,
        });
        return;
      }
      o("WAWebSlashCommandHandBack").showHandBackFallback({
        fallbackOpened: r,
        progress: a,
        reason: n,
        text: {
          failed: s._(/*BTDS*/ "Couldn't set up the Zoom call automatically"),
          blocked: s._(/*BTDS*/ "Finish creating it in Join Meeting"),
          open: i,
        },
      });
    }
    function g(e, t, n, r) {
      var a = e.chat,
        i =
          s
            ._(/*BTDS*/ "Zoom: {meeting title}", [s._param("meeting title", t)])
            .toString() +
          "\n" +
          n,
        l = o("WAWebSlashCommandHandBack").putDraftInChat(e, i),
        u = s._(/*BTDS*/ "Zoom call ready");
      (o("WAWebSlashCommandHandBack").showHandBackOutcomeToast({
        chat: a,
        link: n,
        outcome: l,
        progress: r,
        testid: "slash-command-zoom",
        text: {
          added: u,
          addedInChat: function (t) {
            return s._(/*BTDS*/ "Zoom call ready in {chat name}", [
              s._param("chat name", t),
            ]);
          },
          ready: u,
        },
      }),
        o("WAWebSlashCommandsUsageLogger").logFileAVCResult({
          chat: a,
          outcome: l,
        }));
    }
    function h(e) {
      var t = e.trim();
      return t !== ""
        ? o("WAWebEmployeeCommandLimits").capText(
            t,
            o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.vcTitle,
          )
        : s._(/*BTDS*/ "Quick sync").toString();
    }
    function y() {
      return s._(/*BTDS*/ "Create a Zoom meeting");
    }
    ((l.VC_START_URL = u),
      (l.getZoomCreateUrl = c),
      (l.WAWebSlashCommandFileAVC = m));
  },
  226,
);
