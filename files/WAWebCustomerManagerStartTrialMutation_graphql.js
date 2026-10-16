__d(
  "WAWebCustomerManagerStartTrialMutation.graphql",
  ["WAWebCustomerManagerStartTrialMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBWaStartContactManagerTrialResponsePayload",
            kind: "LinkedField",
            name: "xfb_wa_start_contact_manager_trial",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWAContactManagerAccessState",
                kind: "LinkedField",
                name: "access_state",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "state",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "trial_end_time",
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
          name: "WAWebCustomerManagerStartTrialMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebCustomerManagerStartTrialMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebCustomerManagerStartTrialMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebCustomerManagerStartTrialMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
