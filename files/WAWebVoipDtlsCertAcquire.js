__d(
  "WAWebVoipDtlsCertAcquire",
  [
    "WAWebCoreActionsODS",
    "WAWebVoipDtlsCertCache",
    "WAWebVoipDtlsCertCacheMode",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipDtlsCertCache").getActiveDtlsCertCallToken();
      if (t == null)
        return (
          c("fresh_no_arm", e),
          o("WAWebVoipDtlsCertCache").generateDtlsCert()
        );
      var n = o("WAWebVoipDtlsCertCache").getDtlsCertCallMode(t);
      return n === o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF
        ? (c("fresh_no_arm", e), o("WAWebVoipDtlsCertCache").generateDtlsCert())
        : s(e, t, n);
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = f(e) && o("WAWebVoipDtlsCertCache").claimDtlsCertSeed(t),
            a = g(e, r),
            i = "fresh_path_off";
          if (o("WAWebVoipDtlsCertCacheMode").isCertReuseEnabledForPath(n, a)) {
            var l = o("WAWebVoipDtlsCertCache").getDtlsCertCacheState(t);
            if (!_(l, n)) i = "fresh_unseeded";
            else if (o("WAWebVoipDtlsCertCache").isDtlsCertCallLive(t)) {
              c(p(l), e);
              try {
                return yield o("WAWebVoipDtlsCertCache").getOrCreateDtlsCert(t);
              } catch (n) {
                return (c("fresh_after_failure", e), d(t, r));
              }
            } else i = "fresh_call_ending";
          }
          return (c(i, e), d(t, r));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      o("WAWebCoreActionsODS").logCallSctpDtlsCertSource(e);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebVoipDtlsCertCache").generateDtlsCert();
            return (t && o("WAWebVoipDtlsCertCache").storeDtlsCert(e, n), n);
          } catch (n) {
            throw (t && o("WAWebVoipDtlsCertCache").releaseDtlsCertSeed(e), n);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e === "empty"
        ? "generated_shared"
        : e === "pending"
          ? "inflight_reuse"
          : e === "ready"
            ? "ready_reuse"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e, t) {
      return (
        e !== "empty" ||
        o("WAWebVoipDtlsCertCacheMode").canGenerateSharedCert(t)
      );
    }
    function f(e) {
      return e === "initial";
    }
    function g(e, t) {
      return e === "initial"
        ? t
          ? "initial_seed"
          : "initial_other"
        : e === "mid_call_relay_update"
          ? "mid_call_relay_update"
          : e === "same_path_reconnect"
            ? "same_path_reconnect"
            : e === "ice_restart"
              ? "ice_restart"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.acquireDtlsCert = e;
  },
  98,
);
