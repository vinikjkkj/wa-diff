__d(
  "VideoPlayerRetryConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 8e3,
        retryBehavior: "exponential",
        retryCount: 20,
      }),
      l = Object.freeze({
        retryBehavior: "linear",
        retryCount: 20,
        retryDelayMs: 2e3,
      }),
      s = Object.freeze({
        backoffMultiplier: 2,
        initialDelayMs: 200,
        jitterPercent: 0.2,
        maxDelayMs: 2e3,
        retryBehavior: "exponential",
        retryCount: 2,
      }),
      u = Object.freeze({
        retryBehavior: "linear",
        retryCount: 2,
        retryDelayMs: 2e3,
      }),
      c = Object.freeze({
        backoffMultiplier: 1.5,
        initialDelayMs: 1e3,
        jitterPercent: 0.3,
        maxDelayMs: 3e4,
        retryBehavior: "exponential",
        retryCount: Number.POSITIVE_INFINITY,
      }),
      d = Object.freeze({
        retryBehavior: "linear",
        retryCount: Number.POSITIVE_INFINITY,
        retryDelayMs: 5e3,
      }),
      m = e;
    function p(e) {
      return (
        e === "URL_RESPONSE_HTTP_429" ||
        e === "URL_RESPONSE_HTTP_503" ||
        e === "URL_RESPONSE_HTTP_504"
      );
    }
    function _(e, t) {
      t === void 0 && (t = m);
      var n = t.initialDelayMs * Math.pow(t.backoffMultiplier, e),
        r = n * t.jitterPercent,
        o = n + (Math.random() * 2 - 1) * r;
      return Math.min(o, t.maxDelayMs);
    }
    function f(e, t) {
      if ((t === void 0 && (t = m), e == null)) return null;
      var n = e.trim();
      if (n === "") return null;
      if (/^\d+$/.test(n)) {
        var r = Number(n);
        return Math.min(r * 1e3, t.maxDelayMs);
      }
      if (!/[A-Za-z]/.test(n)) return null;
      var o = Date.parse(n);
      if (!Number.isFinite(o)) return null;
      var a = Math.max(0, o - Date.now());
      return Math.min(a, t.maxDelayMs);
    }
    function g(t) {
      return t
        ? {
            fetchRejection: e,
            httpNotOk: e,
            httpNotOkUnrecoverable: s,
            offline: c,
            responseDataFailed: e,
          }
        : {
            fetchRejection: l,
            httpNotOk: l,
            httpNotOkUnrecoverable: u,
            offline: d,
            responseDataFailed: l,
          };
    }
    ((i.PROGRESSIVE_RETRY_CONFIG = m),
      (i.isRetriableTransientHttpResponseErrorName = p),
      (i.computeBackoffMs = _),
      (i.parseRetryAfterMs = f),
      (i.getFetchedResourceRetryConfig = g));
  },
  66,
);
