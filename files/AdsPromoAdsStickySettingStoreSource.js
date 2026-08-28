__d(
  "AdsPromoAdsStickySettingStoreSource",
  [
    "AdsPromoAdsStickySettingBatchStoreRelayId",
    "AdsPromoAdsStickySettingStoreSourceFragment.graphql",
    "AdsPromoAdsStickySettingStoreSourceLoadedQuery.graphql",
    "AdsPromoAdsStickySettingStoreSourceServerQuery.graphql",
    "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation.graphql",
    "IncentivesAdsManagerUtils",
    "PromoAdsAdsManagerCouponCodeUtils",
    "RelayHooks",
    "RelayModern",
    "ReverseInteropStoreSourceBase",
    "gkx",
    "promiseDone",
    "readClientFragment",
    "relay-runtime/mutations/commitLocalUpdate",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      return { adgroup_id: e };
    }
    function p(e) {
      var t = "client:root:xfb_promo_ad_am_adgroup_data_query",
        n = m(e),
        r = o("relay-runtime/store/RelayStoreUtils").formatStorageKey(t, n);
      return r;
    }
    var _ =
        e !== void 0
          ? e
          : (e = n("AdsPromoAdsStickySettingStoreSourceServerQuery.graphql")),
      f =
        s !== void 0
          ? s
          : (s = n("AdsPromoAdsStickySettingStoreSourceLoadedQuery.graphql")),
      g =
        u !== void 0
          ? u
          : (u = n("AdsPromoAdsStickySettingStoreSourceFragment.graphql")),
      h =
        c !== void 0
          ? c
          : (c = n(
              "AdsPromoAdsStickySettingStoreSource_clearDraftProductCatalogsMutation.graphql",
            )),
      y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return f;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = "loaded_promo_ads_adgroup_data",
              i = "XFBPromoAdgroupStickySettingData",
              l = t.map(p);
            this.updateRecords(l, a, i);
            var s = t[0],
              u = m(s),
              c = o("RelayHooks")
                .fetchQuery(this.__environment, _, u, {
                  fetchPolicy: "store-or-network",
                })
                .toPromise()
                .catch(function (r) {
                  e.handleFetchQueryError(t, n, r);
                });
            r("promiseDone")(c);
          }),
          (n.clearDraftProductCatalogs = function (t, n, a) {
            var e = a.clearEmail,
              i = a.clearPromo,
              l = this.__environment.getStore().getSource().get(p(t)),
              s =
                i &&
                (l == null ||
                  (
                    d || (d = r("relay-runtime/store/RelayModernRecord"))
                  ).getValue(l, "draft_product_catalog_promo_id") != null),
              u =
                e &&
                (l == null ||
                  (
                    d || (d = r("relay-runtime/store/RelayModernRecord"))
                  ).getValue(l, "draft_product_catalog_email_id") != null);
            if (!(!s && !u)) {
              var c = p(t),
                m = o("AdsPromoAdsStickySettingBatchStoreRelayId").getRelayId(
                  t,
                ),
                _ = function (t) {
                  var e = t.get(c);
                  if (
                    (s &&
                      (e == null ||
                        e.setValue(null, "draft_product_catalog_promo_id")),
                    u &&
                      (e == null ||
                        e.setValue(null, "draft_product_catalog_email_id")),
                    r("gkx")("3731"))
                  ) {
                    var n = t.get(m);
                    (s &&
                      (n == null ||
                        n.setValue(null, "draft_product_catalog_promo_id")),
                      u &&
                        (n == null ||
                          n.setValue(null, "draft_product_catalog_email_id")));
                  }
                };
              o("RelayModern").commitMutation(this.__environment, {
                mutation: h,
                variables: {
                  input: {
                    legacy_account_id: n,
                    adgroup_id: t,
                    request_type: "CLEAR_DRAFT_PRODUCT_CATALOGS",
                    should_clear_draft_product_catalog_promo: s,
                    should_clear_draft_product_catalog_email: u,
                  },
                },
                optimisticUpdater: _,
                updater: function (t, n) {
                  return _(t);
                },
                onError: function (r) {
                  o("IncentivesAdsManagerUtils").logEvent(
                    o("PromoAdsAdsManagerCouponCodeUtils")
                      .PromoAdsAdsManagerEvent
                      .PROMO_ADS_CLEAR_DRAFT_CATALOGS_FAILED,
                    n,
                    t,
                    "clearPromo=" + String(s) + ",clearEmail=" + String(u),
                    r.message,
                  );
                },
              });
            }
          }),
          (n.updateAlwaysOnFlags = function (t, n) {
            var e = n.email,
              a = n.promo,
              i = p(t),
              l = o("AdsPromoAdsStickySettingBatchStoreRelayId").getRelayId(t);
            r("relay-runtime/mutations/commitLocalUpdate")(
              this.__environment,
              function (t) {
                var n = t.get(i);
                if (
                  (n == null || n.setValue(a, "is_always_on_enabled_promo"),
                  n == null || n.setValue(e, "is_always_on_enabled_email"),
                  r("gkx")("3731"))
                ) {
                  var o = t.get(l);
                  (o == null || o.setValue(a, "is_always_on_enabled_promo"),
                    o == null || o.setValue(e, "is_always_on_enabled_email"));
                }
              },
            );
          }),
          (n.__serializeKey = function (t) {
            return JSON.stringify(m(t));
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = p(t),
                  o = m(t);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    _,
                    g,
                    o,
                    {},
                    n,
                    function (e) {
                      return e;
                    },
                  ),
                };
              });
            return o;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    ((l.getRelayId = p), (l.AdsPromoAdsStickySettingStoreSource = y));
  },
  98,
);
