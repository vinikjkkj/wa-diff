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
        retryCount: 5,
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
    function _(e) {
      var t = m.initialDelayMs * Math.pow(m.backoffMultiplier, e),
        n = t * m.jitterPercent,
        r = t + (Math.random() * 2 - 1) * n;
      return Math.min(r, m.maxDelayMs);
    }
    function f(e) {
      if (e == null) return null;
      var t = e.trim();
      if (t === "") return null;
      if (/^\d+$/.test(t)) {
        var n = Number(t);
        return Math.min(n * 1e3, m.maxDelayMs);
      }
      if (!/[A-Za-z]/.test(t)) return null;
      var r = Date.parse(t);
      if (!Number.isFinite(r)) return null;
      var o = Math.max(0, r - Date.now());
      return Math.min(o, m.maxDelayMs);
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
