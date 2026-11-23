__d(
  "WAWebVoipDtlsCertAcquire",
  [
    "WAWebCoreActionsODS",
    "WAWebVoipDtlsCertCache",
    "WAWebVoipDtlsCertCacheMode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipDtlsCertCache").getActiveDtlsCertCallToken();
      if (t == null)
        return (
          u("fresh_no_arm", e),
          o("WAWebVoipDtlsCertCache").generateDtlsCert()
        );
      var n = o("WAWebVoipDtlsCertCache").getDtlsCertCallMode(t);
      return n === o("WAWebVoipDtlsCertCacheMode").DtlsCertCacheMode.OFF
        ? (u("fresh_no_arm", e), o("WAWebVoipDtlsCertCache").generateDtlsCert())
        : s(e, t, n);
    }
    async function s(e, t, n) {
      var r = p(e) && o("WAWebVoipDtlsCertCache").claimDtlsCertSeed(t),
        a = _(e, r),
        i = "fresh_path_off";
      if (o("WAWebVoipDtlsCertCacheMode").isCertReuseEnabledForPath(n, a)) {
        var l = o("WAWebVoipDtlsCertCache").getDtlsCertCacheState(t);
        if (!m(l, n)) i = "fresh_unseeded";
        else if (o("WAWebVoipDtlsCertCache").isDtlsCertCallLive(t)) {
          u(d(l), e);
          try {
            return await o("WAWebVoipDtlsCertCache").getOrCreateDtlsCert(t);
          } catch (n) {
            return (u("fresh_after_failure", e), c(t, r));
          }
        } else i = "fresh_call_ending";
      }
      return (u(i, e), c(t, r));
    }
    function u(e, t) {
      o("WAWebCoreActionsODS").logCallSctpDtlsCertSource(e);
    }
    async function c(e, t) {
      try {
        var n = await o("WAWebVoipDtlsCertCache").generateDtlsCert();
        return (t && o("WAWebVoipDtlsCertCache").storeDtlsCert(e, n), n);
      } catch (n) {
        throw (t && o("WAWebVoipDtlsCertCache").releaseDtlsCertSeed(e), n);
      }
    }
    function d(e) {
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
    function m(e, t) {
      return (
        e !== "empty" ||
        o("WAWebVoipDtlsCertCacheMode").canGenerateSharedCert(t)
      );
    }
    function p(e) {
      return e === "initial";
    }
    function _(e, t) {
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
