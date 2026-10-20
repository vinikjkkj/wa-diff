__d(
  "WAWebCustomerManagerImportRecordInput",
  [
    "WAWebContactImportFileProcessor",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebJidToWid",
    "WAWebLeadStageNames",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.lid;
      if (n == null)
        throw r("err")("Imported contact missing lid; cannot resolve chatJid");
      return {
        acquisitionSource: m(e),
        address:
          (t = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(e, "address")) != null
            ? t
            : "",
        birthday: c(e, "birthday"),
        chatJid: n,
        email: u(e),
        firstName: e.firstName,
        lastName: e.lastName,
        leadStage: d(e),
        lastOrder: c(e, "lastOrder"),
        note: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "note"),
        phoneNumber: o("WAWebContactImportFileProcessor").normalizePhoneNumber(
          e.phone,
        ),
        profileWid: o("WAWebJidToWid").lidUserJidToUserLid(n),
        username: null,
      };
    }
    function s(e) {
      var t, n;
      return e.isNamePhoneFallback === !0
        ? ""
        : (
            ((t = e.firstName) != null ? t : "") +
            " " +
            ((n = e.lastName) != null ? n : "")
          )
            .trim()
            .replace(/\s+/g, " ");
    }
    function u(e) {
      var t,
        n =
          (t = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(e, "email")) != null
            ? t
            : "";
      return o("WAWebCustomerManagerImportEmailWarnings").isValidImportEmail(n)
        ? n
        : "";
    }
    function c(e, t) {
      return o(
        "WAWebCustomerManagerImportDateParsingUtils",
      ).readValidCustomerManagerImportDate(
        o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, t),
        t,
      );
    }
    function d(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "leadStage");
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function m(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "acquisitionSource");
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    ((l.buildCustomerRecordInput = e), (l.getImportedCustomerName = s));
  },
  98,
);
