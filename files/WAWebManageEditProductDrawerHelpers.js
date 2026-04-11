__d(
  "WAWebManageEditProductDrawerHelpers",
  [
    "WAWebBizGatingUtils",
    "WAWebComplianceConstants",
    "WAWebCurrencyUtils",
    "WAWebSyntheticCountryCode",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
      o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
    ];
    function s(e, t) {
      return t ? o("WAWebCurrencyUtils").isSupportedCurrency(e) : !0;
    }
    function u(e, t, n, r) {
      if (e != null) {
        var o = e.importerAddress;
        return n === t ? r : o[t];
      }
    }
    function c(t, n) {
      if (o("WAWebBizGatingUtils").isCountryOfOriginEnabled())
        return d(t) && !n;
      if (
        !o("WAWebBizGatingUtils").showImporterInformationInEditProductDrawer()
      )
        return !1;
      var a = t == null ? void 0 : t.countryCodeOrigin;
      return !r("isStringNullOrEmpty")(a) && !e.includes(a);
    }
    function d(t) {
      if (
        !o("WAWebBizGatingUtils").isCountryOfOriginEnabled() ||
        !o("WAWebBizGatingUtils").showImporterInformationInEditProductDrawer()
      )
        return !1;
      var n = t == null ? void 0 : t.countryCodeOrigin;
      return !r("isStringNullOrEmpty")(n) && !e.includes(n);
    }
    function m(e) {
      return o(
        "WAWebBizGatingUtils",
      ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(e);
    }
    function p(e, t, n) {
      if (n)
        return o("WAWebBizGatingUtils").isCountryOfOriginEnabled() && t
          ? {
              countryCodeOrigin: e == null ? void 0 : e.countryCodeOrigin,
              importerName: void 0,
              importerAddress: {
                street1: "",
                street2: "",
                postalCode: "",
                city: "",
                region: "",
                countryCode: "",
              },
            }
          : {
              countryCodeOrigin: e == null ? void 0 : e.countryCodeOrigin,
              importerName: e == null ? void 0 : e.importerName,
              importerAddress: {
                street1: e == null ? void 0 : e.importerAddress.street1,
                street2: e == null ? void 0 : e.importerAddress.street2,
                postalCode: e == null ? void 0 : e.importerAddress.postalCode,
                city: e == null ? void 0 : e.importerAddress.city,
                region: e == null ? void 0 : e.importerAddress.region,
                countryCode: e == null ? void 0 : e.importerAddress.countryCode,
              },
            };
    }
    ((l.canDisplayPrice = s),
      (l.getImporterAddressFieldValueOnChange = u),
      (l.shouldShowComplianceInfoImporterAddress = c),
      (l.shouldShowComplianceInfoImporterNotApplicableToggle = d),
      (l.shouldComplianceBeHardEnforced = m),
      (l.getComplianceProductChanges = p));
  },
  98,
);
