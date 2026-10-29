__d(
  "WAWebCustomerManagerListSettle",
  ["WAWebCustomerManagerListErrorSource"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.isPanelBlocked || !e.isListView) return { kind: "abandoned" };
      var t = o("WAWebCustomerManagerListErrorSource").classifyListErrorSource({
        contactCount: e.contactCount,
        error: e.error,
        errorSource: e.errorSource,
        isLoading: e.isLoading,
        metadataError: e.metadataError,
      });
      return t != null
        ? {
            errorName: o(
              "WAWebCustomerManagerListErrorSource",
            ).buildListErrorAttributes({
              error: e.error,
              errorSource: t,
              hasActiveFilter: e.hasActiveFilter,
              metadataError: e.metadataError,
              rowCount: e.rowCount,
            }).error_name,
            errorSource: t,
            kind: "failed",
          }
        : e.isLoading ||
            !e.visibleRowsAnnounced ||
            (e.localPaging && e.visibleProfilesLoading)
          ? { kind: "pending" }
          : { kind: "settled", rowCount: e.contactCount };
    }
    l.classifyListSettle = e;
  },
  98,
);
