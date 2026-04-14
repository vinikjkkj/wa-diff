__d(
  "WAWebConsumerQuickPromotionActionMutation",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCTWAConstants",
    "WAWebConsumerQuickPromotionActionGraphQL",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQuickPromotionGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { type: "error" };
    function m(e) {
      if (!o("WAWebQuickPromotionGating").consumerQpGraphQLEnabled())
        return (c || (c = n("Promise"))).resolve({ type: "not-enabled" });
      var t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.surface_nux_id);
      return t == null ||
        !o("WAWebQuickPromotionGating")
          .qpSurfaceIdsUsingGraphQLConsumer()
          .has(t)
        ? (c || (c = n("Promise"))).resolve({ type: "not-enabled" })
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "consumerQuickPromotionActionMutation",
              function () {
                return p(e);
              },
            )
            .waitUntilCompleted();
    }
    function p(t) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          _(t),
          o("WAWebCTWAConstants").QP_ACTION_MUTATION_TIMEOUT_MS,
        )
        .then(function (t) {
          return t.type === "success"
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "executeConsumerQuickPromotionActionMutation: success",
                  ])),
              ),
              t)
            : (t.type,
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    'executeConsumerQuickPromotionActionMutation: failed as "',
                    '"',
                  ])),
                t.type,
              ),
              t);
        })
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    'executeConsumerQuickPromotionActionMutation: failed as "timeout"',
                  ])),
              ),
              { type: "timeout" }
            );
          throw e;
        });
    }
    function _(e) {
      return o("WAWebConsumerQuickPromotionActionGraphQL")
        .executeConsumerQuickPromotionActionGraphQL(e)
        .then(function (e) {
          return e ? { type: "success" } : d;
        })
        .catch(function () {
          return d;
        });
    }
    l.executeConsumerQuickPromotionActionMutation = m;
  },
  98,
);
