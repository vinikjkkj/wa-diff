__d(
  "WAWebSystemMsgContactName",
  [
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberContactName",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s({
        chat: e,
        contact: t,
        formattedName: o("WAWebFrontendContactGetters").getFormattedName(t),
        isMyContact: o("WAWebFrontendContactGetters").getIsMyContact(t),
        notifyName: o("WAWebContactGetters").getNotifyName(t),
        orgMemberName: o("WAWebOrgMemberContactName").getOrgMemberDisplayName(
          t,
        ),
      });
    }
    function s(e) {
      var t = e.chat,
        n = e.contact,
        r = e.formattedName,
        a = e.isMyContact,
        i = e.notifyName,
        l = e.orgMemberName;
      return a
        ? r
        : l != null
          ? l
          : i != null
            ? o("WAWebChatContactUtils").getFormattedNotifyName(i)
            : o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(t, n)
              ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(n)
              : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n);
    }
    ((l.getSystemMsgContactName = e), (l.resolveSystemMsgContactName = s));
  },
  98,
);
