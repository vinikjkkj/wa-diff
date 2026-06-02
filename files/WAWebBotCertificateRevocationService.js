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
      s,
      u,
      c = "[bot-signature-crl]",
      d = 216e5,
      m = 1440 * 60 * 1e3,
      p = 1e3,
      _ = 987 * 1e3,
      f = 10,
      g = {
        revokedSerialNumbers: new Set(),
        lastFetchTime: null,
        nextUpdateTime: null,
        refreshTimerId: null,
        preFetchTimerId: null,
        abortController: null,
      };
    function h(t, n) {
      return g.lastFetchTime == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " No CRL available, treating certificate as potentially revoked",
                ])),
              c,
            )
            .sendLogs("bot-sig-crl-unavailable"),
          !0)
        : g.nextUpdateTime != null && n > g.nextUpdateTime
          ? (o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " CRL is stale, treating certificate as potentially revoked",
                  ])),
                c,
              )
              .sendLogs("bot-sig-crl-stale"),
            !0)
          : g.revokedSerialNumbers.has(t);
    }
    function y(e) {
      return !(
        g.lastFetchTime == null ||
        (g.nextUpdateTime != null && e > g.nextUpdateTime)
      );
    }
    function C() {
      return {
        hasCrl: g.lastFetchTime != null,
        isFresh: y(Date.now()),
        revokedCount: g.revokedSerialNumbers.size,
        lastFetchTime: g.lastFetchTime,
        nextUpdateTime: g.nextUpdateTime,
      };
    }
    function b() {
      g.refreshTimerId == null &&
        (R(),
        (g.refreshTimerId = self.setInterval(function () {
          R();
        }, d)));
    }
    function v() {
      (g.refreshTimerId != null &&
        (self.clearInterval(g.refreshTimerId), (g.refreshTimerId = null)),
        g.abortController != null &&
          (g.abortController.abort(), (g.abortController = null)),
        g.preFetchTimerId != null &&
          (self.clearTimeout(g.preFetchTimerId), (g.preFetchTimerId = null)));
    }
    function S(e, t) {
      ((g.revokedSerialNumbers = new Set(e)),
        (g.lastFetchTime = Date.now()),
        (g.nextUpdateTime = t),
        E(t));
    }
    async function R() {
      g.abortController != null && g.abortController.abort();
      var e = new AbortController();
      g.abortController = e;
      try {
        await o("WAExponentialBackoff").exponentialBackoff(
          { minTimeout: p, maxTimeout: _, retries: f, signal: e.signal },
          async function (t) {
            try {
              await L(e.signal);
            } catch (e) {
              return t(e instanceof Error ? e : r("err")(String(e)));
            }
          },
        );
      } catch (e) {
        if (e instanceof Error && e.name === "AbortError") return;
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CRL refresh failed after retries",
              ])),
            c,
          )
          .catching(e instanceof Error ? e : r("err")(String(e)))
          .sendLogs("bot-sig-crl-refresh-exhausted");
      } finally {
        g.abortController === e && (g.abortController = null);
      }
    }
    async function L(e) {
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
          S(i, a);
        }
      }
    }
    function E(e) {
      g.preFetchTimerId != null &&
        (self.clearTimeout(g.preFetchTimerId), (g.preFetchTimerId = null));
      var t = e - m,
        n = Math.max(0, t - Date.now());
      n > 0 &&
        n < d &&
        (g.preFetchTimerId = self.setTimeout(function () {
          R();
        }, n));
    }
    function k() {
      ((g.revokedSerialNumbers = new Set()),
        (g.lastFetchTime = null),
        (g.nextUpdateTime = null),
        g.refreshTimerId != null &&
          (self.clearInterval(g.refreshTimerId), (g.refreshTimerId = null)),
        g.abortController != null &&
          (g.abortController.abort(), (g.abortController = null)),
        g.preFetchTimerId != null &&
          (self.clearTimeout(g.preFetchTimerId), (g.preFetchTimerId = null)));
    }
    ((l.isCertificateRevoked = h),
      (l.isCrlFresh = y),
      (l.getCrlStatus = C),
      (l.startPeriodicCrlRefresh = b),
      (l.stopPeriodicCrlRefresh = v),
      (l.updateCrlData = S),
      (l.resetCrlStateForTesting = k));
  },
  98,
);
