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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "debug",
      );
    async function u(e) {
      await s.updateAccountLinkingState(e);
    }
    u.doc = "Update account linking state in debug mode";
    async function c() {
      await s.updateAccountLinkingData("test", "test");
    }
    c.doc = "Update account linking data in debug mode";
    async function d() {
      await o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
    }
    d.doc = "Request nonce from primary in debug mode";
    async function m() {
      await o("WAWebAccountLinkingAPI").fetchValidCertificate();
    }
    m.doc = "Fetch valid certificate in debug mode";
    async function p() {
      return o("WAWebAccountLinkingAPI").runWaffleGetCertsForDebug();
    }
    p.doc =
      "Call the waffle_get_certs GraphQL query directly and show what the server returned: chain lengths, key_ids and TTLs, or the error. Skips the cache, cert validation and the IQ fallback, so it isolates whether GraphQL itself works. ok=true means a payload key_id came back, which is what PKI V2 needs.";
    async function _() {
      var e = await o("WAWebAccountLinkingAPI").fetchValidCertificate();
      if (e == null)
        throw r("err")(
          "[WAFFLE Debug] fetchValidCertificate returned no certificate",
        );
      return {
        passwordIsOaepSha256: e.passwordKeyIsOaepSha256,
        payloadKeyId: e.payloadKeyId,
        pkiVersion:
          e.payloadKeyId == null || e.payloadEncryptionKeyV2 == null ? 1 : 2,
        source: e.source,
      };
    }
    _.doc =
      "Run the real certificate fetch and report which PKI version the next encrypted request would use, and the password envelope that goes with it. The version follows the certificate rather than the transport, so a cache hit reports whichever version populated it and source is attribution only.";
    async function f() {
      await o("WAWebAccountLinkingAPI").forceWafflePkiV2ForDebug();
      var e = await _();
      if (e.pkiVersion !== 2)
        throw r("err")("[WAFFLE Debug] The request path did not retain PKI V2");
      return e;
    }
    f.doc =
      "Force a fresh validated V2 certificate fetch and replace the certificate cache, without IQ fallback. Enable ?gk_enable=web_waffle_pki_migration first. Reports the PKI version selected by the next request; passwordIsOaepSha256 reports whether the password key also migrated. Does not relink the account or refresh existing tokens.";
    async function g() {
      return s.getAccountLinkingData();
    }
    g.doc = "Get account linking data in debug mode";
    async function h() {
      await o("WAWebAccountLinkingAPI").refreshAccessToken();
    }
    h.doc = "Refresh access token in debug mode";
    async function y() {
      await o("WAWebAccountLinkingAPI").ping();
    }
    y.doc = "Ping in debug mode";
    function C() {
      var e = o("WAWebAccountLinkingUtils").checkGPCSetting();
      return "GPC setting is: " + e.toString();
    }
    C.doc = "Check GPC setting in debug mode";
    async function b() {
      await o("WAWebAccountLinkingAPI").stateExists();
    }
    async function v() {
      await o("WAWebAccountLinkingAPI").fetchServiceData();
    }
    async function S() {
      await s.purgeWaffleData();
    }
    async function R() {
      await o("WAWebAccountLinkingScheduledJobs").scheduledWaffleJobs();
    }
    async function L(e) {
      await s.updatePingInterval(e);
    }
    async function E() {
      await o("WAWebGpcUoomAPI").updateUOOMData();
    }
    async function k() {
      await o("WAWebAccountLinkingAdminAPI").generateWAEntACUser({
        rawPassword: "test",
        disclosureId: 1,
        disclosureVersion: "1",
        disclosureLg: "en",
        disclosureLc: "US",
      });
    }
    k.doc = "Generate WAEntACUser in debug mode";
    async function I() {
      await o("WAWebAccountLinkingAdminAPI").generateAccessTokens();
    }
    I.doc = "Generate access tokens for the created WAEntACUser";
    async function T(e) {
      await o("WAWebAccountLinkingAdminAPI").sendLinkingMutation(
        e,
        "IG",
        "waffle_debug",
      );
    }
    T.doc =
      'Send linking mutation with an opaque target account. Usage: sendLinkingMutationDebug("opaque_target_account_string")';
    async function D(t) {
      try {
        var n, r;
        (await o("WAWebAccountLinkingAdminAPI").generateWAEntACUser({
          rawPassword: "test",
          disclosureId: 1,
          disclosureVersion: "1",
          disclosureLg: "en",
          disclosureLc: "US",
        }),
          await o("WAWebAccountLinkingAdminAPI").generateAccessTokens(),
          await o("WAWebAccountLinkingAdminAPI").sendLinkingMutation(
            t,
            "IG",
            "waffle_debug",
          ));
        var a = await o("WAWebAccountLinkingAPI").stateExists(),
          i =
            ((n = {}),
            (n[
              o("WAWebAccountLinkingConstants").AccountLinkingStateExists.ACTIVE
            ] = "ACTIVE"),
            (n[
              o("WAWebAccountLinkingConstants").AccountLinkingStateExists.PAUSED
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
    }
    D.doc =
      'Run createEntAcUser, generateAccessTokens, linkingMutation, and stateExists. Usage: fullLinkFlowDebug("opaque_target_account_string")';
    function x() {
      return o(
        "WAWebMetaAiWaffleAuthTokenCache",
      ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug();
    }
    x.doc =
      "Inspect the Meta AI WAFFLE auth-token cache: blob length, build count, age, TTL, and whether it is stale or refreshing. The blob itself is withheld so a token is not left in console history; use buildCount to tell one build from the next.";
    async function $() {
      return (
        await o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).refreshMetaAiWaffleAuthTokenBlob(),
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug()
      );
    }
    $.doc =
      "Rebuild the Meta AI WAFFLE auth-token blob now and return the resulting cache state.";
    function P() {
      return (
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).clearMetaAiWaffleAuthTokenBlobCache(),
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).getMetaAiWaffleAuthTokenBlobCacheStateForDebug()
      );
    }
    P.doc =
      "Drop the cached Meta AI WAFFLE auth-token blob, simulating a cold cache.";
    var N = {
      updateAccountLinkingStateDebug: u,
      requestNonceFromPrimaryDebug: d,
      fetchValidCertificateDebug: m,
      updateAccountLinkingDataDebug: c,
      getAccountLinkingDataDebug: g,
      refreshAccessTokenDebug: h,
      pingDebug: y,
      checkGPCSettingDebug: C,
      stateExistsDebug: b,
      fetchServiceDataDebug: v,
      purgeWaffleDataDebug: S,
      scheduledWaffleJobsDebug: R,
      setPingIntervalDebug: L,
      updateUoomMutationDebug: E,
      generateWAEntACUserDebug: k,
      generateAccessTokensDebug: I,
      sendLinkingMutationDebug: T,
      fullLinkFlowDebug: D,
      metaAiWaffleTokenCacheDebug: x,
      refreshMetaAiWaffleTokenDebug: $,
      clearMetaAiWaffleTokenDebug: P,
      waffleGetCertsQueryDebug: p,
      waffleCertVersionDebug: _,
      forceWafflePkiV2Debug: f,
    };
    l.default = N;
  },
  98,
);
