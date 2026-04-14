__d(
  "WAWebQuickPromotionActionMutation",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCTWAConstants",
    "WAWebFetchAdAccountToken",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQuickPromotionActionMutation.graphql",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { type: "error" },
      p =
        e !== void 0 ? e : (e = n("WAWebQuickPromotionActionMutation.graphql"));
    function _(e) {
      if (!o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB())
        return (d || (d = n("Promise"))).resolve({ type: "not-enabled" });
      var t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.surface_nux_id);
      return t == null ||
        !o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLSMB().has(t)
        ? (d || (d = n("Promise"))).resolve({ type: "not-enabled" })
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob("quickPromotionActionMutation", function () {
              return f(e);
            })
            .waitUntilCompleted();
    }
    function f(e) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          g(e),
          o("WAWebCTWAConstants").QP_ACTION_MUTATION_TIMEOUT_MS,
        )
        .then(function (e) {
          return e.type === "success"
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "executeQuickPromotionActionMutation: success",
                  ])),
              ),
              e)
            : (e.type,
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    'executeQuickPromotionActionMutation: failed as "',
                    '"',
                  ])),
                e.type,
              ),
              e);
        })
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    'executeQuickPromotionActionMutation: failed as "timeout"',
                  ])),
              ),
              { type: "timeout" }
            );
          throw e;
        });
    }
    function g(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? h(e, t.token).then(function (e) {
                return (
                  e.type === "auth-failure"
                    ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                    : e.type,
                  e
                );
              })
            : (t.type, t);
        });
    }
    function h(e, t) {
      return o("WAWebRelayClient")
        .commitMutation(
          p,
          { input: e },
          { environmentType: "facebook", accessToken: t },
        )
        .then(function (e) {
          return e == null || e.wa_quick_promotion_log_event == null
            ? m
            : { type: "success" };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth-failure" }
            : m;
        });
    }
    l.executeQuickPromotionActionMutation = _;
  },
  98,
);
