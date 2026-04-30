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
    "asyncToGeneratorRuntime",
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
          return s.getAccountLinkingData();
        })),
        y.apply(this, arguments)
      );
    }
    h.doc = "Get account linking data in debug mode";
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").refreshAccessToken();
        })),
        b.apply(this, arguments)
      );
    }
    C.doc = "Refresh access token in debug mode";
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").ping();
        })),
        S.apply(this, arguments)
      );
    }
    v.doc = "Ping in debug mode";
    function R() {
      var e = o("WAWebAccountLinkingUtils").checkGPCSetting();
      return "GPC setting is: " + e.toString();
    }
    R.doc = "Check GPC setting in debug mode";
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").stateExists();
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").fetchServiceData();
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield s.purgeWaffleData();
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
          yield o("WAWebAccountLinkingScheduledJobs").scheduledWaffleJobs();
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield s.updatePingInterval(e);
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
          yield o("WAWebAccountLinkingAPI").updateUOOMData();
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").generateWAEntACUser({
            rawPassword: "test",
            disclosureId: 1,
            disclosureVersion: "1",
            disclosureLg: "en",
            disclosureLc: "US",
          });
        })),
        F.apply(this, arguments)
      );
    }
    A.doc = "Generate WAEntACUser in debug mode";
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").generateAccessTokens();
        })),
        B.apply(this, arguments)
      );
    }
    O.doc = "Generate access tokens for the created WAEntACUser";
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebAccountLinkingAPI").sendLinkingMutation(e, "IG");
        })),
        q.apply(this, arguments)
      );
    }
    W.doc =
      'Send linking mutation with an opaque target account. Usage: sendLinkingMutationDebug("opaque_target_account_string")';
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n, r, a;
            (yield (a = o("WAWebAccountLinkingAPI")).generateWAEntACUser({
              rawPassword: "test",
              disclosureId: 1,
              disclosureVersion: "1",
              disclosureLg: "en",
              disclosureLc: "US",
            }),
              yield a.generateAccessTokens(),
              yield a.sendLinkingMutation(t, "IG"));
            var i = yield a.stateExists(),
              l =
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
        })),
        V.apply(this, arguments)
      );
    }
    U.doc =
      'Run createEntAcUser, generateAccessTokens, linkingMutation, and stateExists. Usage: fullLinkFlowDebug("opaque_target_account_string")';
    var H = {
      updateAccountLinkingStateDebug: u,
      requestNonceFromPrimaryDebug: p,
      fetchValidCertificateDebug: f,
      updateAccountLinkingDataDebug: d,
      getAccountLinkingDataDebug: h,
      refreshAccessTokenDebug: C,
      pingDebug: v,
      checkGPCSettingDebug: R,
      stateExistsDebug: L,
      fetchServiceDataDebug: k,
      purgeWaffleDataDebug: T,
      scheduledWaffleJobsDebug: x,
      setPingIntervalDebug: P,
      updateUoomMutationDebug: M,
      generateWAEntACUserDebug: A,
      generateAccessTokensDebug: O,
      sendLinkingMutationDebug: W,
      fullLinkFlowDebug: U,
    };
    l.default = H;
  },
  98,
);
