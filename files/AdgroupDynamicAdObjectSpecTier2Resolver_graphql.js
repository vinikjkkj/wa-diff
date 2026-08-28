__d(
  "AdgroupDynamicAdObjectSpecTier2Resolver.graphql",
  ["AdIssuesInfo-ad_issues_info_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { vultureHash: "0kY69k6bZjmxTSB_oGOMvmJhlAs=" },
      name: "AdgroupDynamicAdObjectSpecTier2Resolver",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdsAPIActiveIssuesInfoApiResultGQL",
          kind: "LinkedField",
          name: "issues_info",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "AdIssuesInfoAdIssuesInfoSpecResolver",
              },
              kind: "RelayResolver",
              name: "ad_issues_info_spec",
              resolverModule: n("AdIssuesInfo-ad_issues_info_spec-resolver")
                .ad_issues_info_spec,
              path: "issues_info.ad_issues_info_spec",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Adgroup",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
