__d(
  "FBPayAddressTypeaheadDetailsQuery.facebook.graphql",
  ["FBPayAddressTypeaheadDetailsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "address_id" },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "payment_product_id",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "payment_type" },
        o = { defaultValue: null, kind: "LocalArgument", name: "session_id" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "upl_session_id",
        },
        i = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "address_id",
                variableName: "address_id",
              },
              {
                kind: "Variable",
                name: "payment_product_id",
                variableName: "payment_product_id",
              },
              {
                kind: "Variable",
                name: "payment_type",
                variableName: "payment_type",
              },
              {
                kind: "Variable",
                name: "session_id",
                variableName: "session_id",
              },
              {
                kind: "Variable",
                name: "upl_session_id",
                variableName: "upl_session_id",
              },
            ],
            concreteType: "PAYAddressDetailsPayload",
            kind: "LinkedField",
            name: "fetch_address_details",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "PAYAddressTypeaheadAddress",
                kind: "LinkedField",
                name: "address",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "address_line_1",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "address_line_2",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "city",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "postal_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "state_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "postal_code_suffix",
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
          argumentDefinitions: [e, t, r, o, a],
          kind: "Fragment",
          metadata: null,
          name: "FBPayAddressTypeaheadDetailsQuery",
          selections: i,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, o, a, t, r],
          kind: "Operation",
          name: "FBPayAddressTypeaheadDetailsQuery",
          selections: i,
        },
        params: {
          id: n("FBPayAddressTypeaheadDetailsQuery_facebookRelayOperation"),
          metadata: {},
          name: "FBPayAddressTypeaheadDetailsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
