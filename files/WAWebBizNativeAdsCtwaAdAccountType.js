__d(
  "WAWebBizNativeAdsCtwaAdAccountType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e === "WAA"
        ? "ctwa_wa_ad_account"
        : e === "FB"
          ? t === "linked_fb_page"
            ? "ctwa_fb_page_linked_account"
            : "ctwa_fb_pageless_account"
          : null;
    }
    i.getCtwaAdAccountType = e;
  },
  66,
);
