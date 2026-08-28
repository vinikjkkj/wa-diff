__d(
  "AdAccountDpaEligibleProductCatalogListUtil",
  [
    "AdAccountDpaEligibleProductCatalogListUtil_productCatalogSpec.graphql",
    "CatalogCapabilityStateUtils.facebook",
    "CatalogCapabilityUtils.facebook",
    "CatalogOriginalCreationSourceUtils.facebook",
    "CatalogSegmentType",
    "CatalogSegmentUseCase",
    "CommercePaymentProviders",
    "ItemCapabilityFeature",
    "ProductCatalogWebsiteOnboardingQualityBand",
    "ProductCatalogWebsiteOnboardingStatus",
    "ShopAds_Capability",
    "TypeCoercionUtils",
    "catalogConvertKeyValuePairsToMap",
    "getJSEnumKeySafe",
    "getJSEnumSafe",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a,
        l,
        s,
        u,
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
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z = o("relay-runtime").readInlineData(
          e !== void 0
            ? e
            : (e = n(
                "AdAccountDpaEligibleProductCatalogListUtil_productCatalogSpec.graphql",
              )),
          t,
        );
      return {
        catalog: {
          business: o("TypeCoercionUtils").coerceNonMaybeValue(
            {
              id: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                (a = z.business) == null ? void 0 : a.id,
              ),
              name: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                (l = z.business) == null ? void 0 : l.name,
              ),
            },
            "business",
            i.id,
          ),
          capabilities: r("catalogConvertKeyValuePairsToMap")(
            z.capabilities_with_state
              .map(function (e) {
                var t = e.capability,
                  n = e.state,
                  r = o("CatalogCapabilityUtils.facebook").toJSEnum(t),
                  a = o("CatalogCapabilityStateUtils.facebook").toJSEnum(n);
                return r == null || a == null ? null : { key: r, value: a };
              })
              .filter(Boolean),
          ).toJS(),
          capability_features: o(
            "TypeCoercionUtils",
          ).coerceEmptyArrayToUndefined(
            z.capability_features.map(function (e) {
              return r("getJSEnumSafe")(r("ItemCapabilityFeature"), e);
            }),
          ),
          catalog_issues_for_da:
            (s =
              (u = z.catalog_issues_for_da) == null
                ? void 0
                : u.map(function (e) {
                    return { type: e.type };
                  })) != null
              ? s
              : [],
          catalog_item_type: z.catalog_item_type,
          catalog_segment_filter:
            (c = z.catalog_segment_filter) != null ? c : void 0,
          catalog_segment_type: o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(r("CatalogSegmentType"), z.catalog_segment_type),
            "catalog.catalog_segment_type",
            i.id,
          ),
          catalog_to_ad_account_relationship: o(
            "TypeCoercionUtils",
          ).coerceNonMaybeValue(
            (d = z.catalog_to_ad_account_relationship) == null
              ? void 0
              : d.toLowerCase(),
            "catalog.catalog_to_ad_account_relationship",
            i.id,
          ),
          commerce_merchant_settings: z.commerce_merchant_settings
            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                {
                  application_id: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyStringToUndefined(
                    (m = z.commerce_merchant_settings) == null ||
                      (m = m.application) == null
                      ? void 0
                      : m.id,
                  ),
                  id: o("TypeCoercionUtils").coerceNonMaybeValue(
                    (p = z.commerce_merchant_settings) == null ? void 0 : p.id,
                    "catalog.commerce_merchant_settings.id",
                    i.id,
                  ),
                  merchant_page: o("TypeCoercionUtils").coerceObjectToUndefined(
                    {
                      id: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                        (_ = z.commerce_merchant_settings) == null ||
                          (_ = _.merchant_page) == null
                          ? void 0
                          : _.id,
                      ),
                      name: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                        (f = z.commerce_merchant_settings) == null ||
                          (f = f.merchant_page) == null
                          ? void 0
                          : f.name,
                      ),
                    },
                  ),
                  merchant_status: o("TypeCoercionUtils").coerceNonMaybeValue(
                    (g = z.commerce_merchant_settings) == null
                      ? void 0
                      : g.merchant_status,
                    "catalog.commerce_merchant_settings.merchant_status",
                    i.id,
                  ),
                  offsite_iab_checkout_enabled_countries:
                    (h =
                      (y = z.commerce_merchant_settings) == null
                        ? void 0
                        : y.offsite_iab_checkout_enabled_countries) != null
                      ? h
                      : [],
                  onsite_checkout_enabled_countries:
                    (C =
                      (b = z.commerce_merchant_settings) == null
                        ? void 0
                        : b.onsite_checkout_enabled_countries) != null
                      ? C
                      : [],
                  onsite_checkout_enabled_for_shops_ads_supported_countries:
                    (v =
                      (S = z.commerce_merchant_settings) == null
                        ? void 0
                        : S.onsite_checkout_enabled_for_shops_ads_supported_countries) !=
                    null
                      ? v
                      : !1,
                  payment_provider:
                    ((R = z.commerce_merchant_settings) == null
                      ? void 0
                      : R.payment_provider) != null
                      ? o("TypeCoercionUtils").coerceNonMaybeValue(
                          Object.keys(r("CommercePaymentProviders")).find(
                            function (e) {
                              var t;
                              return (
                                r("CommercePaymentProviders")[e] ===
                                ((t = z.commerce_merchant_settings) == null
                                  ? void 0
                                  : t.payment_provider)
                              );
                            },
                          ),
                          "catalog.commerce_merchant_settings.payment_provider",
                          i.id,
                        )
                      : "UNKNOWN",
                  shop_ads_capabilities: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (L = z.commerce_merchant_settings) == null
                      ? void 0
                      : L.shop_ads_capabilities.map(function (e) {
                          return r("getJSEnumKeySafe")(
                            r("ShopAds_Capability"),
                            e,
                          );
                        }),
                  ),
                },
                "commerce_merchant_settings",
                i.id,
              )
            : void 0,
          cpas_ad_account_relationship: o(
            "TypeCoercionUtils",
          ).coerceNonMaybeValue(
            (E = z.cpas_ad_account_relationship) == null
              ? void 0
              : E.toLowerCase(),
            "catalog.cpas_ad_account_relationship",
            i.id,
          ),
          creation_source: z.original_creation_source
            ? o("CatalogOriginalCreationSourceUtils.facebook").toJSEnum(
                z.original_creation_source,
              )
            : void 0,
          da_pe_spend_28d: o("TypeCoercionUtils").coerceOptionalValue(
            z.da_pe_spend_28d,
          ),
          da_spend_28d: o("TypeCoercionUtils").coerceOptionalValue(
            z.da_spend_28d,
          ),
          external_event_sources: o(
            "TypeCoercionUtils",
          ).coerceObjectToUndefined({
            summary: {
              total_count: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
                (k = z.connected_external_event_sources) == null
                  ? void 0
                  : k.count,
              ),
            },
          }),
          feed_count:
            (I = (T = z.feeds) == null ? void 0 : T.count) != null ? I : 0,
          has_external_event_source_associated_skip_privacy:
            (D = z.has_connected_event_sources) != null ? D : !1,
          has_issues: (x = z.has_issues_for_da) != null ? x : !1,
          id: o("TypeCoercionUtils").coerceNonMaybeValue(
            z.id,
            "catalog.id",
            i.id,
          ),
          last_used_in_ad: o("TypeCoercionUtils").coerceOptionalValue(
            z.last_used_in_ad,
          ),
          latest_impression_time: void 0,
          locations_page: void 0,
          name: o("TypeCoercionUtils").coerceEmptyStringToUndefined(z.name),
          page: o("TypeCoercionUtils").coerceObjectToUndefined({
            id: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
              ($ = z.page) == null ? void 0 : $.id,
            ),
            link: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
              (P = z.page) == null ? void 0 : P.link,
            ),
            name: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
              (N = z.page) == null ? void 0 : N.name,
            ),
          }),
          parent_catalog_id: o(
            "TypeCoercionUtils",
          ).coerceEmptyStringToUndefined(
            (M = z.parent_catalog) == null ? void 0 : M.id,
          ),
          product_count: void 0,
          smart_pixel_settings: void 0,
          source_app: o("TypeCoercionUtils").coerceObjectToUndefined({
            id: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
              z.source_app_id,
            ),
          }),
          store_catalog_settings: z.store_catalog_settings
            ? {
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (w = z.store_catalog_settings) == null ? void 0 : w.id,
                  "catalog.store_catalog_settings.id",
                  i.id,
                ),
                page:
                  (A = z.store_catalog_settings) != null && A.page
                    ? {
                        id: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (F = z.store_catalog_settings) == null ||
                            (F = F.page) == null
                            ? void 0
                            : F.id,
                          "catalog.store_catalog_settings.page.id",
                          i.id,
                        ),
                        name: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyStringToUndefined(
                          (O = z.store_catalog_settings) == null ||
                            (O = O.page) == null
                            ? void 0
                            : O.name,
                        ),
                      }
                    : null,
              }
            : null,
          suggested_conversion_event:
            (B = z.suggested_conversion_event) != null ? B : void 0,
          user_tasks: o("TypeCoercionUtils").coerceObjectToUndefined({
            data: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              (W =
                (q = z.user_tasks) == null
                  ? void 0
                  : q.data.map(function (e) {
                      var t, n, r, a;
                      return {
                        business: {
                          id: o("TypeCoercionUtils").coerceNonMaybeValue(
                            (t = e.business) == null ? void 0 : t.id,
                            "user_task.business.id",
                            i.id,
                          ),
                          name: o("TypeCoercionUtils").coerceNonMaybeValue(
                            (n = e.business) == null ? void 0 : n.name,
                            "user_task.business.name",
                            i.id,
                          ),
                        },
                        tasks:
                          (r =
                            (a = e.tasks) == null
                              ? void 0
                              : a.filter(Boolean)) != null
                            ? r
                            : [],
                      };
                    })) != null
                ? W
                : [],
            ),
          }),
          vertical: z.vertical,
          website_onboarding_settings: o(
            "TypeCoercionUtils",
          ).coerceObjectToUndefined({
            quality_band:
              (U = z.website_onboarding_settings) != null && U.quality_band
                ? r("getJSEnumSafe")(
                    r("ProductCatalogWebsiteOnboardingQualityBand"),
                    (V = z.website_onboarding_settings) == null
                      ? void 0
                      : V.quality_band,
                  )
                : void 0,
            status:
              (H = z.website_onboarding_settings) != null && H.state
                ? r("getJSEnumSafe")(
                    r("ProductCatalogWebsiteOnboardingStatus"),
                    (G = z.website_onboarding_settings) == null
                      ? void 0
                      : G.state,
                  )
                : void 0,
          }),
        },
        catalogSegmentUseCases: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          z.catalog_segment_use_cases.map(function (e) {
            return r("getJSEnumSafe")(r("CatalogSegmentUseCase"), e);
          }),
        ),
      };
    }
    var u = function (t) {
      var e = new Set(["1675004", "1357001", "1357004", "1357032"]);
      return Array.from(e).some(function (e) {
        var n;
        return (
          (t == null ? void 0 : t.message.includes("error " + e)) ||
          ((n = String(t == null ? void 0 : t.code)) == null
            ? void 0
            : n.includes(e))
        );
      });
    };
    ((l.coerceGraphQLSpecToGraphAPI = s), (l.isTransientErrorCode = u));
  },
  98,
);
