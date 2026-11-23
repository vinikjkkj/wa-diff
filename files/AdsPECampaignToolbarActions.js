__d(
  "AdsPECampaignToolbarActions",
  [
    "AdDraftFragmentSource",
    "AdsAccountStore",
    "AdsAdgroupStoreUtils",
    "AdsCopyQuickDuplicateDataAction",
    "AdsDraftSelectionStore",
    "AdsInsightsMessagingMetricsEngagementUtil",
    "AdsManagerPersonalizedViewLoggingDeferred",
    "AdsObjectTypes",
    "AdsPEAudienceActions",
    "AdsPECBOMidflightDialogQueuedAction",
    "AdsPECampaignSelectors",
    "AdsPEDeleteConfirmDialogToggleAction",
    "AdsPEDeletionActions",
    "AdsPEExportActionUtils",
    "AdsPEExportConstants",
    "AdsPEExportSelectedCampaignsCustomizedAction",
    "AdsPEExportShowFileFormatDialogAction",
    "AdsPEImportDownloadTemplateAction",
    "AdsPERevertActions",
    "AdsPEServerImportActions",
    "AdsPEToolbarActionsTypes",
    "AdsPlacementUtils",
    "MidflightActionTypes",
    "Promise",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsPECreationStartDuplicatingCampaigns",
    "promiseDone",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        onDuplicate: function () {
          var e,
            t = r("AdsAccountStore").getSelectedAccountIDX();
          (o("AdsInsightsMessagingMetricsEngagementUtil").logTableActionClick(
            t,
            "TABLE_ACTION_DUPLICATE",
            "CAMPAIGN",
            (e = o("adsMgmtCampaignSelectedIdsSelector")
              .adsMgmtCampaignSelectedIdsSelector()
              .toString()) != null
              ? e
              : "",
          ),
            r("adsPECreationStartDuplicatingCampaigns")(
              r("AdDraftFragmentSource").CLICK_CAMPAIGN_DUPLICATE_FROM_TOOLBAR,
            ));
        },
        onQuickDuplicate: function () {
          o("AdsManagerPersonalizedViewLoggingDeferred").logTableValueAction(
            "duplicate_ad_object",
            "ad_set",
          );
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          r("AdsCopyQuickDuplicateDataAction").dispatch(
            {
              accountID: e,
              draftID: r("AdsDraftSelectionStore").getOrThrow(e),
              ids: o(
                "adsMgmtCampaignSelectedIdsSelector",
              ).adsMgmtCampaignSelectedIdsSelector(),
              objectType: r("AdsObjectTypes").CAMPAIGN,
              requestID: 0,
              source: r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_TOOLBAR,
            },
            {
              line: "66",
              module: "AdsPECampaignToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onRevert: function (t, n) {
          (o("AdsPERevertActions").start(),
            r("promiseDone")(
              o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns(t),
              function (e) {
                o("AdsPERevertActions").revertBatch(n != null ? n : [], t, e);
              },
            ));
        },
        onDelete: function (t) {
          (o("AdsPEDeletionActions").campaignDeleteClicked(t),
            t.length > 1
              ? r("AdsPEDeleteConfirmDialogToggleAction").dispatch(
                  { dialogShown: !0 },
                  {
                    line: "98",
                    module: "AdsPECampaignToolbarActions.js",
                    moduleID: i.id,
                  },
                )
              : r("AdsPECBOMidflightDialogQueuedAction").dispatch(
                  {
                    campaignID: t[0],
                    midflightActionType: r("MidflightActionTypes").DELETE,
                  },
                  {
                    line: "100",
                    module: "AdsPECampaignToolbarActions.js",
                    moduleID: i.id,
                  },
                ));
        },
        onServerImport: function () {
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          e != null &&
            o("AdsPEServerImportActions").dispatch(
              new (o("AdsPEServerImportActions").OpenDialog)(e),
            );
        },
        onCustomExport: function () {
          r("AdsPEExportSelectedCampaignsCustomizedAction").dispatch(
            {},
            {
              line: "117",
              module: "AdsPECampaignToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onDownloadTemplate: function () {
          r("AdsPEImportDownloadTemplateAction").dispatch(
            {},
            {
              line: "121",
              module: "AdsPECampaignToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportAll: function () {
          r("AdsPEExportShowFileFormatDialogAction").dispatch(
            {
              level: "ad_set",
              mode: o("AdsPEToolbarActionsTypes").ExportMode.All,
            },
            {
              line: "125",
              module: "AdsPECampaignToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportSelected: function (t, n) {
          r("AdsPEExportShowFileFormatDialogAction").dispatch(
            {
              level: "ad_set",
              mode: o("AdsPEToolbarActionsTypes").ExportMode.Selected,
              fieldOrder: t,
              presetID: n,
            },
            {
              line: "132",
              module: "AdsPECampaignToolbarActions.js",
              moduleID: i.id,
            },
          );
        },
        onExportSelectedAsText: function (t) {
          o("AdsPEExportActionUtils").AdsPEExportAdObjectsByLevel(
            "ad_set",
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
            "ad_set",
            "all",
            { fileFormat: t, userOptions: n },
            "export_all_in_format",
          );
        },
        onExportSelectedInFormat: function (t, n, r, a) {
          o("AdsPEExportActionUtils").AdsPEExportAdObjectsByLevel(
            "ad_set",
            "selected",
            { fileFormat: t, fieldOrder: n, presetID: r, userOptions: a },
            "export_selected_in_format",
          );
        },
        onSaveAudience: function () {
          var e = o(
            "adsMgmtCampaignSelectedIdsSelector",
          ).adsMgmtCampaignSelectedIdsSelector();
          r("promiseDone")(
            r("promiseStoreGet").all(
              o("AdsPECampaignSelectors").getAllByFieldsSelector.getStores(),
              function () {
                return o("AdsPECampaignSelectors").getAllByFieldsSelector()(
                  e,
                  { name: null, targeting: null },
                  i.id,
                );
              },
            ),
            function (e) {
              var t = Array.from(e.values()).filter(Boolean),
                n = t
                  .filter(function (e) {
                    return e.targeting;
                  })
                  .map(function (e) {
                    var t = e.targeting;
                    return (
                      (t = r("AdsPlacementUtils").removePlacementFields(t)),
                      { name: e.name, target_spec: t }
                    );
                  });
              o("AdsPEAudienceActions").createAudience(n);
            },
          );
        },
        getExportIDs: function (r) {
          return (e || (e = n("Promise"))).resolve(r);
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
