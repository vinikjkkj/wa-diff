__d(
  "SecuredActionBlockDialogMetaQuery.graphql",
  ["SecuredActionBlockDialogMetaQuery_facebookRelayOperation", "relay-runtime"],
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
        a = [
          { kind: "Variable", name: "context", variableName: "context" },
          {
            kind: "Variable",
            name: "sensitive_action",
            variableName: "sensitiveAction",
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "action_uri",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_redirect",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "should_link_to_accounts_center",
          storageKey: null,
        },
        u = [
          {
            kind: "Variable",
            name: "account_type",
            variableName: "accountType",
          },
        ],
        c = {
          alias: null,
          args: u,
          kind: "ScalarField",
          name: "block_title",
          storageKey: null,
        },
        d = {
          alias: null,
          args: u,
          kind: "ScalarField",
          name: "block_message",
          storageKey: null,
        },
        m = {
          alias: null,
          args: u,
          kind: "ScalarField",
          name: "block_primary_button",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "SecuredActionBlockDialogMetaQuery",
          selections: [
            o,
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: a,
                concreteType: "XFBSecuredAction",
                kind: "LinkedField",
                name: "xfb_secured_action",
                plural: !1,
                selections: [
                  i,
                  l,
                  {
                    kind: "RequiredField",
                    field: s,
                    action: "THROW",
                    path: "xfb_secured_action.should_link_to_accounts_center",
                  },
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "SecuredActionBlockDialogMetaWithRedirect_content",
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
                          field: c,
                          action: "THROW",
                          path: "xfb_secured_action.content.block_title",
                        },
                        {
                          kind: "RequiredField",
                          field: d,
                          action: "THROW",
                          path: "xfb_secured_action.content.block_message",
                        },
                        {
                          kind: "RequiredField",
                          field: m,
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
          name: "SecuredActionBlockDialogMetaQuery",
          selections: [
            o,
            {
              alias: null,
              args: a,
              concreteType: "XFBSecuredAction",
              kind: "LinkedField",
              name: "xfb_secured_action",
              plural: !1,
              selections: [
                i,
                l,
                s,
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
                    c,
                    d,
                    m,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("SecuredActionBlockDialogMetaQuery_facebookRelayOperation"),
          metadata: {},
          name: "SecuredActionBlockDialogMetaQuery",
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
