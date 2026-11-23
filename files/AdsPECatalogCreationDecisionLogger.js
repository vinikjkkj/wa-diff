__d(
  "AdsPECatalogCreationDecisionLogger",
  [
    "AdsInterfacesLogger",
    "ProductExtensionsCatalogFetchErrors",
    "ProductSetAPIClientUtils",
    "guid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 256,
      s = new Map();
    function u(t, n) {
      var o,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _ = t.urlTier.valueOf(),
        f = JSON.stringify([
          t.adAccountID,
          t.adgroupID,
          t.surface,
          _,
          (o = t.lookupKey) != null ? o : null,
          t.url,
          (a = t.urlPresenceKnown) != null ? a : !0,
          (i = n.productSetID) != null ? i : null,
          (l = n.catalogID) != null ? l : null,
        ]),
        g = s.get(f);
      if (g == null) {
        if (s.size >= e) {
          var h = s.keys().next().value;
          h != null && s.delete(h);
        }
        ((g = { id: r("guid")(), outcomes: new Set() }), s.set(f, g));
      }
      var y = JSON.stringify([
        n.outcome,
        n.reason,
        (u = n.lookupAttempted) != null ? u : null,
      ]);
      if (!g.outcomes.has(y)) {
        g.outcomes.add(y);
        var C = JSON.stringify({
          schema_version: 1,
          decision_scope: "client_lookup_observation",
          decision_key: g.id,
          policy_version: "pe_url_ladder_v1",
          stopping_rule: "first_eligible_catalog",
          surface: t.surface,
          attempted_url_tier: _,
          lookup_attempted:
            (c = n.lookupAttempted) != null
              ? c
              : n.outcome !== "skip" || n.reason === "default_on_declined",
          outcome: n.outcome,
          reason: n.reason,
          resolution_url_tier: n.outcome === "success" ? _ : null,
          product_set_id: (d = n.productSetID) != null ? d : null,
          catalog_id: (m = n.catalogID) != null ? m : null,
          url_present:
            t.urlPresenceKnown === !1 ? null : t.url != null && t.url !== "",
          domain_match_result: "unknown",
          domain_evidence_reason: "not_evaluated",
        });
        r("AdsInterfacesLogger").log({
          data:
            ((p = {}),
            (p.ad_account_id = t.adAccountID),
            (p.adgroup_id = t.adgroupID),
            (p.message = C),
            p),
          eventName: "ads_connected_sources_pe_catalog_creation_decision_v1",
        });
      }
    }
    function c(e, t, n) {
      e.push({ context: t, decision: n });
    }
    function d(e) {
      var t,
        n = e.error;
      if (
        e.isLoading() ||
        o(
          "ProductExtensionsCatalogFetchErrors",
        ).isProductExtensionsCatalogFetchCancelledError(n)
      )
        return null;
      if (n != null) {
        var r =
            n instanceof
            o("ProductSetAPIClientUtils").NoEligibleProductSetsError,
          a = "lookup_error";
        return (
          r
            ? (a = "no_eligible_catalog")
            : n instanceof
                o("ProductExtensionsCatalogFetchErrors")
                  .ProductExtensionsCatalogFetchTimeoutError &&
              (a = "lookup_timeout"),
          { outcome: r ? "no_eligible_catalog" : "error", reason: a }
        );
      }
      return e.hasValueWithoutError() &&
        ((t = e.getValue()) == null ? void 0 : t.id) == null
        ? { outcome: "no_eligible_catalog", reason: "no_eligible_catalog" }
        : null;
    }
    function m(e, t, n) {
      var r,
        o = d(t);
      if (o != null) return { context: e, decision: o };
      if (n != null) {
        var a;
        return {
          context: e,
          decision: {
            outcome: "success",
            reason: "catalog_defaulted",
            productSetID: n,
            catalogID: (a = t.getValue()) == null ? void 0 : a.catalogID,
          },
        };
      }
      return t.hasValueWithoutError() &&
        ((r = t.getValue()) == null ? void 0 : r.id) != null
        ? {
            context: e,
            decision: {
              outcome: "skip",
              reason: "default_on_declined",
              lookupAttempted: !0,
            },
          }
        : null;
    }
    function p(e, t) {
      var n = d(t);
      n != null && u(e, n);
    }
    ((l.logPECatalogCreationDecision = u),
      (l.appendPECatalogCreationDecision = c),
      (l.getPECatalogCreationLookupFailureDecision = d),
      (l.getPECatalogCreationDestinationDecision = m),
      (l.logPECatalogCreationLookupOutcome = p),
      (l.logPECatalogCreationLookupFailure = p));
  },
  98,
);
