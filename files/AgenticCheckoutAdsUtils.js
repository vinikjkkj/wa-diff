__d(
  "AgenticCheckoutAdsUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "NativeCommerceExperienceLoggingUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "OPT_IN";
    }
    var s = 500;
    function u(e, t, n) {
      var r = [e, t, n].filter(Boolean).length;
      return r !== 1
        ? o("NativeCommerceExperienceLoggingUtils").NativeCommerceExperienceType
            .COMMON
        : e
          ? o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceType.SHOPS_ADS
          : t
            ? o("NativeCommerceExperienceLoggingUtils")
                .NativeCommerceExperienceType.PRODUCT_BROWSING
            : o("NativeCommerceExperienceLoggingUtils")
                .NativeCommerceExperienceType.NON_CTA_PRODUCT_BROWSING;
    }
    function c(e) {
      return e === "destination_section" || e === "existing_post";
    }
    function d(e) {
      return e
        ? "agentic_checkout_destination_card_existing_post"
        : "agentic_checkout_destination_card";
    }
    function m(e, t, n, r) {
      return t
        ? n
          ? r
            ? null
            : "catalog_not_eligible_for_agentic_checkout"
          : "unable_to_resolve_catalog"
        : e
          ? "product_browsing_gk_disabled"
          : "no_nce_experience";
    }
    function p(t) {
      var n =
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.destination_type.get(t) ===
        "WEBSITE_AND_SHOP";
      if (n) return !0;
      var o =
        e(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.product_browsing.enroll_status.get(
            t,
          ),
        ) ||
        e(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_browsing.enroll_status.get(
            t,
          ),
        );
      return o && r("gkx")("14943");
    }
    function _(t) {
      var n,
        o,
        a,
        i = t.adgroup,
        l =
          ((n = i.creative) == null || (n = n.destination_spec) == null
            ? void 0
            : n.destination_type) === "WEBSITE_AND_SHOP",
        s =
          e(
            (o = i.creative) == null ||
              (o = o.destination_spec) == null ||
              (o = o.native_commerce_experience) == null ||
              (o = o.product_browsing) == null
              ? void 0
              : o.enroll_status,
          ) ||
          e(
            (a = i.creative) == null ||
              (a = a.degrees_of_freedom_spec) == null ||
              (a = a.creative_features_spec) == null ||
              (a = a.product_browsing) == null
              ? void 0
              : a.enroll_status,
          ),
        u = l || (s && r("gkx")("14943"));
      return u ? r("gkx")("251") : !1;
    }
    function f(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.native_commerce_experience.agentic_checkout.get(
        e,
      ) == null || p(e)
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.delete(
            e,
          );
    }
    function g(e, t) {
      var n = t ? "OPT_IN" : "OPT_OUT";
      return o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.enroll_status.set(
            n,
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.destination_spec.native_commerce_experience.agentic_checkout.action_metadata.type.set(
            "MANUAL",
            e,
          );
        },
      )(e);
    }
    ((l.isOptedIn = e),
      (l.AGENTIC_CHECKOUT_LOGGING_SETTLE_DELAY_MS = s),
      (l.getEnabledExperienceType = u),
      (l.isSAOffSectionAboveDirectCheckout = c),
      (l.getAgenticCheckoutDestinationCardCheckingSource = d),
      (l.getIneligibleReason = m),
      (l.isEligibleToSeeAgenticCheckoutToggle = _),
      (l.clearAgenticCheckoutIfIneligible = f),
      (l.applyManualAgenticCheckoutUpdate = g));
  },
  98,
);
