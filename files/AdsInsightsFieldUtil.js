__d(
  "AdsInsightsFieldUtil",
  ["fbt", "invariant", "AdsDDAStrings", "AdsInsightsAttributionWindows"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      return e.length === 0
        ? o("AdsInsightsAttributionWindows").getDefaultWindows()
        : e;
    }
    function c(e, t, n) {
      var r;
      switch (t) {
        case "actions":
          r = e.isArchived
            ? s._(/*BTDS*/ "{customConversionName} (Deleted)", [
                s._param("customConversionName", e.customConversionName),
              ])
            : e.customConversionName;
          break;
        case "action_values":
          r = e.isArchived
            ? s._(
                /*BTDS*/ "{customConversionName} Conversion Value (Deleted)",
                [s._param("customConversionName", e.customConversionName)],
              )
            : s._(/*BTDS*/ "{customConversionName} Conversion Value", [
                s._param("customConversionName", e.customConversionName),
              ]);
          break;
        case "cost_per_action_type":
          r = e.isArchived
            ? s._(/*BTDS*/ "Cost per {customConversionName} (Deleted)", [
                s._param("customConversionName", e.customConversionName),
              ])
            : s._(/*BTDS*/ "Cost per {customConversionName}", [
                s._param("customConversionName", e.customConversionName),
              ]);
          break;
        default:
          u(0, 82, t);
      }
      return (
        (n === "dda" && o("AdsDDAStrings").getIncrementalColumnLabel(r)) || r
      );
    }
    function d(e, t, n, r) {
      if (r != null && r.startsWith("offsite_conversion.fb_pixel_custom_pltv"))
        return s._(/*BTDS*/ "{customEventName} pLTV", [
          s._param("customEventName", e),
        ]);
      var a;
      switch (t) {
        case "conversions":
          a = s._(/*BTDS*/ "{customEventName}", [
            s._param("customEventName", e),
          ]);
          break;
        case "cost_per_conversion":
          a = s._(/*BTDS*/ "Cost per {customEventName}", [
            s._param("customEventName", e),
          ]);
          break;
        case "conversion_values":
          a = s._(/*BTDS*/ "{customEventName} Conversion Value", [
            s._param("customEventName", e),
          ]);
          break;
        default:
          u(0, 82, t);
      }
      return (
        (n === "dda" && o("AdsDDAStrings").getIncrementalColumnLabel(a)) || a
      );
    }
    ((l.attributionWindowsToAPIParam = e),
      (l.getCustomConversionFieldLabel = c),
      (l.getCustomEventFieldLabel = d));
  },
  226,
);
