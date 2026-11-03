__d(
  "ProfileCometSingleEditAvatar_user.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometSingleEditAvatar_user",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Avatar",
          kind: "LinkedField",
          name: "user_avatar",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_fb_app_avatar",
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: "Variable", name: "scale", variableName: "scale" },
                { kind: "Literal", name: "size", value: 175 },
              ],
              concreteType: "Image",
              kind: "LinkedField",
              name: "profile_single_edit_preview_image",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "uri",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
