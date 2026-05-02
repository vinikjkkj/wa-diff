__d(
  "WAWebQuickPromotionClientSideDryRunRuleValidator",
  ["WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.data.qpConfigClientSideDryRun;
      return n === "true"
        ? o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CLIENT_SIDE_DRY_RUN_IS_DRY_RUN
        : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    }
    l.clientSideDryRunRuleValidator = e;
  },
  98,
);
