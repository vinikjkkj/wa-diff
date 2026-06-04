__d(
  "WAWebQuickPromotionFiltersRuleValidator",
  [
    "WALogger",
    "WAWebCommonQPSurfacesTypes",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "WAWebQuickPromotionDebugLogger",
    "WAWebQuickPromotionFilterUnknown",
    "WAWebQuickPromotionFilters",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 9;
    function u(e, t) {
      var n = e.data.qpConfigFilterRules;
      if (n == null) return o("WAWebCommonQPSurfacesTypes").RESULT_TRUE;
      try {
        return c(n, e, t, 0);
      } catch (t) {
        return (
          o("WAWebQuickPromotionDebugLogger").qpLog(
            "eligibility.filter.exception",
            { promotionId: e.id },
          ),
          o("WAWebCommonQPSurfacesTypes").RESULT_FALSE_FILTERS_CHECK_EXCEPTION
        );
      }
    }
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
          if (g != null)
            ((h = g.filter(n, _.parameters, a)),
              h === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                ? o("WAWebQuickPromotionDebugLogger").qpLog(
                    "eligibility.filter.pass",
                    {
                      promotionId: n.id,
                      filterName: f,
                      parameters: _.parameters,
                    },
                  )
                : o("WAWebQuickPromotionDebugLogger").qpLog(
                    "eligibility.filter.fail",
                    {
                      promotionId: n.id,
                      filterName: f,
                      parameters: _.parameters,
                      reason: h.reason,
                    },
                  ));
          else {
            var y = o("WAWebQuickPromotionFilterUnknown").unknownFilter(
              _.clientNotSupportedConfig,
            );
            (o("WAWebQuickPromotionDebugLogger").qpLog(
              "eligibility.filter.unknown",
              { promotionId: n.id, filterName: f, defaultAllow: y },
            ),
              (h = y
                ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                : o("WAWebCommonQPSurfacesTypes")
                    .RESULT_FALSE_FILTERS_UNKNOWN));
          }
          var C = d(u, h);
          if (C != null) return C;
        }
      if (l.length > 0)
        for (var b = 0; b < l.length; b++) {
          var v = l[b],
            S = c(v, n, a, i + 1),
            R = d(u, S);
          if (R != null) return R;
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
