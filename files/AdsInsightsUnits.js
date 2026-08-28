__d(
  "AdsInsightsUnits",
  [
    "fbt",
    "invariant",
    "AdsInsightsUnit",
    "AdsInsightsUnitLabelsStatic",
    "AdsInsightsUnitPerLabelsStatic",
    "AdsInsightsUnitValueLabelsStatic",
    "AdsLandingPageViewsUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t) {
      if (e === "action_values:onsite_conversion.purchase")
        return s._(/*BTDS*/ "Meta Purchase Conversion Value");
      if (
        o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding() &&
        (e === "landing_page_view" || e === "omni_landing_page_view")
      )
        return s._(/*BTDS*/ "Visits");
      var n = r("AdsInsightsUnitLabelsStatic")[e];
      if (n) return t === !0 ? n.plural : n.singular;
    }
    function c(t, n) {
      var r = e(t, n);
      return (r != null || u(0, 1275, t, n), r);
    }
    function d(e) {
      return c(r("AdsInsightsUnit").RESULT, e);
    }
    function m(t, n) {
      return e(t, n) || d(n);
    }
    function p(e) {
      if (e === "action_values:onsite_conversion.purchase")
        return s._(/*BTDS*/ "Per Meta Purchase Conversion Value");
      if (
        o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding() &&
        (e === "landing_page_view" || e === "omni_landing_page_view")
      )
        return s._(/*BTDS*/ "Per Visit");
      var t = r("AdsInsightsUnitPerLabelsStatic")[e];
      return t;
    }
    function _(e) {
      var t,
        n =
          (t =
            r("AdsInsightsUnitValueLabelsStatic") == null
              ? void 0
              : r("AdsInsightsUnitValueLabelsStatic")[e]) != null
            ? t
            : null;
      return e === r("AdsInsightsUnit").OMNI_PURCHASE_MARGIN &&
        r("gkx")("18427")
        ? s._(/*BTDS*/ "Profit, Purchases")
        : n;
    }
    function f(e) {
      var t = _(e);
      return (t != null || u(0, 90110, e), t);
    }
    function g() {
      return f(r("AdsInsightsUnit").RESULT);
    }
    function h(e) {
      var t = p(e);
      return (t != null || u(0, 1276, e), t);
    }
    function y() {
      return h(r("AdsInsightsUnit").RESULT);
    }
    ((l.getLabelOrNull = e),
      (l.getLabel = c),
      (l.getLabelOrDefault = m),
      (l.getPerLabelOrNull = p),
      (l.getValueLabelOrNull = _),
      (l.getValueLabel = f),
      (l.getDefaultValueLabel = g),
      (l.getPerLabel = h),
      (l.getDefaultPerLabel = y));
  },
  226,
);
