__d(
  "MAIBAContextChipTypes",
  [
    "fbt",
    "MAIBAAssetUtils",
    "MetaBrandCodeOutline24.svg.react",
    "MetaBrandFacebookFilled24.svg.react",
    "MetaBrandGlobeOutline24.svg.react",
    "MetaBrandInstagramFilled24.svg.react",
    "MetaBrandLinesRectangleOutline24.svg.react",
    "MetaBrandShoppingBagOutline24.svg.react",
    "MetaBrandTwoPeopleOutline24.svg.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {
        AD: {
          icon: (e = o("MAIBAAssetUtils")).getAssetIcon("Ad"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        AD_SET: {
          icon: e.getAssetIcon("Ad set"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        CAMPAIGN: {
          icon: e.getAssetIcon("Campaign"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        CATALOG: {
          icon: r("MetaBrandShoppingBagOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        CONVERSION_EVENT: {
          icon: r("MetaBrandCodeOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        CUSTOM_AUDIENCE: {
          icon: r("MetaBrandTwoPeopleOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        DATASET: {
          icon: r("MetaBrandCodeOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        FACEBOOK_PAGE: {
          icon: r("MetaBrandFacebookFilled24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        INSTAGRAM_ACCOUNT: {
          icon: r("MetaBrandInstagramFilled24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        INSTANT_FORM: {
          icon: r("MetaBrandLinesRectangleOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        LOOKALIKE_AUDIENCE: {
          icon: r("MetaBrandTwoPeopleOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        PRODUCT_SET: {
          icon: r("MetaBrandShoppingBagOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        WEBSITE: {
          icon: r("MetaBrandGlobeOutline24.svg.react"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        WHATSAPP_ACCOUNT: {
          icon: e.getAssetIcon("WhatsApp Business Account"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
        WHATSAPP_PHONE_NUMBER: {
          icon: e.getAssetIcon("WhatsApp Business Account"),
          label: function () {
            return s._(/*BTDS*/ "");
          },
        },
      };
    function c(e) {
      var t;
      return (t = u[e]) != null ? t : null;
    }
    l.getContextChipTypeMeta = c;
  },
  226,
);
