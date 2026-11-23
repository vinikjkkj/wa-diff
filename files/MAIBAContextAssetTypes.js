__d(
  "MAIBAContextAssetTypes",
  [
    "AdsQuickCreateMAIBAContextChipsStrings",
    "meta-brand-code-outline-16",
    "meta-brand-facebook-filled-16",
    "meta-brand-folder-outline-16",
    "meta-brand-globe-outline-16",
    "meta-brand-instagram-filled-16",
    "meta-brand-lines-rectangle-outline-16",
    "meta-brand-shopping-bag-outline-16",
    "meta-brand-two-people-outline-16",
    "meta-brand-whatsapp-filled-16",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "business",
        "datasets",
        "audiences",
        "catalogs",
        "forms",
        "campaigns",
      ],
      u = ["business", "datasets", "audiences", "catalogs_and_forms"];
    function c(e) {
      return e === "business"
        ? "business"
        : e === "datasets"
          ? "datasets"
          : e === "audiences"
            ? "audiences"
            : e === "catalogs" || e === "forms"
              ? "catalogs_and_forms"
              : e === "campaigns"
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    var d = 10,
      m = 6e3,
      p = 1e4,
      _ = 300 * 1e3,
      f = 5,
      g = 6e3,
      h = 1e4,
      y = 6e3,
      C = 1e4,
      b = 20,
      v = 3,
      S = {
        DATASET: {
          label: (e = o("AdsQuickCreateMAIBAContextChipsStrings"))
            .getContextAssetTypeLabelDataset,
          icon: o("meta-brand-code-outline-16").metaBrandCodeOutline16,
          tab: "datasets",
        },
        CONVERSION_EVENT: {
          label: e.getContextAssetTypeLabelConversionEvent,
          icon: o("meta-brand-code-outline-16").metaBrandCodeOutline16,
          tab: "datasets",
        },
        CUSTOM_AUDIENCE: {
          label: e.getContextAssetTypeLabelCustomAudience,
          icon: o("meta-brand-two-people-outline-16")
            .metaBrandTwoPeopleFriendsOutline16,
          tab: "audiences",
        },
        LOOKALIKE_AUDIENCE: {
          label: e.getContextAssetTypeLabelLookalikeAudience,
          icon: o("meta-brand-two-people-outline-16")
            .metaBrandTwoPeopleFriendsOutline16,
          tab: "audiences",
        },
        CATALOG: {
          label: e.getContextAssetTypeLabelCatalog,
          icon: o("meta-brand-shopping-bag-outline-16")
            .metaBrandShoppingBagOutline16,
          tab: "catalogs",
        },
        PRODUCT_SET: {
          label: e.getContextAssetTypeLabelProductSet,
          icon: o("meta-brand-shopping-bag-outline-16")
            .metaBrandShoppingBagOutline16,
          tab: "catalogs",
        },
        INSTANT_FORM: {
          label: e.getContextAssetTypeLabelInstantForm,
          icon: o("meta-brand-lines-rectangle-outline-16")
            .metaBrandLinesRectangleDocumentOutline16,
          tab: "forms",
        },
        CAMPAIGN: {
          label: e.getContextAssetTypeLabelCampaign,
          icon: o("meta-brand-folder-outline-16")
            .metaBrandFolderCampaignTableOutline16,
          tab: "campaigns",
        },
        FACEBOOK_PAGE: {
          label: e.getContextAssetTypeLabelFacebookPage,
          icon: o("meta-brand-facebook-filled-16").metaBrandFacebookFilled16,
          tab: "business",
        },
        INSTAGRAM_ACCOUNT: {
          label: e.getContextAssetTypeLabelInstagramAccount,
          icon: o("meta-brand-instagram-filled-16").metaBrandInstagramFilled16,
          tab: "business",
        },
        WHATSAPP_ACCOUNT: {
          label: e.getContextAssetTypeLabelWhatsappAccount,
          icon: o("meta-brand-whatsapp-filled-16").metaBrandWhatsappFilled16,
          tab: "business",
        },
        WHATSAPP_PHONE_NUMBER: {
          label: e.getContextAssetTypeLabelWhatsappPhoneNumber,
          icon: o("meta-brand-whatsapp-filled-16").metaBrandWhatsappFilled16,
          tab: "business",
        },
        WEBSITE: {
          label: e.getContextAssetTypeLabelWebsite,
          icon: o("meta-brand-globe-outline-16")
            .metaBrandGlobeInternetOutline16,
          tab: "business",
        },
      },
      R = {
        DATASET: !0,
        CONVERSION_EVENT: !0,
        CUSTOM_AUDIENCE: !0,
        LOOKALIKE_AUDIENCE: !0,
        CATALOG: !0,
        PRODUCT_SET: !0,
        INSTANT_FORM: !0,
        CAMPAIGN: !0,
        FACEBOOK_PAGE: !0,
        INSTAGRAM_ACCOUNT: !0,
        WHATSAPP_ACCOUNT: !0,
        WHATSAPP_PHONE_NUMBER: !0,
        WEBSITE: !0,
      },
      L = R,
      E = {
        DATASET: [
          "dataset",
          "datasets",
          "pixel",
          "pixels",
          "data set",
          "data source",
        ],
        CONVERSION_EVENT: [
          "conversion event",
          "conversion events",
          "conversion",
          "conversions",
          "event",
          "events",
        ],
        CUSTOM_AUDIENCE: [
          "audience",
          "audiences",
          "custom audience",
          "custom audiences",
          "custom",
          "retargeting",
          "remarketing",
        ],
        LOOKALIKE_AUDIENCE: [
          "audience",
          "audiences",
          "lookalike",
          "lookalikes",
          "lookalike audience",
          "lookalike audiences",
          "lal",
        ],
        CATALOG: ["catalog", "catalogs", "catalogue", "catalogues", "products"],
        PRODUCT_SET: [
          "product set",
          "product sets",
          "products",
          "product",
          "catalog",
          "catalogs",
        ],
        INSTANT_FORM: [
          "form",
          "forms",
          "lead form",
          "lead forms",
          "instant form",
          "instant forms",
          "lead gen",
          "leadgen",
        ],
        CAMPAIGN: ["campaign", "campaigns"],
        FACEBOOK_PAGE: [
          "page",
          "pages",
          "facebook",
          "facebook page",
          "fb",
          "fb page",
        ],
        INSTAGRAM_ACCOUNT: [
          "instagram",
          "instagram profile",
          "instagram profiles",
          "instagram account",
          "instagram accounts",
          "ig",
          "ig profile",
          "insta",
        ],
        WHATSAPP_ACCOUNT: [
          "whatsapp",
          "whatsapp account",
          "whatsapp accounts",
          "whats app",
          "wa",
        ],
        WHATSAPP_PHONE_NUMBER: [
          "whatsapp",
          "whatsapp number",
          "whatsapp numbers",
          "whatsapp phone number",
          "whatsapp phone numbers",
          "whats app",
          "wa",
          "phone",
          "phone number",
          "phone numbers",
          "number",
          "numbers",
        ],
        WEBSITE: [
          "website",
          "websites",
          "site",
          "url",
          "domain",
          "link",
          "web",
        ],
      };
    function k(e) {
      var t = e.detail,
        n = S[e.type].label();
      return t == null
        ? n
        : o(
            "AdsQuickCreateMAIBAContextChipsStrings",
          ).getContextAssetSecondaryLine(String(n), t);
    }
    function I(e) {
      var t = S[e.type].label();
      return o(
        "AdsQuickCreateMAIBAContextChipsStrings",
      ).getContextAssetAccessibleName(String(t), e.name);
    }
    function T(e, t) {
      return e === "WEBSITE" ? null : t;
    }
    function D(e) {
      var t = S;
      return Object.hasOwn(t, e) ? t[e].icon : null;
    }
    ((l.MAIBA_CONTEXT_TAB_ORDER = s),
      (l.MAIBA_CONTEXT_PICKER_TAB_ORDER = u),
      (l.getMAIBAContextPickerTabForRow = c),
      (l.MAIBA_CONTEXT_FIRST_PAGE_SIZE = d),
      (l.MAIBA_CONTEXT_FORMS_TIMEOUT_MS = m),
      (l.MAIBA_CONTEXT_FORMS_RETRY_MS = p),
      (l.MAIBA_CONTEXT_FORMS_STALE_MS = _),
      (l.MAIBA_CONTEXT_FORM_PAGES_MAX = f),
      (l.MAIBA_CONTEXT_WHATSAPP_NUMBERS_TIMEOUT_MS = g),
      (l.MAIBA_CONTEXT_WHATSAPP_NUMBERS_RETRY_MS = h),
      (l.MAIBA_CONTEXT_WEBSITES_TIMEOUT_MS = y),
      (l.MAIBA_CONTEXT_WEBSITES_RETRY_MS = C),
      (l.MAIBA_CONTEXT_WEBSITES_MAX = b),
      (l.MAIBA_CONTEXT_WEBSITES_FIRST_PAGE_MAX = v),
      (l.MAIBA_CONTEXT_ASSET_TYPE_META = S),
      (l.MAIBA_CONTEXT_CHIP_SENDABLE = L),
      (l.MAIBA_CONTEXT_TYPE_SYNONYMS = E),
      (l.getMAIBAContextAssetSecondaryLine = k),
      (l.getMAIBAContextAssetAccessibleName = I),
      (l.getMAIBAContextChipReferenceID = T),
      (l.getMAIBAContextAssetTypeIcon = D));
  },
  98,
);
