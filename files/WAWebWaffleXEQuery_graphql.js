__d(
  "WAWebWaffleXEQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = {
          alias: null,
          args: null,
          concreteType: "WaffleXASObject",
          kind: "LinkedField",
          name: "waffle_xas",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "waffle_xan",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "waffle_xs",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "input_params", variableName: "input" },
            ],
            concreteType: "WaffleXEResponse",
            kind: "LinkedField",
            name: "waffle_xe_root",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "WafflePurposePublicKeys",
                kind: "LinkedField",
                name: "purpose_public_keys",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_public_ek",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_public_ik",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_public_ik_sig",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_public_ik_enc_certificate",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_dummy_ciphertext",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "purpose_dummy_nonce",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "waffle_unique_ids",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WaffleD",
                kind: "LinkedField",
                name: "waffle_d",
                plural: !0,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "waffle_di",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "WaffleXPS",
                kind: "LinkedField",
                name: "waffle_xps",
                plural: !0,
                selections: [
                  t,
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "waffle_hcbc",
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
          name: "WAWebWaffleXEQuery",
          selections: n,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebWaffleXEQuery",
          selections: n,
        },
        params: {
          id: "32172601809054525",
          metadata: {},
          name: "WAWebWaffleXEQuery",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
