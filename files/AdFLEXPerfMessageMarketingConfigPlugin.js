__d(
  "AdFLEXPerfMessageMarketingConfigPlugin",
  ["AdsInteractionTriggerTrackedKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexPerfConfig",
        key: "marketingMessages",
        shouldForkQPLEvents: !0,
        tool: "MANAGE_MESSAGES",
        adsPerfInteractionsCampaignsRouteInitialLoad:
          "am.message_marketing_message_campaigns.route_initial_load",
        adsPerfInteractionsPublishAdsInCellInline:
          "am.message_marketing_publish_ads.in_cell_inline",
        adsPerInteractionEditAdsUploadAssetInMediaDialogEvent:
          "am.message_marketing_edit_ads.upload_asset_in_media_dialog",
        adsPerfInteractionsDuplicationProcessingDuplicationEvent:
          "am.message_marketing_duplication.processing_duplication",
        adsInteractionTriggerTrackedKeysTableDataDisplayChangeSortEvent: r(
          "AdsInteractionTriggerTrackedKeys",
        ).AM_MESSAGE_MARKETING_TABLE_DATA_DISPLAY_CHANGE_SORT,
        getAdsInteractionTriggerTrackedKeysDuplicationLoadDialogEvent:
          function () {
            return r("AdsInteractionTriggerTrackedKeys")
              .AM_MESSAGE_MARKETING_DUPLICATION_LOAD_DIALOG;
          },
        getAdsManagerInteractionQuickLogModuleDuplicationLoadDialogEvent:
          function () {
            return 270217128;
          },
        getAdsPerfInteractionsDuplicationLoadDialogEvent: function () {
          return "am.message_marketing_duplication.load_dialog";
        },
        getAdsPerfInteractionsEditorChangeLevelEvent: function () {
          return "am.message_marketing_editor.change_level";
        },
        getAdsPerfInteractionsRoutingCreationPackageParamsUpdateConfigs:
          function () {
            return [
              {
                interaction: "am.message_marketing_editor.change_level",
                parameters: ["current_step"],
                overrideTrackingSurface: "am.editor.crepe_package",
              },
              {
                interaction: "am.message_marketing_editor.change_same_level",
                parameters: ["selected_ad_ids"],
                overrideTrackingSurface: "am.editor.crepe_package",
                conditionsFn: function (t) {
                  var e, n;
                  return (
                    !((e = t.changedParams) != null && e.has("current_step")) &&
                    ((n = t.changedParams) == null
                      ? void 0
                      : n.has("selected_ad_ids")) === !0
                  );
                },
              },
            ];
          },
        getAdsPerfInteractionsRoutingTableParamsUpdateConfigs: function (t) {
          return [
            {
              interaction:
                "am.message_marketing_table_data_display.change_date_range",
              parameters: ["date"],
              computeInteractionTriggerContext: t,
            },
            {
              interaction: "am.message_marketing_table_data_display.filter",
              parameters: ["filter_set"],
            },
            {
              interaction:
                "am.message_marketing_table_data_display.change_sort",
              parameters: ["sort"],
            },
          ];
        },
        getAdsPerfInteractionsRoutingTableNavigationConfigs: function () {
          return [
            {
              interaction:
                "am.message_marketing_table_data_display.change_level",
              parameters: ["section"],
              conditionsFn: function (t) {
                var e;
                return (
                  !((e = t.changedParams) != null && e.has("tool")) &&
                  t.navSource != null &&
                  t.navSource !== "view_children_in_table" &&
                  t.navSource !== "left_nav"
                );
              },
            },
            {
              interaction:
                "am.message_marketing_table_data_display.open_ad_object",
              parameters: ["section"],
              conditionsFn: function (t) {
                return t.navSource === "view_children_in_table";
              },
            },
          ];
        },
        shouldManagementPageLoadScenariosTrackWholePagePerformance: !1,
      },
      s = e;
    l.default = s;
  },
  98,
);
