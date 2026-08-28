__d(
  "adsPECrepeCurrentEditorStepIndexSelector",
  [
    "AdsPECrepeNavigationProvider",
    "adsCreateSelector",
    "adsPECrepeAvailableStepsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        return Math.max(0, Math.min(t, n - 1));
      },
      s = r("adsCreateSelector")(
        [
          r("AdsPECrepeNavigationProvider").toFluxSelector(),
          r("adsPECrepeAvailableStepsSelector"),
        ],
        function (n, r) {
          var t = n.currentStep;
          return e(t, r);
        },
        { name: i.id + ".adsPECrepeCurrentEditorStepIndexSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
