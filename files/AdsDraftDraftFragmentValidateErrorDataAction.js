__d(
  "AdsDraftDraftFragmentValidateErrorDataAction",
  [
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
            n("AdsDraftFragmentValidationReducerPlugins")
              .handleFragmentValidationFailed,
            n("AdsDraftFragmentValidationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT_FRAGMENT.VALIDATE.ERROR",
    );
    a.exports = e;
  },
  null,
);
