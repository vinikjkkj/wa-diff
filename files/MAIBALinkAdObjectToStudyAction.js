__d(
  "MAIBALinkAdObjectToStudyAction",
  [
    "AdsExperimentsAdObjectIDsInDraftTestProvider",
    "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
              .AdsExperimentsLinkAdObjectToStudyReducerPlugins,
            n("AdsExperimentsAdObjectIDsInDraftTestProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "MAIBALinkAdObjectToStudyActionPlugin",
    );
    a.exports = e;
  },
  null,
);
