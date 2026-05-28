__d(
  "WAWebBizNativeAdsCtwaAdAccountType",
  ["WAWebWamEnumCtwaAdAccountType"],
  function (t, n, r, o, a, i, l) {
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
    function s(e, t) {
      return e === "WAA"
        ? o("WAWebWamEnumCtwaAdAccountType").CTWA_AD_ACCOUNT_TYPE
            .CTWA_WA_AD_ACCOUNT
        : e === "FB"
          ? t === "linked_fb_page"
            ? o("WAWebWamEnumCtwaAdAccountType").CTWA_AD_ACCOUNT_TYPE
                .CTWA_FB_PAGE_LINKED_ACCOUNT
            : o("WAWebWamEnumCtwaAdAccountType").CTWA_AD_ACCOUNT_TYPE
                .CTWA_FB_PAGELESS_ACCOUNT
          : null;
    }
    ((l.getCtwaAdAccountType = e), (l.getWamCtwaAdAccountType = s));
  },
  98,
);
