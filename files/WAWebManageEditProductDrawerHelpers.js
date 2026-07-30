__d(
  "WAWebManageEditProductDrawerHelpers",
  [
    "WAWebBizCatalogGatingUtils",
    "WAWebComplianceConstants",
    "WAWebCurrencyUtils",
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
    function s(e, t) {
      return t ? o("WAWebCurrencyUtils").isSupportedCurrency(e) : !0;
    }
    function u(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return t != null
        ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t.user)
        : e;
    }
    function c(e, t, n, r) {
      if (e != null) {
        var o = e.importerAddress;
        return n === t ? r : o[t];
      }
    }
    function d(t, n) {
      if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled())
        return m(t) && !n;
      if (
        !o(
          "WAWebBizCatalogGatingUtils",
        ).showImporterInformationInEditProductDrawer()
      )
        return !1;
      var a = t == null ? void 0 : t.countryCodeOrigin;
      return !r("isStringNullOrEmpty")(a) && !e.includes(a);
    }
    function m(t) {
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
    function p(e) {
      return o(
        "WAWebBizCatalogGatingUtils",
      ).canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney(e);
    }
    function _(e, t, n) {
      if (n)
        return o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && t
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
      (l.getCurrencyCountryShortcode = u),
      (l.getImporterAddressFieldValueOnChange = c),
      (l.shouldShowComplianceInfoImporterAddress = d),
      (l.shouldShowComplianceInfoImporterNotApplicableToggle = m),
      (l.shouldComplianceBeHardEnforced = p),
      (l.getComplianceProductChanges = _));
  },
  98,
);
