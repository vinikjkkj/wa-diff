__d(
  "WAWebPollsFormatPollAddOptionNotification",
  [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null) return s._(/*BTDS*/ "An option was added to the poll");
      var n = o("WAWebUserPrefsMeUser").isMeAccount(t);
      if (n) return s._(/*BTDS*/ "You added an option to the poll");
      var r = o("WAWebContactCollection").ContactCollection.gadd(t),
        a = o("WAWebContactGetters").getNotifyName(r),
        i;
      return (
        o("WAWebFrontendContactGetters").getIsMyContact(r)
          ? (i = o("WAWebFrontendContactGetters").getFormattedName(r))
          : a != null
            ? (i = o("WAWebChatContactUtils").getFormattedNotifyName(a))
            : (i = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
                o("WAWebFrontendMsgGetters").getChat(e),
                r,
              )
                ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(r)
                : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(
                    r,
                  )),
        s._(/*BTDS*/ "{sender-name} added an option to the poll", [
          s._param("sender-name", i),
        ])
      );
    }
    l.formatPollAddOptionNotification = e;
  },
  226,
);
