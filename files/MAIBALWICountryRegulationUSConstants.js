__d(
  "MAIBALWICountryRegulationUSConstants",
  ["fbt", "AdsRegionalRegulatedCategory"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "US",
      u = Object.freeze([
        r("AdsRegionalRegulatedCategory").US_FINANCIAL_SECURITIES,
      ]);
    function c() {
      return s._(/*BTDS*/ "").toString();
    }
    function d() {
      return s._(/*BTDS*/ "").toString();
    }
    ((l.US_COUNTRY_CODE = e),
      (l.US_REGULATION = r(
        "AdsRegionalRegulatedCategory",
      ).US_FINANCIAL_SECURITIES),
      (l.US_REGULATIONS = u),
      (l.getUSVerifyPrompt = c),
      (l.getUSVerificationMessage = d));
  },
  226,
);
