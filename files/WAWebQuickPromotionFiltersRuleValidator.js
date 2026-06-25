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
        return c({
          deepLevel: 0,
          eligibilityContext: t,
          filterClause: n,
          promotion: e,
        });
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
    function c(t) {
      var n = t.deepLevel,
        a = t.eligibilityContext,
        i = t.filterClause,
        l = t.promotion;
      if (n >= s)
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
      var u = i.clauses,
        m = i.clauseType,
        p = i.filters;
      if (p.length > 0)
        for (var _ = 0; _ < p.length; _++) {
          var f = p[_],
            g = f.filterName,
            h = o("WAWebQuickPromotionFilters").getFilterValidator(g),
            y = void 0;
          if (h != null)
            ((y = h.filter(l, f.parameters, a)),
              y === o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                ? o("WAWebQuickPromotionDebugLogger").qpLog(
                    "eligibility.filter.pass",
                    {
                      promotionId: l.id,
                      filterName: g,
                      parameters: f.parameters,
                    },
                  )
                : o("WAWebQuickPromotionDebugLogger").qpLog(
                    "eligibility.filter.fail",
                    {
                      promotionId: l.id,
                      filterName: g,
                      parameters: f.parameters,
                      reason: y.reason,
                    },
                  ));
          else {
            var C = o("WAWebQuickPromotionFilterUnknown").unknownFilter(
              f.clientNotSupportedConfig,
            );
            (o("WAWebQuickPromotionDebugLogger").qpLog(
              "eligibility.filter.unknown",
              { promotionId: l.id, filterName: g, defaultAllow: C },
            ),
              (y = C
                ? o("WAWebCommonQPSurfacesTypes").RESULT_TRUE
                : o("WAWebCommonQPSurfacesTypes")
                    .RESULT_FALSE_FILTERS_UNKNOWN));
          }
          var b = d(m, y);
          if (b != null) return b;
        }
      if (u.length > 0)
        for (var v = 0; v < u.length; v++) {
          var S = u[v],
            R = c({
              deepLevel: n + 1,
              eligibilityContext: a,
              filterClause: S,
              promotion: l,
            }),
            L = d(m, R);
          if (L != null) return L;
        }
      switch (m) {
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
