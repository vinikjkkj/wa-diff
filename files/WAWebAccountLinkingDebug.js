__d(
  "WAWebAccountLinkingDebug",
  [
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingScheduledJobs",
    "WAWebAccountLinkingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
      "debug",
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield e.updateAccountLinkingState(t);
        })),
        u.apply(this, arguments)
      );
    }
    s.doc = "Update account linking state in debug mode";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield e.updateAccountLinkingData("test", "test");
        })),
        d.apply(this, arguments)
      );
    }
    c.doc = "Update account linking data in debug mode";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary();
        })),
        p.apply(this, arguments)
      );
    }
    m.doc = "Request nonce from primary in debug mode";
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
        })),
        f.apply(this, arguments)
      );
    }
    _.doc = "Fetch valid certificate in debug mode";
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return e.getAccountLinkingData();
        })),
        h.apply(this, arguments)
      );
    }
    g.doc = "Get account linking data in debug mode";
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").refreshAccessToken();
        })),
        C.apply(this, arguments)
      );
    }
    y.doc = "Refresh access token in debug mode";
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").ping();
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "Ping in debug mode";
    function S() {
      var e = o("WAWebAccountLinkingUtils").checkGPCSetting();
      return "GPC setting is: " + e.toString();
    }
    S.doc = "Check GPC setting in debug mode";
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").stateExists();
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").fetchServiceData();
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield e.purgeWaffleData();
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingScheduledJobs").scheduledWaffleJobs();
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield e.updatePingInterval(t);
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebAccountLinkingAPI").updateUOOMData();
        })),
        M.apply(this, arguments)
      );
    }
    var w = {
      updateAccountLinkingStateDebug: s,
      requestNonceFromPrimaryDebug: m,
      fetchValidCertificateDebug: _,
      updateAccountLinkingDataDebug: c,
      getAccountLinkingDataDebug: g,
      refreshAccessTokenDebug: y,
      pingDebug: b,
      checkGPCSettingDebug: S,
      stateExistsDebug: R,
      fetchServiceDataDebug: E,
      purgeWaffleDataDebug: I,
      scheduledWaffleJobsDebug: D,
      setPingIntervalDebug: $,
      updateUoomMutationDebug: N,
    };
    l.default = w;
  },
  98,
);
