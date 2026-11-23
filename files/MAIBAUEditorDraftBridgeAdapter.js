__d(
  "MAIBAUEditorDraftBridgeAdapter",
  [
    "AdsAdgroupSelectionChangeDataAction",
    "AdsApplicationIDs",
    "AdsCampaignGroupSelectionChangeDataAction",
    "AdsCampaignSelectionChangeDataAction",
    "JSResource",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("JSResource")("AdsDraftFragmentListDataManager").__setRef(
      "MAIBAUEditorDraftBridgeAdapter",
    );
    function s(t, n) {
      var o = !1;
      return (
        r("promiseDone")(e.load(), function (e) {
          o ||
            e.loadForWithCallback(
              t,
              r("AdsApplicationIDs").ADS_POWER_EDITOR,
              function () {
                o || n();
              },
            );
        }),
        function () {
          o = !0;
        }
      );
    }
    function u(e) {
      r("AdsAdgroupSelectionChangeDataAction").dispatch(
        { selectedIDs: [e] },
        {
          line: "60",
          module: "MAIBAUEditorDraftBridgeAdapter.js",
          moduleID: i.id,
        },
      );
    }
    function c(e) {
      r("AdsCampaignSelectionChangeDataAction").dispatch(
        { selectedIDs: [e] },
        {
          line: "64",
          module: "MAIBAUEditorDraftBridgeAdapter.js",
          moduleID: i.id,
        },
      );
    }
    function d(e) {
      r("AdsCampaignGroupSelectionChangeDataAction").dispatch(
        { selectedIDs: [e] },
        {
          line: "68",
          module: "MAIBAUEditorDraftBridgeAdapter.js",
          moduleID: i.id,
        },
      );
    }
    ((l.loadAMDraftEditing = s),
      (l.selectAdgroupForEditing = u),
      (l.selectCampaignForEditing = c),
      (l.selectCampaignGroupForEditing = d));
  },
  98,
);
