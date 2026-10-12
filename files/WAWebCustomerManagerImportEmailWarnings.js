__d(
  "WAWebCustomerManagerImportEmailWarnings",
  [
    "$InternalEnum",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["INVALID_EMAIL"]);
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
    ((l.CustomerManagerImportWarning = e),
      (l.isValidImportEmail = s),
      (l.detectInvalidEmails = u));
  },
  98,
);
