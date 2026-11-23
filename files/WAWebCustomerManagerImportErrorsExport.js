__d(
  "WAWebCustomerManagerImportErrorsExport",
  [
    "fbt",
    "WALogger",
    "WAWebCustomerManagerExportCsvUtils",
    "WAWebCustomerManagerImportErrorMessage",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "originalRowIndex";
    function c() {
      return s._(/*BTDS*/ "").toString();
    }
    function d() {
      return s._(/*BTDS*/ "").toString();
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
            return [String(e.rowIndex + 1)].concat(
              t.map(function (t) {
                var n = e.rowData[t];
                return n != null ? String(n) : "";
              }),
              [
                o(
                  "WAWebCustomerManagerImportErrorMessage",
                ).getCustomerManagerImportErrorLabelForItem(e),
              ],
            );
          });
      return { headers: [l].concat(t, [s]), rows: p };
    }
    async function _(t) {
      try {
        var n = p(t),
          r = n.headers,
          a = n.rows,
          i = await o(
            "WAWebCustomerManagerExportCsvUtils",
          ).buildCustomerManagerCsv(r, a);
        await o(
          "WAWebCustomerManagerExportCsvUtils",
        ).downloadCustomerManagerCsv(i, "customer_manager_import_errors");
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
    }
    ((l.buildImportErrorsExportTable = p), (l.exportImportErrors = _));
  },
  226,
);
