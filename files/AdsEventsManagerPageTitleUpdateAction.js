__d(
  "AdsEventsManagerPageTitleUpdateAction",
  [
    "AdsEventsManagerPageTitleProvider",
    "AdsEventsManagerPageTitleReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsEventsManagerPageTitleReducerPlugin"),
            n("AdsEventsManagerPageTitleProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsEventsManagerPageTitleUpdateActionPlugin",
    );
    a.exports = e;
  },
  null,
);
