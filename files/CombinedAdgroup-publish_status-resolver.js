__d(
  "CombinedAdgroup-publish_status-resolver",
  [
    "AdsAdgroupDraftFragmentStoreDML",
    "AdsDML",
    "AdsUEditorHostIDs",
    "adsCFAdgroupIsNewID",
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
              "AdsAdgroupDraftFragmentStoreDML",
            )).dmlAdsAdgroupDraftFragmentStoreGetChangedFields(a),
            hasDraft: i.dmlAdsAdgroupDraftFragmentStoreHasDraft(a),
            isDeleted: i.dmlAdsAdgroupDraftFragmentStoreIsDeleted(a),
            isDirty: i.dmlAdsAdgroupDraftFragmentStoreIsDirty(a),
            isNew: i.dmlAdsAdgroupDraftFragmentStoreIsNew(a),
            isNewDraftFragmentWithoutPublishAttempt:
              i.dmlAdsAdgroupDraftFragmentStoreIsNewDraftWithoutPublishAttempt(
                a,
              ),
          };
        } else
          return {
            changedFields: r("immutable").Set(),
            hasDraft: r("adsCFAdgroupIsNewID")(a),
            isDeleted: !1,
            isDirty: !1,
            isNew: r("adsCFAdgroupIsNewID")(a),
            isNewDraftFragmentWithoutPublishAttempt: r("adsCFAdgroupIsNewID")(
              a,
            ),
          };
      });
    function s(t) {
      return o("AdsDML").subscribeQueryLive(e, {
        hostID: t.hostID,
        id: t.adgroup.id,
      });
    }
    l.publish_status = s;
  },
  98,
);
