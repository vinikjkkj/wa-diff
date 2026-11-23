__d(
  "WAWebGetAdsRelayEnvironment",
  [
    "WAWebAdsRelayEnvironment",
    "WAWebFetchAdAccountToken",
    "WAWebUserPrefsCTWA",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n,
        r,
        a =
          (t = e != null ? e : o("WAWebUserPrefsCTWA").getFBIdentity()) != null
            ? t
            : (await o("WAWebFetchAdAccountToken").fetchToken()).token,
        i = await o("WAWebAdsRelayEnvironment").getEnvironment({
          accessToken: (n = a == null ? void 0 : a.token) != null ? n : "",
          actorID: (r = a == null ? void 0 : a.bp_id) != null ? r : "",
        });
      return i;
    }
    l.default = e;
  },
  98,
);
