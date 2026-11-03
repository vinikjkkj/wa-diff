__d(
  "ProfileGeminiWeakReferenceLink_user$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileGeminiWeakReferenceLink_user$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "short_name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "WorkUserInfo",
          kind: "LinkedField",
          name: "work_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_active_account",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
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
              kind: "InlineFragment",
              selections: [
                {
                  alias: "profile_url",
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
              ],
              type: "Entity",
              abstractKey: "__isEntity",
            },
          ],
          type: "Actor",
          abstractKey: "__isActor",
        },
      ],
    };
    a.exports = e;
  },
  null,
);
