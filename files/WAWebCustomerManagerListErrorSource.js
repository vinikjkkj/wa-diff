__d(
  "WAWebCustomerManagerListErrorSource",
  ["getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.metadataError != null
        ? "metadata"
        : e.contactCount === 0 && !e.isLoading && e.error != null
          ? e.errorSource
          : null;
    }
    function s(e) {
      return {
        error_name: r("getErrorSafe")(
          e.errorSource === "metadata" ? e.metadataError : e.error,
        ).name,
        error_source: e.errorSource,
        has_active_filter: e.hasActiveFilter,
        row_count: e.rowCount,
      };
    }
    ((l.classifyListErrorSource = e), (l.buildListErrorAttributes = s));
  },
  98,
);
