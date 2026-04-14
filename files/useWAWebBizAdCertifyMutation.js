__d(
  "useWAWebBizAdCertifyMutation",
  [
    "CometRelay",
    "react",
    "relay-runtime",
    "useWAWebBizAdCertifyMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback,
      c = e !== void 0 ? e : (e = n("useWAWebBizAdCertifyMutation.graphql"));
    function d() {
      var e = o("CometRelay").useRelayEnvironment();
      return u(
        function (t, n) {
          return o("CometRelay").commitMutation(e, {
            mutation: c,
            onCompleted: function (n, r) {
              t();
            },
            onError: n,
            updater: function (t) {
              var e = t.get(o("relay-runtime").VIEWER_ID);
              e != null && e.setValue(!0, "ad_integrity_certification");
            },
            variables: { input: { source: "wa_web" } },
          });
        },
        [e],
      );
    }
    l.default = d;
  },
  98,
);
