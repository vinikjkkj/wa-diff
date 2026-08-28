__d(
  "Page-instagram_business_account_spec-resolver",
  [
    "IGShoppingReviewStatus",
    "PageInstagramBusinessAccountSpecResolverFragment.graphql",
    "RelayHooks",
    "TypeCoercionUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a,
        l,
        s = o("RelayHooks").readFragment(
          e !== void 0
            ? e
            : (e = n(
                "PageInstagramBusinessAccountSpecResolverFragment.graphql",
              )),
          t,
        ),
        u =
          ((a = s.bizlink_instagram_business_account) == null
            ? void 0
            : a.eimu_id) ===
          ((l = s.instagram_business_account) == null ? void 0 : l.eimu_id)
            ? s.instagram_business_account
            : null;
      if (u != null) {
        var c = {
          id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(
            u == null ? void 0 : u.id,
          ),
          is_business_account:
            (u == null ? void 0 : u.instagram_account_type) === "BUSINESS",
          is_ctd_leads_targeting_eligible: o(
            "TypeCoercionUtils",
          ).coerceOptionalValue(
            u == null ? void 0 : u.is_ctd_leads_targeting_eligible,
          ),
          is_ctd_purchase_targeting_eligible: o(
            "TypeCoercionUtils",
          ).coerceOptionalValue(
            u == null ? void 0 : u.is_ctd_purchase_targeting_eligible,
          ),
          is_private: o("TypeCoercionUtils").coerceNonMaybeValue(
            u == null ? void 0 : u.is_private,
            "instagramAccount.is_private",
            i.id,
          ),
          is_professional: o("TypeCoercionUtils").coerceOptionalValue(
            u == null ? void 0 : u.is_professional_account,
          ),
          is_shopping_onsite_checkout_enabled: o(
            "TypeCoercionUtils",
          ).coerceOptionalValue(
            u == null ? void 0 : u.is_shopping_onsite_checkout_enabled,
          ),
          is_unpublished: !o("TypeCoercionUtils").coerceNonMaybeValue(
            u == null ? void 0 : u.is_published,
            "instagramAccount.is_published",
            i.id,
          ),
          legacy_instagram_user_id: o("TypeCoercionUtils").coerceOptionalValue(
            u == null ? void 0 : u.legacy_instagram_user_id,
          ),
          profile_picture_url: o("TypeCoercionUtils").coerceOptionalValue(
            u == null ? void 0 : u.profile_picture_url,
          ),
          shopping_review_status: o("TypeCoercionUtils").coerceOptionalValue(
            r("getJSEnumSafe")(
              r("IGShoppingReviewStatus"),
              u == null ? void 0 : u.shopping_review_status,
            ),
          ),
          username: o("TypeCoercionUtils").coerceMaybeStringToFBT(
            u == null ? void 0 : u.username,
          ),
        };
        return c;
      }
    }
    l.instagram_business_account_spec = s;
  },
  98,
);
