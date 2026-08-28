__d(
  "CombinedCampaign-publish_status-resolver",
  [
    "AdsCampaignDraftFragmentStoreDML",
    "AdsDML",
    "AdsUEditorHostIDs",
    "adsCFCampaignIsNewID",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
      .Query({ name: i.id, liveResolverDMLQuery: !0 })
      .Derived(function (e) {
        var t = e.vars,
          n = t.hostID,
          a = t.id;
        if (n === r("AdsUEditorHostIDs").EDITING) {
          var i;
          return {
            changedFields: (i = o(
              "AdsCampaignDraftFragmentStoreDML",
            )).dmlAdsCampaignDraftFragmentStoreGetChangedFields(a),
            hasDraft: i.dmlAdsCampaignDraftFragmentStoreHasDraft(a),
            isDeleted: i.dmlAdsCampaignDraftFragmentStoreIsDeleted(a),
            isDirty: i.dmlAdsCampaignDraftFragmentStoreIsDirty(a),
            isNew: i.dmlAdsCampaignDraftFragmentStoreIsNew(a),
            isNewDraftFragmentWithoutPublishAttempt:
              i.dmlAdsCampaignDraftFragmentStoreIsNewDraftWithoutPublishAttempt(
                a,
              ),
          };
        } else
          return {
            changedFields: r("immutable").Set(),
            hasDraft: r("adsCFCampaignIsNewID")(a),
            isDeleted: !1,
            isDirty: !1,
            isNew: r("adsCFCampaignIsNewID")(a),
            isNewDraftFragmentWithoutPublishAttempt: r("adsCFCampaignIsNewID")(
              a,
            ),
          };
      });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, {
        hostID: t.hostID,
        id: t.campaign.id,
      });
    }
    l.publish_status = s;
  },
  98,
);
