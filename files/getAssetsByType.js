__d(
  "getAssetsByType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        adAccount: e.filter(function (e) {
          return e.type === "AD_ACCOUNT";
        }),
        appAccount: e.filter(function (e) {
          return e.type === "APP";
        }),
        igAccount: e.filter(function (e) {
          return e.type === "INSTAGRAM_ACCOUNT_V2";
        }),
        pageAccount: e.filter(function (e) {
          return e.type === "PAGE";
        }),
        wabAccount: e.filter(function (e) {
          return e.type === "WHATSAPP_BUSINESS_ACCOUNT";
        }),
      };
    }
    i.default = e;
  },
  66,
);
