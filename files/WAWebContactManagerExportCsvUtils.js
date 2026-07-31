__d(
  "WAWebContactManagerExportCsvUtils",
  ["JSResourceForInteraction", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          try {
            a = yield r("JSResourceForInteraction")("papaparse")
              .__setRef("WAWebContactManagerExportCsvUtils")
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
            { escapeFormulae: /^\s*[=+\-@\t\r]/ },
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.buildContactManagerCsv = s;
  },
  98,
);
