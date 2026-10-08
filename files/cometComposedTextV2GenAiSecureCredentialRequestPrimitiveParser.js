__d(
  "cometComposedTextV2GenAiSecureCredentialRequestPrimitiveParser",
  [
    "cometComposedTextV2GenAiSecureCredentialRequest",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "cometComposedTextV2GenAiSecureCredentialRequest",
      ).isRenderableSecureCredentialRequest(e)
        ? o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o(
                "cometComposedTextV2NodeBuilders",
              ).buildSecureCredentialRequestNode({
                fields: e.fields
                  .filter(function (e) {
                    return e != null;
                  })
                  .map(function (e) {
                    return { name: e.name };
                  }),
                host: e.host,
                nodeType: "secureCredentialRequest",
                pageUrl: e.page_url,
                requestId: e.request_id,
                subtitle: e.subtitle,
                title: e.title,
              }),
            )
        : null;
    }
    l.default = e;
  },
  98,
);
