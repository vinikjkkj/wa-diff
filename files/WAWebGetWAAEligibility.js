__d(
  "WAWebGetWAAEligibility",
  [
    "FBLogger",
    "WAWebFetchAdAccountToken",
    "WAWebGetWAAEligibilityQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a =
              e !== void 0 ? e : (e = n("WAWebGetWAAEligibilityQuery.graphql")),
            i = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (i.type === "success") {
            var l, s;
            try {
              s = yield o("WAWebRelayClient").fetchQuery(
                a,
                {
                  input: {
                    flow_id: t,
                    request_id: new Date().getTime().toString(),
                  },
                },
                { accessToken: i.token, environmentType: "facebook" },
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
            var u = r("nullthrows")(
              (l = s) == null ||
                (l = l.eval_wa_ad_account_eligibility_rules) == null
                ? void 0
                : l.eligibility_result,
            );
            return u !== "DENY";
          }
          if (i.type === "recovery-required") return !0;
          throw (
            r("FBLogger")("wa_ctwa_web").mustfix(
              "WAWebGetWAAEligibility: token fetch failed with type: " +
                i.type +
                " for flowId: " +
                t,
            ),
            r("err")("Failed to fetch token")
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
