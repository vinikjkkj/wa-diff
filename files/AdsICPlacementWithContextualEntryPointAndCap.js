__d(
  "AdsICPlacementWithContextualEntryPointAndCap",
  [
    "AdsICFilterByMessageFormat",
    "AdsICFilterIfDoesNotMatchContextualTargeting",
    "AdsICFilterIfDoesNotPassValidateCondition",
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
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__showMessage = function (t, n) {
          var e = this.__addNewVisibleMessageIfEligible(t, n);
          return (this.__updateCapIfNewVisibleMessageAdded(e, t, n), e);
        }),
        t
      );
    })(r("AdsICPlacementWithCap"));
    l.default = e;
  },
  98,
);
