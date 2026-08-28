__d(
  "getWhatsAppManagerLink",
  [
    "AdsPERouterHelper",
    "XBizWebCometWhatsAppManagerOverviewControllerRouteBuilder",
    "XBizWebCometWhatsAppManagerPhoneNumbersControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = e,
        a = r("AdsPERouterHelper").getRouter(),
        i = (n = a == null ? void 0 : a.getQueryParams()) != null ? n : {},
        l = i.business_id;
      l != null && (o = l);
      var s = r(
        t === !0
          ? "XBizWebCometWhatsAppManagerPhoneNumbersControllerRouteBuilder"
          : "XBizWebCometWhatsAppManagerOverviewControllerRouteBuilder",
      );
      return s
        .buildUri({
          business_id: o != null ? o : "",
          nav_ref: "ads_manager_l1_mm_phone_display_name_status_link",
        })
        .toString();
    }
    l.default = e;
  },
  98,
);
