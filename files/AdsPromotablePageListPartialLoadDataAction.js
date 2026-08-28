__d(
  "AdsPromotablePageListPartialLoadDataAction",
  [
    "AdsPromotablePageDataProvider",
    "AdsPromotablePageReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPromotablePageReducerPlugin"),
            n("AdsPromotablePageDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PROMOTABLE_PAGE.LIST.PARTIAL_LOAD",
    );
    a.exports = e;
  },
  null,
);
