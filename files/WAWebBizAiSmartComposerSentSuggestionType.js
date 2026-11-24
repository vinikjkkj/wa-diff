__d(
  "WAWebBizAiSmartComposerSentSuggestionType",
  [],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      "CLABE_PAYMENT_HANDLE",
      "PIX_PAYMENT_HANDLE",
      "UPI_PAYMENT_HANDLE",
      "UPR_PAYMENT_HANDLE",
    ]);
    function s(t) {
      return e.has(t) ? "TEXT" : t;
    }
    l.getComposerSendSuggestionType = s;
  },
  98,
);
