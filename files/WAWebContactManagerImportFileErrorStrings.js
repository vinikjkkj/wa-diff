__d(
  "WAWebContactManagerImportFileErrorStrings",
  ["fbt", "WAWebContactImportCSVValidation", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "File format issue");
    }
    function u() {
      return s._(/*BTDS*/ "Try again");
    }
    function c(e) {
      return e instanceof
        o("WAWebContactImportCSVValidation").WAWebContactImportCSVFormatError
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
              return s._(
                /*BTDS*/ "Row {row number} has the wrong number of columns. Expected {expected column count}; found {actual column count}. Fix the row and try again.",
                [
                  s._param("row number", r("intlNumUtils").formatNumber(o)),
                  s._param(
                    "expected column count",
                    r("intlNumUtils").formatNumber(n),
                  ),
                  s._param(
                    "actual column count",
                    r("intlNumUtils").formatNumber(t),
                  ),
                ],
              );
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              "physicalRow" in e &&
              e.reason === "invalid_quotes"
            ) {
              var a = e.physicalRow;
              return s._(
                /*BTDS*/ "Row {row number} has a quotation mark in the wrong place. Fix the row and try again.",
                [s._param("row number", r("intlNumUtils").formatNumber(a))],
              );
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              "physicalRow" in e &&
              e.reason === "missing_quotes"
            ) {
              var i = e.physicalRow;
              return s._(
                /*BTDS*/ "Row {row number} has an unclosed quotation mark. Close it and try again.",
                [s._param("row number", r("intlNumUtils").formatNumber(i))],
              );
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
              return s._(
                /*BTDS*/ "Row {row number} uses {actual line ending} line endings, but earlier rows use {expected line ending}. Save the CSV with consistent line endings and try again.",
                [
                  s._param("row number", r("intlNumUtils").formatNumber(c)),
                  s._param("actual line ending", l),
                  s._param("expected line ending", u),
                ],
              );
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
              var m = e.actualColumnCount,
                p = e.expectedColumnCount,
                _ = e.physicalRow,
                f = e.separator;
              return s._(
                /*BTDS*/ "Row {row number} does not match the {separator type} header. Expected {expected column count}; found {actual column count}. Fix the separators and try again.",
                [
                  s._param("row number", r("intlNumUtils").formatNumber(_)),
                  s._param("separator type", d(f)),
                  s._param(
                    "expected column count",
                    r("intlNumUtils").formatNumber(p),
                  ),
                  s._param(
                    "actual column count",
                    r("intlNumUtils").formatNumber(m),
                  ),
                ],
              );
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              "physicalRow" in e &&
              e.reason === "parse_error"
            ) {
              var g = e.physicalRow;
              return s._(
                /*BTDS*/ "The CSV has invalid formatting near row {row number}. Fix the row and try again.",
                [s._param("row number", r("intlNumUtils").formatNumber(g))],
              );
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e.issue)
        : s._(
            /*BTDS*/ "The file does not match the required format. Check the column headers and try again.",
          );
    }
    function d(e) {
      return e === "semicolon"
        ? s._(/*BTDS*/ "semicolon-separated")
        : e === "tab"
          ? s._(/*BTDS*/ "tab-separated")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.getContactManagerImportFileErrorTitle = e),
      (l.getContactManagerImportFileRetryLabel = u),
      (l.getContactManagerImportFileErrorMessage = c));
  },
  226,
);
