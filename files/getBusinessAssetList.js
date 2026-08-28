__d(
  "getBusinessAssetList",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.map(function (e) {
        return {
          business_account_id: t == null ? void 0 : t.id,
          business_asset_id: e.id,
        };
      });
    }
    i.default = e;
  },
  66,
);
