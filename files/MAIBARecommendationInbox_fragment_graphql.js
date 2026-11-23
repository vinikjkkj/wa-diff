__d(
  "MAIBARecommendationInbox_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "includeRecommendations",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "MAIBARecommendationInbox_fragment",
      selections: [
        {
          condition: "includeRecommendations",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              alias: null,
              args: [
                {
                  kind: "Variable",
                  name: "ad_account_id",
                  variableName: "adAccountID",
                },
                { kind: "Literal", name: "only_unread", value: !1 },
              ],
              concreteType: "MAIBAFabRecommendationNotification",
              kind: "LinkedField",
              name: "maiba_fab_recommendation_notifications",
              plural: !0,
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
                  name: "ad_account_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "conversation_id",
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
                  kind: "ScalarField",
                  name: "read_time",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "snippet",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "toast_id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
