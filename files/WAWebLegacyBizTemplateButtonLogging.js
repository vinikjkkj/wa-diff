__d(
  "WAWebLegacyBizTemplateButtonLogging",
  [
    "Promise",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebMsgGetters",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.chat,
            a = t.msg,
            i =
              o("WAWebContactGetters").getIsBusiness(r.contact) === !0 ||
              o("WAWebContactGetters").getIsEnterprise(r.contact) === !0;
          o("WAWebMsgGetters").getIsSentByMe(a) ||
            o("WAWebChatGetters").getIsGroup(r) === !0 ||
            !i ||
            (yield (e || (e = n("Promise"))).all([
              o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                buttonClickedType: o(
                  "WAWebWamEnumQbmMessageClickButtonClickedType",
                ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
                chat: r,
                msg: a,
              }),
              o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                chat: r,
                messageActionEntryPoint: o(
                  "WAWebWamEnumMessageActionEntryPoint",
                ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                  .MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                msg: a,
              }),
            ]));
        })),
        u.apply(this, arguments)
      );
    }
    l.logLegacyBizTemplateExternalUrlClick = s;
  },
  98,
);
