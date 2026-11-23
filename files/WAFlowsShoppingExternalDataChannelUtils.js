__d(
  "WAFlowsShoppingExternalDataChannelUtils",
  [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WAFlowsComponentConstants",
    "WAFlowsDynamicDataUtils",
    "WAFlowsExternalDataChannelRequest",
    "WAFlowsShoppingGetCategoriesRequestTypes",
    "WAFlowsShoppingGetCollectionsRequestTypes",
    "WAFlowsShoppingGetProductCatalogRequestTypes",
    "WAFlowsShoppingGetProductListByRetailerIdRequestTypes",
    "WAFlowsShoppingGetProductListRequestTypes",
    "WAFlowsShoppingGetProductRequestTypes",
    "WAFlowsShoppingGetSingleCollectionRequestTypes",
    "WAFlowsShoppingStateUtils",
    "WAFlowsStateParser",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = n("$InternalEnum")({ META_CATALOG: "meta_catalog" }),
      c = "FLOWS",
      d = "default_catalog_id";
    function m(e, t) {
      var n = [];
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1],
          i = a == null ? void 0 : a.payload;
        n.push({ name: o, type: e, payload: i, isBindingValue: p(o, i) });
      }
      return n;
    }
    function p(e, t) {
      return e ===
        o("WAFlowsShoppingGetCategoriesRequestTypes").GET_CATEGORIES_API_NAME &&
        (t == null ? void 0 : t.category_ids) != null
        ? o("WAFlowsDynamicDataUtils").isBindingValue(
            t == null ? void 0 : t.category_ids,
          )
        : e ===
              o("WAFlowsShoppingGetSingleCollectionRequestTypes")
                .GET_SINGLE_COLLECTION_API_NAME &&
            (t == null ? void 0 : t.category) != null
          ? o("WAFlowsDynamicDataUtils").isBindingValue(
              t == null ? void 0 : t.category,
            )
          : e ===
                o("WAFlowsShoppingGetProductListRequestTypes")
                  .GET_PRODUCT_LIST_API_NAME &&
              (t == null ? void 0 : t.product_ids) != null
            ? o("WAFlowsDynamicDataUtils").isBindingValue(
                t == null ? void 0 : t.product_ids,
              )
            : e ===
                  o("WAFlowsShoppingGetProductRequestTypes")
                    .GET_PRODUCT_API_NAME &&
                (t == null ? void 0 : t.product_id) != null
              ? o("WAFlowsDynamicDataUtils").isBindingValue(
                  t == null ? void 0 : t.product_id,
                )
              : !1;
    }
    function _(e, t, n, r, a, i, l, s, c) {
      var d, m, p, _, h, S, R, L, E, k, I, T, D, x, $;
      switch (t) {
        case o("WAFlowsShoppingGetCategoriesRequestTypes")
          .GET_CATEGORIES_API_NAME:
          if (u.cast(e) === u.META_CATALOG) return v(e, i);
          var P =
            (d = o("WAFlowsStateParser").parsePropertyValue(
              (m = n == null ? void 0 : n.category_ids) != null ? m : [],
              a.external,
              r,
              [],
              c,
            )) != null
              ? d
              : [];
          return f(P, i);
        case o("WAFlowsShoppingGetSingleCollectionRequestTypes")
          .GET_SINGLE_COLLECTION_API_NAME:
          var N =
            (n !== void 0 || l !== void 0) && !s
              ? (p = o("WAFlowsStateParser").parsePropertyValue(
                  (_ =
                    (h = l == null ? void 0 : l.category) != null
                      ? h
                      : n == null
                        ? void 0
                        : n.category) != null
                    ? _
                    : "",
                  a.external,
                  r,
                  "",
                  c,
                )) != null
                ? p
                : ""
              : (S = a.internal.shopping) == null
                ? void 0
                : S.categoryId;
          return C(e, N, i, n == null ? void 0 : n.paging_after);
        case o("WAFlowsShoppingGetProductListRequestTypes")
          .GET_PRODUCT_LIST_API_NAME:
          var M =
            ((n == null ? void 0 : n.product_ids) !== void 0 || l !== void 0) &&
            !s
              ? (R = o("WAFlowsStateParser").parsePropertyValue(
                  (L =
                    (E = l == null ? void 0 : l.product_ids) != null
                      ? E
                      : n == null
                        ? void 0
                        : n.product_ids) != null
                    ? L
                    : [],
                  a.external,
                  r,
                  [],
                  c,
                )) != null
                ? R
                : []
              : (k = a.internal) == null ||
                  (k = k.shopping) == null ||
                  (k = k.shoppingCart) == null
                ? void 0
                : k.items.map(function (e) {
                    return e.catalogItemId;
                  });
          return g(
            M,
            i,
            (o(
              "WAFlowsShoppingStateUtils",
            ).isShoppingOffsiteCheckoutMessageFlow(a) &&
              c.getScreenLayoutType(r) ===
                o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST) ||
              o(
                "WAFlowsShoppingStateUtils",
              ).isShoppingIntegratedShoppingMessageFlow(a),
          );
        case o("WAFlowsShoppingGetProductRequestTypes").GET_PRODUCT_API_NAME:
          var w =
              o(
                "WAFlowsShoppingStateUtils",
              ).isShoppingOffsiteCheckoutMessageFlow(a) ||
              o(
                "WAFlowsShoppingStateUtils",
              ).isShoppingIntegratedShoppingMessageFlow(a),
            A =
              (n !== void 0 || l !== void 0) && !s
                ? (I = o("WAFlowsStateParser").parsePropertyValue(
                    (T =
                      (D = l == null ? void 0 : l.product_id) != null
                        ? D
                        : n == null
                          ? void 0
                          : n.product_id) != null
                      ? T
                      : "",
                    a.external,
                    r,
                    "",
                    c,
                  )) != null
                  ? I
                  : ""
                : w
                  ? (x = a.internal) == null || (x = x.shopping) == null
                    ? void 0
                    : x.catalogItemRetailerId
                  : ($ = a.internal) == null || ($ = $.shopping) == null
                    ? void 0
                    : $.catalogItemId;
          return y(A, i, w);
        default:
          return b(i, n == null ? void 0 : n.paging_after);
      }
    }
    function f(e, t) {
      e === void 0 && (e = []);
      var n = e.map(function (e) {
          return { category_id: e };
        }),
        r = { categories: { biz_jid: t, category_ids: n } };
      return {
        request: r,
        doc_id: o("WAFlowsShoppingGetCategoriesRequestTypes")
          .GET_CATEGORIES_REQUEST_DOC_ID,
        is_request_valid: !0,
      };
    }
    function g(e, t, n) {
      if ((e === void 0 && (e = []), n)) {
        var r = {
          product_list: {
            jid: t,
            catalog: { id: d },
            products: e.map(function (e) {
              return { retailer_id: e };
            }),
          },
        };
        return {
          request: r,
          doc_id: o("WAFlowsShoppingGetProductListByRetailerIdRequestTypes")
            .GET_PRODUCT_LIST_BY_RETAILER_ID_DOC_ID,
          is_request_valid: e.length > 0,
        };
      } else {
        var a = e.map(function (e) {
            return { id: e };
          }),
          i = {
            product_list: {
              jid: t,
              products: a,
              variant_info_fields: o(
                "WAFlowsShoppingGetProductListRequestTypes",
              ).GET_PRODUCT_LIST_VARIANT_INFO_FIELDS,
              request_origin: c,
            },
          };
        return {
          request: i,
          doc_id: o("WAFlowsShoppingGetProductListRequestTypes")
            .GET_PRODUCT_LIST_DOC_ID,
          is_request_valid: a.length > 0,
        };
      }
    }
    function h() {
      var e,
        t,
        n = (e = window) == null || (e = e.screen) == null ? void 0 : e.width,
        r = (t = window) == null || (t = t.screen) == null ? void 0 : t.height;
      return n > 0 && r > 0
        ? Math.min(n, r)
        : o("WAFlowsComponentConstants").ITEM_DETAIL_IMAGE_DEFAULT_SIZE;
    }
    function y(e, t, n) {
      e === void 0 && (e = "");
      var r = h();
      if (n) {
        var a = {
          product_list: {
            jid: t,
            catalog: { id: d },
            width: r,
            height: r,
            products: [{ retailer_id: e }],
          },
        };
        return {
          request: a,
          doc_id: o("WAFlowsShoppingGetProductListByRetailerIdRequestTypes")
            .GET_PRODUCT_LIST_BY_RETAILER_ID_DOC_ID,
          is_request_valid: e !== "",
        };
      } else {
        var i = {
          product: {
            jid: t,
            product_id: e,
            width: r,
            height: r,
            variant_info_fields: o("WAFlowsShoppingGetProductRequestTypes")
              .GET_PRODUCT_VARIANT_INFO_FIELDS,
            request_origin: c,
          },
        };
        return {
          request: i,
          doc_id: o("WAFlowsShoppingGetProductRequestTypes").GET_PRODUCT_DOC_ID,
          is_request_valid: e !== "",
        };
      }
    }
    function C(e, t, n, r) {
      t === void 0 && (t = "");
      var a = { collection: { biz_jid: n, id: t } };
      return (
        r != null && (a.collection.after = r),
        u.cast(e) === u.META_CATALOG && (a.collection.request_origin = c),
        {
          request: a,
          doc_id: o("WAFlowsShoppingGetSingleCollectionRequestTypes")
            .GET_SINGLE_COLLECTION_DOC_ID,
          is_request_valid: t !== "",
        }
      );
    }
    function b(e, t) {
      var n = { product_catalog: { jid: e } };
      return (
        t != null && (n.product_catalog.after = t),
        {
          request: n,
          doc_id: o("WAFlowsShoppingGetProductCatalogRequestTypes")
            .GET_PRODUCT_CATALOG_DOC_ID,
          is_request_valid: !0,
        }
      );
    }
    function v(e, t) {
      var n = { collections: { biz_jid: t } };
      return (
        u.cast(e) === u.META_CATALOG && (n.collections.request_origin = c),
        {
          request: n,
          doc_id: o("WAFlowsShoppingGetCollectionsRequestTypes")
            .GET_COLLECTIONS_REQUEST_DOC_ID,
          is_request_valid: !0,
        }
      );
    }
    function S(t, o, a, i, l, c, d, m, p) {
      var f;
      (m === void 0 && (m = !1),
        u.cast(t.type) === u.META_CATALOG || s(0, 76155));
      var g = _(t.type, t.name, t.payload, i, o, a, p, c, d);
      if (
        (g == null ||
        (f = g.request) == null ||
        (f = f.product_list) == null ||
        (f = f.products) == null
          ? void 0
          : f.length) === 0
      )
        return T();
      if (m && (g == null ? void 0 : g.is_request_valid) === !1)
        return (e || (e = n("Promise"))).reject();
      var h = { payload: { request: g.request } };
      return r("WAFlowsExternalDataChannelRequest")(h, g.doc_id, l);
    }
    function R(e, t, n, r, a) {
      var i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b =
          o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(
            r,
          ) ||
          o(
            "WAFlowsShoppingStateUtils",
          ).isShoppingIntegratedShoppingMessageFlow(r);
      if (u.cast(e) !== u.META_CATALOG) return {};
      var v = r == null ? void 0 : r.external[a != null ? a : ""].external_data;
      switch (n) {
        case o("WAFlowsShoppingGetCategoriesRequestTypes")
          .GET_CATEGORIES_API_NAME:
          return {
            meta_catalog: {
              categories: k(
                (i =
                  t == null ||
                  (l = t.data) == null ||
                  (l = l.xwa_product_catalog_get_collections) == null
                    ? void 0
                    : l.collections) != null
                  ? i
                  : [],
              ),
            },
          };
        case o("WAFlowsShoppingGetSingleCollectionRequestTypes")
          .GET_SINGLE_COLLECTION_API_NAME:
          return {
            meta_catalog: {
              product_list: E(
                (s =
                  t == null ||
                  (c = t.data.xwa_product_catalog_get_single_collection) ==
                    null ||
                  (c = c.collection) == null
                    ? void 0
                    : c.products) != null
                  ? s
                  : [],
                v,
                o("WAFlowsShoppingGetSingleCollectionRequestTypes")
                  .GET_SINGLE_COLLECTION_API_NAME,
              ),
              paging_after:
                t == null ||
                (d = t.data.xwa_product_catalog_get_single_collection) ==
                  null ||
                (d = d.paging) == null
                  ? void 0
                  : d.after,
            },
          };
        case o("WAFlowsShoppingGetProductCatalogRequestTypes")
          .GET_PRODUCT_CATALOG_API_NAME:
          return {
            meta_catalog: {
              product_catalog: E(
                (m =
                  t == null ||
                  (p = t.data.xwa_product_catalog_get_product_catalog) ==
                    null ||
                  (p = p.product_catalog) == null
                    ? void 0
                    : p.products) != null
                  ? m
                  : [],
                v,
                o("WAFlowsShoppingGetProductCatalogRequestTypes")
                  .GET_PRODUCT_CATALOG_API_NAME,
              ),
              paging_after:
                t == null ||
                (_ = t.data.xwa_product_catalog_get_product_catalog) == null ||
                (_ = _.product_catalog) == null ||
                (_ = _.paging) == null
                  ? void 0
                  : _.after,
            },
          };
        case o("WAFlowsShoppingGetProductRequestTypes").GET_PRODUCT_API_NAME:
          var S = b
            ? t == null ||
              (f =
                t.data.xwa_product_catalog_get_product_list_by_retailer_id) ==
                null ||
              (f = f.product_list) == null
              ? void 0
              : f.products[0]
            : t == null ||
                (g = t.data.xwa_product_catalog_get_product) == null ||
                (g = g.product_catalog) == null
              ? void 0
              : g.product;
          return S ? { meta_catalog: { product_detail: L(S) } } : {};
        case o("WAFlowsShoppingGetProductListRequestTypes")
          .GET_PRODUCT_LIST_API_NAME:
          var R =
              (h =
                t == null ||
                (y =
                  t.data.xwa_product_catalog_get_product_list_by_retailer_id) ==
                  null ||
                (y = y.product_list) == null
                  ? void 0
                  : y.products) != null
                ? h
                : [],
            I =
              b && (R == null ? void 0 : R.length) > 0
                ? R
                : t == null ||
                    (C = t.data.xwa_product_catalog_get_product_list) == null ||
                    (C = C.product_list) == null
                  ? void 0
                  : C.products;
          return {
            meta_catalog: {
              products: E(
                I != null ? I : [],
                v,
                o("WAFlowsShoppingGetProductListRequestTypes")
                  .GET_PRODUCT_LIST_API_NAME,
              ),
            },
          };
        default:
          return {};
      }
    }
    function L(e) {
      var t = I(e);
      return t;
    }
    function E(e, t, n) {
      var r = e.map(function (e) {
        var t = I(e);
        return t;
      });
      return r;
    }
    function k(e) {
      var t = [],
        n = {};
      for (var r of e)
        (t.push(r.id),
          (n[r.id] = { category_id: r.id, is_last_level: !0, name: r.name }));
      return { topCategories: t, subCategories: {}, categoriesData: n };
    }
    function I(e) {
      var t,
        n,
        r,
        o,
        a = {
          id: e.id,
          name: e.name,
          price: parseFloat(String(e.price)) / 1e3,
          currency: (t = e == null ? void 0 : e.currency) != null ? t : "USD",
          description:
            (n = e == null ? void 0 : e.description) != null ? n : "",
          max_available:
            (r = e == null ? void 0 : e.max_available) != null ? r : 1e3,
          media: e.media,
          retailer_id: (o = e.retailer_id) != null ? o : "",
        };
      if (
        (e.sale_price &&
          (a.sale_price = parseFloat(String(e.sale_price.price)) / 1e3),
        e.compliance_info)
      ) {
        var i;
        a.compliance_info = {
          country_code:
            e == null || (i = e.compliance_info) == null
              ? void 0
              : i.country_code_origin,
          importer_name: e.compliance_info.importer_name,
          importer_address: e.compliance_info.importer_address,
        };
      }
      return (
        e.product_availability &&
          (a.product_availability = e.product_availability),
        e.variant_info && (a.variant_info = e.variant_info),
        a
      );
    }
    function T() {
      return (e || (e = n("Promise"))).resolve({
        data: {
          xwa_product_catalog_get_product_list: {
            __typename: "XWAProductCatalogGetProductResponseSuccess",
            product_list: { products: [] },
          },
        },
      });
    }
    ((l.EXTERNAL_DATA_ORIGIN = c),
      (l.DEFAULT_CATALOG_ID = d),
      (l.formatExternalData = m),
      (l.parseMetaCatalogRequestFromFlowJson = _),
      (l.executeMetaCatalogRequest = S),
      (l.storeMetaCatalogFormattedExternalData = R));
  },
  98,
);
