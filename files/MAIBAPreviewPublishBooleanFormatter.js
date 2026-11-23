__d(
  "MAIBAPreviewPublishBooleanFormatter",
  ["MAIBAPreviewPublishRawFieldValue", "MAIBAPreviewPublishReviewStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("MAIBAPreviewPublishRawFieldValue").unwrapSingletonArray(e);
      if (typeof t == "boolean") return t;
      if (t === 1) return !0;
      if (t === 0) return !1;
      if (typeof t != "string") return null;
      var n = o("MAIBAPreviewPublishRawFieldValue")
        .unquote(t)
        .trim()
        .toLowerCase();
      return n === "true" || n === "1"
        ? !0
        : n === "false" || n === "0"
          ? !1
          : null;
    }
    function s(t) {
      var n = e(t);
      return n == null
        ? null
        : o("MAIBAPreviewPublishReviewStrings").getBooleanLabel(n);
    }
    ((l.parseBooleanValue = e), (l.formatBooleanValue = s));
  },
  98,
);
