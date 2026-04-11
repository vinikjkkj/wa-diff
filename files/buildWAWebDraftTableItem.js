__d(
  "buildWAWebDraftTableItem",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i,
        l,
        s,
        u,
        c = e == null || (i = e.ctwa) == null ? void 0 : i.latest_wa_web_draft;
      if (c == null) return null;
      var d =
          (l = c.spec) == null ||
          (l = l.adgroup_spec) == null ||
          (l = l[0]) == null ||
          (l = l.creative) == null
            ? void 0
            : l.object_story_spec,
        m = d == null ? void 0 : d.link_data,
        p = d == null ? void 0 : d.video_data,
        _ =
          (s = m == null ? void 0 : m.message) != null
            ? s
            : p == null
              ? void 0
              : p.message;
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
        description: _,
        draftId: c.id,
        draftFlowId: c.flow_id,
        durationInDays: null,
        formattedBudget: null,
        formattedSpent: "",
        highResImageUrl: null,
        isDraft: !0,
        isLoadingThumbnail: n,
        isVerified: null,
        legacyAdAccountId: null,
        link: null,
        nodeId: (u = c.id) != null ? u : "draft",
        onViewResults: r("WAWebNoop"),
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
