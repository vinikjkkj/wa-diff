__d(
  "WAWebMLModelMetadataFetcher",
  [
    "WALogger",
    "WAWebMLModelGraphqlErrorProcessor",
    "WAWebNativeMLModelQuery",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "WAWebMLModelMetadataFetcher";
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.length === 0) return { type: "success", results: [] };
          try {
            var r = yield o("WAWebNativeMLModelQuery").getNativeMLModel(t, n);
            if (r.type !== "success")
              return r.type === "graphql-error"
                ? {
                    type: "error",
                    error: o(
                      "WAWebMLModelGraphqlErrorProcessor",
                    ).processDeliveryError(r.error),
                  }
                : {
                    type: "error",
                    error: {
                      type: "unknown-error",
                      reason: "Failed to fetch model metadata",
                    },
                  };
            var a = r.manifest;
            if (a == null)
              return (
                o("WAWebMLModelGraphqlErrorProcessor").reportCriticalError(
                  "fetchModelMetadata",
                  "manifest is null for batch request",
                ),
                {
                  type: "error",
                  error: o(
                    "WAWebMLModelGraphqlErrorProcessor",
                  ).processModelNotFoundError("ML Model metadata is not found"),
                }
              );
            if (a.models == null || a.models.length === 0) {
              var i,
                l = (i = a.status_details) != null ? i : "No models found";
              return {
                type: "error",
                error: o(
                  "WAWebMLModelGraphqlErrorProcessor",
                ).processModelNotFoundError(l),
              };
            }
            var d = [],
              m = [],
              p = [],
              _ = function* (n) {
                var e;
                if (n == null || n.name == null) return 0;
                var r = t.find(function (e) {
                  return e.name === n.name && e.version === n.version;
                });
                if (r == null) return 0;
                var o = (e = n.assets) == null ? void 0 : e[0];
                if (o == null)
                  return (
                    m.length < 3 &&
                      m.push(String(n.name) + " v" + String(n.version)),
                    0
                  );
                if (o.url == null || o.md5_hash == null)
                  return (
                    p.length < 3 &&
                      p.push(String(n.name) + " v" + String(n.version)),
                    0
                  );
                d.push({ request: r, metadata: o });
              },
              f;
            for (var g of a.models) f = yield* _(g);
            return (
              m.length > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": No assets for ",
                      " models => ",
                      "",
                    ])),
                  c,
                  m.length,
                  m,
                ),
              p.length > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": Invalid metadata for ",
                      " models => ",
                      "",
                    ])),
                  c,
                  p.length,
                  p,
                ),
              { type: "success", results: d }
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Unexpected error during fetch: ",
                    "",
                  ])),
                c,
                e instanceof Error ? e.message : String(e),
              ),
              {
                type: "error",
                error: {
                  type: "unknown-error",
                  reason: e instanceof Error ? e.message : "Unexpected error",
                },
              }
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.fetchModelMetadata = d;
  },
  98,
);
