__d(
  "WAWebContactImportXLSXParsingUtils",
  ["JSResourceForInteraction", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            ((n = yield r("JSResourceForInteraction")("xlsx")
              .__setRef("WAWebContactImportXLSXParsingUtils")
              .load()),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "XLSX loaded \u2713, processing file (",
                    " bytes)",
                  ])),
                t.byteLength,
              ));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "XLSX library loading failed: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("contact-import-xlsx-library-loading-failed", {
                  sampling: 1,
                }),
              e
            );
          }
          try {
            var a = n.read(t, { type: "array" }),
              i = a.SheetNames[0],
              l = a.Sheets[i],
              d = n.utils
                .sheet_to_json(l, { header: 1, raw: !1 })
                .map(function (e) {
                  return e.map(function (e) {
                    return e != null ? String(e) : "";
                  });
                });
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Excel parsed \u2713: ",
                    ' rows from sheet "',
                    '"',
                  ])),
                d.length,
                i,
              ),
              d
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "XLSX file parsing failed: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("contact-import-xlsx-file-parsing-failed", {
                  sampling: 1,
                }),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.loadXLSX = d;
  },
  98,
);
