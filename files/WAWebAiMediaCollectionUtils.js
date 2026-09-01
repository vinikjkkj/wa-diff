__d(
  "WAWebAiMediaCollectionUtils",
  ["WAWebBotGating", "WAWebBotUtils", "WAWebHatchGating", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(t, n) {
      if (n.length < e) return !1;
      if (o("WAWebBotUtils").isMetaAiBot(t.id))
        return o("WAWebBotGating").getMetaAiFileUploadCountLimit() >= e && u(n);
      if (o("WAWebBotUtils").isHatchBot(t.id)) {
        var r = o("WAWebHatchGating").getHatchMediaUploadCountLimit();
        return r >= e && n.length <= r && u(n);
      }
      return !1;
    }
    function u(e) {
      return e.every(function (e) {
        return e.media.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
      });
    }
    l.shouldSendAsAiMediaCollection = s;
  },
  98,
);
