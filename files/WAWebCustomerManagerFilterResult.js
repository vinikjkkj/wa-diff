__d(
  "WAWebCustomerManagerFilterResult",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (
        t.options === e.optionsBeforePick ||
        t.options.query !== e.optionsBeforePick.query ||
        t.contactType !== e.contactType
      )
        return null;
      var n = t.error != null && t.error !== e.errorBeforePick;
      return {
        action_status: n ? "failure" : "success",
        filter_application_id: e.filterApplicationId,
        has_more_rows: t.hasMoreRows,
        rendered_row_count: t.resultCount,
      };
    }
    i.resolveFilterResult = e;
  },
  66,
);
