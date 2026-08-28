__d(
  "CombinedCampaignGroup-publish_status-resolver",
  [
    "AdsCampaignGroupDraftFragmentStoreDML",
    "AdsDML",
    "AdsEditingCampaignGroupContextUtil",
    "AdsUEditorHostIDs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        var t = e.vars,
          n = t.hostID,
          a = t.id;
        if (n == null || a == null) return null;
        if (
          n === r("AdsUEditorHostIDs").EDITING ||
          n === r("AdsUEditorHostIDs").BULK_EDIT_DIALOG
        ) {
          var i;
          return o(
            "AdsEditingCampaignGroupContextUtil",
          ).campaignGroupPublishStatusSelectorLogic(
            (i = o(
              "AdsCampaignGroupDraftFragmentStoreDML",
            )).dmlAdsCampaignGroupDraftFragmentStoreIsNew(a),
            i.dmlAdsCampaignGroupDraftFragmentStoreIsNewDraftWithoutPublishAttempt(
              a,
            ),
            i.dmlAdsCampaignGroupDraftFragmentStoreHasDraft(a),
            i.dmlAdsCampaignGroupDraftFragmentStoreIsDirty(a),
            i.dmlAdsCampaignGroupDraftFragmentStoreIsDeleted(a),
            i.dmlAdsCampaignGroupDraftFragmentStoreGetChangedFields(a),
          );
        }
      });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, {
        hostID: t.hostID,
        id: t.campaignGroup.id,
      });
    }
    l.publish_status = s;
  },
  98,
);
