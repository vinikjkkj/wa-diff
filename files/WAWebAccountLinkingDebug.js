__d(
  "WAWebAccountLinkingDebug",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingScheduledJobs",
    "WAWebAccountLinkingUtils",
    "WAWebGpcUoomAPI",
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
      return s.getAccountLinkingData();
    }
    p.doc = "Get account linking data in debug mode";
    async function _() {
      await o("WAWebAccountLinkingAPI").refreshAccessToken();
    }
    _.doc = "Refresh access token in debug mode";
    async function f() {
      await o("WAWebAccountLinkingAPI").ping();
    }
    f.doc = "Ping in debug mode";
    function g() {
      var e = o("WAWebAccountLinkingUtils").checkGPCSetting();
      return "GPC setting is: " + e.toString();
    }
    g.doc = "Check GPC setting in debug mode";
    async function h() {
      await o("WAWebAccountLinkingAPI").stateExists();
    }
    async function y() {
      await o("WAWebAccountLinkingAPI").fetchServiceData();
    }
    async function C() {
      await s.purgeWaffleData();
    }
    async function b() {
      await o("WAWebAccountLinkingScheduledJobs").scheduledWaffleJobs();
    }
    async function v(e) {
      await s.updatePingInterval(e);
    }
    async function S() {
      await o("WAWebGpcUoomAPI").updateUOOMData();
    }
    async function R() {
      await o("WAWebAccountLinkingAPI").generateWAEntACUser({
        rawPassword: "test",
        disclosureId: 1,
        disclosureVersion: "1",
        disclosureLg: "en",
        disclosureLc: "US",
      });
    }
    R.doc = "Generate WAEntACUser in debug mode";
    async function L() {
      await o("WAWebAccountLinkingAPI").generateAccessTokens();
    }
    L.doc = "Generate access tokens for the created WAEntACUser";
    async function E(e) {
      await o("WAWebAccountLinkingAPI").sendLinkingMutation(
        e,
        "IG",
        "waffle_debug",
      );
    }
    E.doc =
      'Send linking mutation with an opaque target account. Usage: sendLinkingMutationDebug("opaque_target_account_string")';
    async function k(t) {
      try {
        var n, r, a;
        (await (a = o("WAWebAccountLinkingAPI")).generateWAEntACUser({
          rawPassword: "test",
          disclosureId: 1,
          disclosureVersion: "1",
          disclosureLg: "en",
          disclosureLc: "US",
        }),
          await a.generateAccessTokens(),
          await a.sendLinkingMutation(t, "IG", "waffle_debug"));
        var i = await a.stateExists(),
          l =
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
          s = i != null && (r = l[i]) != null ? r : "UNKNOWN";
        return s;
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
    k.doc =
      'Run createEntAcUser, generateAccessTokens, linkingMutation, and stateExists. Usage: fullLinkFlowDebug("opaque_target_account_string")';
    var I = {
      updateAccountLinkingStateDebug: u,
      requestNonceFromPrimaryDebug: d,
      fetchValidCertificateDebug: m,
      updateAccountLinkingDataDebug: c,
      getAccountLinkingDataDebug: p,
      refreshAccessTokenDebug: _,
      pingDebug: f,
      checkGPCSettingDebug: g,
      stateExistsDebug: h,
      fetchServiceDataDebug: y,
      purgeWaffleDataDebug: C,
      scheduledWaffleJobsDebug: b,
      setPingIntervalDebug: v,
      updateUoomMutationDebug: S,
      generateWAEntACUserDebug: R,
      generateAccessTokensDebug: L,
      sendLinkingMutationDebug: E,
      fullLinkFlowDebug: k,
    };
    l.default = I;
  },
  98,
);
