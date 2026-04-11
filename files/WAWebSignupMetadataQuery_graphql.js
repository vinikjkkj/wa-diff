__d(
  "WAWebSignupMetadataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "phone_number",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "signup_id" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "phone_number",
                variableName: "phone_number",
              },
              {
                kind: "Variable",
                name: "signup_id",
                variableName: "signup_id",
              },
            ],
            concreteType: "WhatsAppBusinessSignup",
            kind: "LinkedField",
            name: "wa_signup_metadata",
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
                name: "signup_message",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "privacy_policy_url",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebSignupMetadataQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebSignupMetadataQuery",
          selections: n,
        },
        params: {
          id: "26378108788468347",
          metadata: {},
          name: "WAWebSignupMetadataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
