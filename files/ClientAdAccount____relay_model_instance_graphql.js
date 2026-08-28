__d(
  "ClientAdAccount____relay_model_instance.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ClientAdAccount____relay_model_instance",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "ClientAdAccount__id",
          },
          kind: "RelayLiveResolver",
          name: "__relay_model_instance",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("ClientAdAccount__id.graphql"),
            n("ClientAdAccount-resolvers").ClientAdAccount,
            "id",
            !0,
          ),
          path: "__relay_model_instance",
        },
      ],
      type: "ClientAdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
