__d(
  "AdsEditingCampaignGroupContext",
  [
    "AdsAccountStore",
    "AdsAdObjectRelayIDUtils",
    "AdsAdgroupCombinedListStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupCrossValidationBootloadedStore",
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
    "adsAccountValidationBootloadedErrorsSelectors",
    "adsCampaignGroupValidationBootloadedErrorsSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
    "adsEnforcePureGetStores",
    "adsStoreFlattenLists",
    "adsUEditorSlowSelectorsLogging",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = this;
        ((this.contextID = "unknown"),
          (this.hostID = r("AdsUEditorHostIDs").EDITING),
          (this.adObjectLevel = o(
            "AdsAdObjectRelayIDUtils",
          ).AdsUEditorAdObjectLevels.CAMPAIGN_GROUP),
          (this.campaignGroupSelector = s),
          (this.campaignGroupPlainObjectSelector = u),
          (this.selectedAdAccountSelector = c),
          this.constructor.name === "AdsEditingCampaignGroupContext" &&
            (this.contextID = i.id),
          window.setTimeout(function () {
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
              [
                t,
                r("adsCreateStoreThunkSelector")(
                  r("AdsCampaignGroupCombinedStore"),
                  r("AdsCampaignGroupCombinedStore").getRecord.bind(
                    r("AdsCampaignGroupCombinedStore"),
                  ),
                ),
              ],
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
              [
                t,
                r("adsCreateStoreThunkSelector")(
                  r("AdsCampaignGroupCombinedStore"),
                  r("AdsCampaignGroupCombinedStore").get.bind(
                    r("AdsCampaignGroupCombinedStore"),
                  ),
                ),
              ],
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
              d,
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
              [
                d,
                t,
                r("adsCreateStoreThunkSelector")(
                  r("AdsCampaignCombinedListStore"),
                  r("AdsCampaignCombinedListStore").getForCampaignGroups.bind(
                    r("AdsCampaignCombinedListStore"),
                  ),
                ),
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
              i.id + ".campaignIDsForSelectedCampaignGroupsSelector",
            ),
          )),
          (this.campaignsForSelectedCampaignGroupsSelector = r(
            "adsCreateSelector",
          )(
            [
              this.campaignIDsForSelectedCampaignGroupsSelector,
              r("adsCreateStoreThunkSelector")(
                r("AdsCampaignCombinedStore"),
                r("AdsCampaignCombinedStore").getRecord.bind(
                  r("AdsCampaignCombinedStore"),
                ),
              ),
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
            [
              d,
              r("adsCreateDynamicSelector")(
                o("adsAccountValidationBootloadedErrorsSelectors")
                  .adsAccountValidationBootloadedErrorsSelectors
                  .accountErrorsSelector,
              ),
            ],
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
            [
              t,
              r("adsCreateDynamicSelector")(
                o("adsCampaignGroupValidationBootloadedErrorsSelectors")
                  .adsCampaignGroupValidationBootloadedErrorsSelectors
                  .combinedErrorsForCampaignGroupIDsSelector,
              ),
            ],
            function (t, n) {
              return n(t);
            },
            { name: i.id + ".campaignGroupCombinedErrorsSelector" },
          )),
          (this.campaignGroupCrossValidationErrorsSelector = r(
            "adsCreateSelector",
          )(
            [
              t,
              r("adsCreateStoreThunkSelector")(
                r("AdsCampaignGroupCrossValidationBootloadedStore"),
                r(
                  "AdsCampaignGroupCrossValidationBootloadedStore",
                ).getAllErrors.bind(
                  r("AdsCampaignGroupCrossValidationBootloadedStore"),
                ),
              ),
            ],
            function (t, n) {
              return n(t);
            },
            { name: i.id + ".campaignGroupCrossValidationErrorsSelector" },
          )));
      },
      s = r("adsEnforcePureGetStores")(
        r("adsCreateStoreSelector")(
          [r("AdsCampaignGroupCombinedStore")],
          function (t) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  "AdsEditingCampaignGroupContext",
                ),
                r("AdsCampaignGroupCombinedStore").getRecord(t).getValue());
          },
          i.id + ".campaignGroupSelector",
        ),
      ),
      u = r("adsEnforcePureGetStores")(
        r("adsCreateStoreSelector")(
          [r("AdsCampaignGroupCombinedStore")],
          function (t) {
            return r("isFalsey")(t)
              ? null
              : (o("AdsObjectIDLevelRegistry").checkIDLevel(
                  t,
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  "AdsEditingCampaignGroupContext",
                ),
                r("AdsCampaignGroupCombinedStore").get(t).getValue());
          },
          i.id + ".campaignGroupPlainObjectSelector",
        ),
      ),
      c = r("adsEnforcePureGetStores")(
        r("adsCreateSelector")(
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
      d = r("adsCreateSelector")(
        [c],
        function (t) {
          return t.account_id;
        },
        { name: i.id + ".selectedAdAccountIDSelector" },
      );
    l.default = e;
  },
  98,
);
