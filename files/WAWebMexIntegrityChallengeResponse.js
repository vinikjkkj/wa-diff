__d(
  "WAWebMexIntegrityChallengeResponse",
  ["WAWebMexClient", "WAWebMexIntegrityChallengeResponseMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "PASSKEY",
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexIntegrityChallengeResponseMutation.graphql"));
    async function c(e) {
      var t = {
          input: {
            challenge_type: s,
            passkey_response: {
              signed_challenge: btoa(JSON.stringify(e)),
              prf_available: e.prf_output != null,
            },
          },
        },
        n = await o("WAWebMexClient").fetchQuery(u, t);
      return n.xwa2_submit_integrity_challenge_response;
    }
    l.mexSubmitPasskeyChallengeResponse = c;
  },
  98,
);
