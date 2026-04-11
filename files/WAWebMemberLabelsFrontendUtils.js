__d(
  "WAWebMemberLabelsFrontendUtils",
  [
    "WAJids",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelGating",
    "WAWebMemberLabelHooks",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        t == null ||
        e == null ||
        !o("WAWebChatGetters").getIsGroup(e) ||
        !t.isUser()
      )
        return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t);
      if (n == null) return null;
      var r = o("WAWebWidToJid").widToGroupJid(e.id),
        a = o("WAJids").userIdFromJid(o("WAWebWidToJid").widToUserJid(n)),
        i = o("WAJids").toLidUserJid(a);
      return o("WAWebMemberLabelHooks").createMemberLabelKey(r, i);
    }
    function s(t) {
      var n, r;
      if (t.from === "message") {
        var a = t.message.unsafe();
        ((n = o("WAWebFrontendMsgGetters").getMaybeChat(a)),
          (r = o("WAWebMsgGetters").getSender(a)));
      } else if (t.from === "chat_and_member") ((n = t.chat), (r = t.member));
      else return null;
      return e(n, r);
    }
    function u(e) {
      return (
        e != null &&
        o("WAWebChatGetters").getIsGroup(e) &&
        e.isTrusted() &&
        o("WAWebMemberLabelGating").isMemberLabelReceiverEnabled()
      );
    }
    function c(e) {
      var t = e.unsafe(),
        n = o("WAWebFrontendMsgGetters").getMaybeChat(t),
        r = o("WAWebMsgGetters").getIsForwarded(t),
        a = o("WAWebFrontendMsgGetters").getAsRevoked(t),
        i = o("WAWebMsgGetters").getIsReply(t);
      return !r && !a && !i && u(n);
    }
    function d(e) {
      var t = r("WAWebMemberLabelCollection").get(e);
      return t == null ? !1 : t.label.trim() !== "";
    }
    function m(e) {
      var t = s(e);
      return t == null ? !1 : d(t);
    }
    function p(e) {
      if (e == null) return !1;
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return t == null
        ? !1
        : m({ from: "chat_and_member", chat: e, member: t });
    }
    function _(t) {
      if (t) {
        var n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
        if (n == null) return null;
        var r = e(t, n);
        if (r) return f(r);
      }
    }
    function f(e) {
      var t = r("WAWebMemberLabelCollection").get(e);
      if (t) return t.label;
    }
    function g(e, t) {
      return (
        o("WAWebContactGetters").getIsMe(e) &&
        m({ from: "chat_and_member", chat: t, member: e.id }) &&
        o("WAWebMemberLabelGating").isMemberLabelSenderEnabled()
      );
    }
    function h(e, t) {
      if (e == null || t == null || !o("WAWebChatGetters").getIsGroup(e))
        return !1;
      var n = m({ from: "chat_and_member", chat: e, member: t });
      return (
        !n &&
        o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        o("WAWebMemberLabelGating").isMemberLabelSenderEnabled()
      );
    }
    ((l.memberLabelKeyFrom = s),
      (l.shouldShowMemberLabelForChat = u),
      (l.shouldShowMemberLabelForMsg = c),
      (l.memberLabelExists = m),
      (l.myMemberLabelExistsForChat = p),
      (l.getMyMemberLabelStringForChat = _),
      (l.canEditMemberLabel = g),
      (l.shouldShowAddMemberTagCTA = h));
  },
  98,
);
