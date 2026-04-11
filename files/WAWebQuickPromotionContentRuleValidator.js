__d(
  "WAWebQuickPromotionContentRuleValidator",
  ["WAWebCommonQPSurfacesTypes"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      var e,
        r,
        a,
        i,
        l =
          ((e = (r = t.data.primaryAction) == null ? void 0 : r.deepLink) !=
          null
            ? e
            : ""
          ).length > 0;
      if (l) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      var s =
        ((a = (i = t.data.primaryAction) == null ? void 0 : i.universalLink) !=
        null
          ? a
          : ""
        ).length > 0;
      return s
        ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
        : o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_CONTENT_MISSING_ACTION_LINK;
    };
    l.contentRuleValidator = e;
  },
  98,
);
