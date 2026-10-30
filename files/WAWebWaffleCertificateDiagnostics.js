__d(
  "WAWebWaffleCertificateDiagnostics",
  ["Random", "WALogger", "WATimeUtils", "WAWebAccountLinkingGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = m(),
      c = 0.01,
      d = 6e4;
    function m() {
      var t = new Map();
      return function (n, a) {
        try {
          if (
            r("Random").random() >= c ||
            !o("WAWebAccountLinkingGatingUtils").isWafflePkiMigrationEnabled()
          )
            return;
          var i = n != null ? n : { source: "unknown", role: "unknown" },
            l = o("WATimeUtils").monotonicTime(),
            u = i.source + ":" + i.role,
            m = t.get(u);
          if (m != null && l - m < d) return;
          var _ = p(i, a);
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Certificate validation diagnostic ",
                "",
              ])),
            JSON.stringify(_),
          ),
            t.set(u, l));
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] Certificate validation diagnostic unavailable",
              ])),
          );
        }
      };
    }
    function p(e, t) {
      var n = h(o("WATimeUtils").getClockSkew()),
        r =
          t.checkedAtMs == null || e.cacheFetchedAtSeconds == null
            ? null
            : h(t.checkedAtMs / 1e3 - e.cacheFetchedAtSeconds),
        a = h(e.ttlSeconds),
        i = r == null || a == null ? null : a - r;
      return {
        diagnostic_version: 1,
        source: e.source,
        role: e.role,
        validation_result_code: h(t.resultCode),
        estimated_clock_skew_s: n,
        ttl_s: a,
        cache_age_s: r,
        remaining_cache_ttl_s: i,
        effective_remaining_cache_ttl_s: i == null || n == null ? null : i + n,
        validity: {
          leaf: _(t.validity.leaf, t.checkedAtMs),
          intermediate: _(t.validity.intermediate, t.checkedAtMs),
          root: _(t.validity.root, t.checkedAtMs),
        },
      };
    }
    function _(e, t) {
      var n,
        r,
        o = g(e == null || (n = e.notBefore) == null ? void 0 : n.value, t),
        a = g(e == null || (r = e.notAfter) == null ? void 0 : r.value, t);
      return {
        time_status: f(o, a),
        not_before_delta_s: o,
        not_after_delta_s: a,
      };
    }
    function f(e, t) {
      return e == null || t == null
        ? "unknown"
        : e > 0
          ? "not_yet_valid"
          : t < 0
            ? "expired"
            : "valid";
    }
    function g(e, t) {
      return e == null || t == null ? null : h((e.getTime() - t) / 1e3);
    }
    function h(e) {
      return e != null && Number.isFinite(e) ? e : null;
    }
    ((l.logCertificateValidationDiagnostic = u),
      (l.createCertificateDiagnosticLogger = m),
      (l.buildCertificateValidationDiagnostic = p));
  },
  98,
);
