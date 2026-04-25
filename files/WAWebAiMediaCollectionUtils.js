__d(
  "WAWebAiMediaCollectionUtils",
  ["WAWebBotGating", "WAWebBotUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.length === 0) return !1;
      var t = new Set(
        e.map(function (e) {
          return e.media.type;
        }),
      );
      return t.has(o("WAWebMsgType").MSG_TYPE.DOCUMENT) || t.size > 1;
    }
    function s(t, n) {
      return (
        o("WAWebBotUtils").isMetaAiBot(t.id) &&
        n.length >= 2 &&
        e(n) &&
        o("WAWebBotGating").getMetaAiFileUploadCountLimit() >= 2
      );
    }
    l.shouldSendAsAiMediaCollection = s;
  },
  98,
);
