__d(
  "MAIBAPreviewPublishAdImageResolverQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "imageHashes" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = [
          {
            kind: "Variable",
            name: "image_hashes",
            variableName: "imageHashes",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "download_url",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "hash",
          storageKey: null,
        },
        a = {
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
          name: "MAIBAPreviewPublishAdImageResolverQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: n,
                  concreteType: "AdImage",
                  kind: "LinkedField",
                  name: "adimages_from_hashes",
                  plural: !0,
                  selections: [r, o],
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
          name: "MAIBAPreviewPublishAdImageResolverQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: n,
                  concreteType: "AdImage",
                  kind: "LinkedField",
                  name: "adimages_from_hashes",
                  plural: !0,
                  selections: [r, o, a],
                  storageKey: null,
                },
                a,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28370049032608083",
          metadata: {},
          name: "MAIBAPreviewPublishAdImageResolverQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
