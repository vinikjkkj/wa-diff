__d(
  "MAIBAGoldenPathSelectorsUtil",
  [
    "AdsMgmtAdObjectLevelTransformUtils",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "MAIBAAssetUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "CAMPAIGN_GROUP"
        ? o("AdsPECampaignGroupSelectors").getCachedByFieldsSelector
        : e === "CAMPAIGN"
          ? o("AdsPECampaignSelectors").getCachedByFieldsSelector
          : o("AdsPEAdgroupSelectors").getCachedByFieldsSelector;
    }
    function s(t) {
      return e(t);
    }
    function u(e, t) {
      if (e === void 0 || e.length === 0) return !1;
      var n = e.map(function (e) {
        return t()(e, { effective_status: null }).getValue();
      });
      return n.every(function (e) {
        var t = e == null ? void 0 : e.effective_status;
        return String(t) !== "ACTIVE";
      });
    }
    function c(e, t, n) {
      if (e == null || e.length === 0) return null;
      var r = e.map(function (e) {
          return n()(e, {
            effective_status: null,
            id: null,
            name: null,
          }).getValue();
        }),
        a = o("MAIBAAssetUtils").convertToMAIBAAssetType(
          o("AdsMgmtAdObjectLevelTransformUtils").transformAdObjectLevelToType(
            t,
          ),
        );
      return a == null
        ? null
        : r.map(function (e) {
            var t,
              n,
              r = String(e == null ? void 0 : e.effective_status) !== "ACTIVE";
            return {
              id: (t = e == null ? void 0 : e.id) != null ? t : "",
              name: (n = e == null ? void 0 : e.name) != null ? n : "",
              payload: { is_draft: r },
              type: a,
            };
          });
    }
    ((l.getAdObjectFieldsAccessor = e),
      (l.useAdObjectSelectorFields = s),
      (l.getIsActionBarButtonDisabled = u),
      (l.getSelectedAssetObject = c));
  },
  98,
);
