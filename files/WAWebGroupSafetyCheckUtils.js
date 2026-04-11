__d(
  "WAWebGroupSafetyCheckUtils",
  [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebGroupSafetyCheckModalLoadable",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t;
      if (!e) return !1;
      var n = o("WAWebStateUtils").unproxy(e);
      return (
        o("WAWebChatGetters").getIsGroup(n) &&
        !!((t = n.groupMetadata) != null && t.groupSafetyCheck)
      );
    }
    function c(e, t, n) {
      var r = n === !0 && !t,
        a = n === !1 && !t;
      (r &&
        o(
          "WAWebGroupSafetyCheckModalLoggingUtils",
        ).logGroupSafetyCheckEnabledEvent({
          groupJid: e.id.toJid(),
          initiallyMuted: o("WAWebMuteGetters").getIsMuted(e.mute),
        }),
        _(e, r, a));
    }
    function d(e, t) {
      var n = o("WAWebStateUtils").unproxy(e),
        r = n.groupMetadata;
      if (r) {
        var a = r.groupSafetyCheck;
        if (a === !0) {
          var i = !t;
          _(n, i, !i);
        }
      }
    }
    function m(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebGroupSafetyCheckModalLoadable").GroupSafetyCheckModalLoadable,
          { chat: e },
        ),
        { transition: "modal-flow" },
      );
    }
    function p(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(e) && f(t);
    }
    function _(e, t, n) {
      t
        ? o("WAWebCmd").Cmd.muteChat(e, t, !1, !1)
        : n && o("WAWebCmd").Cmd.muteChat(e, !1, !1, !1);
    }
    function f(e) {
      return u(e) && !e.isTrusted();
    }
    ((l.isGroupSafetyChecked = u),
      (l.handleGroupSafetyCheckStateUpdate = c),
      (l.handleIsTrustedChangeForGroupSafety = d),
      (l.openGroupSafetyCheckModal = m),
      (l.shouldMuteMentionWhileGroupSafetyChecked = p),
      (l.shouldShowGroupSafetyCheckUI = f));
  },
  98,
);
