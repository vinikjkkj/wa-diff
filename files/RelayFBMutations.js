__d(
  "RelayFBMutations",
  ["RelayAPIConfig", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1;
    function l(t) {
      return function (o, a) {
        var r = a.variables.input || {};
        n("warning")(
          !("client_mutation_id" in r),
          "RelayFBMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.",
        );
        var i;
        o.options != null && o.options.actorID != null
          ? (i = o.options.actorID)
          : ((i = n("RelayAPIConfig").actorID),
            n("warning")(
              !1,
              "RelayFBMutations: Expected ActorID to be set on the Relay environment. Please use `createEnvironment` from `RelayModern` to create an environment with actorID.",
            ));
        var l = babelHelpers.extends({}, a.variables, {
          input: babelHelpers.extends(
            { actor_id: i, client_mutation_id: "" + e++ },
            r,
          ),
        });
        return t(o, {
          configs: a.configs,
          mutation: a.mutation,
          onCompleted: a.onCompleted,
          onError: a.onError,
          onNext: a.onNext,
          onUnsubscribe: a.onUnsubscribe,
          optimisticResponse: a.optimisticResponse,
          optimisticUpdater: a.optimisticUpdater,
          updater: a.updater,
          uploadables: a.uploadables,
          variables: l,
        });
      };
    }
    a.exports = { addFBisms: l };
  },
  null,
);
