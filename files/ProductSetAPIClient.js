__d(
  "ProductSetAPIClient",
  [
    "AdsGraphAPI",
    "CatalogBusinessEventsLoggerHelper",
    "FBLogger",
    "GraphAPIPolling",
    "ProductSetAPIClientUtils",
    "ProductSetGraphAPIFilters",
    "asyncToGeneratorRuntime",
    "err",
    "first",
    "firstx",
    "getErrorSafe",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "id",
      "name",
      "filter",
      "capability",
      "cpas_category_product_set_id",
      "is_eligible_for_value_optimization",
      "is_eligible_for_value_optimization_new",
      "da_approved_items_count",
      "original_creation_source",
      "checkout_eligible_item_count",
      "collection{url}",
      "product_catalog{" +
        [
          "id",
          "name",
          "vertical",
          "has_localized_overrides",
          "catalog_item_type",
          "creation_source",
        ].join(",") +
        "}",
    ];
    function s() {
      return r("gkx")("6283") ? [].concat(e, ["visible_products_count"]) : e;
    }
    var u = 10;
    function c(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_set", e)
        .batched()
        .get({ fields: s() })
        .then(C);
    }
    function d(e, t, n, r, o, a, i, l, s, u, c, d, p, _, f, g, h, y) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s, c, d, m, _, f, g, h, y, b, v, S, R) {
            (t === void 0 && (t = null),
              a === void 0 && (a = null),
              i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              s === void 0 && (s = "default"),
              c === void 0 && (c = !1),
              d === void 0 && (d = !1),
              m === void 0 && (m = null),
              _ === void 0 && (_ = null),
              f === void 0 && (f = null),
              g === void 0 && (g = !1),
              h === void 0 && (h = "DEFAULT"),
              y === void 0 && (y = !1),
              b === void 0 && (b = null),
              v === void 0 && (v = null),
              S === void 0 && (S = !1),
              R === void 0 && (R = null));
            function L() {
              return E.apply(this, arguments);
            }
            function E() {
              return (
                (E = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var n,
                      L,
                      E = [
                        {
                          field: "product_set_count",
                          operator: "GREATER_THAN_OR_EQUAL",
                          value: 1,
                        },
                      ];
                    (S ||
                      E.push({
                        field: "exclude_child_catalogs",
                        operator: "EQUAL",
                        value: !0,
                      }),
                      a != null &&
                        a.length > 0 &&
                        E.push({ field: "vertical", operator: "IN", value: a }),
                      l === !0 &&
                        E.push({
                          field: "has_onsite_commerce_merchant_settings",
                          operator: "EQUAL",
                          value: !0,
                        }),
                      v === !0 &&
                        E.push({
                          field: "has_offsite_iab_commerce_merchant_settings",
                          operator: "EQUAL",
                          value: !0,
                        }),
                      c &&
                        E.push({
                          field: "include_business_catalogs_only",
                          operator: "EQUAL",
                          value: !0,
                        }),
                      t != null &&
                        E.push({
                          field: "commerce_merchant_settings_id",
                          operator: "EQUAL",
                          value: t,
                        }),
                      R != null &&
                        E.push({
                          field: "merchant_partner_business_id",
                          operator: "EQUAL",
                          value: R,
                        }),
                      i &&
                        E.push({
                          field: "capability_features",
                          operator: "EQUAL",
                          value: "amazon_buy_with_prime",
                        }));
                    var k = y === !0 ? _ : null;
                    k != null &&
                      E.push({
                        field: "page_id_for_ctm_visibility",
                        operator: "EQUAL",
                        value: k,
                      });
                    var I = o("ProductSetGraphAPIFilters").getProductSetFilters(
                        i,
                        d,
                        k != null ? !1 : g,
                      ),
                      T = ".filtering(" + JSON.stringify(I) + ")",
                      D = [],
                      x;
                    if (
                      !o("ProductSetAPIClientUtils").isA2CAPIImprovementEnabled(
                        h,
                      )
                    ) {
                      var $;
                      ((x = yield p(e, m, _, f, T, h, s, b, E)),
                        (D =
                          ($ = x) == null
                            ? void 0
                            : $.filter(function (e) {
                                var t;
                                return (
                                  (e == null ||
                                  (t = e.product_sets) == null ||
                                  (t = t.data) == null
                                    ? void 0
                                    : t.length) > 0
                                );
                              })));
                    }
                    if (
                      (((n = x) == null ? void 0 : n.length) === u &&
                        ((L = D) == null ? void 0 : L.length) === 0 &&
                        r("gkx")("12761")) ||
                      o("ProductSetAPIClientUtils").isA2CAPIImprovementEnabled(
                        h,
                      )
                    ) {
                      var P;
                      ((x = yield p(e, m, _, f, T, h, s, b, E, !0)),
                        (D =
                          (P = x) == null
                            ? void 0
                            : P.filter(function (e) {
                                var t;
                                return (
                                  ((t = e.product_sets) == null ||
                                  (t = t.data) == null
                                    ? void 0
                                    : t.length) > 0
                                );
                              })));
                    }
                    var N = r("first")(D);
                    if (N == null)
                      throw new (o(
                        "ProductSetAPIClientUtils",
                      ).NoEligibleProductSetsError)();
                    return C(r("firstx")(N.product_sets.data));
                  },
                )),
                E.apply(this, arguments)
              );
            }
            try {
              return yield L();
            } catch (e) {
              throw (
                e instanceof
                  o("ProductSetAPIClientUtils").NoEligibleProductSetsError ||
                  r("FBLogger")("dpa")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "hit error trying to load first eligible product set from account",
                    ),
                e
              );
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, o, a, i, l, s, u) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, l, c, d, m, p, _) {
            if (
              (t === void 0 && (t = null),
              n === void 0 && (n = null),
              a === void 0 && (a = null),
              c === void 0 && (c = "DEFAULT"),
              d === void 0 && (d = "default"),
              m === void 0 && (m = null),
              p === void 0 && (p = null),
              _ === void 0 && (_ = !1),
              _ === !0)
            ) {
              var f;
              (f = p) == null ||
                f.push({
                  field: "prioritize_non_empty_catalogs",
                  operator: "EQUAL",
                  value: !0,
                });
            }
            var g = o("ProductSetAPIClientUtils").isA2CAPIImprovementEnabled(c)
                ? o("ProductSetAPIClientUtils").isA2CLatencyLimitCutEnabled()
                  ? 2
                  : 5
                : u,
              h = yield o("AdsGraphAPI")
                .get(i.id)
                .adaccount(e)
                .edge("dpa_eligible_product_catalogs")
                .get({
                  ad_url: t,
                  adgroup_id: m,
                  fields:
                    "product_sets.limit(1)" + l + "{" + s().join(",") + "}",
                  filtering: p,
                  limit: g,
                  page_id: n,
                  pixel_id: a,
                  request_source: c,
                  sort_by: d,
                }),
              y = h == null ? void 0 : h.data;
            if (_ === !0) {
              var C,
                b = y.filter(function (e) {
                  var t;
                  return (
                    ((t = e.product_sets) == null || (t = t.data) == null
                      ? void 0
                      : t.length) > 0
                  );
                }),
                v =
                  y == null
                    ? void 0
                    : y.map(function (e) {
                        return e == null ? void 0 : e.id;
                      });
              r("CatalogBusinessEventsLoggerHelper")
                .getAdsCreationLogger()
                .setEvent("ads_manager_product_set_client_load")
                .setAdAccountID(e)
                .setActionData({
                  adgroupID: m,
                  catalogs:
                    (C = v == null ? void 0 : v.join(",")) != null ? C : "",
                  catalogs_size: b == null ? void 0 : b.length.toString(),
                  limit: g.toString(),
                  pageID: n,
                  pixelID: a,
                  request_source: c,
                })
                .log();
            }
            return y;
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, a, l) {
      (a === void 0 && (a = "DEFAULT"), l === void 0 && (l = 60 * 1e3));
      var u = null,
        c = [{ field: "product_count", operator: "GREATER_THAN", value: 0 }],
        d = ".filtering(" + JSON.stringify(c) + ")",
        m = o("GraphAPIPolling").poll(
          function () {
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(e)
              .edge("dpa_eligible_product_catalogs")
              .get({
                fields: "product_sets.limit(1)" + d + "{" + s().join(",") + "}",
                limit: 10,
                request_source: a,
              });
          },
          function (e) {
            var t = e.data.find(function (e) {
              var t;
              return (
                ((t = e.product_sets) == null || (t = t.data) == null
                  ? void 0
                  : t.length) > 0
              );
            });
            return t != null ? ((u = t), !0) : !1;
          },
          l,
          null,
        )(u);
      r("promiseDone")(
        m,
        function (e) {
          if (u == null) throw r("err")("No eligible product set found");
          var n = C(r("firstx")(u.product_sets.data));
          t(n);
        },
        function (e) {
          n(e);
        },
      );
    }
    function g(e, t, n) {
      return (
        n === void 0 && (n = "DEFAULT"),
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(e)
          .edge("dpa_eligible_product_catalogs")
          .get({
            fields: "product_sets.limit(1){" + s().join(",") + "}",
            filtering: [{ field: "vertical", operator: "IN", value: t }],
            limit: 1,
            request_source: n,
          })
          .then(function (e) {
            var t;
            return (t = r("first")(e.data)) != null
              ? t
              : Promise.reject(
                  new (o(
                    "ProductSetAPIClientUtils",
                  ).NoEligibleProductSetsError)(),
                );
          })
          .then(function (e) {
            return r("firstx")(e.product_sets.data);
          })
          .then(function (e) {
            return C(e);
          })
      );
    }
    function h(e, t, n) {
      return (
        n === void 0 && (n = "DEFAULT"),
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .get({
            fields:
              t != null
                ? "product_sets.ad_url(" +
                  t +
                  ").limit(1){" +
                  s().join(",") +
                  "}"
                : "product_sets.limit(1){" + s().join(",") + "}",
            limit: 1,
            request_source: n,
          })
          .then(function (e) {
            return C(r("firstx")(e.product_sets.data));
          })
          .catch(function (e) {
            return (
              r("FBLogger")("dpa")
                .catching(r("getErrorSafe")(e))
                .warn(
                  "hit error trying to load first eligible product set from account",
                ),
              null
            );
          })
      );
    }
    function y(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_set", e)
        .get({ fields: "product_catalog{" + t.join(",") + "}" })
        .then(function (e) {
          return e.product_catalog;
        });
    }
    function C(e) {
      var t;
      return {
        capability: e.capability,
        catalog_item_type: e.product_catalog.catalog_item_type,
        catalogID: e.product_catalog.id,
        catalogName: e.product_catalog.name,
        catalogOriginalCreationSource: e.product_catalog.creation_source,
        checkout_eligible_item_count: e.checkout_eligible_item_count,
        cpas_category_product_set_id: e.cpas_category_product_set_id,
        da_approved_product_count: e.da_approved_items_count,
        filter: e.filter,
        has_localized_overrides: e.product_catalog.has_localized_overrides,
        id: e.id,
        is_eligible_for_value_optimization:
          e.is_eligible_for_value_optimization,
        is_eligible_for_value_optimization_new:
          e.is_eligible_for_value_optimization_new,
        name: e.name,
        original_creation_source: e.original_creation_source,
        url: (t = e.collection) == null ? void 0 : t.url,
        vertical: e.product_catalog.vertical,
        visible_product_count: e.visible_products_count,
      };
    }
    function b() {
      return s();
    }
    var v = {
        createProductSetFromResponse: C,
        getProductSetFields: b,
        loadFirstEligibleFromAccount: d,
        loadFirstEligibleFromAccountByVerticals: g,
        loadFirstEligibleFromAccountWithPolling: f,
        loadFirstEligibleFromCatalog: h,
        loadFromCatalogWithFields: y,
        loadRecord: c,
      },
      S = v;
    l.default = S;
  },
  98,
);
