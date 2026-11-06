__d(
  "WAWebCustomerManagerImportErrorRow",
  [
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerManagerImportErrorMessage",
    "WAWebCustomerManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        acquisitionSource: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportDisplayColumn(
          e.rowData,
          "acquisitionSource",
        ),
        error: o(
          "WAWebCustomerManagerImportErrorMessage",
        ).getCustomerManagerImportErrorLabelForItem(e),
        leadStage: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportDisplayColumn(e.rowData, "leadStage"),
        phone: o("WAWebContactImportTemplateParsingUtils").getIssuePhone(e),
        username: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportDisplayColumn(e.rowData, "username"),
      };
    }
    l.getImportErrorRowValues = e;
  },
  98,
);
