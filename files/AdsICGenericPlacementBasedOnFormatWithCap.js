__d(
  "AdsICGenericPlacementBasedOnFormatWithCap",
  [
    "AdsICFilterByMessageFormat",
    "AdsICFilterIfDoesNotMatchContextualTargeting",
    "AdsICFilterIfDoesNotPassValidateCondition",
    "AdsICFilterIfPreviouslyClosed",
    "AdsICFilterIfUnloaded",
    "AdsICFilterIfUnmounted",
    "AdsICFilterRecommendationsForCreativeFatigue",
    "AdsICPassIfAlreadyVisible",
    "AdsICPlacementWithCap",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, a, i) {
        i === void 0 && (i = r("immutable").Map());
        var l = [
          new (r("AdsICFilterByMessageFormat"))(n),
          new (r("AdsICFilterIfUnmounted"))(),
          new (r("AdsICFilterIfPreviouslyClosed"))(),
          new (r("AdsICFilterIfDoesNotPassValidateCondition"))(),
          new (r("AdsICFilterIfDoesNotMatchContextualTargeting"))(),
          new (r("AdsICPassIfAlreadyVisible"))(t),
          new (r("AdsICFilterIfUnloaded"))(),
          new (o(
            "AdsICFilterRecommendationsForCreativeFatigue",
          ).AdsICFilterRecommendationsForCreativeFatigue)(),
        ];
        return e.call(this, t, l, a, i) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("AdsICPlacementWithCap"));
    l.default = e;
  },
  98,
);
