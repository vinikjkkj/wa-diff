__d(
  "AdIssuesInfoUtils",
  [
    "AdsAPIActiveIssuesInfoLevel",
    "AdsAPIActiveIssuesInfoType",
    "TypeCoercionUtils",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return {
        additional_info: (t = e.additional_info) != null ? t : void 0,
        error_code: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.error_code,
          "error_code",
          i.id,
        ),
        error_message: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.error_message,
          "error_message",
          i.id,
        ),
        error_summary: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.error_summary,
          "error_summary",
          i.id,
        ),
        error_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          o("enumUtils").coerceFromKey(
            e.error_type,
            r("AdsAPIActiveIssuesInfoType"),
          ),
          "error_type",
          i.id,
        ),
        level: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsAPIActiveIssuesInfoLevel"), e.level),
          "level",
          i.id,
        ),
        mid: o("TypeCoercionUtils").coerceEmptyStringToUndefined(e.mid),
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
