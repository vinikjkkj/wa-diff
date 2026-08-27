__d(
  "ProfileCometActionPromoteHandler_handler$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometActionPromoteHandler_handler$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "profile_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_delegate_page_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBIntegratedOnboarding",
                  kind: "LinkedField",
                  name: "integrated_onboarding",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "cta_list",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_exposed",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "ProfileActionPromote",
              abstractKey: null,
            },
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
    };
    a.exports = e;
  },
  null,
);
