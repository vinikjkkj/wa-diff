__d(
  "syncMAIBAConsentToAdsManagerStore",
  ["AdsManagerRelayEnvironment", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("relay-runtime").commitLocalUpdate(
        r("AdsManagerRelayEnvironment"),
        function (t) {
          var n = t.getRoot(),
            r = n.getLinkedRecord("maiba_viewer");
          r != null && r.setValue(e, "is_user_consented_to_maiba");
        },
      );
    }
    l.default = e;
  },
  98,
);
