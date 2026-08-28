__d(
  "adsUEditorCrepeCurrentLevelSelector",
  [
    "AdsMgmtFocusedItemProvider",
    "AdsObjectTypeUtils",
    "adsCreateSelector",
    "adsPECrepeCurrentEditorStepIndexSelector",
    "adsPECrepeEditorStepsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          r("AdsMgmtFocusedItemProvider").toFluxSelector(),
          r("adsPECrepeCurrentEditorStepIndexSelector"),
          o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector,
        ],
        function (t, n, r) {
          var e,
            a = t.focusedID,
            i = t.objectLevel;
          if (i != null && a != null) return i;
          if (r.length === 0) return "campaign";
          var l = r[n];
          return (e = o("AdsObjectTypeUtils").toObjectLevel(l[0])) != null
            ? e
            : "campaign";
        },
        { name: i.id + ".adsUEditorCrepeCurrentLevelSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
