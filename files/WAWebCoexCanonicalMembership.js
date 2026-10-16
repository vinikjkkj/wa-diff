__d(
  "WAWebCoexCanonicalMembership",
  [],
  function (t, n, r, o, a, i) {
    var e = ["bspOrInbox", "ai", "automation", "authorizedAgent", "bbPro"],
      l = new Map([
        ["INBOX", "bspOrInbox"],
        ["EMBEDDED_SIGNUP", "bspOrInbox"],
        ["WEAVE_AI", "bspOrInbox"],
        ["META_AI_BIZ_AGENT", "ai"],
        ["DETECTED_OUTCOME", "automation"],
        ["AUTHORIZED_AGENT", "authorizedAgent"],
        ["BB_PRO", "bbPro"],
      ]),
      s = "-1",
      u = new Set([
        "INBOX",
        "WEAVE_AI",
        "META_AI_BIZ_AGENT",
        "DETECTED_OUTCOME",
        "BB_PRO",
      ]),
      c = /^(0|-?[1-9][0-9]*)$/,
      d = "9223372036854775807",
      m = "9223372036854775808";
    function p(e) {
      if (e == null) return { type: "rejected", reason: "snapshot_absent" };
      var t = new Set();
      for (var n of e) {
        var r = _(n);
        if (r.type === "rejected") return r;
        r.surface != null && t.add(r.surface);
      }
      return { type: "authoritative", surfaces: Array.from(t).sort() };
    }
    function _(e) {
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
      return t == null || !l.has(t)
        ? { type: "rejected", reason: "unrecognized_product" }
        : n == null || !f(t, n)
          ? { type: "rejected", reason: "malformed_provider_id" }
          : { type: "valid", surface: l.get(t) };
    }
    function f(e, t) {
      return g(t) ? (u.has(e) ? t === s : !t.startsWith("-") && t !== "0") : !1;
    }
    function g(e) {
      if (!c.test(e)) return !1;
      var t = e.startsWith("-"),
        n = t ? e.slice(1) : e,
        r = t ? m : d;
      return n.length < r.length || (n.length === r.length && n <= r);
    }
    ((i.COEX_PRODUCT_SURFACES = e), (i.getCoexCanonicalMembership = p));
  },
  66,
);
