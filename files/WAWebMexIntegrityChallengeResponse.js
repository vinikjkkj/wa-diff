__d(
  "WAWebMexIntegrityChallengeResponse",
  [
    "WAWebMexClient",
    "WAWebMexIntegrityChallengeResponseMutation.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "PASSKEY",
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexIntegrityChallengeResponseMutation.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {
              input: {
                challenge_type: s,
                passkey_response: {
                  signed_challenge: btoa(JSON.stringify(e)),
                  prf_available: e.prf_output != null,
                },
              },
            },
            n = yield o("WAWebMexClient").fetchQuery(u, t);
          return n.xwa2_submit_integrity_challenge_response;
        })),
        d.apply(this, arguments)
      );
    }
    l.mexSubmitPasskeyChallengeResponse = c;
  },
  98,
);
