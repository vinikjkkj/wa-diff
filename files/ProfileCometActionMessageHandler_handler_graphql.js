__d(
  "ProfileCometActionMessageHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionMessageHandler_handler",
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
              concreteType: "User",
              kind: "LinkedField",
              name: "profile_owner",
              plural: !1,
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
                  name: "message_box_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "should_redirect_message_to_page_inbox",
                  storageKey: null,
                },
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
                  kind: "ScalarField",
                  name: "gender",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "contextual_message_request_state",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useUserThreadNavigationData_user",
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "MessengerProfileEntryPoint",
                  kind: "LinkedField",
                  name: "messenger_profile_entry_point",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "button_title",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [{ kind: "Literal", name: "site", value: "www" }],
              kind: "ScalarField",
              name: "uri",
              storageKey: 'uri(site:"www")',
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionMessageHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
