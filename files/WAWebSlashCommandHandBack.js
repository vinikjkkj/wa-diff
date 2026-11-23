__d(
  "WAWebSlashCommandHandBack",
  [
    "fbt",
    "Promise",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCopyToClipboard",
    "WAWebEmployeeCommandLastingToast",
    "WAWebLexicalUtils",
    "WAWebLinkPreviewEligibility",
    "WAWebMuteCollection",
    "WAWebNoop",
    "WAWebSlashCommandsComposer",
    "WAWebSpoilerGating",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 3e4;
    function m(e, t) {
      var n = I(e),
        r = n.chat,
        a = n.editor,
        i = n.omitLinkPreview,
        l = e.quotedMsg,
        s = N(t);
      return D(r, l) || !T(e)
        ? "toast_copy"
        : a.getRootElement() != null && r.active !== !1
          ? (s != null && (i == null || i(s)),
            o("WAWebLexicalUtils").setTextContent(
              a,
              t,
              o("WAWebLexicalUtils").PROGRAMMATIC_TEXT_UPDATE_TAG,
            ),
            p(e),
            a.focus(),
            "draft_inserted")
          : (P(r, t, s), p(e), "draft_saved_other_chat");
    }
    function p(e) {
      var t = e.chat,
        n = e.quotedMsg;
      n != null && t.composeQuotedMsg == null && (t.composeQuotedMsg = n);
    }
    function _(e) {
      T(e) && p(e);
    }
    function f(e, t, n) {
      var r = I(e),
        a = r.chat,
        i = r.editor,
        l = r.omitLinkPreview;
      if (i.getRootElement() != null && a.active !== !1) {
        var s = i
          .getEditorState()
          .read(o("WAWebLexicalUtils").$rootTextContent);
        if (!t(s)) return "toast_copy";
        var u = N(s + " " + n);
        return (
          u != null && (l == null || l(u)),
          o("WAWebSlashCommandsComposer").appendComposerText(i, " " + n),
          "draft_inserted"
        );
      }
      var c = $(a);
      if (!x(a) || !t(c)) return "toast_copy";
      var d = c + " " + n;
      return (P(a, d, N(d)), "draft_saved_other_chat");
    }
    function g(e) {
      var t = e.chat,
        n = e.link,
        r = e.outcome,
        a = e.progress,
        i = e.testid,
        l = e.text,
        u = h(t);
      e: {
        if (r === "draft_inserted") {
          C(l.added, null, a);
          break e;
        }
        if (r === "draft_saved_other_chat") {
          C(
            u != null ? l.addedInChat(u) : l.added,
            {
              actionText: s._(/*BTDS*/ ""),
              onAction: function () {
                return y(t);
              },
              testid: i + "-open-chat",
            },
            a,
          );
          break e;
        }
        if (r === "toast_copy") {
          C(
            l.ready,
            {
              actionText: s._(/*BTDS*/ ""),
              onAction: function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(n);
              },
              testid: i + "-copy-link",
            },
            a,
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function h(e) {
      return o("WAWebMuteCollection").MuteCollection.getGlobalPreviews() &&
        e.isLocked !== !0
        ? e.title()
        : null;
    }
    function y(e) {
      e.isLocked !== !0 &&
        o("WAWebCmd").Cmd.openChatBottom({
          chat: e,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage,
        });
    }
    function C(e, t, n) {
      if (n != null) {
        n(e, t);
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: e,
          action:
            t == null
              ? void 0
              : {
                  actionText: t.actionText,
                  onAction: t.onAction,
                  testid: t.testid,
                },
        }),
      );
    }
    function b(e) {
      var t = e.fallbackOpened,
        n = e.progress,
        r = e.reason,
        o = e.text;
      if (t) {
        v(n);
        return;
      }
      (r !== "popup_blocked" && C(o.failed, null, n), R(o.blocked, o.open));
    }
    function v(e) {
      C(s._(/*BTDS*/ ""), null, e);
    }
    function S(e) {
      var t = e.checkFirst,
        n = e.lastingAction,
        r = e.noAnswer,
        o = e.noAnswerAction,
        a = e.progress;
      (C(r, o, a), R(t, n));
    }
    function R(e, t) {
      o("WAWebEmployeeCommandLastingToast").showLastingToast({
        action: t,
        durationMs: d,
        msg: e,
      });
    }
    function L(t) {
      var a = r("WAWebNoop"),
        i = new (e || (e = n("Promise")))(function (e) {
          a = e;
        });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: new (o("WAWebActionToast.react").ActionType)(t),
            pendingAction: i,
          }),
        ),
        function (t, r) {
          return a(
            new (o("WAWebActionToast.react").ActionType)(
              t,
              r == null
                ? null
                : {
                    actionText: r.actionText,
                    actionHandler: function () {
                      return (e || (e = n("Promise"))).resolve(r.onAction());
                    },
                    testid: r.testid,
                  },
            ),
          );
        }
      );
    }
    var E = new Map();
    function k(e) {
      var t = e.chat.id.toString();
      return (
        E.set(t, e),
        function () {
          E.get(t) === e && E.delete(t);
        }
      );
    }
    function I(e) {
      var t;
      return e.chat.isLocked === !0 ||
        (e.editor.getRootElement() != null && e.chat.active !== !1)
        ? e
        : (t = E.get(e.chat.id.toString())) != null
          ? t
          : e;
    }
    function T(e) {
      var t = I(e),
        n = t.chat,
        r = t.editor;
      return r.getRootElement() != null && n.active !== !1
        ? r
            .getEditorState()
            .read(o("WAWebLexicalUtils").$rootTextContent)
            .trim() === ""
        : x(n) && $(n).trim() === "";
    }
    function D(e, t) {
      var n = e.composeQuotedMsg;
      return n != null && (t == null || !n.id.equals(t.id));
    }
    function x(e) {
      return !e.active && e.isLocked !== !0;
    }
    function $(e) {
      var t, n;
      return (t = (n = e.getComposeContents()) == null ? void 0 : n.text) !=
        null
        ? t
        : "";
    }
    function P(e, t, n) {
      var r = { text: t, timestamp: o("WATimeUtils").unixTime() };
      (n != null && (r.omittedURL = n), e.setComposeContents(r));
    }
    function N(e) {
      var t = o("WAWebLinkPreviewEligibility").findFirstPreviewEligibleWebLink({
        getShouldHideSpoilers: o("WAWebSpoilerGating").isSpoilerSenderEnabled,
        text: e,
      });
      if (t == null) return null;
      var n = t.domain.toLowerCase();
      return M.some(function (e) {
        return n === e || n.endsWith("." + e);
      })
        ? t.url
        : null;
    }
    var M = ["internalfb.com", "internalmeta.com"];
    ((l.putDraftInChat = m),
      (l.restoreReply = p),
      (l.restoreReplyToEmptyComposer = _),
      (l.appendToDraftInChat = f),
      (l.showHandBackOutcomeToast = g),
      (l.getToastChatName = h),
      (l.openHandBackChat = y),
      (l.showHandBackToast = C),
      (l.showHandBackFallback = b),
      (l.showFinishInTabToast = v),
      (l.showHandBackNoAnswer = S),
      (l.showLastingHandBackToast = R),
      (l.showHandBackProgressToast = L),
      (l.registerLiveComposer = k));
  },
  226,
);
