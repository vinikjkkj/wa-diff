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
      return s._(/*BTDS*/ "Original row number").toString();
    }
    function d() {
      return s._(/*BTDS*/ "Error").toString();
    }
    function m(e, t) {
      if (!t.has(e)) return e;
      for (var n = 2; t.has(e + " (" + n + ")"); ) n++;
      return e + " (" + n + ")";
    }
    function p(e) {
      var t = [],
        n = new Set();
      for (var r of e)
        for (var a of Object.keys(r.rowData))
          a === u || n.has(a) || (n.add(a), t.push(a));
      var i = new Set(n),
        l = m(c(), i);
      i.add(l);
      var s = m(d(), i),
        p = []
          .concat(e)
          .sort(function (e, t) {
            return e.rowIndex - t.rowIndex;
          })
          .map(function (e) {
            var n = [String(e.rowIndex + 1)].concat(
              t.map(function (t) {
                var n = e.rowData[t];
                return n != null ? String(n) : "";
              }),
            );
            return (
              n.push(
                o(
                  "WAWebContactManagerImportErrorMessage",
                ).getContactManagerImportErrorLabel(e.errorType),
              ),
              n
            );
          });
      return { headers: [l].concat(t, [s]), rows: p };
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = p(t),
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
        f.apply(this, arguments)
      );
    }
    ((l.buildImportErrorsExportTable = p), (l.exportImportErrors = _));
  },
  226,
);
