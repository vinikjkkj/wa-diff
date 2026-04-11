__d(
  "WAWebFormatPinInChatNotification",
  [
    "fbt",
    "WANullthrows",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebCommonMsgTemplateParamsUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        a = r("WANullthrows")(
          (t =
            (n = o(
              "WAWebCommonMsgTemplateParamsUtils",
            ).interpretMsgTemplateParams({
              type: "pinned_message",
              templateParams: e.templateParams,
            })) == null
              ? void 0
              : n[0]) != null
            ? t
            : o("WAWebMsgGetters").getSender(e),
        ),
        i = o("WAWebUserPrefsMeUser").isMeAccount(a);
      if (i) return s._(/*BTDS*/ "You pinned a message");
      var l = o("WAWebContactCollection").ContactCollection.gadd(a),
        u = o("WAWebContactGetters").getNotifyName(l),
        c;
      return (
        o("WAWebFrontendContactGetters").getIsMyContact(l)
          ? (c = o("WAWebFrontendContactGetters").getFormattedName(l))
          : u != null
            ? (c = o("WAWebChatContactUtils").getFormattedNotifyName(
                o("WAWebContactGetters").getNotifyName(l),
              ))
            : (c = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
                o("WAWebFrontendMsgGetters").getChat(e),
                l,
              )
                ? o("WAWebFrontendContactGetters").getMaskedPhoneLid(l)
                : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(
                    l,
                  )),
        s._(/*BTDS*/ "{contact-name} pinned a message", [
          s._param("contact-name", c),
        ])
      );
    }
    l.formatPinInChatNotification = e;
  },
  226,
);
