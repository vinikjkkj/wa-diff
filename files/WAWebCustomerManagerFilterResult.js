__d(
  "WAWebCustomerManagerFilterResult",
  ["WATimeUtils", "WAWebCustomerManagerDateRangeUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e = 86400;
    function s(t) {
      var n = o(
          "WAWebCustomerManagerDateRangeUtils",
        ).getCustomRangeSecondsBounds(t.start, t.end),
        r = n.endSec,
        a = n.startSec;
      return Math.round((r - a) / e);
    }
    function u(e, t) {
      if (
        t.options === e.optionsBeforePick ||
        t.options.query !== e.optionsBeforePick.query ||
        t.contactType !== e.contactType
      )
        return null;
      var n = t.error != null && t.error !== e.errorBeforePick ? t.error : null;
      return {
        action_status: n != null ? "failure" : "success",
        duration_ms:
          e.isLoadingAtPick && t.planKey === e.planKeyAtPick
            ? null
            : o("WATimeUtils").monotonicTimeSince(e.startedAt),
        error_name: n != null ? r("getErrorSafe")(n).name : null,
        filter_key: e.filterKey,
        filter_value: e.filterValue,
        is_clear: e.isClear,
        result_count: t.resultCount,
      };
    }
    ((l.toSpanDays = s), (l.resolveFilterResult = u));
  },
  98,
);
