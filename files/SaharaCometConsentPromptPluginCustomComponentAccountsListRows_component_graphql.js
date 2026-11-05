__d(
  "SaharaCometConsentPromptPluginCustomComponentAccountsListRows_component.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "SaharaCometConsentPromptPluginCustomComponentAccountsListRows_component",
      selections: [
        {
          kind: "RequiredField",
          field: {
            alias: null,
            args: null,
            concreteType:
              "ConsentPromptPluginCustomComponentAccountsListRowsAccountData",
            kind: "LinkedField",
            name: "account_profiles",
            plural: !0,
            selections: [
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "account_name",
                  storageKey: null,
                },
                action: "THROW",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "identity_type",
                  storageKey: null,
                },
                action: "THROW",
              },
              {
                kind: "RequiredField",
                field: {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_picture_url",
                  storageKey: null,
                },
                action: "THROW",
              },
            ],
            storageKey: null,
          },
          action: "THROW",
        },
      ],
      type: "ConsentPromptPluginCustomComponentAccountsListRows",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
