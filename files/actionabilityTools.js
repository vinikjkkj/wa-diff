__d(
  "actionabilityTools",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "create_ad_study",
      "create_condition_based_task",
      "create_scheduled_task",
      "delete_ad_fragment",
      "duplicate_ad_object",
      "edit_ad_object_drafts",
      "link_ad_object_to_study",
      "preview_publish",
      "publish_ad_draft",
    ]);
    function l(t) {
      return t != null && e.has(t);
    }
    function s(e, t) {
      return e || t;
    }
    function u(e, t, n) {
      return e === "create_condition_based_task" ||
        e === "create_scheduled_task"
        ? n
        : t && l(e);
    }
    ((i.ACTIONABILITY_TOOL_NAMES = e),
      (i.isActionabilityTool = l),
      (i.shouldMountActionabilitySection = s),
      (i.shouldRenderToolInActionabilitySection = u));
  },
  66,
);
