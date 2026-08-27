__d(
  "LWICometProductPickerUtilsPageInfoQuery.graphql",
  ["LWICometProductPickerUtilsPageInfoQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageId" }],
        t = [{ kind: "Variable", name: "id", variableName: "pageId" }],
        r = {
          alias: null,
          args: [{ kind: "Literal", name: "last", value: 5 }],
          kind: "ScalarField",
          name: "has_only_bcp_ads",
          storageKey: "has_only_bcp_ads(last:5)",
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "LWICometProductPickerUtilsPageInfoQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [r],
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
          name: "LWICometProductPickerUtilsPageInfoQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                r,
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
          id: n(
            "LWICometProductPickerUtilsPageInfoQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "LWICometProductPickerUtilsPageInfoQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
