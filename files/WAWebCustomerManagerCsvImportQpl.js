__d(
  "WAWebCustomerManagerCsvImportQpl",
  [
    "WAWebCustomerManagerImportSaveAction",
    "WAWebCustomerManagerQplFlow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e =
        6e4 / o("WAWebCustomerManagerImportSaveAction").IMPORT_ROWS_PER_MINUTE,
      s = 2,
      u = 6e4,
      c = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450248370, "3765"),
        u,
      );
    function d(e) {
      return c.startRun({ int: { rows_total: e } }, f(e));
    }
    function m(e) {
      e.endFail("preflight_failed");
    }
    function p(e, t, n) {
      e.endFail("rows_failed", {
        int: { rows_failed: t },
        string: { error_source: n },
      });
    }
    function _(e) {
      e.endSuccess();
    }
    function f(t) {
      return t * e * s + u;
    }
    ((l.startCsvImport = d),
      (l.endCsvImportPreflightFailed = m),
      (l.endCsvImportRowsFailed = p),
      (l.endCsvImportSuccess = _));
  },
  98,
);
