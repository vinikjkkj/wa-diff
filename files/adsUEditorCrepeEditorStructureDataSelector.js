__d(
  "adsUEditorCrepeEditorStructureDataSelector",
  [
    "AdsFluxHooks",
    "AdsUEditorHooks",
    "adsCreateSelector",
    "adsPECrepeEditorStructurePackageConfigSelector",
    "adsUEditorSelectedPackageConfigIDSelector",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedPackageConfigIDSelector"),
          r("adsPECrepeEditorStructurePackageConfigSelector"),
        ],
        function (t, n) {
          return t == null ? null : n(t);
        },
        { name: i.id + ".adsUEditorCrepeEditorStructureDataSelector" },
      ),
      s = function (t, n) {
        return t == null ? null : n(t);
      };
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t =
          o(
            "AdsUEditorHooks",
          ).useUEditorCampaignGroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION(),
        n = o("AdsFluxHooks").useAdsSelector(
          r("adsUEditorSelectedPackageConfigIDSelector"),
          t,
          t,
        ),
        a = o("AdsFluxHooks").useAdsSelector(
          r("adsPECrepeEditorStructurePackageConfigSelector"),
        ),
        i;
      return (
        e[0] !== a || e[1] !== n
          ? ((i = s(n, a)), (e[0] = a), (e[1] = n), (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    ((l.adsUEditorCrepeEditorStructureDataSelector = e),
      (l.adsUEditorCrepeEditorStructureDataSelectorLogic = s),
      (l.useGetAdsUEditorCrepeEditorStructureDataSelector = u));
  },
  98,
);
