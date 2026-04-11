__d(
  "WAWebBizAdCreationResolveImageURLQuery.graphql",
  ["WAWebBizAdCreationResolveImageURLQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "imageHash" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "legacyAdAccountID",
        },
        r = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "image_hash",
                    variableName: "imageHash",
                  },
                  {
                    kind: "Variable",
                    name: "legacy_ad_account_id",
                    variableName: "legacyAdAccountID",
                  },
                ],
                kind: "ScalarField",
                name: "image_url_from_hash",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationResolveImageURLQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebBizAdCreationResolveImageURLQuery",
          selections: r,
        },
        params: {
          id: n(
            "WAWebBizAdCreationResolveImageURLQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationResolveImageURLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
