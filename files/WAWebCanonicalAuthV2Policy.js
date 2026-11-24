__d(
  "WAWebCanonicalAuthV2Policy",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = 5 * o("WATimeUtils").MINUTE_SECONDS,
      u = 1e3,
      c = 6;
    function d(e) {
      return e.phase === "token" && e.cause === "unauthorized";
    }
    function m(e) {
      return d(e) || S(e.cause);
    }
    function p(e, t, n) {
      return e == null || t <= 0 || n < e.lastAttemptAtMs ? 0 : _(e, t);
    }
    function _(e, t) {
      var n = Math.min(e.consecutiveFailures, c);
      return e.lastAttemptAtMs + t * u * Math.pow(2, n);
    }
    function f(e, t) {
      var n;
      return {
        lastAttemptAtMs: t,
        consecutiveFailures:
          (n = e == null ? void 0 : e.consecutiveFailures) != null ? n : 0,
      };
    }
    function g(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "stored"
        )
          return babelHelpers.extends({}, e, { consecutiveFailures: 0 });
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "failed" &&
          "failure" in t &&
          "tokenRequestSent" in t
        ) {
          var n = t.failure,
            r = t.tokenRequestSent;
          if (r || !S(n.cause))
            return babelHelpers.extends({}, e, {
              consecutiveFailures: e.consecutiveFailures + 1,
            });
        }
        return e;
      })(t);
    }
    function h(e, t) {
      return (function (e) {
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "stored") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "newer_issuance")
        )
          return o("WATimeUtils").DAY_SECONDS;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "throttled" &&
          "retryAtMs" in e
        ) {
          var n = e.retryAtMs;
          return b(n, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable"
        )
          return s;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failed" &&
          "retryAtMs" in e
        ) {
          var r = e.retryAtMs;
          return v(r, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "cancelled" &&
          "retryAtMs" in e
        ) {
          var a = e.retryAtMs;
          return v(a, t);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function y(e, t, n) {
      return t <= 0
        ? null
        : e == null || e > n
          ? n
          : e + t * o("WATimeUtils").HOUR_MILLISECONDS;
    }
    function C(e, t, n) {
      return e === "valid"
        ? b(n + t * o("WATimeUtils").HOUR_MILLISECONDS, n)
        : e === "rejected" || e === "incomplete" || e === "error"
          ? o("WATimeUtils").HOUR_SECONDS
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function b(e, t) {
      var n = Math.ceil((e - t) / u);
      return Math.min(Math.max(n, 1), o("WATimeUtils").DAY_SECONDS);
    }
    function v(t, n) {
      return Math.max(b(t, n), e);
    }
    function S(e) {
      return e === "network" || e === "timeout";
    }
    ((l.isRejectedProof = d),
      (l.isRetriableAttemptFailure = m),
      (l.getMintAllowedAtMs = p),
      (l.getMintBackoffEndMs = _),
      (l.claimMintThrottle = f),
      (l.settleMintThrottle = g),
      (l.getMintRetrySeconds = h),
      (l.getValidationDueAtMs = y),
      (l.getValidationRecheckSeconds = C),
      (l.secondsUntil = b));
  },
  98,
);
