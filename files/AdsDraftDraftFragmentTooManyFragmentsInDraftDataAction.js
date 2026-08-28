__d(
  "AdsDraftDraftFragmentTooManyFragmentsInDraftDataAction",
  [
    "AdsDraftDraftFragmentTooManyFragmentsInDraftDataReducerPlugin",
    "AdsPEErrorProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftFragmentTooManyFragmentsInDraftDataReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT_FRAGMENT.TOO_MANY_FRAGMENTS_IN_DRAFT",
    );
    a.exports = e;
  },
  null,
);
