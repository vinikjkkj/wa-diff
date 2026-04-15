__d(
  "useWAWebBizAdCertifyMutation",
  [
    "CometRelay",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useRelayEnvironment(),
        n;
      return (
        e[0] !== t
          ? ((n = function (n, r) {
              return o("CometRelay").commitMutation(t, {
                mutation: c,
                onCompleted: function (t, r) {
                  n();
                },
                onError: r,
                updater: m,
                variables: { input: { source: "wa_web" } },
              });
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function m(e) {
      var t = e.get(o("relay-runtime").VIEWER_ID);
      t != null && t.setValue(!0, "ad_integrity_certification");
    }
    l.default = d;
  },
  98,
);
