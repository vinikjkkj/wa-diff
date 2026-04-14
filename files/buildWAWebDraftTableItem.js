__d(
  "buildWAWebDraftTableItem",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d = e == null || (l = e.ctwa) == null ? void 0 : l.latest_wa_web_draft;
      if (d == null) return null;
      var m =
          (s = d.spec) == null ||
          (s = s.adgroup_spec) == null ||
          (s = s[0]) == null ||
          (s = s.creative) == null
            ? void 0
            : s.object_story_spec,
        p = m == null ? void 0 : m.link_data,
        _ = m == null ? void 0 : m.video_data,
        f =
          (u = p == null ? void 0 : p.message) != null
            ? u
            : _ == null
              ? void 0
              : _.message;
      return {
        adClicks: 0,
        adgroupId: null,
        audience: null,
        boostId: "",
        boostingStatus: null,
        boostingStatusDisplayText: null,
        boostedComponentRef: null,
        asyncRequestRef: null,
        budgetType: null,
        businessName: null,
        childAttachments: null,
        conversations: 0,
        currency: "USD",
        description: f,
        draftId: d.id,
        draftFlowId: d.flow_id,
        durationInDays: null,
        formattedBudget: null,
        formattedSpent: "",
        highResImageUrl: null,
        isDraft: !0,
        isLoadingThumbnail: n,
        isVerified: null,
        legacyAdAccountId: null,
        link: null,
        nodeId: (c = d.id) != null ? c : "draft",
        onViewResults: r("WAWebNoop"),
        onDeleteDraft: i != null ? i : null,
        onRecreateAd: r("WAWebNoop"),
        onResumeDraft: a != null ? a : r("WAWebNoop"),
        pageId: o,
        profilePictureUrl: null,
        reach: 0,
        spend: null,
        startTime: null,
        thumbnailUrl: t,
        videoData: null,
      };
    }
    l.default = e;
  },
  98,
);
