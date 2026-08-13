__d(
  "WAWebBizBroadcastProRelayEnvironment",
  [
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return o("WAWebRelayEnvironment").getEnvironment({
              accessToken: e.token,
              actorID: e.bp_id,
              environmentType: "facebook",
            });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    l.default = e;
  },
  98,
);
