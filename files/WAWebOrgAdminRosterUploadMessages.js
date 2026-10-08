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
      return s._(
        /*BTDS*/ '_j{"*":{"*":"Processed {processed roster entries} of {total roster entries}. {added roster entry count} people added and {deduplicated roster entry count} people matched existing entries.","_1":"Processed {processed roster entries} of {total roster entries}. {added roster entry count} people added and 1 person matched an existing entry."},"_1":{"*":"Processed {processed roster entries} of {total roster entries}. 1 person added and {deduplicated roster entry count} people matched existing entries.","_1":"Processed {processed roster entries} of {total roster entries}. 1 person added and 1 person matched an existing entry."}}',
        [
          s._plural(e.addedCount, "added roster entry count"),
          s._plural(e.deduplicatedCount, "deduplicated roster entry count"),
          s._param(
            "processed roster entries",
            r("intlNumUtils").formatNumber(e.processedCount),
          ),
          s._param(
            "total roster entries",
            r("intlNumUtils").formatNumber(e.totalCount),
          ),
        ],
      );
    }
    function d(e) {
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
                      r("intlNumUtils").formatNumber(
                        o("WAWebOrgAdminRosterCSVParser")
                          .MAX_ORG_ADMIN_ROSTER_ROWS,
                      ),
                    ),
                  ],
                )
              : e.code === "invalid_headers"
                ? s._(
                    /*BTDS*/ "Include a name column and at least one email or mobile phone number column.",
                  )
                : e.code === "invalid_row"
                  ? p(e.rowNumber)
                  : e.code === "row_field_count_mismatch"
                    ? m(e.rowNumber)
                    : e.code === "invalid_file"
                      ? s._(/*BTDS*/ "Choose a valid CSV file.")
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e.code,
                          );
                        })();
    }
    function m(e) {
      return e == null
        ? s._(
            /*BTDS*/ "A row has a different number of columns than the header. Put values that contain commas in quotation marks, then try again.",
          )
        : s._(
            /*BTDS*/ "Row {row number} has a different number of columns than the header. Put values that contain commas in quotation marks, then try again.",
            [s._param("row number", r("intlNumUtils").formatNumber(e))],
          );
    }
    function p(e) {
      return e == null
        ? s._(/*BTDS*/ "Choose a valid CSV file.")
        : s._(
            /*BTDS*/ "Row {row number} needs a name and an email address or mobile phone number.",
            [s._param("row number", r("intlNumUtils").formatNumber(e))],
          );
    }
    function _(e, t) {
      return e === "TOO_MANY_ROSTER_ENTRIES"
        ? s._(
            /*BTDS*/ "This member directory can hold at most {maximum roster entries} people. Upload fewer new people, then try again.",
            [
              s._param(
                "maximum roster entries",
                r("intlNumUtils").formatNumber(
                  o("WAWebOrgAdminRosterCSVParser").MAX_ORG_ADMIN_ROSTER_ROWS,
                ),
              ),
            ],
          )
        : e === "INVALID_MEMBER_TAG"
          ? h(t)
          : e === "INVALID_ROSTER_ENTRY" || e === "DUPLICATE_ROSTER_CONTACT"
            ? y(t)
            : g();
    }
    function f(e, t, n) {
      return e === "TOO_MANY_ROSTER_ENTRIES"
        ? s._(
            /*BTDS*/ "An organization can have up to {maximum people} people after an upload. Remove some rows from the file, then upload it again.",
            [
              s._param(
                "maximum people",
                r("intlNumUtils").formatNumber(
                  o("WAWebOrgAdminRosterUploadRequest")
                    .MAX_ORG_ADMIN_ROSTER_REPLACE_ENTRIES,
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
                  /*BTDS*/ "Check row {row number} of the file. Its name, email or mobile phone number isn't valid, or belongs to someone else in the organization. Fix the row in the file, then upload it again.",
                  [s._param("row number", r("intlNumUtils").formatNumber(t))],
                )
              : (e === "INVALID_ROSTER_ENTRY" ||
                    e === "DUPLICATE_ROSTER_CONTACT") &&
                  n != null
                ? s._(
                    /*BTDS*/ "{name of someone already in the organization} is already in the organization, but their name, email or mobile phone number isn't valid or belongs to someone else. Add a row for them to the file with the right details, then upload it again.",
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
                  ? y(null)
                  : g();
    }
    function g() {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] unrecognized roster validation error",
              ])),
          )
          .sendLogs("org-admin-roster-unknown-validation-reason"),
        y(null)
      );
    }
    function h(e) {
      return e != null
        ? s._(
            /*BTDS*/ "Entry {entry number} uses a member tag that isn't set up for this organization. Update the member tag, then try again.",
            [s._param("entry number", r("intlNumUtils").formatNumber(e))],
          )
        : s._(
            /*BTDS*/ "Use only member tags that are set up for this organization, then try again.",
          );
    }
    function y(e) {
      return e != null
        ? s._(
            /*BTDS*/ "Check entry {entry number}. Its name, member tag, email address, or mobile phone number is invalid or duplicated.",
            [s._param("entry number", r("intlNumUtils").formatNumber(e))],
          )
        : s._(
            /*BTDS*/ "Check for invalid or duplicate names, member tags, email addresses, or mobile phone numbers, then try again.",
          );
    }
    ((l.getUploadProgressMessage = c),
      (l.getCSVErrorMessage = d),
      (l.getServerValidationMessage = _),
      (l.getRosterReplaceValidationMessage = f));
  },
  226,
);
