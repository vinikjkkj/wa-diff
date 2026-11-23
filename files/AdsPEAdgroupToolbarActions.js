__d(
  "AdsPEAdgroupToolbarActions",
  [
    "AdDraftFragmentSource",
    "AdsAccountStore",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsCampaignBulkStore",
    "AdsCopyQuickDuplicateDataAction",
    "AdsDataAtom",
    "AdsDraftSelectionStore",
    "AdsInsightsMessagingMetricsEngagementUtil",
    "AdsManagerPersonalizedViewLoggingDeferred",
    "AdsObjectTypes",
    "AdsPEAdgroupSelectors",
    "AdsPEAudienceActions",
    "AdsPECampaignSelectors",
    "AdsPEDeleteConfirmDialogToggleAction",
    "AdsPEDeletionActions",
    "AdsPEDeletionStoreUtils",
    "AdsPEExportActionUtils",
    "AdsPEExportConstants",
    "AdsPEExportSelectedAdgroupsCustomizedAction",
    "AdsPEExportShowFileFormatDialogAction",
    "AdsPEImportDownloadTemplateAction",
    "AdsPERevertActions",
    "AdsPEServerImportActions",
    "AdsPEToolbarActionsTypes",
    "FBLogger",
    "JSResource",
    "Promise",
    "adsDSAMaybeUpdateBeneficiaryAndPayorOnAdgroupDuplication",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsPECreationStartDuplicatingAdgroups",
    "imperativelyShowGeoModal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        onDuplicate: function () {
          var e,
            t = r("AdsAccountStore").getSelectedAccountIDX();
          (o("AdsInsightsMessagingMetricsEngagementUtil").logTableActionClick(
            t,
            "TABLE_ACTION_DUPLICATE",
            "ADGROUP",
            (e = o("adsMgmtAdgroupSelectedIdsSelector")
              .adsMgmtAdgroupSelectedIdsSelector()
              .toString()) != null
              ? e
              : "",
          ),
            r("adsPECreationStartDuplicatingAdgroups")(
              r("AdDraftFragmentSource").CLICK_AD_DUPLICATE_FROM_TOOLBAR,
            ));
        },
        onQuickDuplicate: function () {
          o("AdsManagerPersonalizedViewLoggingDeferred").logTableValueAction(
            "duplicate_ad_object",
            "ad",
          );
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          r("AdsCopyQuickDuplicateDataAction").dispatch(
            {
              accountID: e,
              draftID: r("AdsDraftSelectionStore").getOrThrow(e),
              ids: o(
                "adsMgmtAdgroupSelectedIdsSelector",
              ).adsMgmtAdgroupSelectedIdsSelector(),
              objectType: r("AdsObjectTypes").ADGROUP,
              requestID: 0,
              source: r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_TOOLBAR,
              onCopyCompleted: function (t) {
                o(
                  "adsDSAMaybeUpdateBeneficiaryAndPayorOnAdgroupDuplication",
                ).adsDSAMaybeUpdateBeneficiaryAndPayorOnAdgroupDuplication(
                  r("AdsObjectTypes").ADGROUP,
                  t.map(function (e) {
                    return e.id;
                  }),
                );
              },
            },
            {
              line: "79",
              module: "AdsPEAdgroupToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onRevert: function (t) {
          o("AdsPERevertActions").revertBatch([], [], t);
        },
        onDelete: function (t) {
          ((s || (s = r("AdsDataAtom"))).isDispatching() &&
            (s || (s = r("AdsDataAtom"))).waitFor([
              r("AdsAccountStore").getDispatchToken(),
            ]),
            o("AdsPEDeletionActions").adgroupDeleteClicked(t));
          var e = r("AdsCampaignBulkStore")
            .getRawSpecs()
            .filter(function (e) {
              return o(
                "AdsAssetFeedSimpleFieldCheckUtils",
              ).isCampaignWithDCAssetFeed(e);
            })
            .map(function (e) {
              return e.id;
            });
          e.length !== 0
            ? r("JSResource").loadAll(
                [
                  r("JSResource")("AdsDCONoticeUtils").__setRef(
                    "AdsPEAdgroupToolbarActions",
                  ),
                  r("JSResource")("AdsAssetFeedNoticeUtils").__setRef(
                    "AdsPEAdgroupToolbarActions",
                  ),
                ],
                function (n, a) {
                  r("imperativelyShowGeoModal")({
                    body: n.getDeletionDialogBody(),
                    title: a.getDeletionDialogTitle(),
                    label: a.getDeletionDialogTitle(),
                    callback: function () {
                      o("AdsPEDeletionStoreUtils").deleteAdgroupsAndCampaigns(
                        e,
                        t,
                      );
                    },
                    showCancelButton: !0,
                  });
                },
              )
            : r("AdsPEDeleteConfirmDialogToggleAction").dispatch(
                { dialogShown: !0 },
                {
                  line: "136",
                  module: "AdsPEAdgroupToolbarActions.js",
                  moduleID: i.id,
                },
              );
        },
        onServerImport: function () {
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          e != null &&
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").OpenDialog)(e),
            );
        },
        onCustomExport: function () {
          r("AdsPEExportSelectedAdgroupsCustomizedAction").dispatch(
            {},
            {
              line: "150",
              module: "AdsPEAdgroupToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onDownloadTemplate: function () {
          r("AdsPEImportDownloadTemplateAction").dispatch(
            {},
            {
              line: "154",
              module: "AdsPEAdgroupToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportAll: function () {
          r("AdsPEExportShowFileFormatDialogAction").dispatch(
            { level: "ad", mode: o("AdsPEToolbarActionsTypes").ExportMode.All },
            {
              line: "158",
              module: "AdsPEAdgroupToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportSelected: function (t, n) {
          r("AdsPEExportShowFileFormatDialogAction").dispatch(
            {
              level: "ad",
              mode: o("AdsPEToolbarActionsTypes").ExportMode.Selected,
              fieldOrder: t,
              presetID: n,
            },
            {
              line: "165",
              module: "AdsPEAdgroupToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportSelectedAsText: function (t) {
          o("AdsPEExportActionUtils").AdsPEExportAdObjectsByLevel(
            "ad",
            "selected",
            {
              fileFormat: "TEXT",
              fieldOrder: t,
              userOptions: o("AdsPEExportConstants").DEFAULT_USER_OPTIONS,
            },
            "export_selected_as_text",
          );
        },
        onExportAllInFormat: function (t, n) {
          o("AdsPEExportActionUtils").AdsPEExportAdObjectsByLevel(
            "ad",
            "all",
            { fileFormat: t, userOptions: n },
            "export_all_in_format",
          );
        },
        onExportSelectedInFormat: function (t, n, r, a) {
          o("AdsPEExportActionUtils").AdsPEExportAdObjectsByLevel(
            "ad",
            "selected",
            { fileFormat: t, fieldOrder: n, presetID: r, userOptions: a },
            "export_selected_in_format",
          );
        },
        onSaveAudience: function () {
          var e = o(
              "adsMgmtAdgroupSelectedIdsSelector",
            ).adsMgmtAdgroupSelectedIdsSelector(),
            t = o("AdsPEAdgroupSelectors")
              .getAllCachedSelector_LEGACY()(e)
              .toArray()
              .filter(function (e) {
                return !e.isLoading() && e.hasValue();
              })
              .map(function (e) {
                return e.getValueEnforcing();
              }),
            n = new Map();
          t.forEach(function (e) {
            var t = e.targeting,
              a = e.name,
              i = e.id;
            if (!t) {
              var l = e.adset_id,
                s = o("AdsPECampaignSelectors")
                  .getCachedSelector()(l)
                  .getValueEnforcing();
              ((t = s.targeting), (a = s.name), (i = l));
            }
            if (t) {
              var u = { name: a, target_spec: t };
              n.set(i, u);
            } else
              r("FBLogger")("ads").mustfix(
                "Failed to get targeting for adgroup %s",
                e.id,
              );
          });
          var a = Array.from(n.values());
          o("AdsPEAudienceActions").createAudience(a);
        },
        getExportIDs: function (r) {
          var t = o("AdsPEAdgroupSelectors")
              .getAllCachedSelector_LEGACY()(r)
              .toArray()
              .filter(function (e) {
                return !e.isLoading() && e.hasValue();
              })
              .map(function (e) {
                return e.getValueEnforcing();
              }),
            a = t.map(function (e) {
              return e.adset_id;
            });
          return (e || (e = n("Promise"))).resolve(a);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
