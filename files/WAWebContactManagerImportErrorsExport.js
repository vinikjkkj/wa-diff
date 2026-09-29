__d(
  "WAWebContactManagerImportErrorsExport",
  [
    "fbt",
    "WALogger",
    "WAWebContactManagerExportCsvUtils",
    "WAWebContactManagerImportErrorMessage",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "originalRowIndex";
    function c() {
      return s._(/*BTDS*/ "Error").toString();
    }
    function d(e) {
      var t = c();
      if (!e.has(t)) return t;
      for (var n = 2; e.has(t + " (" + n + ")"); ) n++;
      return t + " (" + n + ")";
    }
    function m(e) {
      var t = [],
        n = new Set();
      for (var r of e)
        for (var a of Object.keys(r.rowData))
          a === u || n.has(a) || (n.add(a), t.push(a));
      var i = e.map(function (e) {
        var n = t.map(function (t) {
          var n = e.rowData[t];
          return n != null ? String(n) : "";
        });
        return (
          n.push(
            o(
              "WAWebContactManagerImportErrorMessage",
            ).getContactManagerImportErrorLabel(e.errorType),
          ),
          n
        );
      });
      return { headers: [].concat(t, [d(n)]), rows: i };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = m(t),
              r = n.headers,
              a = n.rows,
              i = yield o(
                "WAWebContactManagerExportCsvUtils",
              ).buildContactManagerCsv(r, a),
              l = new Blob(["\uFEFF" + i], { type: "text/csv;charset=utf-8" }),
              s = new Date().toISOString().slice(0, 10);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              l,
              "customer_manager_import_errors_" + s,
              o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
            );
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to export import errors to CSV: ",
                      "",
                    ])),
                  t,
                )
                .verbose()
                .sendLogs("customer-manager-import-errors-export-failed", {
                  sampling: 1,
                }),
              t
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.buildImportErrorsExportTable = m), (l.exportImportErrors = p));
  },
  226,
);
