__d(
  "AdsTargetingRelaxationBAUService",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsTargetingRelaxationBAUDTEBehaviourDefaultOptedIn",
    "AdsTargetingRelaxationBAUDTEBehaviourDefaultOptedOut",
    "AdsTargetingRelaxationBAUDTaaSBehaviour",
    "AdsTargetingRelaxationBAUNotRelaxedBehaviour",
    "AdsTargetingRelaxationService",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (e) {
        function t(n, o, a) {
          var i;
          return (
            (i = e.call(this, n) || this),
            a != null
              ? ((i.$AdsTargetingRelaxationBAUService$p_4 = a),
                babelHelpers.assertThisInitialized(i))
              : (t.isDTaaS(i.objective, o)
                  ? ((i.$AdsTargetingRelaxationBAUService$p_5 = o),
                    (i.$AdsTargetingRelaxationBAUService$p_4 = new (r(
                      "AdsTargetingRelaxationBAUDTaaSBehaviour",
                    ))()))
                  : t.$AdsTargetingRelaxationBAUService$p_1.has(i.objective)
                    ? (i.$AdsTargetingRelaxationBAUService$p_4 = new (r(
                        "AdsTargetingRelaxationBAUDTEBehaviourDefaultOptedIn",
                      ))())
                    : t.$AdsTargetingRelaxationBAUService$p_2.has(i.objective)
                      ? (i.$AdsTargetingRelaxationBAUService$p_4 = new (r(
                          "AdsTargetingRelaxationBAUDTEBehaviourDefaultOptedOut",
                        ))())
                      : (i.$AdsTargetingRelaxationBAUService$p_4 = new (r(
                          "AdsTargetingRelaxationBAUNotRelaxedBehaviour",
                        ))()),
                i)
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.isDTaaS = function (n, r) {
            var e;
            if (r == null) return !1;
            var o =
              (e = t.$AdsTargetingRelaxationBAUService$p_3.get(n)) == null
                ? void 0
                : e.has(r);
            return (
              t.$AdsTargetingRelaxationBAUService$p_3.has(n) &&
              o != null &&
              o === !0
            );
          }),
          (t.isDTE = function (n) {
            return (
              t.$AdsTargetingRelaxationBAUService$p_1.has(n) ||
              t.$AdsTargetingRelaxationBAUService$p_2.has(n)
            );
          }),
          (t.isNotRelaxed = function (n, r) {
            return !t.isDTaaS(n, r) && !t.isDTE(n);
          }));
        var n = t.prototype;
        return (
          (n.getMessageTypeToShow = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.getMessageTypeToShow();
          }),
          (n.getTargetingOptimizationFieldValue = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.getTargetingRelaxationConstant();
          }),
          (n.isDTE = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.isDTE();
          }),
          (n.isDTaaS = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.isDTaaS();
          }),
          (n.isDTEDefaultOptedIn = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.isDTEDefaultOptedIn();
          }),
          (n.isDTEDefaultOptedOut = function () {
            return this.$AdsTargetingRelaxationBAUService$p_4.isDTEDefaultOptedOut();
          }),
          t
        );
      })(r("AdsTargetingRelaxationService"));
    ((u.$AdsTargetingRelaxationBAUService$p_1 = new Set([
      (e = r("AdsAPIObjectives")).CONVERSIONS,
      e.MOBILE_APP_INSTALLS,
      e.APP_INSTALLS,
      e.OUTCOME_LEADS,
      e.OUTCOME_SALES,
    ])),
      (u.$AdsTargetingRelaxationBAUService$p_2 = new Set([
        e.LEAD_GENERATION,
        e.LINK_CLICKS,
        e.POST_ENGAGEMENT,
        e.EVENT_RESPONSES,
        e.LOCAL_AWARENESS,
        e.PAGE_LIKES,
        e.PRODUCT_CATALOG_SALES,
        e.STORE_VISITS,
        e.OUTCOME_ENGAGEMENT,
        e.VIDEO_VIEWS,
        e.MESSAGES,
      ])),
      (u.$AdsTargetingRelaxationBAUService$p_3 = new Map([
        [
          e.CONVERSIONS,
          new Set([
            (s = r("AdsAPIOptimizationGoals")).VALUE,
            s.OFFSITE_CONVERSIONS,
            s.CONVERSATIONS,
          ]),
        ],
        [
          e.APP_INSTALLS,
          new Set([s.VALUE, s.OFFSITE_CONVERSIONS, s.APP_INSTALLS]),
        ],
        [e.MESSAGES, new Set([s.CONVERSATIONS])],
      ])),
      (l.default = u));
  },
  98,
);
