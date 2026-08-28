__d(
  "AdsDraftDraftFragmentListBatchLoadErrorDataAction",
  [
    "AdsDraftToastCardsFragmentListBatchLoadErrorReducerPlugin",
    "AdsToastCardDataProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftToastCardsFragmentListBatchLoadErrorReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsDraftDraftFragmentListBatchLoadErrorDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsDraftDraftFragmentListBatchLoadErrorDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.LIST.BATCH_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
