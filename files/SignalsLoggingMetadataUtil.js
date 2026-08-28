__d(
  "SignalsLoggingMetadataUtil",
  ["AdsEventsManagerURLProvider", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e = r("AdsEventsManagerURLProvider")().params,
        t = e.accountID,
        n = e.businessID,
        o = e.dataSourceID;
      return { ad_account_id: t, business_id: n, data_source_id: o };
    }
    function u() {
      return { current_url: (e || (e = r("URI"))).getRequestURI().toString() };
    }
    ((l.getUsefulIDs = s), (l.getCurrentURL = u));
  },
  98,
);
