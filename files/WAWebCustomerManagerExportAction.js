__d(
  "WAWebCustomerManagerExportAction",
  [
    "WALogger",
    "WAWebCustomerManagerExportColumns",
    "WAWebCustomerManagerExportCsvUtils",
    "WAWebCustomerManagerExportData",
    "WAWebCustomerManagerUserPrefs",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n === void 0 && (n = "all");
          try {
            var r = o(
                "WAWebCustomerManagerExportData",
              ).buildCustomerExportRecords(t),
              a =
                n === "all"
                  ? o("WAWebCustomerManagerExportColumns").EXPORT_COLUMNS
                  : o(
                      "WAWebCustomerManagerExportColumns",
                    ).getVisibleExportColumns(
                      o("WAWebCustomerManagerUserPrefs").getColumnOrder(),
                      o("WAWebCustomerManagerUserPrefs").getVisibleColumns(),
                    ),
              i = o("WAWebCustomerManagerExportColumns").getExportHeaders(a),
              l = r.map(function (e) {
                return o("WAWebCustomerManagerExportColumns").getExportRow(
                  e,
                  a,
                );
              }),
              s = yield o(
                "WAWebCustomerManagerExportCsvUtils",
              ).buildCustomerManagerCsv(i, l),
              u = new Blob(["\uFEFF" + s], { type: "text/csv;charset=utf-8" }),
              c = new Date().toISOString().slice(0, 10);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              u,
              "customer_manager_export_" + c,
              o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
            );
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to export customers to CSV: ",
                      "",
                    ])),
                  t,
                )
                .verbose()
                .sendLogs("customer-manager-export-failed", { sampling: 1 }),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.exportCustomers = s;
  },
  98,
);
