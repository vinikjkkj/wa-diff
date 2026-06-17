__d(
  "WAWebGetPlainTextFromBotMsg",
  [
    "WAWebRichResponseCopyText",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
        var n = r("getPlainTextFromUnifiedResponse")(e.unifiedResponse);
        if (n !== "") return n;
      }
      if (e.richResponse != null) {
        var a = o("WAWebRichResponseCopyText").getRichResponseCopyText(
          e.richResponse,
        );
        if (a != null) return a;
      }
      return (t == null ? void 0 : t.includeBodyFallback) === !1
        ? null
        : e.body;
    }
    l.getPlainTextFromBotMsg = e;
  },
  98,
);
