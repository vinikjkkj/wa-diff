__d(
  "adsPECrepeEditorStructurePackageConfigDynamicSelector",
  [
    "AdsPECrepeEditorStructurePackageDataProvider",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsPECrepeEditorStructurePackageConfigSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPECrepeEditorStructurePackageDataProvider").toFluxSelector(),
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
        ],
        function (t, n) {
          return o(
            "adsPECrepeEditorStructurePackageConfigSelectorUtils",
          ).adsPECrepeEditorStructurePackageConfig(t, n);
        },
        { name: i.id + ".adsPECrepeEditorStructurePackageConfigSelector" },
      ),
      s = r("adsCreateDynamicSelector")(e);
    l.default = s;
  },
  98,
);
