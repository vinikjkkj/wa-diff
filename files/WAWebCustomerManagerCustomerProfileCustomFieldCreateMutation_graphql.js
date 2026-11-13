__d(
  "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation.graphql",
  [
    "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "XFBWaCreateCustomerProfileCustomFieldResponsePayload",
            kind: "LinkedField",
            name: "xfb_wa_create_customer_profile_custom_field",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWACustomerProfileCustomField",
                kind: "LinkedField",
                name: "wa_customer_profile_custom_field",
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
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "field_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "enum_values",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "enum_option_keys",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "currency",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "currency_decimal_places",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebCustomerManagerCustomerProfileCustomFieldCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
