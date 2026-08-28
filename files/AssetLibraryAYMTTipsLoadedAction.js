__d(
  "AssetLibraryAYMTTipsLoadedAction",
  ["AssetLibraryAYMTProvider", "AssetLibraryAYMTReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AssetLibraryAYMTReducerPlugins").onTipsLoaded,
            n("AssetLibraryAYMTProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AssetLibraryAYMTTipsLoadedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
