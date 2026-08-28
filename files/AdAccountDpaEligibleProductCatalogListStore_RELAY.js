__d(
  "AdAccountDpaEligibleProductCatalogListStore_RELAY",
  [
    "AdAccountDpaEligibleProductCatalogListStoreSource",
    "AdsLoadState_LEGACY",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "gkx",
    "immutable",
    "memoize",
    "memoizeByReference",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        dpa_eligible_product_catalogs: {
          catalog: {
            id: null,
            name: null,
            business: { id: null, name: null, profile_picture_url: null },
            capabilities_with_state: { capability: null, state: null },
            capability_features: null,
            catalog_segment_type: null,
            catalog_segment_filter: null,
            catalog_to_ad_account_relationship: null,
            cpas_ad_account_relationship: null,
            commerce_merchant_settings: {
              id: null,
              merchant_status: null,
              payment_provider: null,
              terms: null,
              application: { id: null },
              page: { id: null, name: null },
            },
            creator_user_id: null,
            creator_user_name: null,
            da_pe_spend_28d: null,
            da_spend_28d: null,
            original_creation_source: null,
            feeds: { count: null },
            has_connected_event_sources: null,
            has_issues_for_da: null,
            catalog_issues_for_da: { type: null },
            page: { id: null, name: null, link: null },
            suggested_conversion_event: null,
            connected_external_event_sources: { count: null },
            source_app: {
              application_category: null,
              name: null,
              id: null,
              url: null,
            },
            website_onboarding_settings: { state: null, quality_band: null },
            parent_catalog: { id: null },
            store_catalog_settings: {
              id: null,
              page: { id: null, name: null },
            },
            vertical: null,
          },
          catalogSegmentUseCases: null,
        },
      },
      s = "AdAccountDpaEligibleProductCatalogListStore.DATA_UPDATED.",
      u = (function (t) {
        function n() {
          var e,
            n = new (r("AdAccountDpaEligibleProductCatalogListStoreSource"))();
          return (
            (e = t.call(this, n, s) || this),
            (e.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_1 =
              new Map()),
            (e.fluxGetSelectorWithIncludeFilter = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (t, n) {
                return e.getWithFilter(t, n);
              });
            })),
            (e.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (t) {
                return e.getAll(t);
              });
            })),
            (e.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_2 = n),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (n) {
            return this.getSingleValue(n, e);
          }),
          (o.__serializeKey = function (t) {
            var e = t.filterInput != null ? JSON.stringify(t.filterInput) : "";
            return "adAccountID:" + t.adAccountID + ",inputFilters:" + e;
          }),
          (o.loadWithFilter = function (t, n) {
            var e = this;
            return r("promiseStoreGet")(c, function () {
              return c
                .get({ adAccountID: t, filterInput: n, retry: !0 })
                .map(function (t) {
                  var n = Array.isArray(t) ? t : [];
                  return n.map(function (t) {
                    return babelHelpers.extends(
                      {},
                      e.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_3(
                        t.catalog,
                      ),
                    );
                  });
                });
            });
          }),
          (o.getAll = function (t) {
            var e = this;
            return c.get({ adAccountID: t, retry: !0 }).map(function (t) {
              var n = Array.isArray(t)
                ? t.filter(function (e) {
                    return e.catalog !== void 0;
                  })
                : [];
              return e.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_4(
                n,
              );
            });
          }),
          (o.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_5 = function (
            t,
            n,
            r,
          ) {
            var e = n.add(r);
            (this.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_1.set(
              t,
              e,
            ),
              this.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_2.updateLoadedDPACatalogsClientSchema(
                [r],
                "ProductCatalog",
              ));
          }),
          (o.getWithFilter = function (t, n) {
            var e,
              o = this,
              a = this.getAll(t),
              i =
                this.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_1.get(
                  t,
                );
            i == null && (i = r("immutable").Set());
            var l = n.id,
              s = r("gkx")("5472") || !0,
              u = l != null && i.has(l),
              d =
                l != null &&
                l !== "" &&
                !(
                  (e = a.getValue()) != null &&
                  e.find(function (e) {
                    return e.catalog.id === l;
                  })
                );
            if (d && s && l != null) {
              var m = a.getValue() || r("immutable").List();
              return (
                u ||
                  this.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_5(
                    t,
                    i,
                    l,
                  ),
                c
                  .get({ adAccountID: t, filterInput: n, retry: !0 })
                  .map(function (e) {
                    var t = Array.isArray(e) ? e : [],
                      n = m.merge(
                        o.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_4(
                          t,
                        ),
                      );
                    return n;
                  })
              );
            }
            return a;
          }),
          (o.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_3 = function (
            t,
          ) {
            var e, n;
            return babelHelpers.extends({}, t, {
              loadState: r("AdsLoadState_LEGACY").LOADED,
              capabilities: (e = t.capabilities) != null ? e : {},
              capability_features: (n = t.capability_features) != null ? n : [],
            });
          }),
          (o.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_4 = function (
            t,
          ) {
            var e = this;
            return r("memoizeByReference")(function (t) {
              return r("immutable").List(
                t.map(function (t) {
                  return {
                    catalog:
                      e.$AdAccountDpaEligibleProductCatalogListStore_RELAY$p_3(
                        t.catalog,
                      ),
                    catalogSegmentUseCases: t.catalogSegmentUseCases,
                  };
                }),
              );
            })(t);
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
