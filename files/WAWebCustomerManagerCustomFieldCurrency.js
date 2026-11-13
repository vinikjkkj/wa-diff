__d(
  "WAWebCustomerManagerCustomFieldCurrency",
  [
    "WAWebBizComplianceUtil",
    "WAWebCurrencyUtils",
    "WAWebL10NCountryCodes",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        t =
          e != null
            ? o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e.user)
            : o("WAWebBizComplianceUtil").getCountryShortcodeByWid(
                o("WAWebUserUtils").getMeLidUserOrThrow(),
              );
      return o("WAWebCurrencyUtils").currencyForCountryShortcode(
        t != null ? t : "",
      );
    }
    l.getCustomFieldCurrencyForBusiness = e;
  },
  98,
);
