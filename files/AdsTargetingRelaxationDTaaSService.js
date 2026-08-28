__d(
  "AdsTargetingRelaxationDTaaSService",
  [
    "AdsTargetingRelaxationBAUService",
    "AdsTargetingRelaxationService",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, t) || this), (r.optimization_goal = n), r);
      }
      (babelHelpers.inheritsLoose(t, e),
        (t.isEligibleForRelaxation = function () {
          return (r("vulture")("Oidrfc7B2aLMUjusmt3c7W4BkJc="), !0);
        }));
      var n = t.prototype;
      return (
        (n.getMessageTypeToShow = function () {
          return "safe";
        }),
        (n.shouldShowDTaaSMessage = function () {
          return (r("vulture")("pXL2KKLl6EgZaJxIE6QvAD__lJo="), !0);
        }),
        (n.isTransitionFromNoneToDTaaS = function () {
          return r("AdsTargetingRelaxationBAUService").isNotRelaxed(
            this.objective,
          );
        }),
        (n.isTransitionFromDTEToDTaaS = function () {
          return (
            r("AdsTargetingRelaxationBAUService").isDTE(this.objective) &&
            !r("AdsTargetingRelaxationBAUService").isDTaaS(
              this.objective,
              this.optimization_goal,
            )
          );
        }),
        (n.getTargetingOptimizationFieldValue = function () {
          return (r("vulture")("twmfYVr7ABor31otadprfxveU7Q="), null);
        }),
        (n.isDTE = function () {
          return !1;
        }),
        (n.isDTaaS = function () {
          return !0;
        }),
        (n.isNotRelaxed = function () {
          return (r("vulture")("6rK0_ylZNp1OB9Zdhz1vMtUm6CE="), !1);
        }),
        (n.isDTEDefaultOptedIn = function () {
          return !1;
        }),
        (n.isDTEDefaultOptedOut = function () {
          return (r("vulture")("8n5Mmlv_VFVRR4YEqjQLAqKvgbU="), !1);
        }),
        t
      );
    })(r("AdsTargetingRelaxationService"));
    l.default = e;
  },
  98,
);
