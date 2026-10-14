__d(
  "WAWebCustomerManagerImportEmailWarnings",
  [
    "$InternalEnum",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "INVALID_EMAIL",
      "USERNAME_NOT_SAVED",
    ]);
    function s(e) {
      return e !== "" && o("WAWebValidationUtils").validateEmail(e);
    }
    function u(t, n) {
      if (n != null && n.email == null) return [];
      var r = [];
      return (
        t.forEach(function (t) {
          var n = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(t, "email");
          n == null ||
            s(n) ||
            r.push({ rowIndex: t.rowIndex, warningType: e.INVALID_EMAIL });
        }),
        r
      );
    }
    function c(t) {
      return t
        .filter(function (e) {
          return (
            /\d/.test(e.phone) &&
            o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
              e.rawRow,
              [
                "Username",
                o("WAWebCustomerManagerImportTemplateUtils").FBT_USERNAME,
              ],
            ) != null
          );
        })
        .map(function (t) {
          return { rowIndex: t.rowIndex, warningType: e.USERNAME_NOT_SAVED };
        });
    }
    ((l.CustomerManagerImportWarning = e),
      (l.isValidImportEmail = s),
      (l.detectInvalidEmails = u),
      (l.detectSkippedUsernames = c));
  },
  98,
);
