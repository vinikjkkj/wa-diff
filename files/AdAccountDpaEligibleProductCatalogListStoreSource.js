__d(
  "AdAccountDpaEligibleProductCatalogListStoreSource",
  [
    "AdAccountDpaEligibleProductCatalogListStoreSourceLoadedQuery.graphql",
    "AdAccountDpaEligibleProductCatalogListStoreSourceQuery.graphql",
    "AdAccountDpaEligibleProductCatalogListUtil",
    "AdsManagerRelayClientStateUtils",
    "CatalogBusinessEventsLoggerHelper",
    "ReverseInteropStoreSourceBase",
    "amFetchPreloadedQuery",
    "gkx",
    "promiseDone",
    "readQueryToLoadObject",
    "relay-runtime",
    "relay-runtime/store/RelayStoreUtils",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "AdAccountDpaEligibleProductCatalogListStoreSourceQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdAccountDpaEligibleProductCatalogListStoreSourceLoadedQuery.graphql",
            )),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return c;
          }),
          (n.__getVariables = function () {
            return { legacy_account_id: "", filters: [] };
          }),
          (n.__getGQLParams = function (t) {
            return {
              legacy_account_id: t.adAccountID,
              filters: t.filterInput
                ? this.$AdAccountDpaEligibleProductCatalogListStoreSource$p_1(
                    t.filterInput,
                  )
                : [],
              limit: t.limit,
              is_optimisation_enabled: !0,
              skip_user_tasks: !0,
              is_additional_cms_fields_enabled: !0,
              include_product_count_issues: !0,
              skip_unused_catalog_fields: r("gkx")("18904"),
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              o = t[0];
            r("updateLoadedAdAccountsClientSchema")(
              this.__environment,
              o.adAccountID,
            );
            var a = this.__getGQLParams(o),
              i = r("amFetchPreloadedQuery")(this.__environment, u, a)
                .toPromise()
                .then(function (e) {
                  var t;
                  return {
                    dpa_eligible_product_catalogs:
                      e == null || (t = e.ad_account) == null
                        ? void 0
                        : t.dpa_eligible_product_catalogs.map(function (e) {
                            return babelHelpers.extends(
                              {},
                              e.product_catalog_spec,
                            );
                          }),
                  };
                });
            r("promiseDone")(
              i,
              function () {
                e.notifyDataChange();
              },
              function (r) {
                (e.$AdAccountDpaEligibleProductCatalogListStoreSource$p_2(
                  o,
                  n,
                  r,
                ),
                  e.handleFetchQueryError(t, n, r));
              },
            );
          }),
          (n.updateLoadedDPACatalogsClientSchema = function (t, n) {
            var e = o("relay-runtime/store/RelayStoreUtils").formatStorageKey(
              "dpa_eligible_product_catalogs",
              { filters: [], request_source: "DEFAULT" },
            );
            o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (r) {
                var a,
                  i =
                    (a = r.getRoot().getLinkedRecords("loaded_ad_accounts")) !=
                    null
                      ? a
                      : [];
                i.forEach(function (a) {
                  var i,
                    l =
                      (i = a == null ? void 0 : a.getLinkedRecords(e)) != null
                        ? i
                        : [];
                  (o("AdsManagerRelayClientStateUtils").createAndAppendRecords(
                    r,
                    t,
                    n,
                    l,
                  ),
                    a == null || a.setLinkedRecords(l, e));
                });
              },
            );
          }),
          (n.__serializeKey = function (t) {
            return JSON.stringify(this.__getGQLParams(t));
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = r("readQueryToLoadObject")(
                  e.__environment,
                  u,
                  e.__getGQLParams(t),
                  function (e) {
                    var t;
                    return e == null || (t = e.ad_account) == null
                      ? void 0
                      : t.dpa_eligible_product_catalogs.map(function (e) {
                          return babelHelpers.extends(
                            {},
                            e.product_catalog_spec,
                          );
                        });
                  },
                );
                return { key: t, value: n };
              });
            return o;
          }),
          (n.$AdAccountDpaEligibleProductCatalogListStoreSource$p_1 = function (
            t,
          ) {
            var e = [{ field: "id", operator: "EQUAL", value: String(t.id) }];
            return e;
          }),
          (n.$AdAccountDpaEligibleProductCatalogListStoreSource$p_2 = function (
            t,
            n,
            a,
          ) {
            (r("CatalogBusinessEventsLoggerHelper")
              .getUnexpectedErrorLogger()
              .setEvent("catalog_selector_gql_fetch_failed")
              .setAdAccountID(t.adAccountID)
              .setActionData({
                error: JSON.stringify(a),
                store_type: "relay",
                is_retry: t.retry.toString(),
              })
              .log(),
              t.retry &&
                !o(
                  "AdAccountDpaEligibleProductCatalogListUtil",
                ).isTransientErrorCode(a) &&
                this.__fetchQuery(
                  [babelHelpers.extends({}, t, { retry: !1, limit: 10 })],
                  n,
                ));
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = d;
  },
  98,
);
