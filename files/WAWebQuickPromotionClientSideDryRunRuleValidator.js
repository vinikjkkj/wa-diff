__d(
  "WAWebQuickPromotionClientSideDryRunRuleValidator",
  ["WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e = t.data.qpConfigClientSideDryRun;
      return e === "true"
        ? o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CLIENT_SIDE_DRY_RUN_IS_DRY_RUN
        : o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
    };
    l.clientSideDryRunRuleValidator = e;
  },
  98,
);
