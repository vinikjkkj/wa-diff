__d(
  "WAWebBizBroadcastEligibilityCache",
  ["WAWebUserPrefsStore", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = "bb_eligibility_cache";
    function s(e) {
      var t = {},
        n = c(e.bbPro);
      n != null && (t.bbPro = n);
      var r = m(e.genai);
      r != null && (t.genai = r);
      var o = p(e.marketingMessages);
      o != null && (t.marketingMessages = o);
      var a = _(e.metaVerified);
      return (a != null && (t.metaVerified = a), t);
    }
    function u(e) {
      return e === "ELIGIBLE_TO_ONBOARD" ||
        e === "NOT_ELIGIBLE" ||
        e === "ONBOARDED"
        ? e
        : null;
    }
    function c(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = u(e.status);
      return t == null ? null : { status: t };
    }
    function d(e) {
      return e === "SUCCESS" ||
        e === "FAIL" ||
        e === "PAUSED" ||
        e === "WARNING"
        ? e
        : null;
    }
    function m(e) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? null
        : e.status === "SUCCESS" || e.status === "FAIL"
          ? { status: e.status }
          : null;
    }
    function p(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = d(e.status);
      if (t == null) return null;
      var n = { status: t };
      return (
        typeof e.expiration == "number" && (n.expiration = e.expiration),
        n
      );
    }
    function _(e) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var t = d(e.status);
      if (t == null) return null;
      var n = { status: t };
      return (
        typeof e.shouldShowPrivacyInterstitialToNewUsers == "boolean" &&
          (n.shouldShowPrivacyInterstitialToNewUsers =
            e.shouldShowPrivacyInterstitialToNewUsers),
        n
      );
    }
    function f() {
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
    function g(t) {
      var n = { lastFailureAt: null, lastSuccessAt: Date.now(), result: t };
      r("WAWebUserPrefsStore").setUser(e, n, { shouldWriteToIdb: !1 });
    }
    function h() {
      var t,
        n,
        o = f(),
        a = {
          lastFailureAt: Date.now(),
          lastSuccessAt:
            (t = o == null ? void 0 : o.lastSuccessAt) != null ? t : 0,
          result: (n = o == null ? void 0 : o.result) != null ? n : {},
        };
      r("WAWebUserPrefsStore").setUser(e, a, { shouldWriteToIdb: !1 });
    }
    function y(e) {
      var t = Date.now();
      if (t - e.lastSuccessAt >= b()) return !1;
      var n = e.result.marketingMessages;
      return !(
        n != null &&
        n.status === "PAUSED" &&
        n.expiration != null &&
        t >= n.expiration * S()
      );
    }
    function C(e) {
      var t = e.lastFailureAt;
      return t == null ? !1 : Date.now() - t < v();
    }
    function b() {
      return r("justknobx")._("825");
    }
    function v() {
      return r("justknobx")._("2071");
    }
    function S() {
      return r("justknobx")._("2475");
    }
    function R() {
      return r("justknobx")._("2610");
    }
    function L() {
      r("WAWebUserPrefsStore").setUser(e, null, { shouldWriteToIdb: !1 });
    }
    ((l.readCache = f),
      (l.writeCacheSuccess = g),
      (l.writeCacheFailure = h),
      (l.isCacheFresh = y),
      (l.isInFailureBackoff = C),
      (l.getEligibilityRefreshIntervalMs = b),
      (l.getEligibilityFailureBackoffMs = v),
      (l.isEligibilityCachingEnabled = R),
      (l.clearCache = L));
  },
  98,
);
