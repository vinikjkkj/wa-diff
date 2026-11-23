__d(
  "WAWebVoipDtlsCertCache",
  [
    "WAWebVoipCallStateUtils",
    "WAWebVoipDtlsCertCacheMode",
    "WAWebVoipLocalCallStateStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
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
      s = null,
      u = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF,
      c = null,
      d = !1,
      m = !1;
    function p(e, t) {
      e !== s && ((s = e), (u = t), (c = null), (d = !1), (m = !1));
    }
    function _(e) {
      e === s &&
        ((s = null),
        (u = o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF),
        (c = null),
        (d = !1),
        (m = !1));
    }
    function f() {
      return s;
    }
    function g(e) {
      return e === s
        ? u
        : o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF;
    }
    function h(e) {
      return (
        e === s &&
        !o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
      );
    }
    function y(e) {
      return e === s;
    }
    function C(e) {
      return e !== s || m ? !1 : ((m = !0), !0);
    }
    function b(e) {
      e === s && c == null && (m = !1);
    }
    function v() {
      return RTCPeerConnection.generateCertificate({
        name: "ECDSA",
        namedCurve: "P-256",
      });
    }
    function S(e, t) {
      e !== s || c != null || ((c = Promise.resolve(t)), (d = !0));
    }
    function R(e) {
      return e !== s || c == null ? "empty" : d ? "ready" : "pending";
    }
    async function L(t) {
      if (t !== s) throw new e("cache");
      if (c == null) {
        var n = v()
          .then(function (e) {
            return (t === s && c === n && (d = !0), e);
          })
          .catch(function (e) {
            throw (t === s && c === n && ((c = null), (d = !1)), e);
          });
        c = n;
      }
      return c;
    }
    ((l.StaleDtlsCertCallError = e),
      (l.beginDtlsCertCall = p),
      (l.endDtlsCertCall = _),
      (l.getActiveDtlsCertCallToken = f),
      (l.getDtlsCertCallMode = g),
      (l.isDtlsCertCallLive = h),
      (l.isDtlsCertCallRegistered = y),
      (l.claimDtlsCertSeed = C),
      (l.releaseDtlsCertSeed = b),
      (l.generateDtlsCert = v),
      (l.storeDtlsCert = S),
      (l.getDtlsCertCacheState = R),
      (l.getOrCreateDtlsCert = L));
  },
  98,
);
