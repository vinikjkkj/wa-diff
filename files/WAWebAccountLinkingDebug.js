__d(
  "WAWebAccountLinkingDebug",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingAdminAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingScheduledJobs",
    "WAWebAccountLinkingUtils",
    "WAWebGpcUoomAPI",
    "WAWebMetaAiWaffleAuthTokenCache",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "debug",
      );
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield s.updateAccountLinkingState(e);
        })),
        c.apply(this, arguments)
      );
    }
    u.doc = "Update account linking state in debug mode";
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield s.updateAccountLinkingData("test", "test");
        })),
        m.apply(this, arguments)
      );
    }
    d.doc = "Update account linking data in debug mode";
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
        })),
        _.apply(this, arguments)
      );
    }
    p.doc = "Request nonce from primary in debug mode";
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
        })),
        g.apply(this, arguments)
      );
    }
    f.doc = "Fetch valid certificate in debug mode";
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebAccountLinkingAPI").runWaffleGetCertsForDebug();
        })),
        y.apply(this, arguments)
      );
    }
    h.doc =
      "Call the waffle_get_certs GraphQL query directly and show what the server returned: chain lengths, key_ids and TTLs, or the error. Skips the cache, cert validation and the IQ fallback, so it isolates whether GraphQL itself works. ok=true means a payload key_id came back, which is what PKI V2 needs.";
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
          if (e == null)
            throw r("err")(
              "[WAFFLE Debug] fetchValidCertificate returned no certificate",
            );
          return {
            passwordIsOaepSha256: e.passwordKeyIsOaepSha256,
            payloadKeyId: e.payloadKeyId,
            pkiVersion:
              e.payloadKeyId == null || e.payloadEncryptionKeyV2 == null
                ? 1
                : 2,
            source: e.source,
          };
        })),
        b.apply(this, arguments)
      );
    }
    C.doc =
      "Run the real certificate fetch and report which PKI version the next encrypted request would use, and the password envelope that goes with it. The version follows the certificate rather than the transport, so a cache hit reports whichever version populated it and source is attribution only.";
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return s.getAccountLinkingData();
        })),
        S.apply(this, arguments)
      );
    }
    v.doc = "Get account linking data in debug mode";
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").refreshAccessToken();
        })),
        L.apply(this, arguments)
      );
    }
    R.doc = "Refresh access token in debug mode";
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").ping();
        })),
        k.apply(this, arguments)
      );
    }
    E.doc = "Ping in debug mode";
    function I() {
      var e = o("WAWebAccountLinkingUtils").checkGPCSetting();
      return "GPC setting is: " + e.toString();
    }
    I.doc = "Check GPC setting in debug mode";
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").stateExists();
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").fetchServiceData();
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield s.purgeWaffleData();
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingScheduledJobs").scheduledWaffleJobs();
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield s.updatePingInterval(e);
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebGpcUoomAPI").updateUOOMData();
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAdminAPI").generateWAEntACUser({
            rawPassword: "test",
            disclosureId: 1,
            disclosureVersion: "1",
            disclosureLg: "en",
            disclosureLc: "US",
          });
        })),
        q.apply(this, arguments)
      );
    }
    W.doc = "Generate WAEntACUser in debug mode";
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAdminAPI").generateAccessTokens();
        })),
        V.apply(this, arguments)
      );
    }
    U.doc = "Generate access tokens for the created WAEntACUser";
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebAccountLinkingAdminAPI").sendLinkingMutation(
            e,
            "IG",
            "waffle_debug",
          );
        })),
        G.apply(this, arguments)
      );
    }
    H.doc =
      'Send linking mutation with an opaque target account. Usage: sendLinkingMutationDebug("opaque_target_account_string")';
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n, r;
            (yield o("WAWebAccountLinkingAdminAPI").generateWAEntACUser({
              rawPassword: "test",
              disclosureId: 1,
              disclosureVersion: "1",
              disclosureLg: "en",
              disclosureLc: "US",
            }),
              yield o("WAWebAccountLinkingAdminAPI").generateAccessTokens(),
              yield o("WAWebAccountLinkingAdminAPI").sendLinkingMutation(
                t,
                "IG",
                "waffle_debug",
              ));
            var a = yield o("WAWebAccountLinkingAPI").stateExists(),
              i =
                ((n = {}),
                (n[
                  o(
                    "WAWebAccountLinkingConstants",
                  ).AccountLinkingStateExists.ACTIVE
                ] = "ACTIVE"),
                (n[
                  o(
                    "WAWebAccountLinkingConstants",
                  ).AccountLinkingStateExists.PAUSED
                ] = "PAUSED"),
                (n[
                  o(
                    "WAWebAccountLinkingConstants",
                  ).AccountLinkingStateExists.UNLINKED
                ] = "UNLINKED"),
                n),
              l = a != null && (r = i[a]) != null ? r : "UNKNOWN";
            return l;
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE Debug] fullLinkFlowDebug failed",
                  ])),
              ),
              t
            );
          }
        })),
        j.apply(this, arguments)
      );
    }
    z.doc =
      'Run createEntAcUser, generateAccessTokens, linkingMutation, and stateExists. Usage: fullLinkFlowDebug("opaque_target_account_string")';
    function K() {
      return o(
        "WAWebMetaAiWaffleAuthTokenCache",
      ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug();
    }
    K.doc =
      "Inspect the Meta AI WAFFLE auth-token cache: blob length, build count, age, TTL, and whether it is stale or refreshing. The blob itself is withheld so a token is not left in console history; use buildCount to tell one build from the next.";
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            yield o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).refreshMetaAiWaffleAuthTokenBlob(),
            o(
              "WAWebMetaAiWaffleAuthTokenCache",
            ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug()
          );
        })),
        X.apply(this, arguments)
      );
    }
    Q.doc =
      "Rebuild the Meta AI WAFFLE auth-token blob now and return the resulting cache state.";
    function Y() {
      return (
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).clearMetaAiWaffleAuthTokenBlobCache(),
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug()
      );
    }
    Y.doc =
      "Drop the cached Meta AI WAFFLE auth-token blob, simulating a cold cache.";
    var J = {
      updateAccountLinkingStateDebug: u,
      requestNonceFromPrimaryDebug: p,
      fetchValidCertificateDebug: f,
      updateAccountLinkingDataDebug: d,
      getAccountLinkingDataDebug: v,
      refreshAccessTokenDebug: R,
      pingDebug: E,
      checkGPCSettingDebug: I,
      stateExistsDebug: T,
      fetchServiceDataDebug: x,
      purgeWaffleDataDebug: P,
      scheduledWaffleJobsDebug: M,
      setPingIntervalDebug: A,
      updateUoomMutationDebug: O,
      generateWAEntACUserDebug: W,
      generateAccessTokensDebug: U,
      sendLinkingMutationDebug: H,
      fullLinkFlowDebug: z,
      metaAiWaffleTokenCacheDebug: K,
      refreshMetaAiWaffleTokenDebug: Q,
      clearMetaAiWaffleTokenDebug: Y,
      waffleGetCertsQueryDebug: h,
      waffleCertVersionDebug: C,
    };
    l.default = J;
  },
  98,
);
