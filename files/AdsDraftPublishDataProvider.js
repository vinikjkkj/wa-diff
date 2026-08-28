__d(
  "AdsDraftPublishDataProvider",
  [
    "AdsDraftPublishDataProviderPlugin",
    "AdsDraftPublishUIProvider",
    "AdsDraftPublishUIPublishDataTriggerReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsDraftPublishDataProviderPlugin"),
      "AdsDraftPublishDataProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsDraftPublishUIPublishDataTriggerReducerPlugin"),
            "AdsDraftPublishUIPublishDataTriggerReducerPlugin",
            n("AdsDraftPublishUIProvider"),
          ),
        ];
      },
    );
  },
  null,
);
