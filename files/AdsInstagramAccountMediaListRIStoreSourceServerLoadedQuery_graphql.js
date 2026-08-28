__d(
  "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "media_type" },
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
          args: [
            {
              kind: "Variable",
              name: "media_type",
              variableName: "media_type",
            },
          ],
          concreteType: "InstagramUserToInstagramMediaV2Connection",
          kind: "LinkedField",
          name: "instagram_media_v2",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "InstagramMediaV2",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                t,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "instagram_media_type",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "media_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "thumbnail_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_sub_media",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "creation_time",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBVideoMetadataObject",
                  kind: "LinkedField",
                  name: "video_metadata",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "duration",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "width",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "height",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "loaded_instagram_v2_user",
                  plural: !0,
                  selections: [n],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "InstagramUserV2",
                  kind: "LinkedField",
                  name: "loaded_instagram_v2_user",
                  plural: !0,
                  selections: [n, t],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "992a49329ba1c0bc8e6dc4250ff11729",
          id: null,
          metadata: {},
          name: "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
