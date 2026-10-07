__d(
  "WAWebCustomerManagerExportAction",
  [
    "WALogger",
    "WAWebCustomerManagerExportColumns",
    "WAWebCustomerManagerExportCsvUtils",
    "WAWebCustomerManagerExportData",
    "WAWebCustomerManagerSearchNoteContents",
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
            var r =
                n === "all"
                  ? o("WAWebCustomerManagerExportColumns").EXPORT_COLUMNS
                  : o(
                      "WAWebCustomerManagerExportColumns",
                    ).getVisibleExportColumns(
                      o("WAWebCustomerManagerUserPrefs").getColumnOrder(),
                      o("WAWebCustomerManagerUserPrefs").getVisibleColumns(),
                    ),
              a = r.some(function (e) {
                return e.id === "notes";
              })
                ? yield o(
                    "WAWebCustomerManagerSearchNoteContents",
                  ).loadCustomerSearchNoteContents(
                    t.map(function (e) {
                      return String(e.chatJid);
                    }),
                  )
                : o("WAWebCustomerManagerSearchNoteContents")
                    .EMPTY_SEARCH_NOTE_CONTENTS,
              i = o(
                "WAWebCustomerManagerExportData",
              ).buildCustomerExportRecords(t, a),
              l = o("WAWebCustomerManagerExportColumns").getExportHeaders(r),
              s = i.map(function (e) {
                return o("WAWebCustomerManagerExportColumns").getExportRow(
                  e,
                  r,
                );
              }),
              u = yield o(
                "WAWebCustomerManagerExportCsvUtils",
              ).buildCustomerManagerCsv(l, s),
              c = new Blob(["\uFEFF" + u], { type: "text/csv;charset=utf-8" }),
              d = new Date().toISOString().slice(0, 10);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              c,
              "customer_manager_export_" + d,
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
