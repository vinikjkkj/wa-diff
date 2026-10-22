__d(
  "WAWebOrgAdminRosterUploadMessages",
  [
    "fbt",
    "WALogger",
    "WAWebOrgAdminRosterCSVParser",
    "WAWebOrgAdminRosterUploadRequest",
    "intlNumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 1048576;
    function c(e) {
      return e.code === "empty_roster"
        ? s._(
            /*BTDS*/ "Add at least one roster entry to the CSV, then try again.",
          )
        : e.code === "file_too_large"
          ? s._(
              /*BTDS*/ "Reduce the CSV to {maximum CSV size in megabytes} MB or smaller, then try again.",
              [
                s._param(
                  "maximum CSV size in megabytes",
                  r("intlNumUtils").formatNumber(
                    o("WAWebOrgAdminRosterCSVParser")
                      .MAX_ORG_ADMIN_ROSTER_FILE_BYTES / u,
                  ),
                ),
              ],
            )
          : e.code === "too_many_lines"
            ? s._(
                /*BTDS*/ "This CSV has too many lines to process. Remove blank rows or other unused lines, then try again.",
              )
            : e.code === "too_many_rows"
              ? s._(
                  /*BTDS*/ "Remove rows so the CSV contains at most {maximum roster entries} people, then try again.",
                  [
                    s._param(
                      "maximum roster entries",
                      r("intlNumUtils").formatNumberWithThousandDelimiters(
                        o("WAWebOrgAdminRosterCSVParser")
                          .MAX_ORG_ADMIN_ROSTER_ROWS,
                        0,
                      ),
                    ),
                  ],
                )
              : e.code === "invalid_headers"
                ? s._(
                    /*BTDS*/ "Include a name column and at least one email or mobile phone number column.",
                  )
                : e.code === "invalid_row"
                  ? m(e.rowNumber)
                  : e.code === "row_field_count_mismatch"
                    ? d(e.rowNumber)
                    : e.code === "invalid_file"
                      ? s._(/*BTDS*/ "Choose a valid CSV file.")
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e.code,
                          );
                        })();
    }
    function d(e) {
      return e == null
        ? s._(
            /*BTDS*/ "A row has a different number of columns than the header. Put values that contain commas in quotation marks, then try again.",
          )
        : s._(
            /*BTDS*/ "Row {row number} has a different number of columns than the header. Put values that contain commas in quotation marks, then try again.",
            [s._param("row number", r("intlNumUtils").formatNumber(e))],
          );
    }
    function m(e) {
      return e == null
        ? s._(/*BTDS*/ "Choose a valid CSV file.")
        : s._(
            /*BTDS*/ "Row {row number} needs a name and an email address or mobile phone number.",
            [s._param("row number", r("intlNumUtils").formatNumber(e))],
          );
    }
    function p(e, t, n) {
      return e === "TOO_MANY_ROSTER_ENTRIES"
        ? s._(
            /*BTDS*/ "An organization can have up to {maximum people} people after an upload. Remove some rows from the file, then upload it again.",
            [
              s._param(
                "maximum people",
                r("intlNumUtils").formatNumberWithThousandDelimiters(
                  o("WAWebOrgAdminRosterUploadRequest")
                    .MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES,
                  0,
                ),
              ),
            ],
          )
        : e === "INVALID_MEMBER_TAG" && t != null
          ? s._(
              /*BTDS*/ "Row {row number} of the file has a member tag this organization doesn't have. Go back to fix it, then try again.",
              [s._param("row number", r("intlNumUtils").formatNumber(t))],
            )
          : e === "INVALID_MEMBER_TAG" && n != null
            ? s._(
                /*BTDS*/ "{name of someone already in the organization} is already in the organization, but their member tag isn't one of the organization's member tags. Add it in Settings, or give them another member tag in a new row of the file. Then upload the file again.",
                [s._param("name of someone already in the organization", n)],
              )
            : (e === "INVALID_ROSTER_ENTRY" ||
                  e === "DUPLICATE_ROSTER_CONTACT") &&
                t != null
              ? s._(
                  /*BTDS*/ "Check row {row number} of the file. Its name, email or mobile phone number isn't valid, or its email belongs to someone else in the organization. Fix the row in the file, then upload it again.",
                  [s._param("row number", r("intlNumUtils").formatNumber(t))],
                )
              : (e === "INVALID_ROSTER_ENTRY" ||
                    e === "DUPLICATE_ROSTER_CONTACT") &&
                  n != null
                ? s._(
                    /*BTDS*/ "{name of someone already in the organization} is already in the organization, but their name, email or mobile phone number isn't valid, or their email belongs to someone else. Add a row for them to the file with the right details, then upload it again.",
                    [
                      s._param(
                        "name of someone already in the organization",
                        n,
                      ),
                    ],
                  )
                : e === "INVALID_MEMBER_TAG" ||
                    e === "INVALID_ROSTER_ENTRY" ||
                    e === "DUPLICATE_ROSTER_CONTACT"
                  ? f(null)
                  : _();
    }
    function _() {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] unrecognized roster validation error",
              ])),
          )
          .sendLogs("org-admin-roster-unknown-validation-reason"),
        f(null)
      );
    }
    function f(e) {
      return e != null
        ? s._(
            /*BTDS*/ "Check entry {entry number}. Its name, member tag, email address, or mobile phone number is invalid, or its email address is duplicated.",
            [s._param("entry number", r("intlNumUtils").formatNumber(e))],
          )
        : s._(
            /*BTDS*/ "Check for invalid names, member tags, email addresses, or mobile phone numbers, and for duplicate email addresses, then try again.",
          );
    }
    ((l.getCSVErrorMessage = c), (l.getRosterReplaceValidationMessage = p));
  },
  226,
);
