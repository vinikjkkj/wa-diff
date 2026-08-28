__d(
  "adsCampaignGroupDraftFragmentCreateReducer",
  [
    "AdsApplicationUtils",
    "AdsCampaignGroupCombinedStore",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsEditorActionUtils",
    "AdsPEPrefetchedIDsActionFlux",
    "AdsPayloadUtils",
    "QPLDraftFragmentMutationLogger",
    "QuickPerformanceLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      if (o("AdsApplicationUtils").isCreativeStudio()) return e;
      var a = o("AdsPayloadUtils").getCampaignGroupIDsFromPayload_DO_NOT_USE({
          action: t,
        }),
        i = a.filter(function (e) {
          var t = r("AdsCampaignGroupCombinedStore").getCachedObject(e);
          return t.isDone() && t.hasValue();
        });
      if (i.length === 0) return e;
      var l = r("AdsCampaignGroupCombinedStore").getAllRecords(i),
        s = n(l, t);
      return o(
        "AdsDraftFragmentStoreStateApplyChangesMutators",
      ).applyChangesFromAdObjectsMutation(e, l, s);
    }
    function u(t, n, a, i) {
      return function (l, u) {
        if (
          (u && u.type === o("AdsPEPrefetchedIDsActionFlux").actionType) ||
          o("AdsEditorActionUtils").isNotAMEditorAction(u)
        )
          return l;
        o("QPLDraftFragmentMutationLogger").markerStart();
        var c = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp(),
          d = l;
        return (
          (d = t(d, u)),
          (d = s(d, u, function (e, t) {
            return a(n(e, t), t);
          })),
          (d = i(d, u)),
          o(
            "QPLDraftFragmentMutationLogger",
          ).qplDraftSyncEmitPointMutateCampaignGroup(u.actionType, c, l !== d),
          d
        );
      };
    }
    l.default = u;
  },
  98,
);
