__d(
  "AdsWebsiteLinkDefaultingAction",
  [
    "AdsWebsiteLinkDefaultingProvider",
    "AdsWebsiteLinkDefaultingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsWebsiteLinkDefaultingReducerPlugin"),
            n("AdsWebsiteLinkDefaultingProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_WEBSITE_LINK_DEFAULTING_ACTION",
    );
    a.exports = e;
  },
  null,
);
