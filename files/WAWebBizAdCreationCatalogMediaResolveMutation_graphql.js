__d(
  "WAWebBizAdCreationCatalogMediaResolveMutation.graphql",
  ["WAWebBizAdCreationCatalogMediaResolveMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "fb_access_token",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "items" },
        o = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "ad_account_id",
                  },
                  {
                    kind: "Variable",
                    name: "fb_access_token",
                    variableName: "fb_access_token",
                  },
                  { kind: "Variable", name: "items", variableName: "items" },
                ],
                kind: "ObjectValue",
                name: "data",
              },
            ],
            concreteType: "WaAdCreationCatalogMediaResolveResponsePayload",
            kind: "LinkedField",
            name: "wa_ad_creation_catalog_media_resolve",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CTWAWebLWIUploadedMediaData",
                kind: "LinkedField",
                name: "resolved_media_data",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "hash",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "video_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationCatalogMediaResolveMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "WAWebBizAdCreationCatalogMediaResolveMutation",
          selections: o,
        },
        params: {
          id: n(
            "WAWebBizAdCreationCatalogMediaResolveMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationCatalogMediaResolveMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
