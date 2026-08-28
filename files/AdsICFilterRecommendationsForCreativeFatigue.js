__d(
  "AdsICFilterRecommendationsForCreativeFatigue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ads_midflight_creative_fatigue",
      l = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getInvisibleReason = function () {
            return "CreativeFatigueMessageOverride";
          }),
          (n.shouldHideMessageIfFailsRule = function () {
            return !0;
          }),
          (n.filter = function (n, r, o) {
            if (n.getID() === e) return !0;
            var t = n.getMessageContentCategory(),
              a =
                t === "RECOMMENDATION_BEST_PRACTICE" ||
                t === "RECOMMENDATION_PERSONALIZED";
            return !(o && o.hasMessage(e) && a);
          }),
          t
        );
      })();
    ((i.CREATIVE_FATIGUE_MESSAGE_ID = e),
      (i.AdsICFilterRecommendationsForCreativeFatigue = l));
  },
  66,
);
