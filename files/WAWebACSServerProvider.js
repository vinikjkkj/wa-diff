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
              function* (e) {
                var t,
                  n,
                  a = e.blindedTokens,
                  i = e.config,
                  l = e.projectName,
                  s = e.requestProof;
                if (l == null)
                  throw r("err")(
                    "WAWebACSServerProvider: missing project name",
                  );
                var u = a.map(function (e) {
                    return { issue_data: o("WABase64").encodeB64UrlSafe(e) };
                  }),
                  d = yield o("WAWebRelayClient").commitMutation(
                    c,
                    {
                      input: {
                        project_name: l,
                        config_id: i.configId,
                        issue_element: u,
                        request_proof: s,
                      },
                    },
                    { environmentType: "whatsapp_web" },
                  ),
                  m = d == null ? void 0 : d.xwa_wa_acs_issue_credentials;
                if (m == null || m.success !== !0) {
                  var p;
                  throw r("err")(
                    "WAWebACSServerProvider: issuance failed: " +
                      ((p = m == null ? void 0 : m.error_message) != null
                        ? p
                        : "unknown error"),
                  );
                }
                var _ = (t = m.creds) == null ? void 0 : t.evaluation;
                if (!Array.isArray(_))
                  throw r("err")(
                    "WAWebACSServerProvider: evaluation results not an array",
                  );
                var f = [];
                for (var g of _) {
                  var h = g.data;
                  if (h == null || h === "")
                    throw r("err")(
                      "WAWebACSServerProvider: empty evaluation result",
                    );
                  try {
                    var y = JSON.parse(h);
                    f.push(
                      new Uint8Array(
                        o("WABase64").decodeB64UrlSafe(y.evaluation_data),
                      ),
                    );
                  } catch (e) {
                    throw r("err")(
                      "WAWebACSServerProvider: invalid evaluation format",
                    );
                  }
                }
                var C = (n = m.creds) == null ? void 0 : n.proof;
                if (C == null)
                  return { signedBlindedTokens: f, dleqProofs: null };
                if (!Array.isArray(C))
                  throw r("err")(
                    "WAWebACSServerProvider: proof results not an array",
                  );
                var b = [];
                for (var v of C) {
                  var S = v.c,
                    R = v.s;
                  if (S == null || S === "" || R == null || R === "")
                    throw r("err")("WAWebACSServerProvider: empty DLEQ proof");
                  b.push({
                    c: new Uint8Array(o("WABase64").decodeB64UrlSafe(S)),
                    s: new Uint8Array(o("WABase64").decodeB64UrlSafe(R)),
                  });
                }
                return { signedBlindedTokens: f, dleqProofs: b };
              },
            );
            function t(t) {
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
