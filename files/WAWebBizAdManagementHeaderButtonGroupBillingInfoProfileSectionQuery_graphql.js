__d(
  "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql",
  [
    "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      fragment: {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "me",
            plural: !1,
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "WAWebBizAdManagementIdentityButton_facebookProfile",
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      },
      kind: "Request",
      operation: {
        argumentDefinitions: [],
        kind: "Operation",
        name: "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "me",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              { kind: "TypeDiscriminator", abstractKey: "__isActor" },
              {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "downloadable_uri",
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
        id: n(
          "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery_facebookRelayOperation",
        ),
        metadata: {},
        name: "WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery",
        operationKind: "query",
        text: null,
      },
    };
    a.exports = e;
  },
  null,
);
