__d(
  "WAWebQuickPromotionSurfaceRuleValidator",
  ["WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.surfaceId === t.surfaceId
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_SURFACE_INCORRECT_SURFACE;
    }
    l.surfaceRuleValidator = e;
  },
  98,
);
