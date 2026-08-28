__d(
  "adAccountAccountControlInfoSelector",
  [
    "AdsAccountStore",
    "AdsBusinessConstraintsAccountControlInfoDataProvider",
    "adAccountAccountControlInfoSelectorUtils",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateSelector"))(
        [
          (s = r("AdsAccountStore")).getSelectedAccount,
          r(
            "AdsBusinessConstraintsAccountControlInfoDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          return o(
            "adAccountAccountControlInfoSelectorUtils",
          ).adAccountAccountControlInfoLoadObject(t, n);
        },
        { name: i.id + ".adAccountAccountControlInfoLoadObjectSelector" },
      ),
      c = e(
        [
          s.getSelectedAccount,
          r(
            "AdsBusinessConstraintsAccountControlInfoDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          var e = t == null ? void 0 : t.getValue();
          if (e == null) return null;
          var r;
          return (r = n.getLoadedValue(e.account_id)) == null ||
            (r = r.placement_controls) == null
            ? void 0
            : r.placement_exclusions;
        },
        { name: i.id + ".adAccountPlacementExclusionSelector" },
      ),
      d = e(
        [s.getSelectedAccountID, u],
        function (t, n) {
          return o(
            "adAccountAccountControlInfoSelectorUtils",
          ).adAccountAccountControlInfo(t, n);
        },
        { name: i.id + ".adAccountAccountControlInfoSelector" },
      ),
      m = e(
        [
          s.getSelectedAccount,
          r(
            "AdsBusinessConstraintsAccountControlInfoDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          var e,
            r = t == null ? void 0 : t.getValue();
          return r == null
            ? null
            : (e = n.getLoadedValue(r.account_id)) == null ||
                (e = e.placement_controls_per_objective) == null
              ? void 0
              : e.objective_placement_exclusions;
        },
        { name: i.id + ".adAccountObjectivePlacementExclusionSelector" },
      );
    ((l.adAccountAccountControlInfoLoadObjectSelector = u),
      (l.adAccountPlacementExclusionSelector = c),
      (l.adAccountAccountControlInfoSelector = d),
      (l.adAccountObjectivePlacementExclusionSelector = m));
  },
  98,
);
