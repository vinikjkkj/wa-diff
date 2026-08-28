__d(
  "AdsDraftDraftFragmentBatchCreateErrorDataAction",
  ["AdsDraftCreationLoggerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDraftCreationLoggerPlugins.AdsDraftCreationFailLoggerPlugin",
            n("AdsDraftCreationLoggerPlugins").AdsDraftCreationFailLoggerPlugin,
            {},
          ),
        ];
      },
      "AdsDraft.DRAFT_FRAGMENT.BATCH_CREATE_ERROR",
    );
    a.exports = e;
  },
  null,
);
