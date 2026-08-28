__d(
  "SecuredActionLoadAndMaybeChallengeMutation.facebook.graphql",
  ["SecuredActionLoadAndMaybeChallengeMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "business_details",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "client_mutation_id",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sensitive_action",
        },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sensitive_action_params",
        },
        a = [
          {
            kind: "Variable",
            name: "business_details",
            variableName: "business_details",
          },
          {
            kind: "Variable",
            name: "client_mutation_id",
            variableName: "client_mutation_id",
          },
          {
            kind: "Variable",
            name: "sensitive_action",
            variableName: "sensitive_action",
          },
          {
            kind: "Variable",
            name: "sensitive_action_params",
            variableName: "sensitive_action_params",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "client_mutation_id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "challenge",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "account_id",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "account_type",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_context",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "use_xfac",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          concreteType: "XFBSensitiveActionProtectionChallengeContext",
          kind: "LinkedField",
          name: "context",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "mode",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionLoadAndMaybeChallengeMutation",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: a,
                concreteType: "XFBSecuredActionMaybeChallengeResponsePayload",
                kind: "LinkedField",
                name: "xfb_secured_action_maybe_challenge",
                plural: !1,
                selections: [
                  i,
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBSecuredActionMaybeChallenge",
                    kind: "LinkedField",
                    name: "maybe_challenge",
                    plural: !1,
                    selections: [
                      {
                        kind: "RequiredField",
                        field: l,
                        action: "THROW",
                        path: "xfb_secured_action_maybe_challenge.maybe_challenge.challenge",
                      },
                      {
                        kind: "RequiredField",
                        field: s,
                        action: "THROW",
                        path: "xfb_secured_action_maybe_challenge.maybe_challenge.account_id",
                      },
                      u,
                      c,
                      d,
                      m,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_secured_action_maybe_challenge",
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [r, t, o, e],
          kind: "Operation",
          name: "SecuredActionLoadAndMaybeChallengeMutation",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "XFBSecuredActionMaybeChallengeResponsePayload",
              kind: "LinkedField",
              name: "xfb_secured_action_maybe_challenge",
              plural: !1,
              selections: [
                i,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBSecuredActionMaybeChallenge",
                  kind: "LinkedField",
                  name: "maybe_challenge",
                  plural: !1,
                  selections: [l, s, u, c, d, m],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "SecuredActionLoadAndMaybeChallengeMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "SecuredActionLoadAndMaybeChallengeMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
