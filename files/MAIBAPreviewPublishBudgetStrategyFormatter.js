__d(
  "MAIBAPreviewPublishBudgetStrategyFormatter",
  ["MAIBAPreviewPublishRawFieldValue", "MAIBAPreviewPublishReviewStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
      ["1", "CAMPAIGN_BUDGET"],
      ["2", "CAMPAIGN_GROUP_BUDGET"],
      ["3", "CAMPAIGN_FLEX_BUDGET"],
      ["CAMPAIGN_BUDGET", "CAMPAIGN_BUDGET"],
      ["CAMPAIGN_GROUP_BUDGET", "CAMPAIGN_GROUP_BUDGET"],
      ["CAMPAIGN_FLEX_BUDGET", "CAMPAIGN_FLEX_BUDGET"],
    ]);
    function s(t) {
      var n = o("MAIBAPreviewPublishRawFieldValue").unwrapSingletonArray(t);
      if (typeof n != "string" && typeof n != "number") return null;
      var r = e.get(
        o("MAIBAPreviewPublishRawFieldValue").unquote(String(n)).trim(),
      );
      return r == null
        ? null
        : o("MAIBAPreviewPublishReviewStrings").getBudgetStrategyLabel(r);
    }
    l.budgetStrategyLabel = s;
  },
  98,
);
