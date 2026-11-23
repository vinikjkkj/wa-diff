__d(
  "actionabilityTools",
  ["MAIBAGovernedReviewUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "check_lead_gen_tos",
      "create_ad_study",
      "create_condition_based_task",
      "create_lead_gen_form",
      "create_scheduled_task",
      "delete_ad_fragment",
      "duplicate_ad_object",
      "edit_ad_object_drafts",
      "link_ad_object_to_study",
      "list_lead_gen_forms",
      "preview_publish",
      "publish_ad_draft",
    ]);
    function s(t) {
      return t != null && e.has(t);
    }
    function u(e) {
      return (
        s(e.tool_name) ||
        o("MAIBAGovernedReviewUtils").isGovernedCardResult(e.tool_result)
      );
    }
    function c(e) {
      return (
        e === "create_condition_based_task" || e === "create_scheduled_task"
      );
    }
    function d(e, t, n) {
      return c(e) ||
        o("MAIBAGovernedReviewUtils").isGovernedCardResult(n) ||
        e === "check_lead_gen_tos" ||
        e === "create_lead_gen_form" ||
        e === "list_lead_gen_forms"
        ? !0
        : t && s(e);
    }
    ((l.ACTIONABILITY_TOOL_NAMES = e),
      (l.isActionabilityTool = s),
      (l.isActionabilityToolCall = u),
      (l.isTaskCreationTool = c),
      (l.shouldRenderToolInActionabilitySection = d));
  },
  98,
);
