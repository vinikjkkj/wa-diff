__d(
  "refreshMAIBADraftFragments",
  [
    "AdsApplicationIDs",
    "AdsDraftFragmentListDataManager",
    "AdsDraftSelectionStore",
    "CurrentAdAccount",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "ad_creation_tool",
      "create_multi_ad_objects",
      "delete_ad_fragment",
      "duplicate_ad_object",
      "edit_ad_object_drafts",
    ]);
    function s(t) {
      return t != null && e.has(t);
    }
    function u() {
      var e = r("CurrentAdAccount").getID();
      if (e != null) {
        var t = r("AdsDraftSelectionStore").getCached(
            e,
            r("AdsApplicationIDs").ADS_POWER_EDITOR,
          ),
          n = t == null ? void 0 : t.value;
        if (n != null)
          try {
            r("AdsDraftFragmentListDataManager").loadFor(
              String(n),
              r("AdsApplicationIDs").ADS_POWER_EDITOR,
            );
          } catch (e) {
            r("FBLogger")("maiba_draft_auto_refresh").warn(
              "Failed to refresh draft fragments after MAIBA tool execution",
            );
          }
      }
    }
    ((l.isDraftModifyingTool = s), (l.refreshMAIBADraftFragments = u));
  },
  98,
);
