__d(
  "WAWebBizBroadcastProRelayEnvironment",
  ["WAWebFetchWithAdAccountToken", "WAWebRelayEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
        async function (e) {
          return o("WAWebRelayEnvironment").getEnvironment({
            accessToken: e.token,
            actorID: e.bp_id,
            environmentType: "facebook",
          });
        },
      );
    }
    l.default = e;
  },
  98,
);
