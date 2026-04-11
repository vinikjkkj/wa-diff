__d(
  "WAWebFetchQuickPromotionsCore",
  ["WAWebProtobufsQuickPromotionSurfaces.pb", "err"],
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
    ((l.mapFilterClauseType = e), (l.mapFilterResult = s));
  },
  98,
);
