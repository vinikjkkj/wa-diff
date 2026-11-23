__d(
  "LWIDialogBoostUnavailableButton_BoostedComponentBoostUnavailableInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "LWIDialogBoostUnavailableButton_BoostedComponentBoostUnavailableInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "eligibility_rule",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Error",
          kind: "LinkedField",
          name: "coded_exception",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "summary",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "description",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "code",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confirm_label",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "confirm_link",
          storageKey: null,
        },
        {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "template_post_spec_override",
              storageKey: null,
            },
          ],
          type: "BoostedPostBoostUnavailableInfo",
          abstractKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "enforced_entity_id",
          storageKey: null,
        },
      ],
      type: "BoostedComponentBoostUnavailableInfo",
      abstractKey: "__isBoostedComponentBoostUnavailableInfo",
    };
    a.exports = e;
  },
  null,
);
