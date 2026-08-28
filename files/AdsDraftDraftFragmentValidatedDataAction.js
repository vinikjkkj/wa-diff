__d(
  "AdsDraftDraftFragmentValidatedDataAction",
  [
    "AdsBusinessIntegrityReloadChallengeInfoReducerPlugin",
    "AdsBusinessIntegrityUserAdPublishChallengeInfoProvider",
    "AdsDraftDraftFragmentValidatedDataLoggerPlugin",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftFragmentValidationReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBusinessIntegrityReloadChallengeInfoReducerPlugin"),
            n("AdsBusinessIntegrityUserAdPublishChallengeInfoProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentValidationUpdatedAsMap,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDraftDraftFragmentValidatedDataLoggerPlugin",
            n("AdsDraftDraftFragmentValidatedDataLoggerPlugin"),
            {},
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.VALIDATED",
    );
    a.exports = e;
  },
  null,
);
