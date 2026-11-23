__d(
  "MAIBAPreviewPublishSettingFormatter",
  [
    "fbt",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishRawFieldValue",
    "MAIBAPreviewPublishTargetingLabels",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = o("MAIBAPreviewPublishRawFieldValue").unwrapSingletonArray(e);
      return typeof t == "number"
        ? String(t)
        : typeof t == "string"
          ? o("MAIBAPreviewPublishRawFieldValue").unquote(t).trim()
          : null;
    }
    function u(e) {
      return String(e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""));
    }
    function c(t) {
      return (function (e) {
        return e === "ONBOARDED_AI_REPLY_ON"
          ? u(!0)
          : e === "ONBOARDED_AI_REPLY_OFF"
            ? u(!1)
            : null;
      })(e(t));
    }
    function d(t) {
      return (function (e) {
        return e === "expansion_all" ? u(!0) : e === "none" ? u(!1) : null;
      })(e(t));
    }
    function m(t) {
      return (function (e) {
        return e === "0"
          ? String(s._(/*BTDS*/ ""))
          : e === "1"
            ? String(s._(/*BTDS*/ ""))
            : e === "2"
              ? String(s._(/*BTDS*/ ""))
              : e === "3"
                ? String(s._(/*BTDS*/ ""))
                : null;
      })(e(t));
    }
    function p(t) {
      return (function (e) {
        return e === "AUTOMATIC"
          ? String(s._(/*BTDS*/ ""))
          : e === "MANUAL"
            ? String(s._(/*BTDS*/ ""))
            : e === "UNSET"
              ? String(s._(/*BTDS*/ ""))
              : null;
      })(e(t));
    }
    function _(e) {
      var t = Array.isArray(e) ? e : [e],
        n = [];
      for (var r of t) {
        var a;
        if (typeof r != "string" || !/^[A-Z]{2}$/.test(r)) return null;
        n.push(
          (a = o("MAIBAPreviewPublishTargetingLabels").getCountryName(r)) !=
            null
            ? a
            : r,
        );
      }
      return n.length === 0
        ? null
        : n.length === 1
          ? n[0]
          : o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
              n,
              function (e) {
                return String(e);
              },
            );
    }
    function f(e) {
      return e === "biz_ai_enabled_state"
        ? String(s._(/*BTDS*/ ""))
        : e === "targeting_optimization"
          ? String(s._(/*BTDS*/ ""))
          : e === "targeting_as_signal"
            ? String(s._(/*BTDS*/ ""))
            : e === "automatic_manual_state"
              ? String(s._(/*BTDS*/ ""))
              : e === "saved_audience"
                ? String(s._(/*BTDS*/ ""))
                : e === "special_ad_category_country"
                  ? String(s._(/*BTDS*/ ""))
                  : null;
    }
    ((l.businessAIRepliesLabel = c),
      (l.detailedTargetingExpansionLabel = d),
      (l.audienceSuggestionsLabel = m),
      (l.messageDestinationModeLabel = p),
      (l.specialAdCategoryCountriesLabel = _),
      (l.getSettingFieldLabel = f));
  },
  226,
);
