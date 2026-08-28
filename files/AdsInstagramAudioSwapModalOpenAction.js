__d(
  "AdsInstagramAudioSwapModalOpenAction",
  [
    "AdsInstagramAudioSwapModalVisibilityProvider",
    "AdsInstagramAudioSwapModalVisibilityReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsInstagramAudioSwapModalVisibilityReducerPlugins")
              .openAudioSwapModal,
            n("AdsInstagramAudioSwapModalVisibilityProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsInstagramAudioSwapModalOpenActionPlugin",
    );
    a.exports = e;
  },
  null,
);
