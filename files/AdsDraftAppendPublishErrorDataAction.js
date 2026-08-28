__d(
  "AdsDraftAppendPublishErrorDataAction",
  [
    "AdsDraftAppendPublishErrorDataReducerPlugin",
    "AdsPEErrorProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftAppendPublishErrorDataReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.APPEND_PUBLISH.ERROR",
    );
    a.exports = e;
  },
  null,
);
