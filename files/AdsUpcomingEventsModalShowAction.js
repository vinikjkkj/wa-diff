__d(
  "AdsUpcomingEventsModalShowAction",
  [
    "AdsUpcomingEventsModalProvider",
    "AdsUpcomingEventsModalReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUpcomingEventsModalReducerPlugins").onOpen,
            n("AdsUpcomingEventsModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUpcomingEventsModalShowActionPlugin",
    );
    a.exports = e;
  },
  null,
);
