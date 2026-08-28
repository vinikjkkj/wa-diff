__d(
  "CometAIHTSMutationRetry",
  [
    "CSRFGuard",
    "DTSG",
    "ExecutionEnvironment",
    "Promise",
    "asyncToGeneratorRuntime",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3,
      c = "1357004",
      d = 2e3;
    function m(e) {
      var t;
      return ((t = e.message) == null ? void 0 : t.includes(c)) === !0;
    }
    function p(e) {
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
        n.includes("Unexpected token")
      );
    }
    function _(e) {
      return m(e) ? "csrf" : p(e) ? "transient" : null;
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t === void 0 && (t = 0), e === "csrf")) return h();
          var n = Math.max(0, Math.min(t, u - 1)),
            r = d * Math.pow(2, n);
          return (yield C(r), !0);
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!(s || (s = r("ExecutionEnvironment"))).canUseDOM) return !1;
          try {
            var e,
              t = yield window.fetch("/ajax/dtsg/?__a=true", {
                credentials: "include",
                method: "GET",
              });
            if (t.status !== 200) return !1;
            var n = yield t.text(),
              a = o("CSRFGuard").clean(n),
              i = JSON.parse(a),
              l = i == null || (e = i.payload) == null ? void 0 : e.token;
            return l == null ? !1 : (o("DTSG").setToken(l), !0);
          } catch (e) {
            return !1;
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      return new (e || (e = n("Promise")))(function (e) {
        return r("setTimeout")(e, t);
      });
    }
    ((l.isCsrfTokenExpiredError = m),
      (l.isTransientNetworkError = p),
      (l.getRetryableErrorType = _),
      (l.prepareRetry = f),
      (l.refreshDTSGToken = h),
      (l.delay = C),
      (l.MAX_RETRIES = u),
      (l.TRANSIENT_RETRY_DELAY_MS = d));
  },
  98,
);
