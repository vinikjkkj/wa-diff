__d(
  "WAWebBizAdCreationResolveVideoThumbnailURLQuery.graphql",
  ["WAWebBizAdCreationResolveVideoThumbnailURLQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        r = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "image",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationResolveVideoThumbnailURLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Video",
              kind: "LinkedField",
              name: "fetch__Video",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoThumbnail",
                  kind: "LinkedField",
                  name: "preferred_thumbnail",
                  plural: !1,
                  selections: [r],
                  storageKey: null,
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationResolveVideoThumbnailURLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Video",
              kind: "LinkedField",
              name: "fetch__Video",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoThumbnail",
                  kind: "LinkedField",
                  name: "preferred_thumbnail",
                  plural: !1,
                  selections: [r, o],
                  storageKey: null,
                },
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizAdCreationResolveVideoThumbnailURLQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationResolveVideoThumbnailURLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
