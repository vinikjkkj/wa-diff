__d(
  "WAWebCustomerManagerPipelineSettle",
  ["getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isPanelBlocked || !e.isPipelineView
        ? { kind: "abandoned" }
        : e.error != null
          ? { errorName: r("getErrorSafe")(e.error).name, kind: "failed" }
          : e.loading
            ? { kind: "pending" }
            : {
                kind: "settled",
                rowCount: e.hasPartialColumn ? null : e.totalCount,
              };
    }
    l.classifyPipelineSettle = e;
  },
  98,
);
