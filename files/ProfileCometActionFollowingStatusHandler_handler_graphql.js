__d(
  "ProfileCometActionFollowingStatusHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionFollowingStatusHandler_handler",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "profile_owner",
                  plural: !1,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                      action: "THROW",
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "subscribe_status",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                action: "THROW",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "render_location",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
        {
          alias: null,
          args: [{ kind: "Literal", name: "supported", value: "2CyZfW" }],
          concreteType: null,
          kind: "LinkedField",
          name: "subscibed_actions_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "ProfileCometActionFollowingStatusHandler_handler",
                  fragmentName:
                    "ProfileCometSubscribedActionsRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBProfileSubscribedActionsRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName:
                    "ProfileCometActionFollowingStatusHandler_handler",
                  fragmentName: "ProfilePlusSubscribedActionsRenderer_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBProfilePlusSubscribedActionsRenderer",
              abstractKey: null,
            },
          ],
          storageKey: 'subscibed_actions_renderer(supported:"2CyZfW")',
        },
      ],
      type: "ProfileActionFollowingStatusHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
