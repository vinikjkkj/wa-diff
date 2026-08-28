__d(
  "AdsIssuesInfoUtil",
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
        additional_info: (t =
          o("TypeCoercionUtils")).coerceEmptyStringToUndefined(
          e.additional_info,
        ),
        error_code: t.coerceNonMaybeValue(
          e.error_code,
          "issue_info.error_code",
          i.id,
        ),
        error_message: t.coerceNonMaybeValue(
          e.error_message,
          "issue_info.error_message",
          i.id,
        ),
        error_summary: t.coerceNonMaybeValue(
          e.error_summary,
          "issue_info.error_summary",
          i.id,
        ),
        error_type: t.coerceNonMaybeValue(
          e.error_type != null
            ? o("enumUtils").coerce(
                e.error_type,
                r("AdsAPIActiveIssuesInfoType"),
              )
            : void 0,
          "issue_info.error_type",
          i.id,
        ),
        level: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsAPIActiveIssuesInfoLevel"), e.level),
          "issue_info.level",
          i.id,
        ),
        mid: o("TypeCoercionUtils").coerceEmptyStringToUndefined(e.mid),
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
