__d(
  "WAWebBizBroadcastEligibilityCache",
  ["WAWebUserPrefsStore", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "bb_eligibility_cache";
    function s(e) {
      var t = {},
        n = c(e.genai);
      n != null && (t.genai = n);
      var r = d(e.marketingMessages);
      r != null && (t.marketingMessages = r);
      var o = m(e.metaVerified);
      return (o != null && (t.metaVerified = o), t);
    }
    function u(e) {
      return e === "SUCCESS" ||
        e === "FAIL" ||
        e === "PAUSED" ||
        e === "WARNING"
        ? e
        : null;
    }
    function c(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e.status === "SUCCESS" || e.status === "FAIL"
          ? { status: e.status }
          : null;
    }
    function d(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = u(e.status);
      if (t == null) return null;
      var n = { status: t };
      return (
        typeof e.expiration == "number" && (n.expiration = e.expiration),
        n
      );
    }
    function m(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = u(e.status);
      if (t == null) return null;
      var n = { status: t };
      return (
        typeof e.shouldShowPrivacyInterstitialToNewUsers == "boolean" &&
          (n.shouldShowPrivacyInterstitialToNewUsers =
            e.shouldShowPrivacyInterstitialToNewUsers),
        n
      );
    }
    function p() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t.lastFailureAt,
        o = t.lastSuccessAt,
        a = t.result;
      return typeof o != "number" ||
        !isFinite(o) ||
        (n != null && (typeof n != "number" || !isFinite(n))) ||
        a == null ||
        typeof a != "object" ||
        Array.isArray(a)
        ? null
        : {
            lastFailureAt: n == null ? null : n,
            lastSuccessAt: o,
            result: s(a),
          };
    }
    function _(t) {
      var n = { lastFailureAt: null, lastSuccessAt: Date.now(), result: t };
      r("WAWebUserPrefsStore").setUser(e, n, { shouldWriteToIdb: !1 });
    }
    function f() {
      var t,
        n,
        o = p(),
        a = {
          lastFailureAt: Date.now(),
          lastSuccessAt:
            (t = o == null ? void 0 : o.lastSuccessAt) != null ? t : 0,
          result: (n = o == null ? void 0 : o.result) != null ? n : {},
        };
      r("WAWebUserPrefsStore").setUser(e, a, { shouldWriteToIdb: !1 });
    }
    function g(e) {
      var t = Date.now();
      if (t - e.lastSuccessAt >= y()) return !1;
      var n = e.result.marketingMessages;
      return !(
        n != null &&
        n.status === "PAUSED" &&
        n.expiration != null &&
        t >= n.expiration * b()
      );
    }
    function h(e) {
      var t = e.lastFailureAt;
      return t == null ? !1 : Date.now() - t < C();
    }
    function y() {
      return r("justknobx")._("825");
    }
    function C() {
      return r("justknobx")._("2071");
    }
    function b() {
      return r("justknobx")._("2475");
    }
    function v() {
      return r("justknobx")._("2610");
    }
    function S() {
      r("WAWebUserPrefsStore").setUser(e, null, { shouldWriteToIdb: !1 });
    }
    ((l.readCache = p),
      (l.writeCacheSuccess = _),
      (l.writeCacheFailure = f),
      (l.isCacheFresh = g),
      (l.isInFailureBackoff = h),
      (l.getEligibilityRefreshIntervalMs = y),
      (l.getEligibilityFailureBackoffMs = C),
      (l.getPausedExpirationSecToMs = b),
      (l.isEligibilityCachingEnabled = v),
      (l.clearCache = S));
  },
  98,
);
