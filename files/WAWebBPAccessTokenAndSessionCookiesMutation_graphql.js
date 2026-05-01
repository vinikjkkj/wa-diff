__d(
  "WAWebBPAccessTokenAndSessionCookiesMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "application_id" },
          { defaultValue: null, kind: "LocalArgument", name: "code" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "application_id",
                variableName: "application_id",
              },
              { kind: "Variable", name: "code", variableName: "code" },
            ],
            concreteType: "XWAWABPAccessTokenAndSessionCookiesResponse",
            kind: "LinkedField",
            name: "xwa_bp_access_token_and_session_cookies",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "access_token",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "session_cookies",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "bp_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "access_token_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email_attr",
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
          name: "WAWebBPAccessTokenAndSessionCookiesMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBPAccessTokenAndSessionCookiesMutation",
          selections: t,
        },
        params: {
          id: "26756198580685447",
          metadata: {},
          name: "WAWebBPAccessTokenAndSessionCookiesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
