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
      var t = e.hasEligibleTransport,
        n = e.hasSourcePostVideo,
        o = e.isCarouselPost,
        a = e.isEligibleForTextVariations,
        i = e.isImageGenerationEnabled,
        l = e.isSinglePost,
        s = e.shouldShowHeadline;
      return (
        t &&
        !n &&
        !o &&
        a &&
        !i &&
        l &&
        s &&
        r("CurrentLocale").get().startsWith("en_")
      );
    }
    function m(e, t) {
      return !t || !d(e) ? !1 : r("qex")._("3932") === !0;
    }
    function p(e) {
      return s(e) || c(e);
    }
    function _(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_")
        ? !1
        : p(e)
          ? r("qex")._("3324") === !0
          : e === "BOOSTED_POST"
            ? r("qex")._("3878") === !0
            : !1;
    }
    function f(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_") || !p(e)
        ? !1
        : r("qex")._("5525") === !0;
    }
    function g(e, t) {
      return !t || !r("CurrentLocale").get().startsWith("en_") || !p(e)
        ? !1
        : r("qex")._("3579") === !0;
    }
    function h(e, t) {
      return _(e, t) && g(e, t);
    }
    ((l.productFromGraphQLEnumToJSEnumStrict = e),
      (l.isBCPProduct = s),
      (l.isBoostedPostProduct = u),
      (l.isBoostedLeadGenProduct = c),
      (l.isBPHeadlineSectionEligible = d),
      (l.isBPHeadlineSectionEnabled = m),
      (l.isHeadlineAgentBCPUniverseProduct = p),
      (l.isHeadlineAgentEnabledForProduct = _),
      (l.isBCPHeadlineAgentControlBucket = f),
      (l.isBCPHeadlineAISuggestionsEnabled = g),
      (l.isCompactCarouselTreatmentEnabled = h));
  },
  98,
);
