__d(
  "BrandedContentAdsUtils",
  ["ApiDynamicCreativeOptimizationTypes", "gkx", "isFalsey", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r;
      if (!s(e)) return !1;
      var o = (r = e.from) == null ? void 0 : r.id;
      return o !== t && o !== n;
    }
    function s(e) {
      return (
        (e == null ? void 0 : e.has_sponsors) === !0 ||
        (e == null ? void 0 : e.sponsor_tags) !== void 0
      );
    }
    function u(e) {
      var t;
      return (
        (e == null || (t = e.coauthor_producers) == null || (t = t.data) == null
          ? void 0
          : t.length) === 1
      );
    }
    function c(e) {
      var t;
      return r("isTruthy")(
        e == null || (t = e.coauthor_producers) == null || (t = t.data) == null
          ? void 0
          : t.length,
      );
    }
    function d(e) {
      var t;
      return r("isTruthy")(
        e == null || (t = e.partnership_ads_identities) == null
          ? void 0
          : t.is_recommended,
      );
    }
    function m(e) {
      var t,
        n = e == null || (t = e.potential_sponsors) == null ? void 0 : t.data;
      return (
        (e == null ? void 0 : e.has_sponsors) === !0 ||
        r("isTruthy")(e == null ? void 0 : e.sponsor_tags) ||
        (r("isTruthy")(n) && n.length > 0)
      );
    }
    function p(t, n, o, a, i) {
      return (
        a !== r("ApiDynamicCreativeOptimizationTypes").PLACEMENT &&
        (t == null || e(t, n, o)) &&
        !i
      );
    }
    function _(e, t) {
      var n,
        o =
          e == null || (n = e.partnership_ads_identities) == null
            ? void 0
            : n.secondary_identities;
      if (r("isTruthy")(o) && o.length > 0) {
        var a = o.some(function (e) {
          var n = e == null ? void 0 : e.pa_permission_capabilities,
            o = r("isTruthy")(n) && Array.isArray(n) && n.includes(t);
          return !o;
        });
        return !a;
      }
      return !1;
    }
    function f(e, t) {
      var n,
        o =
          e == null || (n = e.partnership_ads_identities) == null
            ? void 0
            : n.secondary_identities;
      if (r("isFalsey")(o) || o.length === 0) return !1;
      var a = o.find(function (e) {
        var n,
          o =
            (n = e.pa_permission_capabilities) == null
              ? void 0
              : n.includes("CAN_USE_AUDIO_SWAP");
        if (r("isTruthy")(t)) {
          var a;
          return ((a = e.ig_user) == null ? void 0 : a.id) === t && o;
        }
        return o;
      });
      return a;
    }
    function g() {
      return r("gkx")("12607") ? 3 : 1;
    }
    ((l.isBrandedContentPost = s),
      (l.isEligibleIGCollabPost = u),
      (l.isCollabPost = c),
      (l.isSuggestedPost = d),
      (l.isPotentiallyBrandedContentPost = m),
      (l.isMCAEnabled = p),
      (l.hasUpgradedPAPermissionForCapability = _),
      (l.hasUpgradedPAPermissionForAudioSwap = f),
      (l.getDefaultPartnershipAdFormat = g));
  },
  98,
);
