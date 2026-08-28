__d(
  "AdFLEXPerfAdsManagerConfigPlugin",
  ["AdsInteractionTriggerTrackedKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexPerfConfig",
        key: "adsManager",
        adsPerInteractionEditAdsUploadAssetInMediaDialogEvent:
          "am.edit_ads.upload_asset_in_media_dialog",
        adsPerfInteractionsDuplicationProcessingDuplicationEvent:
          "am.duplication.processing_duplication",
        adsInteractionTriggerTrackedKeysTableDataDisplayChangeSortEvent: r(
          "AdsInteractionTriggerTrackedKeys",
        ).AM_TABLE_DATA_DISPLAY_CHANGE_SORT,
        getAdsInteractionTriggerTrackedKeysDuplicationLoadDialogEvent:
          function () {
            return r("AdsInteractionTriggerTrackedKeys")
              .AM_DUPLICATION_LOAD_DIALOG;
          },
        getAdsManagerInteractionQuickLogModuleDuplicationLoadDialogEvent:
          function () {
            return 270210235;
          },
        getAdsPerfInteractionsDuplicationLoadDialogEvent: function () {
          return "am.duplication.load_dialog";
        },
        getAdsPerfInteractionsEditorChangeLevelEvent: function () {
          return "am.editor.change_level";
        },
        tool: "MANAGE_ADS",
      },
      s = e;
    l.default = s;
  },
  98,
);
