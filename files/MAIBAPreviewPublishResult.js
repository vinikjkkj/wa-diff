__d(
  "MAIBAPreviewPublishResult",
  [
    "MAIBAPreviewPublishAttributionSpecFormatter",
    "MAIBAPreviewPublishStructuredDiff",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      try {
        var t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(
          JSON.parse(e),
        );
        return t != null &&
          o(
            "MAIBAPreviewPublishAttributionSpecFormatter",
          ).hasUnrepresentableAttributionSpecChanges(t)
          ? null
          : t;
      } catch (e) {
        return null;
      }
    }
    l.parsePreviewPublishResult = e;
  },
  98,
);
