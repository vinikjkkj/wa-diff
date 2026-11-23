__d(
  "CometAIHTSMutationRetry",
  ["CSRFGuard", "DTSG", "ExecutionEnvironment", "justknobx", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = "1357004",
      c = "aa_genpop/comet_ai_hts:empty_envelope_send_retry",
      d = 2e3,
      m = 1e3;
    function p(e) {
      var t;
      return ((t = e.message) == null ? void 0 : t.includes(u)) === !0;
    }
    function _(e) {
      return (
        e.includes("No data returned for operation") &&
        e.includes("(No errors)")
      );
    }
    function f(e) {
      var t;
      if (
        e.name === "NetworkTimeoutError" ||
        e.name === "NetworkTransportError" ||
        e.name === "NetworkRequestError"
      )
        return !0;
      var n = (t = e.message) != null ? t : "";
      return (
        n.includes("HTTP_TRANSPORT_ERROR") ||
        n.includes("Network request timed out") ||
        n.includes("invalid JSON") ||
        n.includes("Unexpected end of JSON") ||
        n.includes("Unexpected token") ||
        (_(n) && r("justknobx")._("4016"))
      );
    }
    function g(e) {
      return p(e) ? "csrf" : f(e) ? "transient" : null;
    }
    async function h(e, t) {
      if ((t === void 0 && (t = 0), e === "csrf")) {
        if (t > 0) {
          var n = Math.min(t, s - 1);
          await C(m * Math.pow(2, n - 1));
        }
        return y();
      }
      var r = Math.max(0, Math.min(t, s - 1)),
        o = d * Math.pow(2, r);
      return (await C(o), !0);
    }
    async function y() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM)
        try {
          var t,
            n = await window.fetch("/ajax/dtsg/?__a=true", {
              credentials: "include",
              method: "GET",
            });
          if (n.status !== 200) return !1;
          var a = await n.text(),
            i = o("CSRFGuard").clean(a),
            l = JSON.parse(i),
            s = l == null || (t = l.payload) == null ? void 0 : t.token;
          return s == null ? !1 : (o("DTSG").setToken(s), !0);
        } catch (e) {
          return !1;
        }
      return !1;
    }
    function C(e) {
      return new Promise(function (t) {
        return r("setTimeout")(t, e);
      });
    }
    ((l.EMPTY_ENVELOPE_RETRY_JK = c),
      (l.isTransientNetworkError = f),
      (l.getRetryableErrorType = g),
      (l.prepareRetry = h),
      (l.MAX_RETRIES = s));
  },
  98,
);
