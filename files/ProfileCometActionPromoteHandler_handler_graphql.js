__d(
  "ProfileCometActionPromoteHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionPromoteHandler_handler",
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
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionPromoteHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
