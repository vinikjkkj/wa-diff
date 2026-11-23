__d(
  "MAIBAPublishButton_publishStatus.graphql",
  ["MAIBAPublishButtonRefetchQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "ids" },
      ],
      kind: "Fragment",
      metadata: {
        refetch: {
          connection: null,
          fragmentPathInResult: [],
          operation: n("MAIBAPublishButtonRefetchQuery.graphql"),
        },
      },
      name: "MAIBAPublishButton_publishStatus",
      selections: [
        {
          alias: null,
          args: [{ kind: "Variable", name: "ids", variableName: "ids" }],
          concreteType: null,
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "draft_fragment_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "publish_status",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_object_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_object_type",
                  storageKey: null,
                },
              ],
              type: "AdDraftFragmentSql",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
