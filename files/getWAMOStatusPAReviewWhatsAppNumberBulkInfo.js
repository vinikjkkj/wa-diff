__d(
  "getWAMOStatusPAReviewWhatsAppNumberBulkInfo",
  [
    "AdsReviewViewStrings",
    "WAMOStatusPAReviewWhatsAppNumberBulkLines.react",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.adName,
        n = e.identities,
        a = e.isPartnershipAd;
      return n == null
        ? {
            mainText: o("AdsReviewViewStrings").bulkValueNotApplicable,
            name: t,
          }
        : {
            customComponent: s.jsx(
              r("WAMOStatusPAReviewWhatsAppNumberBulkLines.react"),
              {
                ctwaPhoneNumberIDToFetch: n.ctwaPhoneNumberIDToFetch,
                firstIdentity: n.firstIdentity,
                isPartnershipAd: a,
                secondIdentity: n.secondIdentity,
              },
            ),
            name: t,
          };
    }
    function c(e) {
      return {
        bulkReviewMap: r("immutable").Map(
          e.map(function (e) {
            return [e.adID, u(e)];
          }),
        ),
      };
    }
    l.default = c;
  },
  98,
);
