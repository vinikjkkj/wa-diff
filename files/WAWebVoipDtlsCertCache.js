__d(
  "WAWebVoipDtlsCertCache",
  [
    "Promise",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDtlsCertCacheMode",
    "WAWebVoipLocalCallStateStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "DTLS cert requested for a call that is no longer active: " + t,
              ) || this),
            (n.name = "StaleDtlsCertCallError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = null,
      c = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF,
      d = null,
      m = !1,
      p = !1;
    function _(e, t) {
      e !== u && ((u = e), (c = t), (d = null), (m = !1), (p = !1));
    }
    function f(e) {
      e === u &&
        ((u = null),
        (c = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF),
        (d = null),
        (m = !1),
        (p = !1));
    }
    function g() {
      return u;
    }
    function h(e) {
      return e === u
        ? c
        : o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF;
    }
    function y(e) {
      return (
        e === u &&
        !o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
      );
    }
    function C(e) {
      return e === u;
    }
    function b(e) {
      return e !== u || p ? !1 : ((p = !0), !0);
    }
    function v(e) {
      e === u && d == null && (p = !1);
    }
    function S() {
      return RTCPeerConnection.generateCertificate({
        name: "ECDSA",
        namedCurve: "P-256",
      });
    }
    function R(t, r) {
      t !== u ||
        d != null ||
        ((d = (e || (e = n("Promise"))).resolve(r)), (m = !0));
    }
    function L(e) {
      return e !== u || d == null ? "empty" : m ? "ready" : "pending";
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e !== u) throw new s("cache");
          if (d == null) {
            var t = S()
              .then(function (n) {
                return (e === u && d === t && (m = !0), n);
              })
              .catch(function (n) {
                throw (e === u && d === t && ((d = null), (m = !1)), n);
              });
            d = t;
          }
          return d;
        })),
        k.apply(this, arguments)
      );
    }
    ((l.StaleDtlsCertCallError = s),
      (l.beginDtlsCertCall = _),
      (l.endDtlsCertCall = f),
      (l.getActiveDtlsCertCallToken = g),
      (l.getDtlsCertCallMode = h),
      (l.isDtlsCertCallLive = y),
      (l.isDtlsCertCallRegistered = C),
      (l.claimDtlsCertSeed = b),
      (l.releaseDtlsCertSeed = v),
      (l.generateDtlsCert = S),
      (l.storeDtlsCert = R),
      (l.getDtlsCertCacheState = L),
      (l.getOrCreateDtlsCert = E));
  },
  98,
);
