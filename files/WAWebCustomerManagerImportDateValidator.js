__d(
  "WAWebCustomerManagerImportDateValidator",
  [
    "WATimeUtils",
    "WAWebContactImportTemplateParsingUtils",
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
          o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(e, [
            "Birthday",
            o("WAWebCustomerManagerImportTemplateUtils").FBT_BIRTHDAY,
          ]),
          "birthday",
        ),
        n = o(
          "WAWebCustomerManagerImportDateParsingUtils",
        ).parseCustomerManagerImportDate(
          o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(e, [
            "Last order",
            o("WAWebCustomerManagerImportTemplateUtils").FBT_LAST_ORDER,
          ]),
          "lastOrder",
        );
      return t.type === "invalid" || u(n);
    }
    function u(e) {
      return (
        e.type === "invalid" ||
        (e.type === "valid" && e.value === o("WATimeUtils").castToUnixTime(0))
      );
    }
    ((l.validateCustomerManagerImportDates = e),
      (l.hasInvalidCustomerManagerImportDates = s));
  },
  98,
);
