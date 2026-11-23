__d(
  "MAIBAAudienceInterestTokenizerBrowseRootsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "ad_account_id",
            variableName: "accountID",
          },
          { kind: "Literal", name: "audience_path", value: [] },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAudienceInterestTokenizerBrowseRootsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "DetailTargetingUnifiedNode",
              kind: "LinkedField",
              name: "detailed_targeting_browse",
              plural: !0,
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
          name: "MAIBAAudienceInterestTokenizerBrowseRootsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "DetailTargetingUnifiedNode",
              kind: "LinkedField",
              name: "detailed_targeting_browse",
              plural: !0,
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
          id: "39931039883210460",
          metadata: {},
          name: "MAIBAAudienceInterestTokenizerBrowseRootsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
