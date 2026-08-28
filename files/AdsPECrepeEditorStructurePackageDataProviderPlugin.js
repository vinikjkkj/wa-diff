__d(
  "AdsPECrepeEditorStructurePackageDataProviderPlugin",
  ["Bootloader", "Promise", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (t) {
          return new (e || (e = n("Promise")))(function (e) {
            r("Bootloader").loadModules(
              ["AdsPECrepeEditorStructurePackageDataManager"],
              function (n) {
                return e(n.loadEditorStructurePackageData(t));
              },
              "AdsPECrepeEditorStructurePackageDataProviderPlugin",
            );
          });
        }),
      },
      u = s;
    l.default = u;
  },
  98,
);
