__d(
  "WAWebFetchQuickPromotionsCore",
  [
    "WAWebCTWAConstants",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case "AND_TYPE":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND;
        case "OR_TYPE":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR;
        case "NOR_TYPE":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR;
        default:
          throw r("err")("Unexpected future filter clause type");
      }
    }
    function s(e) {
      switch (e) {
        case "PASS":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult
            .TRUE;
        case "FAIL":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult
            .FALSE;
        case "UNKNOWN":
          return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult
            .UNKNOWN;
        default:
          throw r("err")("Unexpected future filter result");
      }
    }
    function u(t, n, o, a) {
      var i = t.clause_type,
        l = t.filters;
      if (i != null) {
        var s = n != null ? r("compactMap")(n, o) : [],
          u = r("compactMap")(l, a);
        return { clauseType: e(i), clauses: s, filters: u };
      }
    }
    function c(e) {
      var t = e.filter_name,
        n = e.filter_result,
        r = e.parameters,
        a = e.passes_if_client_not_supported;
      if (t != null) {
        var i = r.reduce(function (e, t) {
          var n = t.key,
            r = t.value;
          return (n == null || r == null || e.push({ key: n, value: r }), e);
        }, []);
        return {
          filterName: t,
          parameters: i,
          clientNotSupportedConfig:
            a === !0
              ? o("WAWebProtobufsQuickPromotionSurfaces.pb")
                  .QP$FilterClientNotSupportedConfig.PASS_BY_DEFAULT
              : o("WAWebProtobufsQuickPromotionSurfaces.pb")
                  .QP$FilterClientNotSupportedConfig.FAIL_BY_DEFAULT,
          filterResult: n != null ? s(n) : void 0,
        };
      }
    }
    function d(e) {
      for (var t of o("WAWebCTWAConstants").KNOWN_QP_SURFACES.entries()) {
        var n = t[0],
          r = t[1];
        if (r === e) return n;
      }
    }
    ((l.mapFilterClauseType = e),
      (l.mapFilterResult = s),
      (l.parseFilterClause = u),
      (l.parseFilter = c),
      (l.getSurfaceIdByNuxId = d));
  },
  98,
);
