__d(
  "WAWebQuickPromotionFiltersRuleValidator",
  [
    "WALogger",
    "WAWebCommonQPSurfacesTypes",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "WAWebQuickPromotionFilterUnknown",
    "WAWebQuickPromotionFilters",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5,
      u = function (t, n) {
        var e = t.data.qpConfigFilterRules;
        if (e == null) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
        try {
          return c(e, t, n, 0);
        } catch (e) {
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_FILTERS_CHECK_EXCEPTION;
        }
      };
    function c(t, n, a, i) {
      if (i >= s)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "filterClauseValidator: maximum level reached",
                ])),
            )
            .sendLogs("quick-promotion-filters-too-deep"),
          r("err")("filterClauseValidator: maximum level reached")
        );
      var l = t.clauses,
        u = t.clauseType,
        m = t.filters;
      if (m.length > 0)
        for (var p = 0; p < m.length; p++) {
          var _ = m[p],
            f = _.filterName,
            g = o("WAWebQuickPromotionFilters").getFilterValidator(f),
            h = void 0;
          g != null
            ? (h = g.filter(n, _.parameters, a))
            : (h = o("WAWebQuickPromotionFilterUnknown").unknownFilter(
                _.clientNotSupportedConfig,
              )
                ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                : o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_UNKNOWN);
          var y = d(u, h);
          if (y != null) return y;
        }
      if (l.length > 0)
        for (var C = 0; C < l.length; C++) {
          var b = l[C],
            v = c(b, n, a, i + 1),
            S = d(u, v);
          if (S != null) return S;
        }
      switch (u) {
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR:
          return o("WAWebCommonQPSurfacesTypes")
            .RESULT_FALSE_FILTERS_CHECK_FAILED;
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND:
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR:
          return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      }
    }
    function d(e, t) {
      switch (e) {
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND: {
          if (t !== o("WAWebCommonQPSurfacesTypes").RESULT_TRUE) return t;
          break;
        }
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR:
          if (t === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE)
            return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
          break;
        case o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR:
          if (t === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE)
            return o("WAWebCommonQPSurfacesTypes")
              .RESULT_FALSE_FILTERS_CHECK_FAILED;
          break;
      }
      return null;
    }
    l.filtersRuleValidator = u;
  },
  98,
);
