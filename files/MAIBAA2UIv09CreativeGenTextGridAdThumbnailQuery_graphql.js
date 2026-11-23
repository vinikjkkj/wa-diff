__d(
  "MAIBAA2UIv09CreativeGenTextGridAdThumbnailQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adgroupID" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "adgroupID" }],
        n = {
          alias: null,
          args: null,
          concreteType: "MAIBACreative",
          kind: "LinkedField",
          name: "creative",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                { kind: "Literal", name: "height", value: 64 },
                { kind: "Literal", name: "width", value: 64 },
              ],
              kind: "ScalarField",
              name: "thumbnail_url",
              storageKey: "thumbnail_url(height:64,width:64)",
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAA2UIv09CreativeGenTextGridAdThumbnailQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAdgroupData",
              kind: "LinkedField",
              name: "maiba_adgroup",
              plural: !1,
              selections: [n],
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
          name: "MAIBAA2UIv09CreativeGenTextGridAdThumbnailQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAdgroupData",
              kind: "LinkedField",
              name: "maiba_adgroup",
              plural: !1,
              selections: [
                n,
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
          id: "29773875905538054",
          metadata: {},
          name: "MAIBAA2UIv09CreativeGenTextGridAdThumbnailQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
