__d(
  "WAWebUpdateUtmAction",
  ["WAWebBizGatingUtils", "WAWebChatUtmCache", "WAWebUtmBizPrefs"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (o("WAWebBizGatingUtils").isUtmTrackingEnabled()) {
        var n = e.toString();
        (o("WAWebUtmBizPrefs").persistUtmtoLocalStorage(n, t),
          r("WAWebChatUtmCache").deleteChatId(n));
      }
    }
    function s(e) {
      var t = e.toString();
      (o("WAWebUtmBizPrefs").removeUtmFromLocalStorage(t),
        r("WAWebChatUtmCache").read(t));
    }
    function u(e) {
      if (!o("WAWebBizGatingUtils").isUtmTrackingEnabled()) return null;
      var t = e.toString();
      if (r("WAWebChatUtmCache").hasRead(t)) return null;
      var n = o("WAWebUtmBizPrefs").getUtmFromLocalStorage(t);
      return (n == null && r("WAWebChatUtmCache").read(t), n);
    }
    ((l.addUtmToChat = e),
      (l.clearUtmAfterMessageSent = s),
      (l.getUtmForChat = u));
  },
  98,
);
