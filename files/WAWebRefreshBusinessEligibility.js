__d(
  "WAWebRefreshBusinessEligibility",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizBroadcastEligibilityCache",
    "WAWebBizBroadcastGenAIEligibilityModel",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastMarketingMessagesEligibilityModel",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebGetBusinessEligibilityJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { maxTimeout: 1e4, minTimeout: 1e3, retries: 2 },
      c = null;
    function d(e) {
      var t, n;
      (o(
        "WAWebBizBroadcastMarketingMessagesEligibilityModel",
      ).updateMarketingMessagesEligibility(
        (e == null || (t = e.marketingMessages) == null ? void 0 : t.status) ===
          "SUCCESS",
      ),
        o("WAWebBizBroadcastGenAIEligibilityModel").updateGenAIEligibility(
          (e == null || (n = e.genai) == null ? void 0 : n.status) ===
            "SUCCESS",
        ));
    }
    function m(e) {
      var t;
      (d(e),
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).updateBizBroadcastProEligibility(
          e == null || (t = e.bbPro) == null ? void 0 : t.status,
        ));
    }
    function p(e) {
      if ((d(e), e != null)) {
        var t;
        o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).updateBizBroadcastProEligibility(
          (t = e.bbPro) == null ? void 0 : t.status,
        );
      }
    }
    function _() {
      var e = new AbortController();
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, u, { signal: e.signal }),
        function (e) {
          return o("WAWebGetBusinessEligibilityJob")
            .getBusinessEligibility({
              checkBBPro: o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled(),
              checkGenAI: o(
                "WAWebBizBroadcastGenAIGating",
              ).isGenAIMasterEnabled(),
              checkMarketingMessages: !0,
            })
            .catch(function (t) {
              if (
                t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                t.statusCode === 500
              )
                return e(t);
              throw t;
            });
        },
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield _();
            return (m(t), t);
          } catch (t) {
            throw (
              p(null),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bb-eligibility-refresh] (no-cache) failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("bb-eligibility-refresh-error"),
              t
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebBizBroadcastEligibilityCache").readCache();
          if (
            (!e &&
              t != null &&
              o("WAWebBizBroadcastEligibilityCache").isCacheFresh(t)) ||
            (!e &&
              t != null &&
              o("WAWebBizBroadcastEligibilityCache").isInFailureBackoff(t))
          )
            return (m(t.result), t.result);
          try {
            var n = yield _();
            return (
              o("WAWebBizBroadcastEligibilityCache").writeCacheSuccess(n),
              m(n),
              n
            );
          } catch (e) {
            var r;
            throw (
              o("WAWebBizBroadcastEligibilityCache").writeCacheFailure(),
              p((r = t == null ? void 0 : t.result) != null ? r : null),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[bb-eligibility-refresh] failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bb-eligibility-refresh-error"),
              e
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t, n;
      e === void 0 && (e = {});
      var r = e,
        a = r.force,
        i = a === void 0 ? !1 : a,
        l = r.rethrowOnFailure,
        s = l === void 0 ? !1 : l,
        u =
          o(
            "WAWebBizBroadcastEligibilityCache",
          ).isEligibilityCachingEnabled() &&
          (t =
            (n = o("WAWebBizBroadcastEligibilityCache").readCache()) == null
              ? void 0
              : n.result) != null
            ? t
            : null;
      if (c == null) {
        var d = o(
          "WAWebBizBroadcastEligibilityCache",
        ).isEligibilityCachingEnabled()
          ? h(i)
          : f();
        c = d.finally(function () {
          c = null;
        });
      }
      return s
        ? c
        : c.catch(function () {
            return u;
          });
    }
    l.refreshBusinessEligibilityIfNeeded = C;
  },
  98,
);
