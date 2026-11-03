__d(
  "ProfileCometActionFollowingStatusHandler_handler$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionFollowingStatusHandler_handler$normalization",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "profile_action",
            plural: !1,
            selections: [
              e,
              {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "profile_owner",
                plural: !1,
                selections: [
                  t,
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
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "render_location",
                storageKey: null,
              },
              t,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "supported", value: "2CyZfW" }],
            concreteType: null,
            kind: "LinkedField",
            name: "subscibed_actions_renderer",
            plural: !1,
            selections: [
              e,
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
                    fragmentName:
                      "ProfilePlusSubscribedActionsRenderer_renderer",
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
      };
    })();
    a.exports = e;
  },
  null,
);
