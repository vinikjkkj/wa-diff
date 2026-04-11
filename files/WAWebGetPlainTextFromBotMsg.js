__d(
  "WAWebGetPlainTextFromBotMsg",
  [
    "WAWebRichResponseCopyText",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
        var t = r("getPlainTextFromUnifiedResponse")(e.unifiedResponse);
        if (t !== "") return t;
      }
      if (e.richResponse != null) {
        var n = o("WAWebRichResponseCopyText").getRichResponseCopyText(
          e.richResponse,
        );
        if (n != null) return n;
      }
      return e.body;
    }
    l.getPlainTextFromBotMsg = e;
  },
  98,
);
