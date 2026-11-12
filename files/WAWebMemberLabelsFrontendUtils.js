__d(
  "WAWebMemberLabelsFrontendUtils",
  [
    "WAJids",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelHooks",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null || e == null || !r("WAWebWid").isGroup(e) || !t.isUser())
        return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t);
      if (n == null) return null;
      var a = o("WAWebWidToJid").widToGroupJid(e),
        i = o("WAJids").userIdFromJid(o("WAWebWidToJid").widToUserJid(n)),
        l = o("WAJids").toLidUserJid(i);
      return o("WAWebMemberLabelHooks").createMemberLabelKey(a, l);
    }
    function s(t) {
      var n, r;
      if (t.from === "message") {
        var o;
        ((n = (o = t.chat) == null ? void 0 : o.id), (r = t.sender));
      } else if (t.from === "chat_and_member") ((n = t.chatId), (r = t.member));
      else return null;
      return e(n, r);
    }
    function u(e) {
      return e != null && o("WAWebChatGetters").getIsGroup(e) && e.isTrusted();
    }
    function c(e) {
      var t = e.isGroup,
        n = e.trusted;
      return t && n;
    }
    function d(e, t) {
      return e && u(t);
    }
    function m(e) {
      var t = r("WAWebMemberLabelCollection").get(e);
      return t == null ? !1 : t.label.trim() !== "";
    }
    function p(e) {
      var t = s(e);
      return t == null ? !1 : m(t);
    }
    function _(e) {
      if (e == null) return !1;
      var t = o("WAWebUserUtils").getMeLidUserOrThrow();
      return p({ from: "chat_and_member", chatId: e, member: t });
    }
    function f(t) {
      if (t) {
        var n = o("WAWebUserUtils").getMeLidUserOrThrow(),
          r = e(t, n);
        if (r) return g(r);
      }
    }
    function g(e) {
      var t = r("WAWebMemberLabelCollection").get(e);
      if (t) return t.label;
    }
    function h(e, t) {
      return (
        o("WAWebContactGetters").getIsMe(e) &&
        p({ from: "chat_and_member", chatId: t, member: e.id })
      );
    }
    function y(e, t) {
      if (e == null || t == null || !r("WAWebWid").isGroup(e)) return !1;
      var n = p({ from: "chat_and_member", chatId: e, member: t });
      return !n && o("WAWebUserUtils").isMeAccount(t);
    }
    ((l.memberLabelKeyFrom = s),
      (l.shouldShowMemberLabelForChat = u),
      (l.shouldShowMemberLabelFor = c),
      (l.shouldShowMemberLabelForMsg = d),
      (l.memberLabelExists = p),
      (l.myMemberLabelExistsForChat = _),
      (l.getMyMemberLabelStringForChat = f),
      (l.canEditMemberLabel = h),
      (l.shouldShowAddMemberTagCTA = y));
  },
  98,
);
