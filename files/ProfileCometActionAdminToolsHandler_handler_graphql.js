__d(
  "ProfileCometActionAdminToolsHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionAdminToolsHandler_handler",
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
              ],
              type: "ProfileActionAdminTools",
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionAdminToolsHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
