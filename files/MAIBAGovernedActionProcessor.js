__d(
  "MAIBAGovernedActionProcessor",
  [
    "MAIBAGovernedActionCardModule",
    "MAIBAGovernedActionStepIcon.react",
    "MAIBAGovernedActionStepIntro.react",
    "MAIBAGovernedActionStepTitle.react",
    "MAIBAGovernedPrerequisiteCard.react",
    "MAIBAGovernedReviewUtils",
    "MAIBALWIAdChangeChannel",
    "actionabilityProcessorShared",
    "getMAIBAGovernedActionStepStatus",
    "getMAIBAGovernedActionStepTitle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("MAIBAGovernedReviewUtils").parseGovernedPrerequisiteJSON(
        e.governed_action_json,
      );
      return {
        content:
          t == null
            ? null
            : s.jsx(r("MAIBAGovernedPrerequisiteCard.react"), { card: t }),
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        renderStatusIcon: function (t) {
          return s.jsx(r("MAIBAGovernedActionStepIcon.react"), {
            actionId: null,
            defaultIcon: t,
            initialStatus: "BLOCKED",
            reviewRevision: null,
          });
        },
        status: o("actionabilityProcessorShared").statusOf(e),
        title: r("getMAIBAGovernedActionStepTitle")("BLOCKED"),
        titleElement: s.jsx(r("MAIBAGovernedActionStepTitle.react"), {
          actionId: null,
          initialStatus: "BLOCKED",
          reviewRevision: null,
        }),
      };
    }
    function c(e) {
      if (o("MAIBAGovernedReviewUtils").isGovernedBlockedResult(e.tool_result))
        return u(e);
      var t = o("MAIBAGovernedReviewUtils").parseGovernedReviewHandle(
          e.tool_result,
        ),
        n = o("MAIBAGovernedReviewUtils").parseGovernedActionJSON(
          e.governed_action_json,
        ),
        a = r("getMAIBAGovernedActionStepStatus")(
          n == null ? void 0 : n.status,
          n == null ? void 0 : n.card.lifecycle.phase,
          n == null ? void 0 : n.card.lifecycle.outcome_unknown,
        );
      return {
        content:
          t == null || r("MAIBAGovernedActionCardModule") == null
            ? null
            : s.jsx(r("MAIBAGovernedActionCardModule"), {
                actionId: t.actionId,
                initialAction: n,
                onCommitted:
                  e.tool_name === "lwi_update_ad"
                    ? function () {
                        var n;
                        return o(
                          "MAIBALWIAdChangeChannel",
                        ).publishMAIBALWIAdChange(
                          t.actionId +
                            ":" +
                            ((n = t.stateRevision) != null ? n : ""),
                          e.tool_call_args,
                        );
                      }
                    : void 0,
                reviewRevision: t.stateRevision,
              }),
        intro:
          (n == null ? void 0 : n.card.lifecycle.review_intro) == null
            ? void 0
            : s.jsx(r("MAIBAGovernedActionStepIntro.react"), {
                actionId: t == null ? void 0 : t.actionId,
                initialStatus: a,
                reviewRevision: t == null ? void 0 : t.stateRevision,
                text: n.card.lifecycle.review_intro,
              }),
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        renderStatusIcon: function (n) {
          return s.jsx(r("MAIBAGovernedActionStepIcon.react"), {
            actionId: t == null ? void 0 : t.actionId,
            defaultIcon: n,
            initialStatus: a,
            reviewRevision: t == null ? void 0 : t.stateRevision,
          });
        },
        status: o("actionabilityProcessorShared").statusOf(e),
        title: r("getMAIBAGovernedActionStepTitle")(
          a,
          n == null ? void 0 : n.card.lifecycle,
        ),
        titleElement: s.jsx(r("MAIBAGovernedActionStepTitle.react"), {
          actionId: t == null ? void 0 : t.actionId,
          copy: n == null ? void 0 : n.card.lifecycle,
          initialStatus: a,
          reviewRevision: t == null ? void 0 : t.stateRevision,
        }),
      };
    }
    var d = {
        getSteps: function (t) {
          return t.map(c);
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
