__d(
  "WAWebGetWAAEligibility",
  [
    "FBLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGetWAAEligibilityQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "waa_eligibility_cache",
      u = 6048e5;
    function c() {
      var e = r("WAWebUserPrefsStore").getUser(s);
      if (e != null && typeof e == "object") {
        var t = e.eligible,
          n = e.timestamp;
        if (typeof t == "boolean" && typeof n == "number" && Date.now() - n < u)
          return t;
      }
      return null;
    }
    function d(e) {
      r("WAWebUserPrefsStore").setUser(s, {
        eligible: e,
        timestamp: Date.now(),
      });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (r("justknobx")._("1042")) {
            var a = c();
            if (a != null) return a;
          }
          var i =
              e !== void 0 ? e : (e = n("WAWebGetWAAEligibilityQuery.graphql")),
            l = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (l.type === "success") {
            var s, u;
            try {
              u = yield o("WAWebRelayClient").fetchQuery(
                i,
                {
                  input: {
                    flow_id: t,
                    request_id: new Date().getTime().toString(),
                  },
                },
                { accessToken: l.token, environmentType: "facebook" },
              );
            } catch (e) {
              throw (
                r("FBLogger")("wa_ctwa_web")
                  .catching(e)
                  .mustfix(
                    "WAWebGetWAAEligibility: eligibility query failed for flowId: " +
                      t,
                  ),
                e
              );
            }
            var m = r("nullthrows")(
                (s = u) == null ||
                  (s = s.eval_wa_ad_account_eligibility_rules) == null
                  ? void 0
                  : s.eligibility_result,
              ),
              p = m !== "DENY";
            return (r("justknobx")._("1042") && d(p), p);
          }
          if (l.type === "recovery-required")
            return (r("justknobx")._("1042") && d(!0), !0);
          throw (
            r("FBLogger")("wa_ctwa_web").mustfix(
              "WAWebGetWAAEligibility: token fetch failed with type: " +
                l.type +
                " for flowId: " +
                t,
            ),
            r("err")("Failed to fetch token")
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
