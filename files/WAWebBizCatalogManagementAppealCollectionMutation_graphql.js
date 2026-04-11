__d(
  "WAWebBizCatalogManagementAppealCollectionMutation.graphql",
  ["WAWebBizCatalogManagementAppealCollectionMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XFBWhatsAppCatalogAppealCollectionResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_catalog_appeal_collection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizCatalogManagementAppealCollectionMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizCatalogManagementAppealCollectionMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizCatalogManagementAppealCollectionMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizCatalogManagementAppealCollectionMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
