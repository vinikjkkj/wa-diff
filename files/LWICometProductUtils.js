__d(
  "LWICometProductUtils",
  [
    "BoostedComponentProduct",
    "CurrentLocale",
    "FBLogger",
    "getJSEnumSafe",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("getJSEnumSafe")(r("BoostedComponentProduct"), e);
      if (t == null)
        throw r("FBLogger")("pages_lwi").mustfixThrow(
          "product should be a valid BoostedComponentProduct",
        );
      return t;
    }
    function s(e) {
      return e === "BOOSTED_CONSOLIDATED_PRODUCT";
    }
    function u(e) {
      return e === "BOOSTED_POST";
    }
    function c(e) {
      return e === "BOOSTED_LEAD_GEN";
    }
    function d(e) {
      return s(e) || c(e);
    }
    function m(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_")
        ? !1
        : d(e)
          ? r("qex")._("3324") === !0
          : e === "BOOSTED_POST"
            ? r("qex")._("776") === !0
            : !1;
    }
    function p(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_") || !d(e)
        ? !1
        : r("qex")._("5525") === !0;
    }
    function _(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_") || !d(e)
        ? !1
        : r("qex")._("3579") === !0;
    }
    function f(e, t) {
      return m(e, t) && _(e, t);
    }
    ((l.productFromGraphQLEnumToJSEnumStrict = e),
      (l.isBCPProduct = s),
      (l.isBoostedPostProduct = u),
      (l.isBoostedLeadGenProduct = c),
      (l.isHeadlineAgentBCPUniverseProduct = d),
      (l.isHeadlineAgentEnabledForProduct = m),
      (l.isBCPHeadlineAgentControlBucket = p),
      (l.isBCPHeadlineAISuggestionsEnabled = _),
      (l.isCompactCarouselTreatmentEnabled = f));
  },
  98,
);
