__d(
  "WAWebBizAdCreationValidateSpecContextProviderQuery.graphql",
  ["WAWebBizAdCreationValidateSpecContextProviderQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "input" },
          { defaultValue: null, kind: "LocalArgument", name: "previous_input" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "validate_options",
          },
        ],
        t = [
          { kind: "Variable", name: "creation_input", variableName: "input" },
          {
            kind: "Variable",
            name: "previous_creation_input",
            variableName: "previous_input",
          },
          { kind: "Literal", name: "skip_ipc", value: !0 },
          {
            kind: "Variable",
            name: "validate_options",
            variableName: "validate_options",
          },
        ],
        r = {
          alias: "specElement",
          args: null,
          kind: "ScalarField",
          name: "spec_element",
          storageKey: null,
        },
        o = {
          alias: "severity",
          args: null,
          kind: "ScalarField",
          name: "message_type",
          storageKey: null,
        },
        a = {
          alias: "validationModule",
          args: null,
          kind: "ScalarField",
          name: "validation_module",
          storageKey: null,
        },
        i = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null,
          },
        ],
        l = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "title",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        s = {
          alias: "body",
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "text",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "display_text",
          plural: !1,
          selections: i,
          storageKey: null,
        },
        c = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          type: "BoostedComponentActionLink",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationValidateSpecContextProviderQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "validateSpec",
                  args: t,
                  concreteType: "BoostedComponentMessage",
                  kind: "LinkedField",
                  name: "validate_spec",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "toWAWebBizAdCreationServerSideNotices_validateSpec",
                      selections: [
                        r,
                        o,
                        a,
                        l,
                        s,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "action",
                          plural: !1,
                          selections: [u, c],
                          storageKey: null,
                        },
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationValidateSpecContextProviderQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "LWIAPI",
              kind: "LinkedField",
              name: "lwi",
              plural: !1,
              selections: [
                {
                  alias: "validateSpec",
                  args: t,
                  concreteType: "BoostedComponentMessage",
                  kind: "LinkedField",
                  name: "validate_spec",
                  plural: !0,
                  selections: [
                    r,
                    o,
                    a,
                    l,
                    s,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "action",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        u,
                        c,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizAdCreationValidateSpecContextProviderQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationValidateSpecContextProviderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
