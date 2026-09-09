__d(
  "WAWebBotCertificateRevocationService",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebCertificateUtils",
    "WAWebMexFetchBotCertificateRevocationList",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "[bot-signature-crl]",
      u = 216e5,
      c = 1440 * 60 * 1e3,
      d = 1e3,
      m = 987 * 1e3,
      p = 10,
      _ = {
        revokedSerialNumbers: new Set(),
        lastFetchTime: null,
        nextUpdateTime: null,
        refreshTimerId: null,
        preFetchTimerId: null,
        abortController: null,
      };
    function f(e, t) {
      return _.lastFetchTime == null
        ? "crl_unavailable"
        : _.nextUpdateTime != null && t > _.nextUpdateTime
          ? "crl_stale"
          : _.revokedSerialNumbers.has(e)
            ? "revoked"
            : "valid";
    }
    function g(e, t) {
      return f(e, t) !== "valid";
    }
    function h(e) {
      return !(
        _.lastFetchTime == null ||
        (_.nextUpdateTime != null && e > _.nextUpdateTime)
      );
    }
    function y() {
      _.refreshTimerId == null &&
        (b(),
        (_.refreshTimerId = self.setInterval(function () {
          b();
        }, u)));
    }
    function C(e, t) {
      ((_.revokedSerialNumbers = new Set(e)),
        (_.lastFetchTime = Date.now()),
        (_.nextUpdateTime = t),
        L(t));
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          _.abortController != null && _.abortController.abort();
          var t = new AbortController();
          _.abortController = t;
          try {
            yield o("WAExponentialBackoff").exponentialBackoff(
              { minTimeout: d, maxTimeout: m, retries: p, signal: t.signal },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      yield S(t.signal);
                    } catch (t) {
                      return e(t instanceof Error ? t : r("err")(String(t)));
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (t) {
            if (t instanceof Error && t.name === "AbortError") return;
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " CRL refresh failed after retries",
                  ])),
                s,
              )
              .catching(t instanceof Error ? t : r("err")(String(t)))
              .sendLogs("bot-sig-crl-refresh-exhausted");
          } finally {
            _.abortController === t && (_.abortController = null);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebMexFetchBotCertificateRevocationList",
            ).mexFetchBotCertificateRevocationList(),
            n = t.crl,
            a = t.nextUpdateMs;
          if (!e.aborted) {
            if (n == null) throw r("err")("CRL response has null crl field");
            var i = yield o("WAWebCertificateUtils").parseCrlSerialNumbers(n);
            if (!e.aborted) {
              if (i == null) throw r("err")("Failed to parse CRL binary");
              C(i, a);
            }
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      _.preFetchTimerId != null &&
        (self.clearTimeout(_.preFetchTimerId), (_.preFetchTimerId = null));
      var t = e - c,
        n = Math.max(0, t - Date.now());
      n > 0 &&
        n < u &&
        (_.preFetchTimerId = self.setTimeout(function () {
          b();
        }, n));
    }
    function E() {
      ((_.revokedSerialNumbers = new Set()),
        (_.lastFetchTime = null),
        (_.nextUpdateTime = null),
        _.refreshTimerId != null &&
          (self.clearInterval(_.refreshTimerId), (_.refreshTimerId = null)),
        _.abortController != null &&
          (_.abortController.abort(), (_.abortController = null)),
        _.preFetchTimerId != null &&
          (self.clearTimeout(_.preFetchTimerId), (_.preFetchTimerId = null)));
    }
    ((l.checkCertificateRevocationStatus = f),
      (l.isCertificateRevoked = g),
      (l.isCrlFresh = h),
      (l.startPeriodicCrlRefresh = y),
      (l.updateCrlData = C),
      (l.resetCrlStateForTesting = E));
  },
  98,
);
