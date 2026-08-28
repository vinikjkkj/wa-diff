__d(
  "CatalogCommerceUtils",
  ["getByPath", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return e == null || (t = e.page) == null ? void 0 : t.link;
    }
    function s(e) {
      var t;
      return e == null || (t = e.page) == null ? void 0 : t.id;
    }
    function u(e) {
      if (e == null || !r("gkx")("22143")) return !1;
      var t = r("getByPath")(e, [
        "commerce_merchant_settings",
        "payment_provider",
      ]);
      return t === "CONTACT_MERCHANT";
    }
    ((l.getPageLinkFromCatalog = e),
      (l.getPageIDFromCatalog = s),
      (l.isContactMerchantShopCatalog = u));
  },
  98,
);
