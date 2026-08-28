__d(
  "AdsDraftRealtimeSubscription",
  [
    "AdsDraftRealtimeSubscription.graphql",
    "RelayFBEnvironment",
    "RelayFBSubscription",
    "RelayRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("AdsDraftRealtimeSubscription.graphql"));
    function u(e, t, n) {
      return (
        n === void 0 && (n = r("RelayFBEnvironment")),
        o("RelayFBSubscription").addFBisms(
          r("RelayRuntime").requestSubscription,
        )(n, {
          subscription: s,
          variables: { input: { ad_draft_id: e } },
          onNext: t,
        })
      );
    }
    l.subscribe = u;
  },
  98,
);
