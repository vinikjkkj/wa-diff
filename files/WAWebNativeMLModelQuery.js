__d(
  "WAWebNativeMLModelQuery",
  [
    "WALogger",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebNativeMLModelQuery.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { type: "error" },
      c = e !== void 0 ? e : (e = n("WAWebNativeMLModelQuery.graphql"));
    async function d(e, t) {
      var n = { model_request_metadatas: e, client_capability_metadata: t };
      try {
        var r = await o("WAWebRelayClient").fetchQuery(c, n, {
          accessToken: o("WAWebGraphQLConstants")
            .WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN,
          environmentType: "whatsapp_www",
        });
        if (r == null)
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebNativeMLModelQuery: Response is null",
                ])),
            ),
            u
          );
        var a = r.aim_model_batched_manifest;
        return { type: "success", manifest: a };
      } catch (e) {
        return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
          ? { type: "graphql-error", error: e }
          : u;
      }
    }
    l.getNativeMLModel = d;
  },
  98,
);
