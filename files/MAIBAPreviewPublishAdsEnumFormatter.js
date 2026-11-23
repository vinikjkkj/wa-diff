__d(
  "MAIBAPreviewPublishAdsEnumFormatter",
  [
    "AdsAPIBidStrategies",
    "AdsBidStrategyV3Strings",
    "AdsEffectiveStatus",
    "AdsValueRulesGuidanceMFRFormatEffectiveStatus",
    "MAIBAPreviewPublishEnumAtomFormatter",
    "MAIBAPreviewPublishRawFieldValue",
    "adsMAIBACallToActionForFamily",
    "adsMAIBADestinationTypeToLabel",
    "formatMAIBABuyingTypeLabel",
    "formatMAIBAObjectiveLabel",
    "formatMAIBAStandardEventLabel",
    "getEnumFromString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (typeof e != "string") return null;
      var t = r("getEnumFromString")(r("AdsEffectiveStatus"), e),
        n = o(
          "AdsValueRulesGuidanceMFRFormatEffectiveStatus",
        ).formatEffectiveStatus(t);
      return n == null ? null : String(n);
    }
    function s(e) {
      if (typeof e != "string" || e === "") return null;
      var t = r("getEnumFromString")(r("AdsAPIBidStrategies"), e);
      if (t == null) return null;
      var n = String(
        o("AdsBidStrategyV3Strings").getBidStrategyLabelForBidRenamingGK(t),
      );
      return n !== "" ? n : null;
    }
    function u(e) {
      if (typeof e != "string" || e === "") return null;
      var t = String(
        o("adsMAIBACallToActionForFamily").getCallToActionLabel(e),
      );
      return t !== "" ? t : null;
    }
    function c(e) {
      var t;
      return typeof e != "string" || e === ""
        ? null
        : (t = r("adsMAIBADestinationTypeToLabel")(
              o("MAIBAPreviewPublishRawFieldValue").unquote(e),
            )) != null
          ? t
          : null;
    }
    function d(e) {
      if (typeof e != "string" || e === "") return null;
      var t = o("MAIBAPreviewPublishRawFieldValue").unquote(e).toUpperCase(),
        n = r("formatMAIBAStandardEventLabel")(t);
      return n == null || n === t
        ? o("MAIBAPreviewPublishEnumAtomFormatter").formatEnumValue(e)
        : n;
    }
    function m(e) {
      return r("formatMAIBABuyingTypeLabel")(typeof e == "string" ? e : null);
    }
    function p(e) {
      return r("formatMAIBAObjectiveLabel")(typeof e == "string" ? e : null);
    }
    ((l.statusLabel = e),
      (l.bidStrategyLabel = s),
      (l.callToActionLabel = u),
      (l.destinationTypeLabel = c),
      (l.standardEventLabel = d),
      (l.buyingTypeLabel = m),
      (l.objectiveLabel = p));
  },
  98,
);
