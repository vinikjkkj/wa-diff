__d(
  "WAWebCustomerManagerImportDateValidator",
  [
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = [];
      for (var r of e)
        if (s(r.rawRow)) {
          var a;
          t.push({
            contactIndex: null,
            errorType: o("WAWebContactImportTypedError").DateError.INVALID_DATE,
            rowData: babelHelpers.extends({}, (a = r.rawRow) != null ? a : {}),
            rowIndex: r.rowIndex,
            type: "error",
          });
        } else n.push(r);
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
