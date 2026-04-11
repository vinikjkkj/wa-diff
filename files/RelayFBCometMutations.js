__d(
  "RelayFBCometMutations",
  ["FBLogger", "relay-runtime", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["actor_id", "client_mutation_id"],
      s = 1;
    function u(t) {
      return function (a, i) {
        var n = i.variables.input || {},
          l = n.actor_id,
          u = n.client_mutation_id,
          c = babelHelpers.objectWithoutPropertiesLoose(n, e);
        r("warning")(
          u == null,
          "RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.",
        );
        var d;
        if (
          (a.options != null &&
          a.options.actorID != null &&
          typeof a.options.actorID == "string"
            ? (d = a.options.actorID)
            : r("FBLogger")("relay").mustfix(
                "RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh",
              ),
          l != null && l !== d)
        ) {
          var m = o("relay-runtime").getRequest(i.mutation),
            p = m.params.name;
          (r("FBLogger")("relay").mustfix(
            "You passed an actor_id parameter %s to mutation %s, but the parameter was overridden by the actor_id %s defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.",
            l,
            p,
            d != null ? d : "",
          ),
            (d = l));
        }
        var _ = babelHelpers.extends({}, i.variables, {
          input: babelHelpers.extends({}, c, {
            actor_id: d,
            client_mutation_id: u != null ? u : "" + s++,
          }),
        });
        return t(a, {
          configs: i.configs,
          mutation: i.mutation,
          onCompleted: i.onCompleted,
          onError: i.onError,
          onUnsubscribe: i.onUnsubscribe,
          optimisticResponse: i.optimisticResponse,
          optimisticUpdater: i.optimisticUpdater,
          updater: i.updater,
          uploadables: i.uploadables,
          variables: _,
        });
      };
    }
    l.addFBisms = u;
  },
  98,
);
