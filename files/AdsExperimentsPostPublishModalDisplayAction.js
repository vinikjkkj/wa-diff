__d(
  "AdsExperimentsPostPublishModalDisplayAction",
  [
    "AdsExperimentsPostPublishModalDisplayProvider",
    "AdsExperimentsPostPublishModalDisplayReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExperimentsPostPublishModalDisplayReducerPlugin"),
            n("AdsExperimentsPostPublishModalDisplayProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsExperimentsPostPublishModalDisplayActionPlugin",
    );
    a.exports = e;
  },
  null,
);
