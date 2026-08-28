__d(
  "SecuredActionBlockDialogQuery.graphql",
  ["SecuredActionBlockDialogQuery_facebookRelayOperation", "relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "accountType",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "context" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "sensitiveAction",
        },
        o = {
          alias: null,
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_test_user",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "FXFetaSettings",
          kind: "LinkedField",
          name: "fx_feta_settings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_user_upgraded_to_feta",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        i = [
          { kind: "Variable", name: "context", variableName: "context" },
          {
            kind: "Variable",
            name: "sensitive_action",
            variableName: "sensitiveAction",
          },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_uri",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_redirect",
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_link_to_accounts_center",
          storageKey: null,
        },
        c = [
          {
            kind: "Variable",
            name: "account_type",
            variableName: "accountType",
          },
        ],
        d = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "block_title",
          storageKey: null,
        },
        m = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "block_message",
          storageKey: null,
        },
        p = {
          alias: null,
          args: c,
          kind: "ScalarField",
          name: "block_primary_button",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionBlockDialogQuery",
          selections: [
            o,
            a,
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: i,
                concreteType: "XFBSecuredAction",
                kind: "LinkedField",
                name: "xfb_secured_action",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: l,
                    action: "THROW",
                    path: "xfb_secured_action.action_uri",
                  },
                  s,
                  {
                    kind: "RequiredField",
                    field: u,
                    action: "THROW",
                    path: "xfb_secured_action.should_link_to_accounts_center",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "SecuredActionBlockDialogWithRedirect_content",
                  },
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: "XFBSecuredActionContent",
                      kind: "LinkedField",
                      name: "content",
                      plural: !1,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: d,
                          action: "THROW",
                          path: "xfb_secured_action.content.block_title",
                        },
                        {
                          kind: "RequiredField",
                          field: m,
                          action: "THROW",
                          path: "xfb_secured_action.content.block_message",
                        },
                        {
                          kind: "RequiredField",
                          field: p,
                          action: "THROW",
                          path: "xfb_secured_action.content.block_primary_button",
                        },
                      ],
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "xfb_secured_action.content",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "xfb_secured_action",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "SecuredActionBlockDialogQuery",
          selections: [
            o,
            a,
            {
              alias: null,
              args: i,
              concreteType: "XFBSecuredAction",
              kind: "LinkedField",
              name: "xfb_secured_action",
              plural: !1,
              selections: [
                l,
                s,
                u,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBSecuredActionContent",
                  kind: "LinkedField",
                  name: "content",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "block_link_to_accounts_center_message",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "block_link_to_accounts_center_title",
                      storageKey: null,
                    },
                    d,
                    m,
                    p,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("SecuredActionBlockDialogQuery_facebookRelayOperation"),
          metadata: {},
          name: "SecuredActionBlockDialogQuery",
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
