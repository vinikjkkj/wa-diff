__d(
  "AdsBwIConfig",
  [
    "AdsAPIObjectives",
    "AdsPixelConversionStandardEvents",
    "BuyWithIntegrationPartnerConfig",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
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
      T =
        ((I = {}),
        (I[x("AMAZON")] = {
          description:
            "Create ads that let Amazon Prime members buy products that offer Buy with Prime without leaving the Facebook or Instagram app.",
          label: "Buy with Prime",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
            r("AdsPixelConversionStandardEvents").CompleteRegistration,
          ]),
          conversion_categories: ["PURCHASE", "COMPLETE_REGISTRATION"],
          custom_conversion_events: r("immutable").List(
            (e =
              (s = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                1,
              )) == null
                ? void 0
                : s.custom_conversion_events) != null
              ? e
              : [],
          ),
          catalog_capability_feature: "amazon_buy_with_prime",
        }),
        (I[x("SHEIN")] = {
          description:
            "Create ads that let SHEIN customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with SHEIN",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (u =
              (c = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                13,
              )) == null
                ? void 0
                : c.custom_conversion_events) != null
              ? u
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shein",
        }),
        (I[x("SHOPEE_MY")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (d =
              (m = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                5,
              )) == null
                ? void 0
                : m.custom_conversion_events) != null
              ? d
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("SHOPEE_PH")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (p =
              (_ = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                9,
              )) == null
                ? void 0
                : _.custom_conversion_events) != null
              ? p
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("SHOPEE_SG")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (f =
              (g = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                6,
              )) == null
                ? void 0
                : g.custom_conversion_events) != null
              ? f
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("SHOPEE_TH")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (h =
              (y = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                3,
              )) == null
                ? void 0
                : y.custom_conversion_events) != null
              ? h
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("SHOPEE_TW")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (C =
              (b = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                7,
              )) == null
                ? void 0
                : b.custom_conversion_events) != null
              ? C
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("SHOPEE_VN")] = {
          description:
            "Create ads that let Shopee customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Shopee",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (v =
              (S = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                8,
              )) == null
                ? void 0
                : S.custom_conversion_events) != null
              ? v
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_shopee",
        }),
        (I[x("MELI")] = {
          description:
            "Create ads that let Mercado Libre customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Mercado Libre",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (R =
              (L = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                11,
              )) == null
                ? void 0
                : L.custom_conversion_events) != null
              ? R
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_meli",
        }),
        (I[x("LOWES")] = {
          description:
            "Create ads that let Lowe's customers discover and purchase products without leaving the Facebook or Instagram app.",
          label: "Shop with Lowe's",
          objectives: [
            r("AdsAPIObjectives").OUTCOME_SALES,
            r("AdsAPIObjectives").LINK_CLICKS,
          ],
          conversion_events: r("immutable").List([
            r("AdsPixelConversionStandardEvents").Purchase,
          ]),
          conversion_categories: ["PURCHASE", "SUBSCRIBE"],
          custom_conversion_events: r("immutable").List(
            (E =
              (k = r("BuyWithIntegrationPartnerConfig").PARTNER_CONFIG.get(
                14,
              )) == null
                ? void 0
                : k.custom_conversion_events) != null
              ? E
              : [],
          ),
          catalog_capability_feature: "integrated_checkout_lowes",
        }),
        I);
    function D(e) {
      var t = x(e),
        n = Object.keys(T).find(function (e) {
          return e === t;
        });
      return n == null ? null : T[e];
    }
    function x(e) {
      switch (e) {
        case "AMAZON":
          return "AMAZON";
        case "SHEIN":
          return "SHEIN";
        case "SHOPEE_MY":
          return "SHOPEE_MY";
        case "SHOPEE_SG":
          return "SHOPEE_SG";
        case "SHOPEE_TH":
          return "SHOPEE_TH";
        case "SHOPEE_TW":
          return "SHOPEE_TW";
        case "SHOPEE_VN":
          return "SHOPEE_VN";
        case "MELI":
          return "MELI";
        case "LOWES":
          return "LOWES";
        default:
          return "NONE";
      }
    }
    l.getConfigValues = D;
  },
  98,
);
