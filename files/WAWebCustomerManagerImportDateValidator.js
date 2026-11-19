__d(
  "WAWebCustomerManagerImportDateValidator",
  [
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportErrorMessage",
    "WAWebCustomerManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = [];
      for (var r of e)
        s(r.rawRow)
          ? t.push(
              o(
                "WAWebCustomerManagerImportErrorMessage",
              ).toCustomerManagerImportErrorItem(
                r,
                o("WAWebContactImportTypedError").DateError.INVALID_DATE,
              ),
            )
          : n.push(r);
      return { errorList: t, validContacts: n };
    }
    function s(e) {
      var t = o(
        "WAWebCustomerManagerImportDateParsingUtils",
      ).parseCustomerManagerImportDate(
        o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportRawRowColumn(e, "birthday"),
        "birthday",
      );
      return t.type === "invalid";
    }
    ((l.validateCustomerManagerImportDates = e),
      (l.hasInvalidCustomerManagerImportDates = s));
  },
  98,
);
