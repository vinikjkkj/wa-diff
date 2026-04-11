__d(
  "useWAWebBizAdCreationSearchInterestsQuery.graphql",
  ["useWAWebBizAdCreationSearchInterestsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "count" },
        r = { defaultValue: null, kind: "LocalArgument", name: "query" },
        o = [{ kind: "Variable", name: "query", variableName: "query" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "AdsTargeting",
          kind: "LinkedField",
          name: "ads_targeting",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "ad_account_id",
                  variableName: "adAccountID",
                },
                { kind: "Variable", name: "first", variableName: "count" },
              ],
              concreteType: "AdDetailedTargetingsConnection",
              kind: "LinkedField",
              name: "detailed_targetings",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdDetailedTargetingsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "DetailTargetingUnifiedNode",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [
                        a,
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "path",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "raw_name",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "target_type",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdCreationSearchInterestsQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "SearchableEntitiesQuery",
              kind: "LinkedField",
              name: "entities_named",
              plural: !1,
              selections: [i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, e, t],
          kind: "Operation",
          name: "useWAWebBizAdCreationSearchInterestsQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "SearchableEntitiesQuery",
              kind: "LinkedField",
              name: "entities_named",
              plural: !1,
              selections: [i, a],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "useWAWebBizAdCreationSearchInterestsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationSearchInterestsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
