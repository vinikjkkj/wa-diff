__d(
  "WAWebFetchOHAIKeyConfigJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "aead_id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "expiration_date",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "kdf_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "kem_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "key_id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "last_updated_time",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "public_key",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchOHAIKeyConfigJobQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2OHAIConfigsResponse",
              kind: "LinkedField",
              name: "xwa2_ohai_configurations",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2OHAIConfig",
                  kind: "LinkedField",
                  name: "ohai_configs",
                  plural: !0,
                  selections: [
                    { kind: "RequiredField", field: e, action: "THROW" },
                    { kind: "RequiredField", field: t, action: "THROW" },
                    { kind: "RequiredField", field: n, action: "THROW" },
                    { kind: "RequiredField", field: r, action: "THROW" },
                    { kind: "RequiredField", field: o, action: "THROW" },
                    { kind: "RequiredField", field: a, action: "THROW" },
                    { kind: "RequiredField", field: i, action: "THROW" },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchOHAIKeyConfigJobQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XWA2OHAIConfigsResponse",
              kind: "LinkedField",
              name: "xwa2_ohai_configurations",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XWA2OHAIConfig",
                  kind: "LinkedField",
                  name: "ohai_configs",
                  plural: !0,
                  selections: [e, t, n, r, o, a, i],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29366514836329275",
          metadata: {},
          name: "WAWebFetchOHAIKeyConfigJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
