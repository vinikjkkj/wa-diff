__d(
  "AdsPageInstagramAccountStoreSource",
  [
    "AdsInstagramAccountPageBatchLoadErrorDataAction",
    "AdsInstagramAccountPageBatchLoadedDataAction",
    "AdsLoadState_LEGACY",
    "AdsPageInstagramAccountStoreSourceFragment.graphql",
    "AdsPageInstagramAccountStoreSourceServerLoadedQuery.graphql",
    "AdsPageInstagramAccountStoreSourceServerQuery.graphql",
    "IGShoppingReviewStatus",
    "ReverseInteropStoreSourceBase",
    "ShopStatus",
    "TypeCoercionUtils",
    "amFetchPreloadedQuery",
    "getJSEnumSafe",
    "gkx",
    "justknobx",
    "promiseDone",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("AdsPageInstagramAccountStoreSourceServerQuery.graphql")),
      d =
        s !== void 0
          ? s
          : (s = n(
              "AdsPageInstagramAccountStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n("AdsPageInstagramAccountStoreSourceFragment.graphql")),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return { skip_ibta: !1, skip_pbta: !1 };
          }),
          (n.__getGQLParams = function (t) {
            return {
              ids: t.map(function (e) {
                return e.toString();
              }),
              skip_ibta: !1,
              skip_pbta: !1,
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = r("justknobx")._("4280");
            if (t.length >= e && r("gkx")("23731"))
              this.$AdsPageInstagramAccountStoreSource$p_1(t, n);
            else
              for (var o of t)
                this.$AdsPageInstagramAccountStoreSource$p_1([o], n);
          }),
          (n.$AdsPageInstagramAccountStoreSource$p_1 = function (t, n) {
            var e = this,
              o = t.map(function (e) {
                return e.toString();
              }),
              a = "loaded_pages",
              l = "Page";
            this.updateRecords(o, a, l);
            var s = this.__getGQLParams(t),
              u = r("amFetchPreloadedQuery")(this.__environment, c, s, {
                fetchPolicy: "store-or-network",
              })
                .toPromise()
                .then(function (t) {
                  var n, r;
                  return {
                    pages:
                      (n =
                        t == null || (r = t.pages) == null
                          ? void 0
                          : r.map(function (t) {
                              return e.$AdsPageInstagramAccountStoreSource$p_2(
                                t,
                              );
                            })) != null
                        ? n
                        : [],
                  };
                })
                .catch(function (o) {
                  var a = new Map();
                  return (
                    t.forEach(function (e) {
                      a.set(e, o);
                    }),
                    r(
                      "AdsInstagramAccountPageBatchLoadErrorDataAction",
                    ).dispatch(
                      { errors: a },
                      {
                        line: "458",
                        module: "AdsPageInstagramAccountStoreSource.js",
                        moduleID: i.id,
                      },
                    ),
                    e.handleFetchQueryError(t, n, o)
                  );
                });
            r("promiseDone")(u, function (t) {
              if (
                (t == null ? void 0 : t.pages) != null &&
                t.pages.length > 0
              ) {
                var n = new Map();
                (t.pages.forEach(function (e) {
                  (e == null ? void 0 : e.id) != null && n.set(e.id, e);
                }),
                  n.size > 0 &&
                    r("AdsInstagramAccountPageBatchLoadedDataAction").dispatch(
                      { specs: n },
                      {
                        line: "473",
                        module: "AdsPageInstagramAccountStoreSource.js",
                        moduleID: i.id,
                      },
                    ));
              }
              e.notifyDataChange();
            });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = e.__getGQLParams([t]);
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    n,
                    { skip_ibta: !1, skip_pbta: !1 },
                    t.toString(),
                    function (t) {
                      return e.$AdsPageInstagramAccountStoreSource$p_2(t);
                    },
                  ),
                };
              });
            return o;
          }),
          (n.$AdsPageInstagramAccountStoreSource$p_2 = function (t) {
            var e, n, a, l;
            if (t != null) {
              var s =
                  (e =
                    t == null ||
                    (n = t.instagram_accounts) == null ||
                    (n = n.nodes) == null
                      ? void 0
                      : n.map(function (e) {
                          var t,
                            n,
                            a,
                            l,
                            s,
                            u,
                            c,
                            d,
                            m,
                            p,
                            _ = e == null ? void 0 : e.mini_shop_storefront,
                            f = {
                              eimu_id: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(e.eimu_id),
                              has_profile_picture: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(e.has_profile_pic),
                              id: o(
                                "TypeCoercionUtils",
                              ).coerceMaybeFBIDtoZeroOrFBID(
                                e.legacy_instagram_user_id,
                              ),
                              id_v2: o("TypeCoercionUtils").coerceOptionalValue(
                                e.id,
                              ),
                              is_authorized_for_political_ads: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                e.is_authorized_for_political,
                              ),
                              is_business:
                                e.instagram_account_type === "BUSINESS",
                              is_private: o(
                                "TypeCoercionUtils",
                              ).coerceNonMaybeValue(
                                e.is_private,
                                "account.is_private",
                                i.id,
                              ),
                              is_professional: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(e.is_professional_account),
                              is_messaging_light_switch_enabled: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                e == null
                                  ? void 0
                                  : e.is_messaging_light_switch_enabled,
                              ),
                              is_ctd_leads_targeting_eligible: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                e == null
                                  ? void 0
                                  : e.is_ctd_leads_targeting_eligible,
                              ),
                              is_ctd_purchase_targeting_eligible: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                e == null
                                  ? void 0
                                  : e.is_ctd_purchase_targeting_eligible,
                              ),
                              date_joined: e.date_joined,
                              is_published: o(
                                "TypeCoercionUtils",
                              ).coerceNonMaybeValue(
                                e.is_published,
                                "account.is_published",
                                i.id,
                              ),
                              is_shopless_account_with_dynamic_product_tags_enabled:
                                (t = o("TypeCoercionUtils").coerceOptionalValue(
                                  e.is_shopless_ig_account,
                                )) != null
                                  ? t
                                  : !0,
                              is_shopless_account_with_static_product_tags_enabled:
                                (n = o("TypeCoercionUtils").coerceOptionalValue(
                                  e.is_shopless_ig_account,
                                )) != null
                                  ? n
                                  : !0,
                              is_shopping_onsite_checkout_enabled: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                e.is_shopping_onsite_checkout_enabled,
                              ),
                              profile_pic: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(e.profile_picture_url),
                              shopping_review_status: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                r("getJSEnumSafe")(
                                  r("IGShoppingReviewStatus"),
                                  e.shopping_review_status,
                                ),
                              ),
                              is_text_post_app_onboarded:
                                (e == null ||
                                (a = e.instagram_connected_threads_user) == null
                                  ? void 0
                                  : a.threads_user_id) != null,
                              threads_profile_pic:
                                ((l = e.instagram_connected_threads_user) ==
                                null
                                  ? void 0
                                  : l.threads_user_profile_pic) != null
                                  ? o("TypeCoercionUtils").coerceOptionalValue(
                                      (s =
                                        (u =
                                          e.instagram_connected_threads_user) ==
                                        null
                                          ? void 0
                                          : u.threads_user_profile_pic) != null
                                        ? s
                                        : e == null ||
                                            (c =
                                              e.instagram_backed_threads_user) ==
                                              null
                                          ? void 0
                                          : c.threads_user_profile_pic,
                                    )
                                  : void 0,
                              threads_user_id: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(
                                (d =
                                  (m = e.instagram_connected_threads_user) ==
                                  null
                                    ? void 0
                                    : m.threads_user_id) != null
                                  ? d
                                  : e == null ||
                                      (p = e.instagram_backed_threads_user) ==
                                        null
                                    ? void 0
                                    : p.threads_user_id,
                              ),
                              user_id: o(
                                "TypeCoercionUtils",
                              ).coerceOptionalValue(e.instagram_user_id),
                              username: o(
                                "TypeCoercionUtils",
                              ).coerceMaybeStringToFBT(e.username),
                            };
                          if (
                            (e == null ? void 0 : e.mini_shop_storefront) !=
                            null
                          ) {
                            var g,
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
                              V = o("TypeCoercionUtils").coerceOptionalValue(
                                _ == null ||
                                  (g = _.commerce_merchant_settings) == null
                                  ? void 0
                                  : g.shop_ads_capabilities,
                              ),
                              H = {
                                id: o(
                                  "TypeCoercionUtils",
                                ).coerceMaybeFBIDtoZeroOrFBID(
                                  _ == null ? void 0 : _.id,
                                ),
                                shop_status: o(
                                  "TypeCoercionUtils",
                                ).coerceOptionalValue(
                                  r("getJSEnumSafe")(
                                    r("ShopStatus"),
                                    _ == null ? void 0 : _.shop_status,
                                  ),
                                ),
                                title: o(
                                  "TypeCoercionUtils",
                                ).coerceOptionalValue(
                                  (_ == null ||
                                  (h = _.commerce_merchant_settings) == null
                                    ? void 0
                                    : h.display_name) != null
                                    ? _ == null ||
                                      (y = _.commerce_merchant_settings) == null
                                      ? void 0
                                      : y.display_name
                                    : _ == null
                                      ? void 0
                                      : _.title,
                                ),
                                commerce_merchant_settings: o(
                                  "TypeCoercionUtils",
                                ).coerceOptionalValue({
                                  id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeFBIDtoZeroOrFBID(
                                    _ == null ||
                                      (C = _.commerce_merchant_settings) == null
                                      ? void 0
                                      : C.id,
                                  ),
                                  display_name: o(
                                    "TypeCoercionUtils",
                                  ).coerceOptionalValue(
                                    _ == null ||
                                      (b = _.commerce_merchant_settings) == null
                                      ? void 0
                                      : b.display_name,
                                  ),
                                  shop_catalog: {
                                    id: o(
                                      "TypeCoercionUtils",
                                    ).coerceMaybeFBIDtoZeroOrFBID(
                                      _ == null ||
                                        (v = _.commerce_merchant_settings) ==
                                          null ||
                                        (v = v.shop_catalog) == null
                                        ? void 0
                                        : v.id,
                                    ),
                                    name: o(
                                      "TypeCoercionUtils",
                                    ).coerceOptionalValue(
                                      _ == null ||
                                        (S = _.commerce_merchant_settings) ==
                                          null ||
                                        (S = S.shop_catalog) == null
                                        ? void 0
                                        : S.name,
                                    ),
                                  },
                                  shop_ads_capabilities: V,
                                  onsite_checkout_enabled_countries:
                                    (_ == null ||
                                    (R = _.commerce_merchant_settings) == null
                                      ? void 0
                                      : R.onsite_checkout_enabled_countries) !=
                                      null &&
                                    (_ == null ||
                                    (L = _.commerce_merchant_settings) ==
                                      null ||
                                    (L = L.onsite_checkout_enabled_countries) ==
                                      null
                                      ? void 0
                                      : L.length) > 0
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceOptionalValue(
                                          _ == null ||
                                            (E =
                                              _.commerce_merchant_settings) ==
                                              null
                                            ? void 0
                                            : E.onsite_checkout_enabled_countries,
                                        )
                                      : void 0,
                                  onsite_checkout_enabled_for_shops_ads_supported_countries:
                                    o("TypeCoercionUtils").coerceOptionalValue(
                                      _ == null ||
                                        (k = _.commerce_merchant_settings) ==
                                          null
                                        ? void 0
                                        : k.onsite_checkout_enabled_for_shops_ads_supported_countries,
                                    ),
                                  offsite_iab_checkout_enabled_countries:
                                    (_ == null ||
                                    (I = _.commerce_merchant_settings) == null
                                      ? void 0
                                      : I.offsite_iab_checkout_enabled_countries) !=
                                      null &&
                                    (_ == null ||
                                    (T = _.commerce_merchant_settings) ==
                                      null ||
                                    (T =
                                      T.offsite_iab_checkout_enabled_countries) ==
                                      null
                                      ? void 0
                                      : T.length) > 0
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceOptionalValue(
                                          _ == null ||
                                            (D =
                                              _.commerce_merchant_settings) ==
                                              null
                                            ? void 0
                                            : D.offsite_iab_checkout_enabled_countries,
                                        )
                                      : void 0,
                                }),
                                page:
                                  (_ == null || (x = _.page) == null
                                    ? void 0
                                    : x.id) != null
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceOptionalValue({
                                        id: o(
                                          "TypeCoercionUtils",
                                        ).coerceMaybeFBIDtoZeroOrFBID(
                                          _ == null || ($ = _.page) == null
                                            ? void 0
                                            : $.id,
                                        ),
                                        name: o(
                                          "TypeCoercionUtils",
                                        ).coerceOptionalValue(
                                          _ == null || (P = _.page) == null
                                            ? void 0
                                            : P.name,
                                        ),
                                        picture: {
                                          data: {
                                            height: o(
                                              "TypeCoercionUtils",
                                            ).coerceOptionalValue(
                                              _ == null ||
                                                (N = _.page) == null ||
                                                (N = N.profile_picture) == null
                                                ? void 0
                                                : N.height,
                                            ),
                                            url: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              _ == null ||
                                                (M = _.page) == null ||
                                                (M = M.profile_picture) == null
                                                ? void 0
                                                : M.uri,
                                              "mini_shop_storefront?.page?.profile_picture?.uri",
                                              i.id,
                                            ),
                                            is_silhouette: o(
                                              "TypeCoercionUtils",
                                            ).coerceOptionalValue(
                                              _ == null ||
                                                (w = _.page) == null ||
                                                (w = w.profile_picture) == null
                                                ? void 0
                                                : w.is_silhouette,
                                            ),
                                            width: o(
                                              "TypeCoercionUtils",
                                            ).coerceOptionalValue(
                                              _ == null ||
                                                (A = _.page) == null ||
                                                (A = A.profile_picture) == null
                                                ? void 0
                                                : A.width,
                                            ),
                                          },
                                        },
                                      })
                                    : void 0,
                                ig_user: o(
                                  "TypeCoercionUtils",
                                ).coerceOptionalValue({
                                  id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeFBIDtoZeroOrFBID(
                                    _ == null || (F = _.ig_user) == null
                                      ? void 0
                                      : F.id,
                                  ),
                                  username: o(
                                    "TypeCoercionUtils",
                                  ).coerceOptionalValue(
                                    _ == null || (O = _.ig_user) == null
                                      ? void 0
                                      : O.username,
                                  ),
                                  legacy_instagram_user_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceOptionalValue(
                                    _ == null || (B = _.ig_user) == null
                                      ? void 0
                                      : B.legacy_instagram_user_id,
                                  ),
                                  profile_picture_url: o(
                                    "TypeCoercionUtils",
                                  ).coerceOptionalValue(
                                    _ == null || (W = _.ig_user) == null
                                      ? void 0
                                      : W.profile_picture_url,
                                  ),
                                  profile_picture: o(
                                    "TypeCoercionUtils",
                                  ).coerceOptionalValue(
                                    _ == null || (q = _.ig_user) == null
                                      ? void 0
                                      : q.profile_pic,
                                  ),
                                }),
                                workspace: {
                                  id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeFBIDtoZeroOrFBID(
                                    _ == null ||
                                      (U = _.storefront_workspace) == null
                                      ? void 0
                                      : U.id,
                                  ),
                                },
                              };
                            return babelHelpers.extends({}, f, {
                              mini_shop_storefront: H,
                            });
                          }
                          return f;
                        })) != null
                    ? e
                    : [],
                u = t == null ? void 0 : t.instagram_business_account,
                c =
                  (a =
                    t == null ||
                    (l = t.page_backed_instagram_accounts) == null ||
                    (l = l.nodes) == null
                      ? void 0
                      : l.map(function (e) {
                          var t, n, a;
                          return {
                            date_joined: e.date_joined,
                            eimu_id: (a =
                              o("TypeCoercionUtils")).coerceOptionalValue(
                              e.eimu_id,
                            ),
                            has_profile_picture: a.coerceOptionalValue(
                              e.has_profile_pic,
                            ),
                            id: a.coerceMaybeFBIDtoZeroOrFBID(
                              e.legacy_instagram_user_id,
                            ),
                            id_v2: a.coerceOptionalValue(e.id),
                            is_authorized_for_political_ads:
                              a.coerceOptionalValue(
                                e.is_authorized_for_political,
                              ),
                            is_business:
                              e.instagram_account_type === "BUSINESS",
                            is_ctd_leads_targeting_eligible:
                              a.coerceOptionalValue(
                                e == null
                                  ? void 0
                                  : e.is_ctd_leads_targeting_eligible,
                              ),
                            is_ctd_purchase_targeting_eligible: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(
                              e == null
                                ? void 0
                                : e.is_ctd_purchase_targeting_eligible,
                            ),
                            is_messaging_light_switch_enabled: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(
                              e == null
                                ? void 0
                                : e.is_messaging_light_switch_enabled,
                            ),
                            is_private: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.is_private,
                              "account.is_private",
                              i.id,
                            ),
                            is_professional: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(e.is_professional_account),
                            is_published: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.is_published,
                              "account.is_published",
                              i.id,
                            ),
                            is_shopless_account_with_dynamic_product_tags_enabled:
                              (t = o("TypeCoercionUtils").coerceOptionalValue(
                                e.is_shopless_ig_account,
                              )) != null
                                ? t
                                : !0,
                            is_shopless_account_with_static_product_tags_enabled:
                              (n = o("TypeCoercionUtils").coerceOptionalValue(
                                e.is_shopless_ig_account,
                              )) != null
                                ? n
                                : !0,
                            is_shopping_onsite_checkout_enabled: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(
                              e.is_shopping_onsite_checkout_enabled,
                            ),
                            profile_pic: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(
                              e == null ? void 0 : e.profile_picture_url,
                            ),
                            shopping_review_status: o(
                              "TypeCoercionUtils",
                            ).coerceOptionalValue(
                              r("getJSEnumSafe")(
                                r("IGShoppingReviewStatus"),
                                e.shopping_review_status,
                              ),
                            ),
                            user_id: o("TypeCoercionUtils").coerceOptionalValue(
                              e.instagram_user_id,
                            ),
                            username: o(
                              "TypeCoercionUtils",
                            ).coerceMaybeStringToFBT(e.username),
                          };
                        })) != null
                    ? a
                    : [];
              return {
                id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(
                  t == null ? void 0 : t.id,
                ),
                loadState: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(r("AdsLoadState_LEGACY"), "LOADED"),
                  "getJSEnumSafe(AdsLoadStateType, 'LOADED')",
                  i.id,
                ),
                instagram_accounts: { data: s },
                instagram_business_account: u,
                page_backed_instagram_accounts: { data: c },
                page_backed_threads_accounts:
                  t != null && t.page_backed_threads_accounts
                    ? {
                        data:
                          t == null ? void 0 : t.page_backed_threads_accounts,
                      }
                    : void 0,
              };
            }
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = p;
  },
  98,
);
