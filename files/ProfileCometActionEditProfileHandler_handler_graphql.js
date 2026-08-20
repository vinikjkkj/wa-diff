__d(
  "ProfileCometActionEditProfileHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionEditProfileHandler_handler",
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
                  name: "is_viewer_eligible_for_directory_on_comet",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_type_name_for_content",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionEditProfileHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
