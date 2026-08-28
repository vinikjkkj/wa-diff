__d(
  "adsTALGetImpactingAdStudiesCursorSelector",
  [
    "AdStudiesImpactingAdStudiesProvider",
    "AdsAccountStore",
    "LoadObject",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdStudiesImpactingAdStudiesProvider").toFluxSelector(),
      s = ["Planned", "Active"],
      u = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccountID, e],
        function (t, n) {
          return function (e) {
            var o = e.adAccountID,
              a = e.filter,
              l = e.loadOption,
              u = e.maxCooldownStartTime,
              c = e.maxCreationTime,
              d = e.minCooldownStartTime,
              m = e.minObservationEndTime,
              p = o != null ? o : t;
            if (p == null)
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var _ = s.includes(a) || l === "load_all_at_once",
              f = {
                adAccountID: p,
                filter: a,
                maxCooldownStartTime: u,
                maxCreationTime: c,
                minCooldownStartTime: d,
                minObservationEndTime: m,
                shouldLoadAllAtOnce: _,
              },
              g;
            switch (l) {
              case "load_initial":
                g = n.get(babelHelpers.extends({}, f));
                break;
              case "load_more": {
                var h,
                  y =
                    (h = n.getCached(babelHelpers.extends({}, f)).getValue()) ==
                    null
                      ? void 0
                      : h.after;
                y != null &&
                  (g = n.get(babelHelpers.extends({}, f, { cursorAfter: y })));
                break;
              }
              case "load_all_at_once":
                g = n.get(babelHelpers.extends({}, f));
                break;
            }
            return (
              g == null &&
                (g = n.getCached({
                  adAccountID: p,
                  filter: a,
                  maxCooldownStartTime: u,
                  maxCreationTime: c,
                  minCooldownStartTime: d,
                  minObservationEndTime: m,
                })),
              g
            );
          };
        },
        { name: i.id + ".adsTALGetImpactingAdStudiesCursorSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
