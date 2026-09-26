__d(
  "WAWebContactImportCSVParsingUtils",
  ["JSResourceForInteraction", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          try {
            ((i = yield r("JSResourceForInteraction")("papaparse")
              .__setRef("WAWebContactImportCSVParsingUtils")
              .load()),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PapaParse loaded \u2713, processing CSV (",
                    " chars)",
                  ])),
                t.length,
              ));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load PapaParse library: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("contact-import-csv-library-load-failed", {
                  sampling: 1,
                }),
              e
            );
          }
          try {
            var l,
              d = typeof n == "string" ? n : void 0,
              m = typeof n == "number" ? n : a,
              p = i.parse(
                t,
                m == null && d == null ? void 0 : { delimiter: d, preview: m },
              );
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "CSV file parsed successfully: ",
                    " rows extracted",
                  ])),
                ((l = p.data) == null ? void 0 : l.length) || 0,
              ),
              p
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to parse CSV file: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("contact-import-csv-parsing-failed", { sampling: 1 }),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.loadPapaParse = d;
  },
  98,
);
