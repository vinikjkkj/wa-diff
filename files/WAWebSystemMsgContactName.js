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
    var e = ["chat"];
    function s(e, t) {
      return u({
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
    function u(t) {
      var n = t.chat,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c(
        babelHelpers.extends({}, r, {
          chatId: n == null ? void 0 : n.id,
          groupMetadata: n == null ? void 0 : n.groupMetadata,
        }),
      );
    }
    function c(e) {
      var t = e.chatId,
        n = e.contact,
        r = e.formattedName,
        a = e.groupMetadata,
        i = e.isMyContact,
        l = e.notifyName,
        s = e.orgMemberName;
      return i
        ? r
        : s != null
          ? s
          : l != null
            ? o("WAWebChatContactUtils").getFormattedNotifyName(l)
            : o("WAWebChatCommunityUtils").shouldMaskPhoneNumberFor(
                  { chatId: t, groupMetadata: a },
                  n,
                )
              ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(n)
              : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n);
    }
    ((l.getSystemMsgContactName = s),
      (l.resolveSystemMsgContactName = u),
      (l.resolveSystemMsgContactNameFor = c));
  },
  98,
);
