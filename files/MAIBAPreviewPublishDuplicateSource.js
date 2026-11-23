__d(
  "MAIBAPreviewPublishDuplicateSource",
  ["MAIBAPreviewPublishReviewStrings", "actionabilityProcessorShared"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "string" || typeof e == "number" ? String(e) : "";
    }
    function s(t, n) {
      var r = e(n);
      if (r === "") return null;
      var a = e(t);
      return a === ""
        ? r
        : o("MAIBAPreviewPublishReviewStrings").formatAdObjectIdentity(a, r);
    }
    function u(t) {
      if (t.action !== "ADD") return null;
      var n = e(t.object_level);
      if (
        n !== "CAMPAIGN_GROUP" &&
        (t.duplicate_review_enabled !== !0 ||
          (n !== "CAMPAIGN" && n !== "ADGROUP"))
      )
        return null;
      var r = e(t.source_object_id);
      return r === ""
        ? null
        : { sourceName: e(t.source_name), sourceObjectId: r };
    }
    function c(t) {
      if (u(t) == null) return null;
      var n = s(t.source_name, t.source_object_id),
        r = s(t.name, t.object_id);
      return n == null || r == null
        ? null
        : {
            after: r,
            before: n,
            field: String(
              o(
                "actionabilityProcessorShared",
              ).getAdObjectLevelLabelCapitalized(e(t.object_level)),
            ),
          };
    }
    ((l.getDuplicateSource = u), (l.buildDuplicateRow = c));
  },
  98,
);
