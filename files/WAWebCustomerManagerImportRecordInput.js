__d(
  "WAWebCustomerManagerImportRecordInput",
  [
    "WAJids",
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
        acquisitionSource: p(e),
        address:
          (t = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(e, "address")) != null
            ? t
            : "",
        birthday: d(e, "birthday"),
        chatJid: n,
        email: c(e),
        firstName: e.firstName,
        lastName: e.lastName,
        leadStage: m(e),
        lastOrderDescription: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "lastOrder"),
        note: o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "note"),
        phoneNumber: s(e),
        profileWid: o("WAWebJidToWid").lidUserJidToUserLid(n),
        username: null,
      };
    }
    function s(e) {
      var t = e.verifiedPhoneJid;
      return t != null
        ? o("WAJids").phoneNumberFromJid(t)
        : o("WAWebContactImportFileProcessor").normalizePhoneNumber(e.phone);
    }
    function u(e) {
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
    function c(e) {
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
    function d(e, t) {
      return o(
        "WAWebCustomerManagerImportDateParsingUtils",
      ).readValidCustomerManagerImportDate(
        o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, t),
        t,
      );
    }
    function m(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "leadStage");
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function p(e) {
      var t = o(
        "WAWebCustomerManagerImportTemplateUtils",
      ).readCustomerManagerImportColumn(e, "acquisitionSource");
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    ((l.buildCustomerRecordInput = e),
      (l.getImportedInternationalPhoneNumber = s),
      (l.getImportedCustomerName = u));
  },
  98,
);
