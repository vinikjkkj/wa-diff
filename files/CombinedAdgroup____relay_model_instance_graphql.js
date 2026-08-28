__d(
  "CombinedAdgroup____relay_model_instance.graphql",
  [
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CombinedAdgroup____relay_model_instance",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "CombinedAdgroup__id",
          },
          kind: "RelayLiveResolver",
          name: "__relay_model_instance",
          resolverModule: n("relay-runtime/experimental").resolverDataInjector(
            n("CombinedAdgroup__id.graphql"),
            n("CombinedAdgroup-resolvers").CombinedAdgroup,
            "id",
            !0,
          ),
          path: "__relay_model_instance",
        },
      ],
      type: "CombinedAdgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
