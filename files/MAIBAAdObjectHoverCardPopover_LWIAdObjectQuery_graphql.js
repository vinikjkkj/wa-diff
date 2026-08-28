__d(
  "MAIBAAdObjectHoverCardPopover_LWIAdObjectQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        { defaultValue: null, kind: "LocalArgument", name: "adObjectId" },
      ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAdObjectHoverCardPopover_LWIAdObjectQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "adObjectId",
                  variableName: "adObjectId",
                },
              ],
              kind: "FragmentSpread",
              name: "useLWIAdObjectHoverCardData_Fragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAAdObjectHoverCardPopover_LWIAdObjectQuery",
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "id", variableName: "adObjectId" },
              ],
              concreteType: null,
              kind: "LinkedField",
              name: "maiba_ad_object",
              plural: !1,
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
                  concreteType: "LWIAdsManagementCommonRenderer",
                  kind: "LinkedField",
                  name: "lwi_common_renderer",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "boost_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "body_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "ad_object_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "title_text",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "LWIAdsManagementRendererStatusInfo",
                      kind: "LinkedField",
                      name: "status_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "status",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "LWIAdsManagementRendererImageInfo",
                      kind: "LinkedField",
                      name: "image_info",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "images",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "datetime_text",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26720420644317174",
          metadata: {},
          name: "MAIBAAdObjectHoverCardPopover_LWIAdObjectQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
