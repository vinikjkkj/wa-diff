__d(
  "privateStatsToken",
  [
    "Promise",
    "WAACSTokenUtils",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAErrors",
    "WALogger",
    "WAPromiseRetryLoop",
    "WATimeUtils",
    "WAWamPrivateStatsToken",
    "WAWamStorage",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3,
      m = new (r("WADeprecatedWapParser"))("issuePrivateStatsToken", function (
        e,
      ) {
        var t = e.child("sign_credential"),
          n = t.child("signed_credential"),
          r = n.contentBytes(),
          o = t.child("acs_public_key"),
          a = o.contentBytes();
        return { signedCredential: r, acsPublicKey: a };
      });
    function p(e) {
      switch (e.errorCode) {
        case 400:
          return "bad-request";
        case 500:
          return "internal-server-error";
        case 501:
          return "feature-not-implemented";
        case 503:
          return "service-unavailable";
        default:
          return "unknown";
      }
    }
    function _(t) {
      var r = o("WATimeUtils").monotonicTime(),
        a = { overallStartTime: r, retryStartTime: r, retryAttemptsLeft: d },
        i = o("WAACSTokenUtils").getBlindedToken(),
        l = i.blindedToken,
        _ = i.blindingFactor,
        f = i.token,
        g = function (i) {
          a.retryAttemptsLeft < d &&
            (a.retryStartTime = o("WATimeUtils").monotonicTime());
          var r = o("WAWap").wap(
              "iq",
              {
                id: o("WAWap").generateId(),
                to: o("WAWap").S_WHATSAPP_NET,
                type: "get",
                xmlns: "privatestats",
              },
              o("WAWap").wap(
                "sign_credential",
                { version: "1" },
                o("WAWap").wap("blinded_credential", null, l),
              ),
            ),
            g = t || o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry;
          return g(r, m)
            .then(function (t) {
              if (!t.success) {
                var n = p(t);
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "issuePrivateStatsToken: failed ",
                      "",
                    ])),
                  n,
                ),
                  n !== "internal-server-error" || a.retryAttemptsLeft <= 0
                    ? i({
                        result: null,
                        metric: babelHelpers.extends({}, a, { result: n }),
                      })
                    : a.retryAttemptsLeft--);
                return;
              }
              var r = t.result,
                l = r.acsPublicKey,
                u = r.signedCredential,
                c = o("WAWamPrivateStatsToken").unblindToken(u, _, l);
              if (c == null) {
                (o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "issuePrivateStatsToken: failed to unblind the signed token",
                    ])),
                ),
                  i({
                    result: null,
                    metric: babelHelpers.extends({}, a, {
                      result: "decryption-error",
                    }),
                  }));
                return;
              }
              i({
                result: {
                  token: f,
                  sharedSecret: o("WAACSTokenUtils").getSharedSecret({
                    token: f,
                    unblindedSignedToken: c,
                  }),
                },
                metric: babelHelpers.extends({}, a, { result: "success" }),
              });
            })
            .catch(function (e) {
              if (e instanceof o("WAErrors").Disconnected)
                (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "issuePrivateStatsToken: Disconnected",
                    ])),
                ),
                  a.retryAttemptsLeft <= 0
                    ? i({
                        result: null,
                        metric: babelHelpers.extends({}, a, {
                          result: "disconnected",
                        }),
                      })
                    : a.retryAttemptsLeft--);
              else return (c || (c = n("Promise"))).reject(e);
            });
        },
        h = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "issuePrivateStatsToken",
          timer: { algo: { type: "exponential", first: 250 }, max: 1e3 },
          code: g,
        });
      return (h.start(), h.promise());
    }
    function f(e) {
      return o("WAWamStorage")
        .redeemPrivateStatsToken()
        .then(function (t) {
          return t
            ? { result: t }
            : _(e).then(function (e) {
                var t = babelHelpers.extends({}, e),
                  n = e.result;
                return n
                  ? o("WAWamStorage")
                      .savePrivateStatsToken(n)
                      .then(function () {
                        return t;
                      })
                  : t;
              });
        });
    }
    ((l.issuePrivateStatsToken = _), (l.getToken = f));
  },
  98,
);
