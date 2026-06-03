__d(
  "buildWAWebDraftTableItem",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l) {
      var s;
      return e == null
        ? null
        : {
            adClicks: 0,
            adgroupId: null,
            asyncRequestRef: null,
            audience: null,
            boostedComponentRef: null,
            boostId: "",
            boostingStatus: null,
            boostingStatusDisplayText: null,
            budgetType: null,
            businessName: null,
            childAttachments: null,
            conversations: 0,
            currency: "USD",
            description: t,
            draftFlowId: e.flow_id,
            draftId: e.id,
            durationInDays: null,
            formattedBudget: null,
            formattedSpent: "",
            highResImageUrl: null,
            isDraft: !0,
            isLoadingThumbnail: o,
            isVerified: null,
            legacyAdAccountId: null,
            link: null,
            nodeId: (s = e.id) != null ? s : "draft",
            onDeleteDraft: l != null ? l : null,
            onRecreateAd: r("WAWebNoop"),
            onResumeDraft: i != null ? i : r("WAWebNoop"),
            onViewResults: r("WAWebNoop"),
            pageId: a,
            profilePictureUrl: null,
            reach: 0,
            regulatedCategories: [],
            spend: null,
            startTime: null,
            thumbnailUrl: n,
            videoData: null,
          };
    }
    l.default = e;
  },
  98,
);
