__d(
  "AdsPEPublishStartedAction",
  [
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishProvider",
    "AdsDraftPublishReducerPlugins",
    "AdsPEPublishStartedReducerPlugin",
    "AdsPEPublishStartedSpecLoggerPlugin",
    "Laminar",
    "PostPublishMobileUpsellEnableModalReducerPlugin",
    "PostPublishMobileUpsellProvider",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins").PublishResponseReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPEPublishStartedReducerPlugin"),
            n("AdsDraftPublishProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("PostPublishMobileUpsellEnableModalReducerPlugin"),
            n("PostPublishMobileUpsellProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsPEPublishStartedLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsPEPublishStartedLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
          n("Laminar").__createLogger(
            "AdsPEPublishStartedSpecLoggerPlugin",
            n("AdsPEPublishStartedSpecLoggerPlugin"),
            {},
          ),
        ];
      },
      "DRAFT.PUBLISH_STARTED",
    );
    a.exports = e;
  },
  null,
);
