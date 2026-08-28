__d(
  "AdsTargetingRelaxationDTEService",
  [
    "AdsAPIOptimizationGoals",
    "AdsTargetingRelaxationBAUService",
    "AdsTargetingRelaxationService",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(n, r) {
          var o;
          return (
            (o = e.call(this, n) || this),
            (o.isDteOnGoal = !1),
            (o.optimization_goal = r),
            r != null &&
              (o.isDteOnGoal = t.$AdsTargetingRelaxationDTEService$p_1.has(r)),
            o
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.isEligibleForRelaxation = function (n) {
            return !!(
              t.$AdsTargetingRelaxationDTEService$p_1.has(n) ||
              t.$AdsTargetingRelaxationDTEService$p_2.has(n)
            );
          }));
        var n = t.prototype;
        return (
          (n.getMessageTypeToShow = function () {
            return this.isDteOnGoal ? "safe" : "unsafe";
          }),
          (n.shouldShowDTEMessage = function () {
            return (r("vulture")("H45_nUaiWyRYkJsKDTRfWS8RJPk="), !0);
          }),
          (n.isTransitionFromNoneToDTE = function () {
            return (
              r("vulture")("OxPh2j8kLh55EIgeE8jldMfZ-c4="),
              r("AdsTargetingRelaxationBAUService").isNotRelaxed(this.objective)
            );
          }),
          (n.getTargetingOptimizationFieldValue = function () {
            return this.isDteOnGoal ? "expansion_all" : "none";
          }),
          (n.isDTE = function () {
            return !0;
          }),
          (n.isDTaaS = function () {
            return !1;
          }),
          (n.isNotRelaxed = function () {
            return (r("vulture")("RlJ0F_01D6O4x32RC5F1_aQTnas="), !1);
          }),
          (n.isDTEDefaultOptedIn = function () {
            return this.isDteOnGoal;
          }),
          (n.isDTEDefaultOptedOut = function () {
            return !this.isDteOnGoal;
          }),
          t
        );
      })(r("AdsTargetingRelaxationService"));
    ((s.$AdsTargetingRelaxationDTEService$p_1 = new Set([
      (e = r("AdsAPIOptimizationGoals")).NONE,
    ])),
      (s.$AdsTargetingRelaxationDTEService$p_2 = new Set([
        e.THRUPLAY,
        e.AD_RECALL_LIFT,
        e.REACH,
        e.TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
        e.SIX_SECOND_VIDEO_VIEWS,
        e.PAGE_LIKES,
        e.VISIT_INSTAGRAM_PROFILE,
        e.VIDEO_VIEWS,
        e.POST_ENGAGEMENT,
        e.EVENT_RESPONSES,
        e.IMPRESSIONS,
        e.ENGAGED_USERS,
        e.ENGAGED_REACH,
        e.BRAND_AWARENESS,
      ])),
      (l.default = s));
  },
  98,
);
