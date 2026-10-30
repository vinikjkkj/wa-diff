__d(
  "WAWebCustomerManagerExportCsvUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return o("WAWebFileSaver").FileSaver.downloadData(
        new Blob(["\uFEFF" + e], { type: "text/csv;charset=utf-8" }),
        t + "_" + new Date().toISOString().slice(0, 10),
        o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          try {
            a = yield r("JSResourceForInteraction")("papaparse")
              .__setRef("WAWebCustomerManagerExportCsvUtils")
              .load();
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load PapaParse library: ",
                      "",
                    ])),
                  t,
                )
                .verbose()
                .sendLogs("customer-manager-export-csv-library-load-failed", {
                  sampling: 1,
                }),
              t
            );
          }
          return a.unparse(
            {
              fields: [].concat(t),
              data: n.map(function (e) {
                return [].concat(e);
              }),
            },
            { escapeFormulae: /^\s*(?:[=+@\t\r]|-(?!\d+(?:\.\d+)?$))/ },
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.downloadCustomerManagerCsv = s), (l.buildCustomerManagerCsv = u));
  },
  98,
);
