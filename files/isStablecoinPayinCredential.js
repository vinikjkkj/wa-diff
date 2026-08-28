__d(
  "isStablecoinPayinCredential",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["dlocal_ads_stablecoin_ar", "dlocal_ads_stablecoin_co"],
      l = "https://www.facebook.com/business/help/1014257654650219",
      s = "USDC";
    function u(t) {
      return t != null && e.includes(t);
    }
    function c(e) {
      var t = e == null ? void 0 : e[0];
      return t == null || t.__typename !== "AdAccountAltpayOption"
        ? null
        : u(t.credential_id)
          ? t.credential_id
          : null;
    }
    ((i.STABLECOIN_PAYIN_CREDENTIAL_IDS = e),
      (i.ABOUT_STABLECOIN_HELP_URL = l),
      (i.STABLECOIN_ACCEPTED_CURRENCY = s),
      (i.isStablecoinPayinCredential = u),
      (i.getServerPinnedOptionId = c));
  },
  66,
);
