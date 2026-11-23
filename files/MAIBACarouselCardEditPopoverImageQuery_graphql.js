__d(
  "MAIBACarouselCardEditPopoverImageQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "imageHashes" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
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
          name: "hash",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "original_height",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "original_width",
          storageKey: null,
        },
        l = {
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
          name: "MAIBACarouselCardEditPopoverImageQuery",
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
                  selections: [r, o, a, i],
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
          name: "MAIBACarouselCardEditPopoverImageQuery",
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
                  selections: [r, o, a, i, l],
                  storageKey: null,
                },
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29239994282288799",
          metadata: {},
          name: "MAIBACarouselCardEditPopoverImageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
