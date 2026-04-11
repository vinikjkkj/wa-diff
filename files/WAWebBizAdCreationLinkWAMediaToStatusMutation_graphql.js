__d(
  "WAWebBizAdCreationLinkWAMediaToStatusMutation.graphql",
  ["WAWebBizAdCreationLinkWAMediaToStatusMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "request", variableName: "input" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationLinkWAMediaToStatusMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBCtwaNativeUploadAdMediaResponse",
              kind: "LinkedField",
              name: "xfb_ctwa_native_upload_ad_media",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCtwaNativeAdMediaResponseAttributes",
                  kind: "LinkedField",
                  name: "media_list",
                  plural: !0,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: r,
                      action: "THROW",
                      path: "xfb_ctwa_native_upload_ad_media.media_list.id",
                    },
                    {
                      kind: "RequiredField",
                      field: o,
                      action: "THROW",
                      path: "xfb_ctwa_native_upload_ad_media.media_list.type",
                    },
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationLinkWAMediaToStatusMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBCtwaNativeUploadAdMediaResponse",
              kind: "LinkedField",
              name: "xfb_ctwa_native_upload_ad_media",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBCtwaNativeAdMediaResponseAttributes",
                  kind: "LinkedField",
                  name: "media_list",
                  plural: !0,
                  selections: [r, o],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizAdCreationLinkWAMediaToStatusMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationLinkWAMediaToStatusMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
