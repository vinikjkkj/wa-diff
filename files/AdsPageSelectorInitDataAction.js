__d(
  "AdsPageSelectorInitDataAction",
  [
    "AdsPageSelectorInitDataReducerPlugin",
    "AdsPageSelectorProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPageSelectorInitDataReducerPlugin"),
            n("AdsPageSelectorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PAGE.SELECTOR.INIT",
    );
    a.exports = e;
  },
  null,
);
