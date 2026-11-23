__d(
  "WAWebOrgAdminRosterUploadMessages",
  ["fbt", "WALogger", "WAWebOrgAdminRosterCSVParser", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 1048576;
    function c(e, t) {
      return e.code === "empty_roster"
        ? s._(/*BTDS*/ "")
        : e.code === "file_too_large"
          ? s._(/*BTDS*/ "", [
              s._param(
                "maximum CSV size in megabytes",
                r("intlNumUtils").formatNumber(
                  o("WAWebOrgAdminRosterCSVParser")
                    .MAX_ORG_ADMIN_ROSTER_FILE_BYTES / u,
                ),
              ),
            ])
          : e.code === "too_many_lines"
            ? s._(/*BTDS*/ "")
            : e.code === "too_many_rows"
              ? s._(/*BTDS*/ "", [
                  s._param(
                    "maximum roster entries",
                    r("intlNumUtils").formatNumberWithThousandDelimiters(t, 0),
                  ),
                ])
              : e.code === "invalid_headers"
                ? s._(/*BTDS*/ "")
                : e.code === "row_field_count_mismatch"
                  ? d(e.rowNumber)
                  : e.code === "invalid_file"
                    ? s._(/*BTDS*/ "")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e.code,
                        );
                      })();
    }
    function d(e) {
      return e == null
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "", [
            s._param("row number", r("intlNumUtils").formatNumber(e)),
          ]);
    }
    function m(e, t, n, o) {
      return e === "TOO_MANY_ROSTER_ENTRIES"
        ? s._(/*BTDS*/ "", [
            s._param(
              "maximum people",
              r("intlNumUtils").formatNumberWithThousandDelimiters(o, 0),
            ),
          ])
        : e === "INVALID_MEMBER_TAG" && t != null
          ? s._(/*BTDS*/ "", [
              s._param("row number", r("intlNumUtils").formatNumber(t)),
            ])
          : e === "INVALID_MEMBER_TAG" && n != null
            ? s._(/*BTDS*/ "", [
                s._param("name of someone already in the organization", n),
              ])
            : (e === "INVALID_ROSTER_ENTRY" ||
                  e === "DUPLICATE_ROSTER_CONTACT" ||
                  e === "DUPLICATE_EMAIL") &&
                t != null
              ? s._(/*BTDS*/ "", [
                  s._param("row number", r("intlNumUtils").formatNumber(t)),
                ])
              : (e === "INVALID_ROSTER_ENTRY" ||
                    e === "DUPLICATE_ROSTER_CONTACT" ||
                    e === "DUPLICATE_EMAIL") &&
                  n != null
                ? s._(/*BTDS*/ "", [
                    s._param("name of someone already in the organization", n),
                  ])
                : e === "INVALID_MEMBER_TAG" ||
                    e === "INVALID_ROSTER_ENTRY" ||
                    e === "DUPLICATE_ROSTER_CONTACT" ||
                    e === "DUPLICATE_EMAIL"
                  ? _(null)
                  : p();
    }
    function p() {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] unrecognized roster validation error",
              ])),
          )
          .sendLogs("org-admin-roster-unknown-validation-reason"),
        _(null)
      );
    }
    function _(e) {
      return e != null
        ? s._(/*BTDS*/ "", [
            s._param("entry number", r("intlNumUtils").formatNumber(e)),
          ])
        : s._(/*BTDS*/ "");
    }
    ((l.getCSVErrorMessage = c), (l.getRosterReplaceValidationMessage = m));
  },
  226,
);
