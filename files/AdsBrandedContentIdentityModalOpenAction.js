__d(
  "AdsBrandedContentIdentityModalOpenAction",
  [
    "AdsBrandedContentIdentityModalVisibilityProvider",
    "AdsBrandedContentIdentityModalVisibilityReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBrandedContentIdentityModalVisibilityReducerPlugins")
              .openIdentityModal,
            n("AdsBrandedContentIdentityModalVisibilityProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsBrandedContentIdentityModalOpenActionPlugin",
    );
    a.exports = e;
  },
  null,
);
