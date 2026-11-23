__d(
  "WAWebBizAIBloksAppLoaderActionQuery.graphql",
  ["WAWebBizAIBloksAppLoaderActionQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "params" }],
        t = [{ kind: "Variable", name: "params", variableName: "params" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "bloks_bundle_action",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAIBloksAppLoaderActionQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: t,
                concreteType: "FBBloksRootAction",
                kind: "LinkedField",
                name: "fb_bloks_action",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: null,
                      concreteType: "BloksRootAction",
                      kind: "LinkedField",
                      name: "root_action",
                      plural: !1,
                      selections: [
                        {
                          kind: "RequiredField",
                          field: {
                            alias: null,
                            args: null,
                            concreteType: "BloksAction",
                            kind: "LinkedField",
                            name: "action",
                            plural: !1,
                            selections: [
                              {
                                kind: "RequiredField",
                                field: {
                                  alias: null,
                                  args: null,
                                  concreteType: "BloksActionBundle",
                                  kind: "LinkedField",
                                  name: "action_bundle",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "RequiredField",
                                      field: r,
                                      action: "THROW",
                                    },
                                  ],
                                  storageKey: null,
                                },
                                action: "THROW",
                              },
                            ],
                            storageKey: null,
                          },
                          action: "THROW",
                        },
                      ],
                      storageKey: null,
                    },
                    action: "THROW",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAIBloksAppLoaderActionQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "FBBloksRootAction",
              kind: "LinkedField",
              name: "fb_bloks_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "BloksRootAction",
                  kind: "LinkedField",
                  name: "root_action",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "BloksAction",
                      kind: "LinkedField",
                      name: "action",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "BloksActionBundle",
                          kind: "LinkedField",
                          name: "action_bundle",
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
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAIBloksAppLoaderActionQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIBloksAppLoaderActionQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
