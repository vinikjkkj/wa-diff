__d(
  "WAWebBizAdCreationRootRecreateSourceQuery.graphql",
  [
    "WAWebBizAdCreationRootRecreateSourceQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "boostID" }],
        t = [{ kind: "Variable", name: "boost_id", variableName: "boostID" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_hash",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "picture",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "video_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationRootRecreateSourceQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "CTWAAPI",
              kind: "LinkedField",
              name: "ctwa",
              plural: !1,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    alias: "recreateSource",
                    args: t,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "existing_boosted_component",
                    plural: !1,
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useWAWebBizAdCreationPrefillMediaExpectation_wrapper",
                      },
                    ],
                    storageKey: null,
                  },
                  to: "NULL",
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
          name: "WAWebBizAdCreationRootRecreateSourceQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "CTWAAPI",
              kind: "LinkedField",
              name: "ctwa",
              plural: !1,
              selections: [
                {
                  alias: "recreateSource",
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "existing_boosted_component",
                  plural: !1,
                  selections: [
                    r,
                    {
                      kind: "TypeDiscriminator",
                      abstractKey: "__isBoostedComponentCommonWrapper",
                    },
                    o,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "spec",
                      plural: !1,
                      selections: [
                        r,
                        {
                          alias: null,
                          args: [
                            { kind: "Literal", name: "is_forced", value: !1 },
                          ],
                          concreteType: "AdAccount",
                          kind: "LinkedField",
                          name: "ad_account",
                          plural: !1,
                          selections: [o],
                          storageKey: "ad_account(is_forced:false)",
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdsLWIAdGroupSpec",
                          kind: "LinkedField",
                          name: "adgroup_spec",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: "AdsCreativeSpecification",
                              kind: "LinkedField",
                              name: "creative",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: "AdObjectStorySpecification",
                                  kind: "LinkedField",
                                  name: "object_story_spec",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "AdObjectStoryLinkDataSpecification",
                                      kind: "LinkedField",
                                      name: "link_data",
                                      plural: !1,
                                      selections: [
                                        a,
                                        i,
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "AdObjectStoryChildLinkDataSpecification",
                                          kind: "LinkedField",
                                          name: "child_attachments",
                                          plural: !0,
                                          selections: [a, i, l],
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "AdObjectStoryVideoDataSpecification",
                                      kind: "LinkedField",
                                      name: "video_data",
                                      plural: !1,
                                      selections: [l],
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
          id: n(
            "WAWebBizAdCreationRootRecreateSourceQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationRootRecreateSourceQuery",
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
