__d(
  "WAWebConsumerSavedPromotionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConsumerPromotionStrings",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebFrontendContactGetters",
    "WAWebOpenLastActiveChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFormat",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t != null
        ? o("WAWebFrontendContactGetters").getFormattedUser(t)
        : o("WAWebWidFormat").widToFormattedUser(e);
    }
    function p(e) {
      var t = Math.floor(e / 1e3);
      return _(t) === _(o("WATimeUtils").unixTime())
        ? o("WAWebClock").Clock.monthDayStr(t)
        : o("WAWebClock").Clock.monthDayYearStr(t);
    }
    function _(e) {
      var t = o("WAWebClock").Clock.timeZoneHardCode;
      return new Intl.DateTimeFormat(
        "en-US",
        t != null ? { year: "numeric", timeZone: t } : { year: "numeric" },
      ).format(o("WAWebClock").Clock.convertGlobalToLocalUnixTime(e) * 1e3);
    }
    async function f(t) {
      var n = t.msgKey,
        r = o("WAWebChatCollection").ChatCollection.get(n.remote);
      if (r == null) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] the offer's chat is not loaded",
              ])),
          )
          .sendLogs("saved-promotions-open-chat-not-found"),
          g());
        return;
      }
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o(
          "WAWebOpenLastActiveChatAction",
        ).cancelPendingLastActiveChatRestore());
      try {
        var a = await o("WAWebCmd").Cmd.openChatAt({
          chat: r,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment,
          msgContext: o("WAWebChatMessageSearch").getSearchContext({
            chat: r,
            msgKey: n,
          }),
        });
        a ||
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] opening the chat at the offer was cancelled",
              ])),
          );
      } catch (e) {
        (o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] chat not opened at the offer",
              ])),
          )
          .sendLogs("saved-promotions-open-chat-failed"),
          g());
      }
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: "saved-promotion-open-chat-failed-toast",
          msg: o(
            "WAWebConsumerPromotionStrings",
          ).getConsumerPromotionOpenChatFailed(),
        }),
      );
    }
    ((l.getSavedPromotionBusinessName = m),
      (l.formatSavedPromotionEndDate = p),
      (l.openSavedPromotionInChat = f));
  },
  98,
);
