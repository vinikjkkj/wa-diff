__d(
  "WAWebPaymentsChatUtils",
  ["WAWebL10NCountryCodes", "WAWebLidMigrationUtils", "WAWebMockCountry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (o("WAWebMockCountry").getMockCountry() === t) return !0;
      var n = o("WAWebLidMigrationUtils").toPn(e),
        r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          n == null ? void 0 : n.user,
        );
      return r === t;
    }
    l.doesUserHaveCountryPhoneNumber = e;
  },
  98,
);
