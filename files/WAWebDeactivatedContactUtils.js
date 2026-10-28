__d(
  "WAWebDeactivatedContactUtils",
  [
    "WAJids",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteGating",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.accountLid;
      return n != null &&
        (t = o("WAWebContactCollection").ContactCollection.get(n)) != null
        ? t
        : null;
    }
    function s(e) {
      return (
        c(e) &&
        o("WAWebOutContactInviteGating").isInviteDeactivatedUserWebEnabled()
      );
    }
    function u(t) {
      return !t.id.isRegularUser() ||
        !o("WAWebOutContactInviteGating").isInviteDeactivatedUserWebEnabled()
        ? !1
        : o(
            "WAWebConversationDeprecatedLidChatUtils",
          ).isDeprecatedLidChatSendBlocked(t) || c(e(t));
    }
    function c(e) {
      var t = d(e);
      return (
        t != null &&
        o("WAWebOutContactCollection").OutContactCollection.get(t) != null
      );
    }
    function d(e) {
      var t = e == null ? void 0 : e.id;
      if (t == null || !t.isRegularUser()) return null;
      var n = t.isLid() ? o("WAWebApiContact").getPnIfLidIsLatestMapping(t) : t;
      return n != null ? o("WAJids").toPhoneUserJid(n.user) : null;
    }
    ((l.getDeactivatedChatContact = e),
      (l.isDeactivatedContactInviteEnabled = s),
      (l.isDeactivatedChatReplyBlocked = u),
      (l.isSyncedNonWAContact = c),
      (l.getSyncedNonWAContactId = d));
  },
  98,
);
