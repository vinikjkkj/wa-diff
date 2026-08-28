__d(
  "AdsEditingCampaignContext",
  [
    "AdsAccountStore",
    "AdsAdObjectRelayIDUtils",
    "AdsAdgroupCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsEditingCampaignGroupContext",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignDraftSelectors",
    "AdsPECampaignRawCombinedTableStore",
    "LoadObject",
    "adsCampaignValidationBootloadedErrorsSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
    "adsEnforcePureGetStores",
    "adsStoreFlattenLists",
    "distinctArray",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(a) {
          var l, s, d;
          (s = r("adsEnforcePureGetStores"))(a);
          var m = s(
              (d = r("adsCreateSelector"))(
                [
                  a,
                  r("adsCreateStoreThunkSelector")(
                    r("AdsCampaignCombinedStore"),
                    function (e) {
                      return r("AdsCampaignCombinedStore").getRecord(e);
                    },
                  ),
                ],
                function (t, n) {
                  return t
                    .map(function (e) {
                      return (
                        o("AdsObjectIDLevelRegistry").checkIDLevel(
                          e,
                          r("AdsObjectTypes").CAMPAIGN,
                          "AdsEditingCampaignContext",
                        ),
                        n(e).getValue()
                      );
                    })
                    .filter(Boolean);
                },
                i.id + ".selectedCampaignsSelector",
              ),
            ),
            p = s(
              d(
                [
                  a,
                  r("adsCreateStoreThunkSelector")(
                    r("AdsCampaignCombinedStore"),
                    function (e) {
                      return r("AdsCampaignCombinedStore").get(e);
                    },
                  ),
                ],
                function (t, n) {
                  return t
                    .map(function (e) {
                      return (
                        o("AdsObjectIDLevelRegistry").checkIDLevel(
                          e,
                          r("AdsObjectTypes").CAMPAIGN,
                          "AdsEditingCampaignContext",
                        ),
                        n(e).getValue()
                      );
                    })
                    .filter(Boolean);
                },
                i.id + ".selectedCampaignPlainObjectsSelector",
              ),
            ),
            _ = s(
              d(
                [a, r("AdsPECampaignRawCombinedTableStore").getRecordSelector],
                function (t, n) {
                  return t
                    .map(function (e) {
                      return n(e).getValue();
                    })
                    .filter(Boolean);
                },
                i.id + ".selectedRawCampaignsSelector",
              ),
            ),
            f = s(
              d(
                [m],
                function (n) {
                  return (e || (e = r("distinctArray")))(
                    n.filter(Boolean).map(function (e) {
                      return e.campaign_id;
                    }),
                  );
                },
                i.id + ".selectedCampaignGroupIDsSelector",
              ),
            );
          return (
            (l = t.call(this, f) || this),
            (l.campaignSelector = u),
            (l.campaignPlainObjectSelector = c),
            (l.campaignErrorsSelector = o(
              "adsCampaignValidationBootloadedErrorsSelectors",
            ).adsCampaignValidationBootloadedErrorsSelectors.clientValidationErrorsSelector),
            (l.adObjectLevel = o(
              "AdsAdObjectRelayIDUtils",
            ).AdsUEditorAdObjectLevels.CAMPAIGN),
            l instanceof n && (l.contextID = i.id),
            (l.selectedCampaignIDsSelector = a),
            (l.selectedCampaignsSelector = m),
            (l.selectedCampaignPlainObjectsSelector = p),
            (l.selectedRawCampaignsSelector = _),
            (l.campaignPublishStatusSelector = r("adsEnforcePureGetStores")(
              r("adsCreateSelector")(
                [
                  a,
                  r("AdsCampaignDraftFragmentStore").getIsNewSelector,
                  r("AdsCampaignDraftFragmentStore")
                    .getIsNewDraftFragmentWithoutPublishAttemptSelector,
                  r("AdsCampaignDraftFragmentStore").getHasDraftSelector,
                  o("AdsPECampaignDraftSelectors").getIsDirtySelector,
                  r("AdsCampaignDraftFragmentStore").getIsDeletedSelector,
                  r("AdsCampaignDraftFragmentStore").getChangedFieldsSelector,
                ],
                function (t, n, o, a, i, l, s) {
                  return r("immutable").Map(
                    t.map(function (e) {
                      return [
                        e,
                        {
                          isNew: n(e),
                          isNewDraftFragmentWithoutPublishAttempt: o(e),
                          hasDraft: a(e),
                          isDirty: i(e),
                          isDeleted: l(e),
                          changedFields: s(e),
                        },
                      ];
                    }),
                  );
                },
                i.id + ".campaignPublishStatusSelector",
              ),
            )),
            (l.adgroupIDsForSelectedCampaignsSelector = r(
              "adsEnforcePureGetStores",
            )(
              r("adsCreateSelector")(
                [
                  r("AdsAccountStore").getSelectedAccount,
                  a,
                  r("adsCreateStoreThunkSelector")(
                    o("AdsAdgroupCombinedListStore")
                      .AdsAdgroupCombinedListStore,
                    function (e, t) {
                      return o(
                        "AdsAdgroupCombinedListStore",
                      ).AdsAdgroupCombinedListStore.getForCampaigns(e, t);
                    },
                  ),
                ],
                function (t, n, a) {
                  return t.mapValue(function (e) {
                    var t = e.account_id,
                      l = a(t, n);
                    if (o("AdsLoadStateUtils_LEGACY").anyLoading(l))
                      return r("LoadObject").loading({ creatorModuleID: i.id });
                    var s = r("adsStoreFlattenLists")(l);
                    return r("LoadObject").withValue(s, {
                      creatorModuleID: i.id,
                    });
                  });
                },
                i.id + ".adgroupIDsForSelectedCampaignsSelector",
              ),
            )),
            (l.adgroupsForSelectedCampaignsSelector = r("adsCreateSelector")(
              [
                l.adgroupIDsForSelectedCampaignsSelector,
                o("AdsPEAdgroupSelectors").getRecordSelector_LEGACY,
              ],
              function (t, n) {
                return t.match({
                  loaded: function (t) {
                    var e = t.map(function (e) {
                      return n(e);
                    });
                    return o("AdsLoadObjectUtils").all(e);
                  },
                  loading: function () {
                    return r("LoadObject").loading({ creatorModuleID: i.id });
                  },
                  error: function (t) {
                    return r("LoadObject").withError(t, {
                      creatorModuleID: i.id,
                    });
                  },
                });
              },
              { name: i.id + ".adgroupsForSelectedCampaignsSelector" },
            )),
            (l.campaignCombinedErrorsSelector = r("adsCreateSelector")(
              [
                a,
                r("adsCreateDynamicSelector")(
                  o("adsCampaignValidationBootloadedErrorsSelectors")
                    .adsCampaignValidationBootloadedErrorsSelectors
                    .combinedErrorsForCampaignIDsSelector,
                ),
              ],
              function (t, n) {
                return n(t);
              },
              { name: i.id + ".campaignCombinedErrorsSelector" },
            )),
            l
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("AdsEditingCampaignGroupContext")),
      u = r("adsEnforcePureGetStores")(
        r("adsCreateStoreSelector")(
          [r("AdsCampaignCombinedStore")],
          function (t) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN,
                  "AdsEditingCampaignContext",
                ),
                r("AdsCampaignCombinedStore").getRecord(t).getValue());
          },
          i.id + ".campaignSelector",
        ),
      ),
      c = r("adsEnforcePureGetStores")(
        r("adsCreateStoreSelector")(
          [r("AdsCampaignCombinedStore")],
          function (t) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN,
                  "AdsEditingCampaignContext",
                ),
                r("AdsCampaignCombinedStore").get(t).getValue());
          },
          i.id + ".campaignPlainObjectSelector",
        ),
      );
    l.default = s;
  },
  98,
);
