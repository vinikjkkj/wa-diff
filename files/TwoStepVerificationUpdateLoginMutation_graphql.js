__d(
  "TwoStepVerificationUpdateLoginMutation.graphql",
  ["TwoStepVerificationUpdateLoginMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "encrypted_context",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "trust_this_device",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "encrypted_context",
            variableName: "encrypted_context",
          },
          {
            kind: "Variable",
            name: "trust_this_device",
            variableName: "trust_this_device",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "state",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "TwoStepVerificationUpdateLoginMutation",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "XFBTwoStepVerificationApprovalState",
                kind: "LinkedField",
                name: "xfb_two_step_verification_complete_if_approval_state_allowed",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: r,
                    action: "THROW",
                    path: "xfb_two_step_verification_complete_if_approval_state_allowed.state",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_two_step_verification_complete_if_approval_state_allowed",
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "TwoStepVerificationUpdateLoginMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBTwoStepVerificationApprovalState",
              kind: "LinkedField",
              name: "xfb_two_step_verification_complete_if_approval_state_allowed",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "TwoStepVerificationUpdateLoginMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "TwoStepVerificationUpdateLoginMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
