__d(
  "MAIBAPreviewPublishCurrencyFormatter",
  ["AdsCurrencyFormatter", "MAIBAPreviewPublishRawFieldValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null || t === "") return null;
      var n = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(e);
      return n == null
        ? null
        : o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(t, n);
    }
    l.formatCurrencyValue = e;
  },
  98,
);
