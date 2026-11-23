__d(
  "WAWebCustomerManagerImportFileErrorStrings",
  [
    "fbt",
    "WAWebContactImportCSVValidation",
    "WAWebL10nFilesize",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 5242880,
      u = "csv_file_too_large",
      c = "duplicate_headers";
    function d(e) {
      return e === u
        ? s._(/*BTDS*/ "")
        : e === c
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p(t) {
      return t === u
        ? s._(/*BTDS*/ "", [
            s._param(
              "maximum file size",
              o("WAWebL10nFilesize").getL10nFilesize(e),
            ),
          ])
        : t === c
          ? s._(/*BTDS*/ "")
          : t instanceof
              o("WAWebContactImportCSVValidation")
                .WAWebContactImportCSVFormatError
            ? (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "actualColumnCount" in e &&
                  "expectedColumnCount" in e &&
                  "physicalRow" in e &&
                  e.reason === "column_count"
                ) {
                  var t = e.actualColumnCount,
                    n = e.expectedColumnCount,
                    o = e.physicalRow;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(o)),
                    s._param(
                      "expected column count",
                      r("intlNumUtils").formatNumber(n),
                    ),
                    s._param(
                      "actual column count",
                      r("intlNumUtils").formatNumber(t),
                    ),
                  ]);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "physicalRow" in e &&
                  e.reason === "invalid_quotes"
                ) {
                  var a = e.physicalRow;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(a)),
                  ]);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "physicalRow" in e &&
                  e.reason === "missing_quotes"
                ) {
                  var i = e.physicalRow;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(i)),
                  ]);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "actualLineEnding" in e &&
                  "expectedLineEnding" in e &&
                  "physicalRow" in e &&
                  e.reason === "mixed_line_endings"
                ) {
                  var l = e.actualLineEnding,
                    u = e.expectedLineEnding,
                    c = e.physicalRow;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(c)),
                    s._param("actual line ending", l),
                    s._param("expected line ending", u),
                  ]);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "actualColumnCount" in e &&
                  "expectedColumnCount" in e &&
                  "physicalRow" in e &&
                  e.reason === "separator_column_count" &&
                  "separator" in e
                ) {
                  var d = e.actualColumnCount,
                    m = e.expectedColumnCount,
                    p = e.physicalRow,
                    f = e.separator;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(p)),
                    s._param("separator type", _(f)),
                    s._param(
                      "expected column count",
                      r("intlNumUtils").formatNumber(m),
                    ),
                    s._param(
                      "actual column count",
                      r("intlNumUtils").formatNumber(d),
                    ),
                  ]);
                }
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  "physicalRow" in e &&
                  e.reason === "parse_error"
                ) {
                  var g = e.physicalRow;
                  return s._(/*BTDS*/ "", [
                    s._param("row number", r("intlNumUtils").formatNumber(g)),
                  ]);
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })(t.issue)
            : s._(/*BTDS*/ "");
    }
    function _(e) {
      return e === "semicolon"
        ? s._(/*BTDS*/ "")
        : e === "tab"
          ? s._(/*BTDS*/ "")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.CUSTOMER_MANAGER_IMPORT_CSV_FILE_SIZE_LIMIT_BYTES = e),
      (l.CUSTOMER_MANAGER_IMPORT_CSV_FILE_TOO_LARGE = u),
      (l.CUSTOMER_MANAGER_IMPORT_DUPLICATE_HEADERS = c),
      (l.getCustomerManagerImportFileErrorTitle = d),
      (l.getCustomerManagerImportFileRetryLabel = m),
      (l.getCustomerManagerImportFileErrorMessage = p));
  },
  226,
);
