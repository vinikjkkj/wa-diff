__d(
  "ProfileCometActionProfessionalModeOnboardingLogger_logger$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "ProfileCometActionProfessionalModeOnboardingLogger_logger$normalization",
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
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_disabled",
              storageKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_locked_profile_see_promode_turn_on_button",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_ineligible_profile_see_turn_on_button",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_profile_with_transition_in_progress_see_turn_on_button",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "can_u18_with_public_posting_off_see_turn_on_button",
                  storageKey: null,
                },
              ],
              type: "ProfileActionOnboarding",
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
