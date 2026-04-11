__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSCipherSuiteModule",
    "ACSTokenUtil",
    "LSVoprfWasm",
    "Promise",
    "VoprfWasm",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "ACSClientError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "IllegalStateError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          for (
            var r = yield t.storageManager.getServerConfigs(), o = null, a = 0;
            a < (r == null ? void 0 : r.length);
            a++
          ) {
            var i = r[a];
            if (!m(i)) {
              yield t.storageManager.removeServerConfig(i.configId);
              continue;
            }
            o == null && (o = i);
          }
          return new (e || (e = n("Promise")))(function (e) {
            o != null ? e(o) : e(p(t));
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function p(e) {
      return e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                return (yield e.storageManager.storeServerConfig(t), t);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e);
          return y(e, r, n, t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e),
            o = yield x(e, r, t, n);
          return o;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield b(e, t.cipherSuite, t.configId, r);
            if (o != null) return o;
            var a = yield x(e, t, t.maxEvals, n);
            return S(e, a, t, r);
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield e.storageManager.getCachedToken(n),
              a = yield T(e, t, o, r);
            return (yield k(e, o), a);
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (t.length < 1) throw new u("No tokens received from ACS!");
            var a = t[0],
              i =
                a.serverConfigId === ""
                  ? o("ACSCipherSuiteModule").VOPRF_RISTRETTO_HMACSHA512.value
                  : n.cipherSuite,
              l = yield T(e, i, a, r);
            if (l == null) throw new u("Redeemable token not generated!");
            return (yield L(e, t), l);
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = r.map(function (e) {
            return k(t, e);
          });
          yield (e || (e = n("Promise"))).all(o);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t != null &&
            (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
              ? yield e.storageManager.storeCachedToken(t)
              : yield e.storageManager.deleteCachedToken(t));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (n == null) return null;
            if (o("ACSCachedTokenModule").redeemCachedToken(n)) {
              var a = yield o("ACSTokenUtil").generateTag(t, n, r),
                i = {
                  projectName: e.projectName,
                  attributeIdentifier: e.attributeIdentifier,
                  serverConfigId: n.serverConfigId,
                  tag: a,
                  credential: n.nonce.slice(),
                  data: r,
                  clientSharedSecret: n.sharedSecret.slice(),
                };
              return i;
            } else
              throw new u(
                "Cached token is not redeemable. Neither storage nor ACS should return unredeemable tokens; this should not happen.",
              );
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (n <= 0) throw new s("Invalid number of tokens requested: " + n);
            var a = o("ACSTokenUtil").generateBlindedTokens(
                n,
                e.voprfWasm,
                e.voprfInfo,
              ),
              i = o("ACSTokenUtil").getBlindedNonces(a),
              l = yield e.serverProvider.getCredentials(t, i, r, e.projectName);
            return P(e, t, a, l.signedBlindedTokens, l.dleqProofs, r);
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r, a, i) {
      var l = o("ACSTokenUtil").unblindTokens(
          t,
          n,
          r,
          a,
          e.voprfWasm,
          e.voprfInfo,
          i,
        ),
        s = o("ACSTokenUtil").getCachedTokens(l, t, e.voprfWasm, e.voprfInfo);
      return s;
    }
    function N(e, t, n, r, o) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l =
                i ||
                (r("justknobx")._("786")
                  ? yield o("LSVoprfWasm").LSVoprfWasm({
                      locateFile: o("LSVoprfWasm").locateFile,
                    })
                  : yield o("VoprfWasm").VoprfWasm({
                      locateFile: o("VoprfWasm").locateFile,
                    })),
              s = l.createCurveRistretto(),
              u = l.createVoprfExpTwohashdh(s);
            return {
              projectName: e,
              attributeIdentifier: t,
              serverProvider: n,
              storageManager: a,
              voprfInfo: { curvePtr: s, voprfPtr: u },
              voprfWasm: l,
            };
          },
        )),
        M.apply(this, arguments)
      );
    }
    ((l.ACSClientError = s),
      (l.loadACSServerConfig = c),
      (l.fetchAndRedeem = _),
      (l.loadServerConfigAndGetNewTokens = g),
      (l.getNewTokens = x),
      (l.buildACSClient = N));
  },
  98,
);
