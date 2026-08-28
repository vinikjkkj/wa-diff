__d(
  "FXMetaPasswordReauthenticationMutation.graphql",
  ["FXMetaPasswordReauthenticationMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "data", variableName: "input" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "success",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "error_message",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "FXMetaPasswordReauthenticationMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBFXCalMetaSAPasswordChallengeResponse",
              kind: "LinkedField",
              name: "verify_meta_sa_password_challenge_v2",
              plural: !1,
              selections: [
                {
                  kind: "RequiredField",
                  field: r,
                  action: "THROW",
                  path: "verify_meta_sa_password_challenge_v2.success",
                },
                {
                  kind: "RequiredField",
                  field: o,
                  action: "THROW",
                  path: "verify_meta_sa_password_challenge_v2.error_message",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "FXMetaPasswordReauthenticationMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBFXCalMetaSAPasswordChallengeResponse",
              kind: "LinkedField",
              name: "verify_meta_sa_password_challenge_v2",
              plural: !1,
              selections: [r, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "FXMetaPasswordReauthenticationMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "FXMetaPasswordReauthenticationMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
