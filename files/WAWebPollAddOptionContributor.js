__d(
  "WAWebPollAddOptionContributor",
  [
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null) return null;
      if (o("WAWebUserPrefsMeUser").isMeAccount(t)) return { kind: "me" };
      var n = o("WAWebContactCollection").ContactCollection.gadd(t);
      return {
        kind: "other",
        name: s({
          chat: o("WAWebFrontendMsgGetters").getChat(e),
          contact: n,
          formattedName: o("WAWebFrontendContactGetters").getFormattedName(n),
          isMyContact: o("WAWebFrontendContactGetters").getIsMyContact(n),
          notifyName: o("WAWebContactGetters").getNotifyName(n),
        }),
      };
    }
    function s(e) {
      var t = e.chat,
        n = e.contact,
        r = e.formattedName,
        a = e.isMyContact,
        i = e.notifyName;
      return a
        ? r
        : i != null
          ? o("WAWebChatContactUtils").getFormattedNotifyName(i)
          : o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(t, n)
            ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(n)
            : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n);
    }
    ((l.getPollAddOptionContributor = e), (l.resolveContributorName = s));
  },
  98,
);
