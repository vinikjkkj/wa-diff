__d(
  "AdsCampaignApplyL4PlacementExclusionsTriggerReducerPlugin",
  [
    "AdsAccountLevelPlacementExclusionsUtils",
    "AdsAccountStore",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsDraftFragmentStoreStateUtils",
    "AdsPECampaignRawCombinedTableStore",
    "AdsPlacementRawSpecUtils",
    "FBLogger",
    "Laminar",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      if (n == null || r.length === 0) return e;
      var a = new Set(r),
        i = n.filter(function (e) {
          return !a.has(e);
        });
      return i.length === n.length
        ? e
        : o("AdsDraftFragmentStoreStateApplyChangesMutators").setPath(
            e,
            ["targeting", "publisher_platforms"],
            [t],
            i,
          );
    }
    function s(e, t) {
      var n = o("AdsDraftFragmentStoreStateUtils").getFragmentsInDraftFor(e, t);
      return n.isEmpty()
        ? []
        : n
            .keySeq()
            .toArray()
            .filter(function (e) {
              var t = r("AdsPECampaignRawCombinedTableStore").getCachedObject(
                e,
              );
              return t != null && t.isDone() && t.hasValue();
            });
    }
    function u(t, n, a) {
      var i,
        l =
          (i = r("AdsPECampaignRawCombinedTableStore").getCachedObject(n)) ==
          null
            ? void 0
            : i.getValue(),
        s = l == null ? void 0 : l.targeting;
      if (
        s == null ||
        o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(s)
      )
        return t;
      var u = t,
        c = [];
      for (var d of a) {
        var m = d[0],
          p = d[1],
          _ = p.excludedPositions,
          f = p.getPositions,
          g = p.positionsPath,
          h = f(s);
        if (h != null) {
          var y = Array.isArray(h) ? h : h.toArray(),
            C = o("AdsAccountLevelPlacementExclusionsUtils").filterPositions(
              y,
              _,
            );
          C.length !== y.length &&
            ((u = o("AdsDraftFragmentStoreStateApplyChangesMutators").setPath(
              u,
              ["targeting", g],
              [n],
              C,
            )),
            C.length === 0 &&
              y.length > 0 &&
              m === "audience_network" &&
              c.push(m));
        }
      }
      return c.length === 0 ? u : e(u, n, s.publisher_platforms, c);
    }
    var c = {
        reduce: o("Laminar").withFluxSelectors(
          { account: r("AdsAccountStore").getSelectedAccount },
          function (e, t, n) {
            var a,
              i = n.account;
            if (!r("gkx")("25345")) return e;
            var l = i.getValue();
            if (l == null) return e;
            var c = l.account_id,
              d = t.getLoadedValue(c),
              m =
                d == null || (a = d.placement_controls) == null
                  ? void 0
                  : a.placement_exclusions;
            if (m == null || m.length === 0) return e;
            var p = r("FBLogger")("ads", "placement_l4_exclusions"),
              _ = o(
                "AdsAccountLevelPlacementExclusionsUtils",
              ).getAccountLevelPlacementExclusionsPerPlatform(m);
            if (_.size === 0)
              return (
                p.warn(
                  "Account-level exclusions exist for account %s but none map to FB or AN positions",
                  c,
                ),
                e
              );
            var f = s(e, c);
            if (f.length === 0) return e;
            p.info(
              "Applying L4 placement exclusions to %s campaigns for account %s (%s platform groups)",
              f.length,
              c,
              _.size,
            );
            var g = e;
            for (var h of f) g = u(g, h, _);
            return g;
          },
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
