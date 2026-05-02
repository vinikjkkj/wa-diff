__d(
  "WAWebQuickPromotionContentRuleValidator",
  ["WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l =
          ((n = (r = e.data.primaryAction) == null ? void 0 : r.deepLink) !=
          null
            ? n
            : ""
          ).length > 0;
      if (l) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      var s =
        ((a = (i = e.data.primaryAction) == null ? void 0 : i.universalLink) !=
        null
          ? a
          : ""
        ).length > 0;
      return s
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CONTENT_MISSING_ACTION_LINK;
    }
    l.contentRuleValidator = e;
  },
  98,
);
