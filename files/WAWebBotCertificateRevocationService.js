__d(
  "WAWebBotCertificateRevocationService",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebCertificateUtils",
    "WAWebMexFetchBotCertificateRevocationList",
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
      return {
        hasCrl: _.lastFetchTime != null,
        isFresh: h(Date.now()),
        revokedCount: _.revokedSerialNumbers.size,
        lastFetchTime: _.lastFetchTime,
        nextUpdateTime: _.nextUpdateTime,
      };
    }
    function C() {
      _.refreshTimerId == null &&
        (S(),
        (_.refreshTimerId = self.setInterval(function () {
          S();
        }, u)));
    }
    function b() {
      (_.refreshTimerId != null &&
        (self.clearInterval(_.refreshTimerId), (_.refreshTimerId = null)),
        _.abortController != null &&
          (_.abortController.abort(), (_.abortController = null)),
        _.preFetchTimerId != null &&
          (self.clearTimeout(_.preFetchTimerId), (_.preFetchTimerId = null)));
    }
    function v(e, t) {
      ((_.revokedSerialNumbers = new Set(e)),
        (_.lastFetchTime = Date.now()),
        (_.nextUpdateTime = t),
        L(t));
    }
    async function S() {
      _.abortController != null && _.abortController.abort();
      var t = new AbortController();
      _.abortController = t;
      try {
        await o("WAExponentialBackoff").exponentialBackoff(
          { minTimeout: d, maxTimeout: m, retries: p, signal: t.signal },
          async function (e) {
            try {
              await R(t.signal);
            } catch (t) {
              return e(t instanceof Error ? t : r("err")(String(t)));
            }
          },
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
    }
    async function R(e) {
      var t = await o(
          "WAWebMexFetchBotCertificateRevocationList",
        ).mexFetchBotCertificateRevocationList(),
        n = t.crl,
        a = t.nextUpdateMs;
      if (!e.aborted) {
        if (n == null) throw r("err")("CRL response has null crl field");
        var i = await o("WAWebCertificateUtils").parseCrlSerialNumbers(n);
        if (!e.aborted) {
          if (i == null) throw r("err")("Failed to parse CRL binary");
          v(i, a);
        }
      }
    }
    function L(e) {
      _.preFetchTimerId != null &&
        (self.clearTimeout(_.preFetchTimerId), (_.preFetchTimerId = null));
      var t = e - c,
        n = Math.max(0, t - Date.now());
      n > 0 &&
        n < u &&
        (_.preFetchTimerId = self.setTimeout(function () {
          S();
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
      (l.getCrlStatus = y),
      (l.startPeriodicCrlRefresh = C),
      (l.stopPeriodicCrlRefresh = b),
      (l.updateCrlData = v),
      (l.resetCrlStateForTesting = E));
  },
  98,
);
