__d(
  "AdsDSABeneficiaryAndPayorListDataLoader",
  [
    "AsyncTypedRequest",
    "Promise",
    "XAdsDSABeneficiaryAndPayorListControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r("XAdsDSABeneficiaryAndPayorListControllerRouteBuilder")
        .buildUri({ ad_account_id: t })
        .toString();
      return new (e || (e = n("Promise")))(function (e, t) {
        new (r("AsyncTypedRequest"))(o)
          .setMethod("POST")
          .setPayloadHandler(function (t) {
            e(t);
          })
          .setErrorHandler(function (e) {
            t(e);
          })
          .send();
      });
    }
    l.loadDSABeneficiaryAndPayorList = s;
  },
  98,
);
