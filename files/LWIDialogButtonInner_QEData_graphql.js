__d(
  "LWIDialogButtonInner_QEData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { kind: "Literal", name: "bool_default", value: !1 };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "LWIDialogButtonInner_QEData",
        selections: [
          {
            alias: "qe_am_first_am_deeplink",
            args: [
              {
                kind: "Literal",
                name: "disable_auto_log_exposures",
                value: !0,
              },
              {
                kind: "Literal",
                name: "qe_universe",
                value: "mbs_entrypoints_to_am_deeplink",
              },
            ],
            concreteType: "QECheck",
            kind: "LinkedField",
            name: "qe_check",
            plural: !1,
            selections: [
              {
                alias: "enabled",
                args: [
                  e,
                  {
                    kind: "Literal",
                    name: "param_name",
                    value: "am_first_enabled",
                  },
                ],
                kind: "ScalarField",
                name: "bool",
                storageKey:
                  'bool(bool_default:false,param_name:"am_first_enabled")',
              },
              {
                alias: "is_eligible_for_experiment",
                args: [
                  e,
                  {
                    kind: "Literal",
                    name: "param_name",
                    value: "is_eligible_for_experiment",
                  },
                ],
                kind: "ScalarField",
                name: "bool",
                storageKey:
                  'bool(bool_default:false,param_name:"is_eligible_for_experiment")',
              },
            ],
            storageKey:
              'qe_check(disable_auto_log_exposures:true,qe_universe:"mbs_entrypoints_to_am_deeplink")',
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
