__d(
  "WAWebWrapperShouldHaveTail",
  ["WAWebChatGetters", "WAWebDisplayType", "WAWebMessagePosition"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chat,
        n = e.displayType,
        r = e.isDisplayedAsNotification,
        a = e.position,
        i = e.tailOverride;
      return (
        (!o("WAWebChatGetters").getIsPSA(t) &&
          !r &&
          ![
            o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER,
            o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE,
          ].includes(n) &&
          !i &&
          (a === o("WAWebMessagePosition").MsgPosition.FRONT ||
            a === o("WAWebMessagePosition").MsgPosition.SINGLE)) ||
        n === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO ||
        !!i
      );
    }
    l.shouldHaveTail = e;
  },
  98,
);
