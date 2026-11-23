__d(
  "MAIBAUserMessageContextChipTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "AD",
      "AD_SET",
      "CAMPAIGN",
      "CATALOG",
      "CONVERSION_EVENT",
      "CUSTOM_AUDIENCE",
      "DATASET",
      "FACEBOOK_PAGE",
      "INSTAGRAM_ACCOUNT",
      "INSTANT_FORM",
      "LOOKALIKE_AUDIENCE",
      "PRODUCT_SET",
      "WEBSITE",
      "WHATSAPP_ACCOUNT",
      "WHATSAPP_PHONE_NUMBER",
    ]);
    function l(t) {
      return t.matched_text !== "" && e.has(t.entity_type);
    }
    function s(e, t) {
      var n;
      return (n =
        t == null
          ? void 0
          : t.some(function (t) {
              return l(t) && e.includes(t.matched_text);
            })) != null
        ? n
        : !1;
    }
    ((i.RENDERABLE_CONTEXT_CHIP_TYPES = e),
      (i.isRenderableContextChip = l),
      (i.hasRenderableContextChipMatch = s));
  },
  66,
);
