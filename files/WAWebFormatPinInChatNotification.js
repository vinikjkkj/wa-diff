__d(
  "WAWebFormatPinInChatNotification",
  [
    "fbt",
    "WAWebCommonMsgTemplateParamsUtils",
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSystemMsgContactName",
    "WAWebUserPrefsMeUser",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n,
        a = r("nullthrows")(
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
      var l = o("WAWebSystemMsgContactName").getSystemMsgContactName(
        o("WAWebFrontendMsgGetters").getChat(e),
        o("WAWebContactCollection").ContactCollection.gadd(a),
      );
      return s._(/*BTDS*/ "{contact-name} pinned a message", [
        s._param("contact-name", l),
      ]);
    }
    l.formatPinInChatNotification = e;
  },
  226,
);
