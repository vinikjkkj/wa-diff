__d(
  "actionabilityToolProcessors",
  [
    "CheckLeadGenTOSProcessor",
    "CreateAdStudyProcessor",
    "CreateLeadGenFormProcessor",
    "DeleteAdFragmentProcessor",
    "DuplicateAdObjectProcessor",
    "EditAdObjectDraftsProcessor",
    "LeadGenFormsTOSProcessor",
    "LinkAdObjectToStudyProcessor",
    "MAIBAGovernedActionProcessor",
    "MAIBAGovernedReviewUtils",
    "PreviewPublishProcessor",
    "PreviewTaskCreationProcessor",
    "PublishAdDraftProcessor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of e) {
        var a,
          i = o("MAIBAGovernedReviewUtils").isGovernedCardResult(n.tool_result),
          l = i ? r("MAIBAGovernedActionProcessor") : s(n.tool_name);
        if (l != null) {
          var u = i ? "governed_review" : (a = n.tool_name) != null ? a : "",
            c = t[t.length - 1];
          c != null && c.toolName === u
            ? c.toolCalls.push(n)
            : t.push({ processor: l, toolCalls: [n], toolName: u });
        }
      }
      return t.flatMap(function (e) {
        return e.processor.getSteps(e.toolCalls);
      });
    }
    function s(e) {
      return e === "duplicate_ad_object"
        ? r("DuplicateAdObjectProcessor")
        : e === "create_ad_study"
          ? r("CreateAdStudyProcessor")
          : e === "link_ad_object_to_study"
            ? r("LinkAdObjectToStudyProcessor")
            : e === "delete_ad_fragment"
              ? r("DeleteAdFragmentProcessor")
              : e === "edit_ad_object_drafts"
                ? r("EditAdObjectDraftsProcessor")
                : e === "preview_publish"
                  ? r("PreviewPublishProcessor")
                  : e === "check_lead_gen_tos"
                    ? r("CheckLeadGenTOSProcessor")
                    : e === "create_lead_gen_form"
                      ? r("CreateLeadGenFormProcessor")
                      : e === "list_lead_gen_forms"
                        ? r("LeadGenFormsTOSProcessor")
                        : e === "create_condition_based_task" ||
                            e === "create_scheduled_task"
                          ? r("PreviewTaskCreationProcessor")
                          : e === "publish_ad_draft"
                            ? r("PublishAdDraftProcessor")
                            : null;
    }
    l.buildActionabilitySteps = e;
  },
  98,
);
