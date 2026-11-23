__d(
  "MAIBALWICountryRegulationEUDSAEditor_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "recently_used",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "suggestion",
          storageKey: null,
        },
      ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBALWICountryRegulationEUDSAEditor_account",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_dsa_beneficiary",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_dsa_payor",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SuggestedBeneficiariesAndPayors",
            kind: "LinkedField",
            name: "suggested_beneficiaries",
            plural: !0,
            selections: e,
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SuggestedBeneficiariesAndPayors",
            kind: "LinkedField",
            name: "suggested_payors",
            plural: !0,
            selections: e,
            storageKey: null,
          },
        ],
        type: "AdAccount",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
