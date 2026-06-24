__d(
  "WAWebCustomerManagerExportAction",
  [
    "WALogger",
    "WAWebCustomerManagerExportColumns",
    "WAWebCustomerManagerExportCsvUtils",
    "WAWebCustomerManagerExportData",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = o(
                "WAWebCustomerManagerExportData",
              ).buildCustomerExportRecords(t),
              r = o("WAWebCustomerManagerExportColumns").getExportHeaders(),
              a = n.map(o("WAWebCustomerManagerExportColumns").getExportRow),
              i = yield o(
                "WAWebCustomerManagerExportCsvUtils",
              ).buildCustomerManagerCsv(r, a),
              l = new Blob(["\uFEFF" + i], { type: "text/csv;charset=utf-8" }),
              s = new Date().toISOString().slice(0, 10);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              l,
              "customer_manager_export_" + s,
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
