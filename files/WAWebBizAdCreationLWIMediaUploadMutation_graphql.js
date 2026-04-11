__d(
  "WAWebBizAdCreationLWIMediaUploadMutation.graphql",
  ["WAWebBizAdCreationLWIMediaUploadMutation_facebookRelayOperation"],
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
        r = { defaultValue: null, kind: "LocalArgument", name: "media_ids" },
        o = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        a = [
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
              {
                kind: "Variable",
                name: "media_ids",
                variableName: "media_ids",
              },
              { kind: "Variable", name: "page_id", variableName: "page_id" },
            ],
            kind: "ObjectValue",
            name: "data",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "hash",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "video_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationLWIMediaUploadMutation",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "WaAdCreationLwiMediaUploadResponsePayload",
              kind: "LinkedField",
              name: "wa_ad_creation_lwi_media_upload",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CTWAWebLWIUploadedMediaData",
                  kind: "LinkedField",
                  name: "uploaded_media_data",
                  plural: !0,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: i,
                      action: "THROW",
                      path: "wa_ad_creation_lwi_media_upload.uploaded_media_data.url",
                    },
                    l,
                    {
                      kind: "RequiredField",
                      field: s,
                      action: "THROW",
                      path: "wa_ad_creation_lwi_media_upload.uploaded_media_data.type",
                    },
                    u,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, o, r, t],
          kind: "Operation",
          name: "WAWebBizAdCreationLWIMediaUploadMutation",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "WaAdCreationLwiMediaUploadResponsePayload",
              kind: "LinkedField",
              name: "wa_ad_creation_lwi_media_upload",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "CTWAWebLWIUploadedMediaData",
                  kind: "LinkedField",
                  name: "uploaded_media_data",
                  plural: !0,
                  selections: [i, l, s, u],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizAdCreationLWIMediaUploadMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationLWIMediaUploadMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
