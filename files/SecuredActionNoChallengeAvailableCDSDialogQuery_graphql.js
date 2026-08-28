__d(
  "SecuredActionNoChallengeAvailableCDSDialogQuery.graphql",
  [
    "SecuredActionNoChallengeAvailableCDSDialogQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        o = {
          alias: null,
          args: [{ kind: "Literal", name: "flow_type", value: "SETTINGS" }],
          kind: "ScalarField",
          name: "xfb_is_feta_account_eligible_for_flow",
          storageKey:
            'xfb_is_feta_account_eligible_for_flow(flow_type:"SETTINGS")',
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionNoChallengeAvailableCDSDialogQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "FXManageAccountsQueries",
                kind: "LinkedField",
                name: "fx_accounts_management",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "accounts",
                      plural: !0,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: e,
                          action: "THROW",
                          path: "fx_accounts_management.accounts.id",
                        },
                        {
                          kind: "RequiredField",
                          field: t,
                          action: "THROW",
                          path: "fx_accounts_management.accounts.display_name",
                        },
                        {
                          kind: "RequiredField",
                          field: {
                            alias: null,
                            args: null,
                            concreteType: "XFBFXPlatformInfo",
                            kind: "LinkedField",
                            name: "platform_info",
                            plural: !1,
                            selections: [
                              {
                                kind: "RequiredField",
                                field: r,
                                action: "THROW",
                                path: "fx_accounts_management.accounts.platform_info.name",
                              },
                            ],
                            storageKey: null,
                          },
                          action: "THROW",
                          path: "fx_accounts_management.accounts.platform_info",
                        },
                      ],
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "fx_accounts_management.accounts",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "fx_accounts_management",
            },
            o,
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "SecuredActionNoChallengeAvailableCDSDialogQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "FXManageAccountsQueries",
              kind: "LinkedField",
              name: "fx_accounts_management",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "accounts",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    e,
                    t,
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBFXPlatformInfo",
                      kind: "LinkedField",
                      name: "platform_info",
                      plural: !1,
                      selections: [r],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            o,
          ],
        },
        params: {
          id: n(
            "SecuredActionNoChallengeAvailableCDSDialogQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "SecuredActionNoChallengeAvailableCDSDialogQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
