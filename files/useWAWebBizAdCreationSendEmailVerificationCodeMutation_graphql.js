__d(
  "useWAWebBizAdCreationSendEmailVerificationCodeMutation.graphql",
  [
    "useWAWebBizAdCreationSendEmailVerificationCodeMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "WaAdAccountSendEmailVerificationCodeResponsePayload",
            kind: "LinkedField",
            name: "wa_ad_account_send_email_verification_code",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "email_sent",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "failure_reason",
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
          name: "useWAWebBizAdCreationSendEmailVerificationCodeMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreationSendEmailVerificationCodeMutation",
          selections: t,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationSendEmailVerificationCodeMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationSendEmailVerificationCodeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
