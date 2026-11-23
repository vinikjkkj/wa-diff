__d(
  "adsPACBulkEditEligibilitySelector",
  [
    "AdsBulkEditSelectedPlacementGroupProvider",
    "adsCreateSelector",
    "adsUEditorCanUsePACBulkEditSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorCanUsePACBulkEditSelectors")
            .adsUEditorCanUsePACBulkEditSelector,
          r("AdsBulkEditSelectedPlacementGroupProvider").toFluxSelector(),
        ],
        function (t, n) {
          var e = t.canUsePACBulkEdit,
            r = n.eligiblePlacementSize;
          return { isPACBulkEditingEligible: e && r > 0 };
        },
        { name: i.id + ".adsPACBulkEditEligibilitySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
