__d(
  "MAIBACreatorDiscoveryAddToListButtonQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "creatorIDs" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        r = [
          { kind: "Variable", name: "asset_ids", variableName: "creatorIDs" },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "saved_in_list_ids",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBACreatorDiscoveryAddToListButtonQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PAYCAMBusinessProfileResponsePayload",
              kind: "LinkedField",
              name: "cam_business_profile",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "brand_profile",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "PAYBCPBrandProfile",
                      kind: "LinkedField",
                      name: "bcp_brand_profile",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "creator_lists",
                          plural: !0,
                          selections: [t, n],
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
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "cam_creator_profile_for_ids",
              plural: !0,
              selections: [t, o],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBACreatorDiscoveryAddToListButtonQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "PAYCAMBusinessProfileResponsePayload",
              kind: "LinkedField",
              name: "cam_business_profile",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "brand_profile",
                  plural: !1,
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType: "PAYBCPBrandProfile",
                      kind: "LinkedField",
                      name: "bcp_brand_profile",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "creator_lists",
                          plural: !0,
                          selections: [a, t, n],
                          storageKey: null,
                        },
                        t,
                      ],
                      storageKey: null,
                    },
                    t,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "cam_creator_profile_for_ids",
              plural: !0,
              selections: [a, t, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28564698983220309",
          metadata: {},
          name: "MAIBACreatorDiscoveryAddToListButtonQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
