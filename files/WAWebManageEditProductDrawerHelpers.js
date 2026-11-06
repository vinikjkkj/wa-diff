__d(
  "WAWebManageEditProductDrawerHelpers",
  [
    "WAWebBizCatalogGatingUtils",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebSyntheticCountryCode",
    "WAWebUserPrefsMeUser",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
      o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
    ];
    function s(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null
        ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t.user)
        : e;
    }
    function u(e, t, n, r) {
      if (e != null) {
        var o = e.importerAddress;
        return n === t ? r : o[t];
      }
    }
    function c(t, n) {
      if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled())
        return d(t) && !n;
      if (
        !o(
          "WAWebBizCatalogGatingUtils",
        ).showImporterInformationInEditProductDrawer()
      )
        return !1;
      var a = t == null ? void 0 : t.countryCodeOrigin;
      return !r("isStringNullOrEmpty")(a) && !e.includes(a);
    }
    function d(t) {
      if (
        !o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() ||
        !o(
          "WAWebBizCatalogGatingUtils",
        ).showImporterInformationInEditProductDrawer()
      )
        return !1;
      var n = t == null ? void 0 : t.countryCodeOrigin;
      return !r("isStringNullOrEmpty")(n) && !e.includes(n);
    }
    function m(e) {
      return o(
        "WAWebBizCatalogGatingUtils",
      ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(e);
    }
    function p(e) {
      var t = e.complianceInfo,
        n = e.importerInformationNotApplicableEnabled,
        r = e.showComplianceFields;
      if (r)
        return o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && n
          ? {
              countryCodeOrigin: t == null ? void 0 : t.countryCodeOrigin,
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
              countryCodeOrigin: t == null ? void 0 : t.countryCodeOrigin,
              importerName: t == null ? void 0 : t.importerName,
              importerAddress: {
                street1: t == null ? void 0 : t.importerAddress.street1,
                street2: t == null ? void 0 : t.importerAddress.street2,
                postalCode: t == null ? void 0 : t.importerAddress.postalCode,
                city: t == null ? void 0 : t.importerAddress.city,
                region: t == null ? void 0 : t.importerAddress.region,
                countryCode: t == null ? void 0 : t.importerAddress.countryCode,
              },
            };
    }
    ((l.getCurrencyCountryShortcode = s),
      (l.getImporterAddressFieldValueOnChange = u),
      (l.shouldShowComplianceInfoImporterAddress = c),
      (l.shouldShowComplianceInfoImporterNotApplicableToggle = d),
      (l.shouldComplianceBeHardEnforced = m),
      (l.getComplianceProductChanges = p));
  },
  98,
);
