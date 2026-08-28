__d(
  "AdsAccountStoreNewSourceFragment.graphql",
  ["AdAccount-ad_object_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsAccountStoreNewSourceFragment",
      selections: [
        {
          alias: null,
          args: null,
          fragment: {
            args: null,
            kind: "FragmentSpread",
            name: "AdAccountAdObjectSpecResolver",
          },
          kind: "RelayResolver",
          name: "adaccount_spec",
          resolverModule: n("AdAccount-ad_object_spec-resolver").adaccount_spec,
          path: "adaccount_spec",
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
