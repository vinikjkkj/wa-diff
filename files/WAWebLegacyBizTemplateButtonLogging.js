__d(
  "WAWebLegacyBizTemplateButtonLogging",
  [
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebMsgGetters",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.chat,
        n = e.msg,
        r =
          o("WAWebContactGetters").getIsBusiness(t.contact) === !0 ||
          o("WAWebContactGetters").getIsEnterprise(t.contact) === !0;
      o("WAWebMsgGetters").getIsSentByMe(n) ||
        o("WAWebChatGetters").getIsGroup(t) === !0 ||
        !r ||
        (await Promise.all([
          o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
            buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType")
              .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
            chat: t,
            msg: n,
          }),
          o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
            chat: t,
            messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint")
              .MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
            messageLevelAction: o("WAWebWamEnumMessageLevelAction")
              .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
            msg: n,
          }),
        ]));
    }
    l.logLegacyBizTemplateExternalUrlClick = e;
  },
  98,
);
