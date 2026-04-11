__d(
  "WAWebGetAdsRelayEnvironment",
  [
    "WAWebAdsRelayEnvironment",
    "WAWebFetchAdAccountToken",
    "WAWebUserPrefsCTWA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a =
              (t = e != null ? e : o("WAWebUserPrefsCTWA").getFBIdentity()) !=
              null
                ? t
                : (yield o("WAWebFetchAdAccountToken").fetchToken()).token,
            i = yield o("WAWebAdsRelayEnvironment").getEnvironment({
              accessToken: (n = a == null ? void 0 : a.token) != null ? n : "",
              actorID: (r = a == null ? void 0 : a.bp_id) != null ? r : "",
            });
          return i;
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
