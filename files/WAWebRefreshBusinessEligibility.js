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
    "WAWebGetBusinessEligibilityJob",
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
    function m() {
      var e = new AbortController();
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, u, { signal: e.signal }),
        function (e) {
          return o("WAWebGetBusinessEligibilityJob")
            .getBusinessEligibility({
              checkGenAI: o(
                "WAWebBizBroadcastGenAIGating",
              ).isGenAITextEnabled(),
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
    async function p() {
      try {
        var t = await m();
        return (d(t), t);
      } catch (t) {
        throw (
          d(null),
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
    }
    async function _(e) {
      var t = o("WAWebBizBroadcastEligibilityCache").readCache();
      if (
        !e &&
        t != null &&
        o("WAWebBizBroadcastEligibilityCache").isCacheFresh(t)
      )
        return (d(t.result), t.result);
      if (
        !e &&
        t != null &&
        o("WAWebBizBroadcastEligibilityCache").isInFailureBackoff(t)
      )
        return (d(null), t.result);
      try {
        var n = await m();
        return (
          o("WAWebBizBroadcastEligibilityCache").writeCacheSuccess(n),
          d(n),
          n
        );
      } catch (e) {
        throw (
          o("WAWebBizBroadcastEligibilityCache").writeCacheFailure(),
          d(null),
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
    }
    function f(e) {
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
          ? _(i)
          : p();
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
    l.refreshBusinessEligibilityIfNeeded = f;
  },
  98,
);
