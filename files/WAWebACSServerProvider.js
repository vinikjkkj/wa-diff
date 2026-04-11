__d(
  "WAWebACSServerProvider",
  [
    "WABase64",
    "WAWebACSServerProviderConfigQuery.graphql",
    "WAWebACSServerProviderIssuanceMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0 ? e : (e = n("WAWebACSServerProviderConfigQuery.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n("WAWebACSServerProviderIssuanceMutation.graphql")),
      d = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getPublicParameters = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o("WAWebRelayClient").fetchQuery(
                  u,
                  { project_name: e },
                  { environmentType: "whatsapp_web" },
                );
                if (n == null)
                  throw r("err")(
                    "WAWebACSServerProvider: config response is null",
                  );
                var a = n.xwa_wa_acs_config;
                return {
                  configId: a.id,
                  cipherSuite: a.cipher_suite,
                  publicKey: new Uint8Array(
                    o("WABase64").decodeB64UrlSafe(a.public_key),
                  ),
                  maxEvals: a.max_evals,
                  maxNumberOfRedemptionsPerToken: a.redemption_limit,
                  configExpiresOnMillis: Number(a.expire_time),
                  tokenTTLOnMillis: a.token_ttl,
                };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.getCredentials = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i, l;
                if (a == null)
                  throw r("err")(
                    "WAWebACSServerProvider: missing project name",
                  );
                var s = t.map(function (e) {
                    return { issue_data: o("WABase64").encodeB64UrlSafe(e) };
                  }),
                  u = yield o("WAWebRelayClient").commitMutation(
                    c,
                    {
                      input: {
                        project_name: a,
                        config_id: e.configId,
                        issue_element: s,
                        request_proof: n,
                      },
                    },
                    { environmentType: "whatsapp_web" },
                  ),
                  d = u == null ? void 0 : u.xwa_wa_acs_issue_credentials;
                if (d == null || d.success !== !0) {
                  var m;
                  throw r("err")(
                    "WAWebACSServerProvider: issuance failed: " +
                      ((m = d == null ? void 0 : d.error_message) != null
                        ? m
                        : "unknown error"),
                  );
                }
                var p = (i = d.creds) == null ? void 0 : i.evaluation;
                if (!Array.isArray(p))
                  throw r("err")(
                    "WAWebACSServerProvider: evaluation results not an array",
                  );
                var _ = [];
                for (var f of p) {
                  var g = f.data;
                  if (g == null || g === "")
                    throw r("err")(
                      "WAWebACSServerProvider: empty evaluation result",
                    );
                  try {
                    var h = JSON.parse(g);
                    _.push(
                      new Uint8Array(
                        o("WABase64").decodeB64UrlSafe(h.evaluation_data),
                      ),
                    );
                  } catch (e) {
                    throw r("err")(
                      "WAWebACSServerProvider: invalid evaluation format",
                    );
                  }
                }
                var y = (l = d.creds) == null ? void 0 : l.proof;
                if (y == null)
                  return { signedBlindedTokens: _, dleqProofs: null };
                if (!Array.isArray(y))
                  throw r("err")(
                    "WAWebACSServerProvider: proof results not an array",
                  );
                var C = [];
                for (var b of y) {
                  var v = b.c,
                    S = b.s;
                  if (v == null || v === "" || S == null || S === "")
                    throw r("err")("WAWebACSServerProvider: empty DLEQ proof");
                  C.push({
                    c: new Uint8Array(o("WABase64").decodeB64UrlSafe(v)),
                    s: new Uint8Array(o("WABase64").decodeB64UrlSafe(S)),
                  });
                }
                return { signedBlindedTokens: _, dleqProofs: C };
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
    l.WAWebACSServerProvider = d;
  },
  98,
);
