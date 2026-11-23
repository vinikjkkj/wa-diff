__d(
  "AdsLeadGenFormQuestionUtils",
  ["AdsLeadGenFormQuestion", "AdsLeadGenPreviewConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.get("label");
    }
    function s(e) {
      var t = e.get("questionTypeKey");
      if (e.get("conditionalAnswerSetID") != null)
        return o("AdsLeadGenPreviewConstants").CONDITIONAL_QUESTION;
      if (t === "date-time")
        return o("AdsLeadGenPreviewConstants").APPOINTMENT_SCHEDULING;
      if (t === "store-lookup" || t === "store-lookup-typeahead")
        return o("AdsLeadGenPreviewConstants").STORE_LOCATION;
      if (t === "short-answer") return o("AdsLeadGenPreviewConstants").TEXT;
      if (t === "multiple-choice")
        return o("AdsLeadGenPreviewConstants").SELECT;
      if (t === "slider") return o("AdsLeadGenPreviewConstants").SLIDER;
    }
    function u(e) {
      switch (s(e)) {
        case o("AdsLeadGenPreviewConstants").APPOINTMENT_SCHEDULING:
          return {
            inlineContextEnabled: e.get("inlineContextEnabled"),
            inlineContext: e.get("inlineContext"),
          };
        default:
          return null;
      }
    }
    function c(e) {
      switch (s(e)) {
        case o("AdsLeadGenPreviewConstants").STORE_LOCATION:
          return e.get("storeLookupTypeKey");
        default:
          return null;
      }
    }
    function d(e) {
      switch (s(e)) {
        case o("AdsLeadGenPreviewConstants").STORE_LOCATION:
          return e.get("storeLookupStoreSetID");
        default:
          return null;
      }
    }
    function m(e) {
      if (s(e) == o("AdsLeadGenPreviewConstants").CONDITIONAL_QUESTION)
        return new (r("AdsLeadGenFormQuestion"))({
          conditionalAnswerSetID: e.get("conditionalAnswerSetID"),
          conditionalQuestions: e.get("conditionalQuestions"),
          id: e.get("id"),
          label: e.get("label"),
          questionTypeKey: "conditional",
        });
    }
    function p(e) {
      var t = s(e);
      if (t !== o("AdsLeadGenPreviewConstants").SELECT) return null;
      var n = e.get("answers");
      return n instanceof r("immutable").List ? n.toArray() : null;
    }
    function _(e) {
      var t = s(e);
      if (t !== o("AdsLeadGenPreviewConstants").SLIDER) return null;
      var n = e.get("sliderLeftSide"),
        r = e.get("sliderRightSide"),
        a = e.get("sliderStepSize"),
        i = e.get("sliderStartPosition");
      return [n, r, a, i];
    }
    function f(e) {
      var t;
      return (t = e.get("clientValidationRules")) != null ? t : null;
    }
    ((l.itemNameForQuestion = e),
      (l.itemTypeForQuestion = s),
      (l.inlineContextDataForQuestion = u),
      (l.storeLookupTypeKey = c),
      (l.storeLookupStoreSetID = d),
      (l.conditionalQuestion = m),
      (l.optionsForQuestion = p),
      (l.sliderParams = _),
      (l.validationRules = f));
  },
  98,
);
