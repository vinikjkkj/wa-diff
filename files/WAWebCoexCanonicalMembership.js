__d(
  "WAWebCoexCanonicalMembership",
  [],
  function (t, n, r, o, a, i) {
    var e = ["bspOrInbox", "ai", "automation", "authorizedAgent", "bbPro"],
      l = "automation",
      s = new Map([
        ["INBOX", "bspOrInbox"],
        ["EMBEDDED_SIGNUP", "bspOrInbox"],
        ["WEAVE_AI", "bspOrInbox"],
        ["META_AI_BIZ_AGENT", "ai"],
        ["DETECTED_OUTCOME", "automation"],
        ["AUTHORIZED_AGENT", "authorizedAgent"],
        ["BB_PRO", "bbPro"],
      ]),
      u = "-1",
      c = new Set([
        "INBOX",
        "WEAVE_AI",
        "META_AI_BIZ_AGENT",
        "DETECTED_OUTCOME",
        "BB_PRO",
      ]),
      d = /^(0|-?[1-9][0-9]*)$/,
      m = "9223372036854775807",
      p = "9223372036854775808";
    function _(e) {
      if (e == null) return { type: "rejected", reason: "snapshot_absent" };
      var t = new Set();
      for (var n of e) {
        var r = f(n);
        if (r.type === "rejected") return r;
        r.surface != null && t.add(r.surface);
      }
      return { type: "authoritative", surfaces: Array.from(t).sort() };
    }
    function f(e) {
      if (e.onboardingStatus !== "COMPLETED")
        return {
          type: "rejected",
          reason:
            e.onboardingStatus === "IN_PROGRESS"
              ? "row_not_settled"
              : e.onboardingStatus === "REONBOARDING_ELIGIBLE"
                ? "row_awaiting_reonboarding"
                : "unrecognized_onboarding_status",
        };
      var t = e.product,
        n = e.providerId;
      return t == null || !s.has(t)
        ? { type: "rejected", reason: "unrecognized_product" }
        : n == null || !g(t, n)
          ? { type: "rejected", reason: "malformed_provider_id" }
          : { type: "valid", surface: s.get(t) };
    }
    function g(e, t) {
      return h(t) ? (c.has(e) ? t === u : !t.startsWith("-") && t !== "0") : !1;
    }
    function h(e) {
      if (!d.test(e)) return !1;
      var t = e.startsWith("-"),
        n = t ? e.slice(1) : e,
        r = t ? p : m;
      return n.length < r.length || (n.length === r.length && n <= r);
    }
    ((i.COEX_PRODUCT_SURFACES = e),
      (i.AE_SURFACE = l),
      (i.getCoexCanonicalMembership = _));
  },
  66,
);
