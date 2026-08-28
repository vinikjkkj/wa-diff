__d(
  "AdsInsightsFieldDescriptor",
  [
    "AdsInsightsActionFieldTypes",
    "AdsInsightsAttributionWindow",
    "AdsInsightsColumn",
    "AdsMgmtCustomMetricsStringOperations",
    "AdsReportStoreVisitsFields",
    "FBLogger",
    "err",
    "getObjectValues",
    "memoizeStringOnly",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new RegExp(
        "^([\\w\\.]+?)(?:_(" +
          r("getObjectValues")(r("AdsInsightsAttributionWindow")).join("|") +
          "))?$",
      ),
      s = new Set(Object.values(r("AdsReportStoreVisitsFields")));
    function u(t) {
      if (t == null)
        return (
          r("FBLogger")("insights_field").warn(
            "null received as insights field.",
          ),
          {}
        );
      if (t.length === 0)
        return (
          r("FBLogger")("insights_field").warn(
            "Empty string received as insights field.",
          ),
          {}
        );
      var n = c(t);
      switch (n.length) {
        case 1:
          var a = r("nullthrows")(
              t.match(e),
              "Failed to match field string pattern for action field " + t,
            ),
            i = a[0],
            l = a[1],
            u = a[2];
          return u && o("AdsInsightsActionFieldTypes").isResultsType(l)
            ? {
                actionType: l,
                actionFieldType: l,
                attributionWindow: u,
                resultsType: l,
              }
            : o("AdsInsightsActionFieldTypes").isResultsType(t)
              ? { resultsType: t, simpleField: t }
              : { simpleField: t };
        case 2:
          if (n[0] === r("AdsInsightsColumn").RELEVANCE_SCORE)
            return { relevanceScoreSubfield: n[1] };
          if (n[0] === r("AdsInsightsColumn").STORE_VISITS) {
            var m = n[1];
            return s.has(m) ? { storeVisitsSubfield: m } : { simpleField: t };
          } else {
            if (o("AdsMgmtCustomMetricsStringOperations").isCMColumnID(t))
              return {
                actionFieldType: "custom_derived_metrics",
                attributionWindow: o(
                  "AdsMgmtCustomMetricsStringOperations",
                ).getAttbWdwFromColumnID(t),
                customMetricID: n[1],
              };
            if (n[0] === "conversion_annotations") {
              var p = n[1],
                _ = p.lastIndexOf(":"),
                f;
              return (
                _ > -1 && ((p = n[1].slice(0, _)), (f = n[1].slice(_ + 1))),
                {
                  actionFieldType: "conversion_annotations",
                  annotatedField: p,
                  attributionWindow: r("getObjectValues")(
                    r("AdsInsightsAttributionWindow"),
                  ).find(function (e) {
                    return e === f;
                  }),
                }
              );
            } else {
              var g = d(n);
              if (g != null) return g;
              var h = n[0].match(e),
                y = h[0],
                C = h[1],
                b = h[2],
                v = n[1],
                S = [
                  "app_custom_event.custom",
                  "offline_conversion.custom",
                  "offsite_conversion.custom",
                ].some(function (e) {
                  return v.startsWith(e);
                }),
                R = v.split("."),
                L = S ? R[2] : void 0;
              return {
                actionFieldType: C,
                actionType: v,
                attributionWindow: b,
                conversionID: L,
              };
            }
          }
        default:
          throw r("err")("Invalid field ID: " + t);
      }
    }
    function c(e) {
      var t = e.split(":");
      if (e === "" || t.length === 0) return [];
      var n = t[0],
        r = t.slice(1).join(":");
      return r !== "" ? [n, r] : [n];
    }
    function d(t) {
      var n = r("nullthrows")(t[0].match(e)),
        o = n[0],
        a = n[1],
        i = n[2];
      if (
        (a === "conversions" ||
          a === "cost_per_conversion" ||
          a === "conversion_values") &&
        t[1] != null
      ) {
        var l = t[1].split(".");
        if (l[0] === "app_custom_event" && l[1] != null && l[1].length > 0)
          return {
            actionFieldType: a,
            actionType: t[1],
            attributionWindow: i,
            customEventName: l.slice(1).join("."),
          };
        var s = l.slice(0, 2).join(".");
        if (
          [
            "offsite_conversion.fb_pixel_custom",
            "onsite_conversion.lead_custom_event",
            "offsite_conversion.fb_pixel_custom_pltv",
          ].includes(s)
        )
          return {
            actionFieldType: a,
            actionType: t[1],
            attributionWindow: i,
            customEventName: l.slice(2).join("."),
          };
      }
      return null;
    }
    var m = r("memoizeStringOnly")(u),
      p = d;
    ((l.get = m), (l.tryGetCustomEvent = p));
  },
  98,
);
