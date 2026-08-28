__d(
  "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalAction",
  [
    "AdsUEditorAdgroupMessageMarketingSetupProvider",
    "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalReducerPlugin",
            ),
            n("AdsUEditorAdgroupMessageMarketingSetupProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorAdgroupMessageMarketingTemplateRequestReviewModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
