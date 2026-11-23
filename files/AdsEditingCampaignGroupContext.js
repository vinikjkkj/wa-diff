__d(
  "AdsEditingCampaignGroupContext",
  [
    "AdsAccountStore",
    "AdsAdObjectRelayIDUtils",
    "AdsAdgroupCombinedListStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsEditingCampaignGroupContextUtil",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupDraftSelectors",
    "AdsUEditorHostIDs",
    "FBLogger",
    "LoadObject",
    "accountErrorsDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsEnforcePureGetStores",
    "adsStoreFlattenLists",
    "adsUEditorSlowSelectorsLogging",
    "campaignGroupCombinedErrorsDynamicSelector",
    "campaignGroupCrossValidationErrorsStoreThunkSelector",
    "campaignGroupPlainObjectStoreThunkSelector",
    "campaignGroupRecordStoreThunkSelector",
    "campaignIDsForCampaignGroupsStoreThunkSelector",
    "campaignRecordStoreThunkSelector",
    "immutable",
    "isFalsey",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        var e = this;
        ((this.contextID = "unknown"),
          (this.hostID = r("AdsUEditorHostIDs").EDITING),
          (this.adObjectLevel = o(
            "AdsAdObjectRelayIDUtils",
          ).AdsUEditorAdObjectLevels.CAMPAIGN_GROUP),
          (this.campaignGroupSelector = c),
          (this.campaignGroupPlainObjectSelector = d),
          (this.selectedAdAccountSelector = m),
          this.constructor.name === "AdsEditingCampaignGroupContext" &&
            (this.contextID = i.id),
          r("setTimeout")(function () {
            e.contextID === "unknown" &&
              r("FBLogger")("relay_ads_manager").warn(
                "Unknown context type detected in AdsEditingCampaignGroupContext",
              );
          }, 0),
          (this.selectedCampaignGroupIDsSelector = r("adsEnforcePureGetStores")(
            t,
          )),
          (this.selectedCampaignGroupsSelector = r("adsEnforcePureGetStores")(
            r("adsCreateSelector")(
              [t, r("campaignGroupRecordStoreThunkSelector")],
              function (t, n) {
                return t
                  .map(function (e) {
                    return (
                      o("AdsObjectIDLevelRegistry").checkIDLevel(
                        e,
                        r("AdsObjectTypes").CAMPAIGN_GROUP,
                        "AdsEditingCampaignGroupContext",
                      ),
                      o("adsUEditorSlowSelectorsLogging")
                        .checkAndLogCampaignGroupError(n(e))
                        .getValue()
                    );
                  })
                  .filter(Boolean);
              },
              i.id + ".selectedCampaignGroupsSelector",
            ),
          )),
          (this.selectedCampaignGroupPlainObjectsSelector = r(
            "adsEnforcePureGetStores",
          )(
            r("adsCreateSelector")(
              [t, r("campaignGroupPlainObjectStoreThunkSelector")],
              function (t, n) {
                return t
                  .map(function (e) {
                    return (
                      o("AdsObjectIDLevelRegistry").checkIDLevel(
                        e,
                        r("AdsObjectTypes").CAMPAIGN_GROUP,
                        "AdsEditingCampaignGroupContext",
                      ),
                      n(e).getValue()
                    );
                  })
                  .filter(Boolean);
              },
              i.id + ".selectedCampaignGroupPlainObjectsSelector",
            ),
          )),
          (this.campaignGroupPublishStatusSelector = r(
            "adsEnforcePureGetStores",
          )(
            r("adsCreateSelector")(
              [
                t,
                r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector,
                r("AdsCampaignGroupDraftFragmentStore")
                  .getIsNewDraftFragmentWithoutPublishAttemptSelector,
                r("AdsCampaignGroupDraftFragmentStore").getHasDraftSelector,
                o("AdsPECampaignGroupDraftSelectors").getIsDirtySelector,
                r("AdsCampaignGroupDraftFragmentStore").getIsDeletedSelector,
                r("AdsCampaignGroupDraftFragmentStore")
                  .getChangedFieldsSelector,
              ],
              function (t, n, a, i, l, s, u) {
                return r("immutable").Map(
                  t.map(function (e) {
                    return [
                      e,
                      o(
                        "AdsEditingCampaignGroupContextUtil",
                      ).campaignGroupPublishStatusSelectorLogic(
                        n(e),
                        a(e),
                        i(e),
                        l(e),
                        s(e),
                        u(e),
                      ),
                    ];
                  }),
                );
              },
              i.id + ".campaignGroupPublishStatusSelector",
            ),
          )),
          (this.adgroupIDsForSelectedCampaignGroupsSelector = r(
            "adsCreateSelector",
          )(
            [
              p,
              t,
              o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore
                .getForCampaignGroupsSelector,
            ],
            function (t, n, a) {
              if (t == null)
                return r("LoadObject").loading({ creatorModuleID: i.id });
              var e = a(t, n);
              if (o("AdsLoadStateUtils_LEGACY").anyLoading(e))
                return r("LoadObject").loading({ creatorModuleID: i.id });
              var l = r("adsStoreFlattenLists")(e);
              return r("LoadObject").withValue(l, { creatorModuleID: i.id });
            },
            { name: i.id + ".adgroupIDsForSelectedCampaignGroupsSelector" },
          )),
          (this.adgroupsForSelectedCampaignGroupsSelector = r(
            "adsCreateSelector",
          )(
            [
              this.adgroupIDsForSelectedCampaignGroupsSelector,
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
            { name: i.id + ".adgroupsForSelectedCampaignGroupsSelector" },
          )),
          (this.campaignIDsForSelectedCampaignGroupsSelector = r(
            "adsEnforcePureGetStores",
          )(
            r("adsCreateSelector")(
              [p, t, r("campaignIDsForCampaignGroupsStoreThunkSelector")],
              function (t, n, a) {
                if (t == null)
                  return r("LoadObject").loading({ creatorModuleID: i.id });
                var e = a(t, n);
                if (o("AdsLoadStateUtils_LEGACY").anyLoading(e))
                  return r("LoadObject").loading({ creatorModuleID: i.id });
                var l = r("adsStoreFlattenLists")(e);
                return r("LoadObject").withValue(l, { creatorModuleID: i.id });
              },
              i.id + ".campaignIDsForSelectedCampaignGroupsSelector",
            ),
          )),
          (this.campaignsForSelectedCampaignGroupsSelector = r(
            "adsCreateSelector",
          )(
            [
              this.campaignIDsForSelectedCampaignGroupsSelector,
              r("campaignRecordStoreThunkSelector"),
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
            { name: i.id + ".campaignsForSelectedCampaignGroupsSelector" },
          )),
          (this.adAccountErrorsSelector = r("adsCreateSelector")(
            [p, r("accountErrorsDynamicSelector")],
            function (t, n) {
              return t == null
                ? r("immutable").Map()
                : r("immutable").Map(
                    [t].map(function (e) {
                      return [e, n(e)];
                    }),
                  );
            },
            { name: i.id + ".adAccountErrorsSelector" },
          )),
          (this.campaignGroupCombinedErrorsSelector = r("adsCreateSelector")(
            [t, r("campaignGroupCombinedErrorsDynamicSelector")],
            function (t, n) {
              return n(t);
            },
            { name: i.id + ".campaignGroupCombinedErrorsSelector" },
          )),
          (this.campaignGroupCrossValidationErrorsSelector = r(
            "adsCreateSelector",
          )(
            [t, r("campaignGroupCrossValidationErrorsStoreThunkSelector")],
            function (t, n) {
              return n(t);
            },
            { name: i.id + ".campaignGroupCrossValidationErrorsSelector" },
          )));
      },
      u = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".campaignGroupIDSelector" },
      ),
      c = r("adsEnforcePureGetStores")(
        (e = r("adsCreateSelector"))(
          [u, r("campaignGroupRecordStoreThunkSelector")],
          function (t, n) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  "AdsEditingCampaignGroupContext",
                ),
                n(t).getValue());
          },
          i.id + ".campaignGroupSelector",
        ),
      ),
      d = r("adsEnforcePureGetStores")(
        e(
          [u, r("campaignGroupPlainObjectStoreThunkSelector")],
          function (t, n) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  "AdsEditingCampaignGroupContext",
                ),
                n(t).getValue());
          },
          i.id + ".campaignGroupPlainObjectSelector",
        ),
      ),
      m = r("adsEnforcePureGetStores")(
        e(
          [r("AdsAccountStore").getSelectedAccount],
          function (t) {
            return t.isLoading()
              ? {}
              : t.hasValueWithoutError()
                ? t.getValueEnforcing()
                : (r("FBLogger")("ads").warn(
                    "Account not available within AdsEditing*Context",
                  ),
                  {});
          },
          i.id + ".selectedAdAccountSelector",
        ),
      ),
      p = e(
        [m],
        function (t) {
          return t.account_id;
        },
        { name: i.id + ".selectedAdAccountIDSelector" },
      );
    l.default = s;
  },
  98,
);
