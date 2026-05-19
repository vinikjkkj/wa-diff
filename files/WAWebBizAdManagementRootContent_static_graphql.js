__d(
  "WAWebBizAdManagementRootContent_static.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "picture",
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_hash",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "draft_page_id" },
          { defaultValue: null, kind: "LocalArgument", name: "page_id_1" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAdManagementRootContent_static",
        selections: [
          {
            alias: null,
            args: [{ kind: "Variable", name: "id", variableName: "page_id_1" }],
            concreteType: "Page",
            kind: "LinkedField",
            name: "page",
            plural: !1,
            selections: [
              {
                kind: "InlineDataFragmentSpread",
                name: "extractWAWebBizBoostedComponentData_page",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_verified",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                args: null,
                argumentDefinitions: [],
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "CTWAAPI",
            kind: "LinkedField",
            name: "ctwa",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "page_id",
                    variableName: "draft_page_id",
                  },
                  {
                    kind: "Literal",
                    name: "product",
                    value: "BOOSTED_MESSAGE",
                  },
                ],
                concreteType: "AdsLWIDraftWrapper",
                kind: "LinkedField",
                name: "latest_wa_web_draft",
                plural: !1,
                selections: [
                  {
                    kind: "InlineDataFragmentSpread",
                    name: "useWAWebBizAdManagementDraftItem_draft",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "flow_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "spec",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: [
                              { kind: "Literal", name: "is_forced", value: !0 },
                            ],
                            concreteType: "AdAccount",
                            kind: "LinkedField",
                            name: "ad_account",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "legacy_account_id",
                                storageKey: null,
                              },
                            ],
                            storageKey: "ad_account(is_forced:true)",
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
                                          e,
                                          t,
                                          n,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType:
                                              "AdObjectStoryChildLinkDataSpecification",
                                            kind: "LinkedField",
                                            name: "child_attachments",
                                            plural: !0,
                                            selections: [t],
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
                                        selections: [
                                          e,
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "image_url",
                                            storageKey: null,
                                          },
                                          n,
                                          {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "video_id",
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
                            storageKey: null,
                          },
                        ],
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
      };
    })();
    a.exports = e;
  },
  null,
);
