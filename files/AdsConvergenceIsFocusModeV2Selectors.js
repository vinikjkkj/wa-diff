__d(
  "AdsConvergenceIsFocusModeV2Selectors",
  [
    "AdsConvergenceFocusModeV2DataProvider",
    "AdsMgmtDimensionSelectors",
    "AdsObjectTypes",
    "adsCreateSelector",
    "adsMgmtCampaignStructurePanelOpenSelector",
    "adsMgmtTrayStateSelector",
    "adsPECrepeIsPackageSelector",
    "adsPEObjectTypeSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsConvergenceFocusModeV2DataProvider").toFluxSelector(),
      u = 975,
      c = 1400,
      d = [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ],
      m = (e = r("adsCreateSelector"))(
        [s],
        function (t) {
          var e = t.shouldExpandEditor;
          return e;
        },
        { name: i.id + ".shouldExpandEditorSelector" },
      ),
      p = e(
        [
          o("AdsMgmtDimensionSelectors").tableWidthSelector,
          r("adsMgmtCampaignStructurePanelOpenSelector"),
        ],
        function (t, n) {
          return t > c || (t > u && !n);
        },
        { name: i.id + ".isWidthApplicableSelector" },
      ),
      _ = e(
        [r("adsPEObjectTypeSelector"), r("adsMgmtTrayStateSelector")],
        function (t, n) {
          return d.includes(t) && n != null;
        },
        { name: i.id + ".isTrayOpenSelector" },
      ),
      f = e(
        [r("adsPEObjectTypeSelector"), r("adsMgmtTrayStateSelector")],
        function (t, n) {
          return d.includes(t) && n === "EDITOR_DRAWER";
        },
        { name: i.id + ".isEditorTrayOpenSelector" },
      ),
      g = e(
        [_, p, r("adsPECrepeIsPackageSelector"), f],
        function (t, n, r, o) {
          var e = t && !r;
          return e ? o || n : !1;
        },
        { name: i.id + ".adsConvergenceIsFocusModeV2ApplicableSelector" },
      ),
      h = e(
        [m, g, _, r("adsPECrepeIsPackageSelector")],
        function (t, n, r, o) {
          return (n && t) || (o && r);
        },
        { name: i.id + ".adsConvergenceIsFocusModeV2ActiveSelector" },
      );
    ((l.shouldExpandEditorSelector = m),
      (l.isWidthApplicableSelector = p),
      (l.adsConvergenceIsFocusModeV2ApplicableSelector = g),
      (l.adsConvergenceIsFocusModeV2ActiveSelector = h));
  },
  98,
);
