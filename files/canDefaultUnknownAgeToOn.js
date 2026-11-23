__d(
  "canDefaultUnknownAgeToOn",
  [
    "AdsAccountStore",
    "AdsTargetingAccountControlInfoProvider",
    "AdsValidationConsts",
    "WAMOHecCountryRelaxationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t,
        n,
        o,
        a =
          (e =
            (t = r("AdsAccountStore").getSelectedAccount().getValue()) == null
              ? void 0
              : t.account_id) != null
            ? e
            : "";
      return (n =
        (o = r("AdsTargetingAccountControlInfoProvider")
          .toFluxStore()
          .getState()
          .get(a)) == null ||
        (o = o.getValue()) == null ||
        (o = o.audience_controls) == null
          ? void 0
          : o.age_min) != null
        ? n
        : r("AdsValidationConsts").minWAMOStatusAge;
    }
    function s(t, n) {
      var a;
      return t.targeting.user_age_unknown != null ||
        t.saved_audience_id != null ||
        ((a = t.saved_audience) == null ? void 0 : a.id) != null ||
        o("WAMOHecCountryRelaxationUtils").isUnknownAgeForceDisabledForUsCaHec(
          n == null ? void 0 : n.specialAdCategories,
          n == null ? void 0 : n.specialAdCategoryCountry,
        )
        ? !1
        : e() === r("AdsValidationConsts").minWAMOStatusAge;
    }
    l.default = s;
  },
  98,
);
