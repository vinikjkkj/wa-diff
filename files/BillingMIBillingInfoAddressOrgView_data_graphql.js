__d(
  "BillingMIBillingInfoAddressOrgView_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "can_configure_address",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_address_visible",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "paymentAccountID",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BillingMIBillingInfoAddressOrgView_data",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "payment_account_id",
                variableName: "paymentAccountID",
              },
            ],
            concreteType: "MIAddressTypeConfigsType",
            kind: "LinkedField",
            name: "mi_address_configs_per_address_type",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MIAddressConfigType",
                kind: "LinkedField",
                name: "bill_to_config",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MIAddressConfigType",
                kind: "LinkedField",
                name: "liable_to_config",
                plural: !1,
                selections: e,
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MIAddressConfigType",
                kind: "LinkedField",
                name: "sold_to_config",
                plural: !1,
                selections: e,
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "supported_billing_les_in_aoab",
            plural: !0,
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
                name: "legal_entity_name",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "IEntEC",
        abstractKey: "__isIEntEC",
      };
    })();
    a.exports = e;
  },
  null,
);
