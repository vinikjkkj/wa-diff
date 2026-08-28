__d(
  "AdsPromoAdsStickySettingStore",
  [
    "AdsPromoAdsStickySettingStoreSource",
    "LoadObject",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromoAdsStickySettingStore.DATA_UPDATED.",
      s = {
        is_always_on_enabled_email: null,
        is_always_on_enabled_promo: null,
        draft_product_catalog_email_id: null,
        draft_product_catalog_promo_id: null,
        product_catalog_email_id: null,
        product_catalog_promo_id: null,
        turn_off_promo: null,
        turn_off_email: null,
      },
      u = (function (t) {
        function n() {
          var n,
            a = new (o(
              "AdsPromoAdsStickySettingStoreSource",
            ).AdsPromoAdsStickySettingStoreSource)();
          return (
            (n = t.call(this, a, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            (n.source = a),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (t) {
            if (t === "NEW_ADGROUP_ID-0")
              return r("LoadObject").withValue(null, { creatorModuleID: i.id });
            var e = this.getSingleValue(t, s);
            return e;
          }),
          (a.clearDraftProductCatalogs = function (t, n, r) {
            this.source.clearDraftProductCatalogs(t, n, r);
          }),
          (a.updateAlwaysOnFlags = function (t, n) {
            this.source.updateAlwaysOnFlags(t, n);
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
