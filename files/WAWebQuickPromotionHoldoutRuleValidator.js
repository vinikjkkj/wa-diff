__d(
  "WAWebQuickPromotionHoldoutRuleValidator",
  [
    "WAWebCommonQPSurfacesTypes",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e = t.data,
        r = e.qpConfigExperimentKey,
        a = e.qpConfigExposureHoldout;
      return (
        r != null &&
          r.length > 0 &&
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(
              o(
                "WAWebPersistedJobDefinitions",
              ).jobSerializers.userExposureToQuickPromotion(t.id, r, a),
            ),
        a === "true"
          ? o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_HOLDOUT_IN_HOLDOUT
          : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
      );
    };
    l.holdoutRuleValidator = e;
  },
  98,
);
