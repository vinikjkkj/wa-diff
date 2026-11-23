__d(
  "AdsLeadGenFormTemplateLoadedAction",
  [
    "AdsLeadGenFormTemplateLoadedReducerPlugin",
    "AdsLeadGenFormTemplateProvider",
    "Laminar",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsLeadGenFormTemplateLoadedReducerPlugin"),
            n("AdsLeadGenFormTemplateProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "adsLeadGenFormTemplateLoadedAction",
      void 0,
      function () {
        return r("vulture")("7EcQieIHTWL2-EystKZrkPtXA2k=");
      },
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    i.exports = e;
  },
  34,
);
