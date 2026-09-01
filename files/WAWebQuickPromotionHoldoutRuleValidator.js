__d(
  "WAWebQuickPromotionHoldoutRuleValidator",
  [
    "WAWebCommonQPSurfacesTypes",
    "WAWebPersistedJobDefinitions",
    "WAWebQuickPromotionValidatorUtils",
    "WAWebServicedJobs",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.data,
        r = n.qpConfigExperimentKey,
        a = n.qpConfigExposureHoldout,
        i = r != null && r.length > 0;
      return (
        (i ||
          o("WAWebQuickPromotionValidatorUtils").isWhatsappGkEnabledPromotion(
            e.data,
          )) &&
          o("WAWebServicedJobs").runServicedJob(
            o(
              "WAWebPersistedJobDefinitions",
            ).jobSerializers.userExposureToQuickPromotion(
              e.id,
              r != null ? r : "",
              a,
            ),
          ),
        a === "true"
          ? o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_HOLDOUT_IN_HOLDOUT
          : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
      );
    }
    l.holdoutRuleValidator = e;
  },
  98,
);
