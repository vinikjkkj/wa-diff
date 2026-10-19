__d(
  "WAWebDeleteMetaAiThreadGQL",
  [
    "WALogger",
    "WAWebDeleteMetaAiThreadGQLMutation.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebDeleteMetaAiThreadGQLMutation.graphql"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebRelayClient").commitMutation(
              d,
              { bot_fbid: e },
              { environmentType: "whatsapp_web" },
            );
            return (t == null ? void 0 : t.wass_delete_account) === !0
              ? "deleted"
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteMetaAiThreadGQL] server did not delete the thread",
                    ])),
                ),
                "retryable");
          } catch (e) {
            return o("WAWebGraphQLServerError").isWassBotNotFoundError(e)
              ? "already-gone"
              : (_(e), "retryable");
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t,
          n,
          r = (
            (t = (n = e.source) == null ? void 0 : n.errors) != null ? t : []
          )
            .map(function (e) {
              var t = e.code;
              return t;
            })
            .filter(function (e) {
              return typeof e == "number";
            })
            .join(",");
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[deleteMetaAiThreadGQL] server-error codes=",
              "",
            ])),
          r,
        );
        return;
      }
      o("WALogger").WARN(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[deleteMetaAiThreadGQL] request-failed",
          ])),
      );
    }
    l.deleteMetaAiThreadGQL = m;
  },
  98,
);
