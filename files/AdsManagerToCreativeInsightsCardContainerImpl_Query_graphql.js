__d(
  "AdsManagerToCreativeInsightsCardContainerImpl_Query.graphql",
  [
    "relay-runtime/experimental",
    "ClientAdAccount__id.graphql",
    "ClientAdAccount-resolvers",
    "Query-selected_ad_account-resolver",
    "relay-runtime/experimental",
    "CombinedAdgroup__id.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdAccount____relay_model_instance.graphql",
    "ClientAdAccount-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "ClientAdCreative____relay_model_instance.graphql",
    "ClientAdCreative-resolvers",
    "relay-runtime/experimental",
    "ClientAdCreative____relay_model_instance.graphql",
    "ClientAdCreative-resolvers",
    "relay-runtime/experimental",
    "ClientObjectStorySpec____relay_model_instance.graphql",
    "ClientObjectStorySpec-resolvers",
    "relay-runtime/experimental",
    "CombinedCreativeVideoData____relay_model_instance.graphql",
    "CombinedCreativeVideoData-resolvers",
    "relay-runtime/experimental",
    "ClientObjectStorySpec____relay_model_instance.graphql",
    "ClientObjectStorySpec-resolvers",
    "relay-runtime/experimental",
    "CombinedCreativeLinkData____relay_model_instance.graphql",
    "CombinedCreativeLinkData-resolvers",
    "relay-runtime/experimental",
    "CombinedLinkDataChildAttachment____relay_model_instance.graphql",
    "CombinedLinkDataChildAttachment-resolvers",
    "relay-runtime/experimental",
    "ClientAdCreative____relay_model_instance.graphql",
    "ClientAdCreative-resolvers",
    "relay-runtime/experimental",
    "ClientAssetFeedSpec____relay_model_instance.graphql",
    "ClientAssetFeedSpec-resolvers",
    "relay-runtime/experimental",
    "ClientAssetFeedSpecVideo____relay_model_instance.graphql",
    "ClientAssetFeedSpecVideo-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "adgroupRelayIDs",
          },
        ],
        t = [
          { kind: "Variable", name: "ids", variableName: "adgroupRelayIDs" },
        ],
        r = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedAdgroup____relay_model_instance",
        },
        o = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientAdCreative____relay_model_instance",
        },
        a = {
          args: null,
          kind: "FragmentSpread",
          name: "ClientObjectStorySpec____relay_model_instance",
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [i],
        s = {
          kind: "InlineFragment",
          selections: [
            {
              name: "__relay_model_instance",
              args: null,
              fragment: {
                kind: "InlineFragment",
                selections: l,
                type: "CombinedAdgroup",
                abstractKey: null,
              },
              kind: "RelayResolver",
              storageKey: null,
              isOutputType: !1,
            },
          ],
          type: "CombinedAdgroup",
          abstractKey: null,
        },
        u = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__relay_model_instance",
            storageKey: null,
          },
        ],
        c = {
          kind: "InlineFragment",
          selections: u,
          type: "ClientAdCreative",
          abstractKey: null,
        },
        d = {
          kind: "InlineFragment",
          selections: u,
          type: "ClientObjectStorySpec",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { hasClientEdges: !0, throwOnFieldError: !0 },
          name: "AdsManagerToCreativeInsightsCardContainerImpl_Query",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              concreteType: "ClientAdAccount",
              modelResolvers: {
                ClientAdAccount: {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "ClientAdAccount__id",
                  },
                  kind: "RelayLiveResolver",
                  name: "__relay_model_instance",
                  resolverModule: n(
                    "relay-runtime/experimental",
                  ).resolverDataInjector(
                    n("ClientAdAccount__id.graphql"),
                    n("ClientAdAccount-resolvers").ClientAdAccount,
                    "id",
                    !1,
                  ),
                  path: "selected_ad_account.__relay_model_instance",
                },
              },
              serverObjectOperations: null,
              backingField: {
                alias: null,
                args: null,
                fragment: null,
                kind: "RelayLiveResolver",
                name: "selected_ad_account",
                resolverModule: n("Query-selected_ad_account-resolver")
                  .selected_ad_account,
                path: "selected_ad_account",
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useAdsMgmtAdgroupSelection_fragment",
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    concreteType: "CombinedAdgroup",
                    modelResolvers: {
                      CombinedAdgroup: {
                        alias: null,
                        args: null,
                        fragment: {
                          args: null,
                          kind: "FragmentSpread",
                          name: "CombinedAdgroup__id",
                        },
                        kind: "RelayLiveResolver",
                        name: "__relay_model_instance",
                        resolverModule: n(
                          "relay-runtime/experimental",
                        ).resolverDataInjector(
                          n("CombinedAdgroup__id.graphql"),
                          n("CombinedAdgroup-resolvers").CombinedAdgroup,
                          "id",
                          !0,
                        ),
                        path: "selected_ad_account.combined_adgroups.__relay_model_instance",
                      },
                    },
                    serverObjectOperations: null,
                    backingField: {
                      alias: null,
                      args: t,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ClientAdAccount____relay_model_instance",
                      },
                      kind: "RelayResolver",
                      name: "combined_adgroups",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("ClientAdAccount____relay_model_instance.graphql"),
                        n("ClientAdAccount-resolvers").combined_adgroups,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "selected_ad_account.combined_adgroups",
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "ad_object_id",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedAdgroup____relay_model_instance.graphql",
                            ),
                            n("CombinedAdgroup-resolvers").ad_object_id,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_adgroups.ad_object_id",
                        },
                        {
                          alias: null,
                          args: null,
                          fragment: r,
                          kind: "RelayResolver",
                          name: "name",
                          resolverModule: n(
                            "relay-runtime/experimental",
                          ).resolverDataInjector(
                            n(
                              "CombinedAdgroup____relay_model_instance.graphql",
                            ),
                            n("CombinedAdgroup-resolvers").name,
                            "__relay_model_instance",
                            !0,
                          ),
                          path: "selected_ad_account.combined_adgroups.name",
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          concreteType: "ClientAdCreative",
                          modelResolvers: null,
                          serverObjectOperations: null,
                          backingField: {
                            alias: null,
                            args: null,
                            fragment: r,
                            kind: "RelayResolver",
                            name: "creative",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CombinedAdgroup____relay_model_instance.graphql",
                              ),
                              n("CombinedAdgroup-resolvers").creative,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "selected_ad_account.combined_adgroups.creative",
                            normalizationInfo: {
                              kind: "WeakModel",
                              concreteType: "ClientAdCreative",
                              plural: !1,
                            },
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "ClientAdCreative",
                            kind: "LinkedField",
                            name: "creative",
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                fragment: o,
                                kind: "RelayResolver",
                                name: "video_id",
                                resolverModule: n(
                                  "relay-runtime/experimental",
                                ).resolverDataInjector(
                                  n(
                                    "ClientAdCreative____relay_model_instance.graphql",
                                  ),
                                  n("ClientAdCreative-resolvers").video_id,
                                  "__relay_model_instance",
                                  !0,
                                ),
                                path: "selected_ad_account.combined_adgroups.creative.video_id",
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                concreteType: "ClientObjectStorySpec",
                                modelResolvers: null,
                                serverObjectOperations: null,
                                backingField: {
                                  alias: null,
                                  args: null,
                                  fragment: o,
                                  kind: "RelayResolver",
                                  name: "object_story_spec",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "ClientAdCreative____relay_model_instance.graphql",
                                    ),
                                    n("ClientAdCreative-resolvers")
                                      .object_story_spec,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_adgroups.creative.object_story_spec",
                                  normalizationInfo: {
                                    kind: "WeakModel",
                                    concreteType: "ClientObjectStorySpec",
                                    plural: !1,
                                  },
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientObjectStorySpec",
                                  kind: "LinkedField",
                                  name: "object_story_spec",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      concreteType: "CombinedCreativeVideoData",
                                      modelResolvers: null,
                                      serverObjectOperations: null,
                                      backingField: {
                                        alias: null,
                                        args: null,
                                        fragment: a,
                                        kind: "RelayResolver",
                                        name: "video_data",
                                        resolverModule: n(
                                          "relay-runtime/experimental",
                                        ).resolverDataInjector(
                                          n(
                                            "ClientObjectStorySpec____relay_model_instance.graphql",
                                          ),
                                          n("ClientObjectStorySpec-resolvers")
                                            .video_data,
                                          "__relay_model_instance",
                                          !0,
                                        ),
                                        path: "selected_ad_account.combined_adgroups.creative.object_story_spec.video_data",
                                        normalizationInfo: {
                                          kind: "WeakModel",
                                          concreteType:
                                            "CombinedCreativeVideoData",
                                          plural: !1,
                                        },
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "CombinedCreativeVideoData",
                                        kind: "LinkedField",
                                        name: "video_data",
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            fragment: {
                                              args: null,
                                              kind: "FragmentSpread",
                                              name: "CombinedCreativeVideoData____relay_model_instance",
                                            },
                                            kind: "RelayResolver",
                                            name: "video_id",
                                            resolverModule: n(
                                              "relay-runtime/experimental",
                                            ).resolverDataInjector(
                                              n(
                                                "CombinedCreativeVideoData____relay_model_instance.graphql",
                                              ),
                                              n(
                                                "CombinedCreativeVideoData-resolvers",
                                              ).video_id,
                                              "__relay_model_instance",
                                              !0,
                                            ),
                                            path: "selected_ad_account.combined_adgroups.creative.object_story_spec.video_data.video_id",
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      concreteType: "CombinedCreativeLinkData",
                                      modelResolvers: null,
                                      serverObjectOperations: null,
                                      backingField: {
                                        alias: null,
                                        args: null,
                                        fragment: a,
                                        kind: "RelayResolver",
                                        name: "link_data",
                                        resolverModule: n(
                                          "relay-runtime/experimental",
                                        ).resolverDataInjector(
                                          n(
                                            "ClientObjectStorySpec____relay_model_instance.graphql",
                                          ),
                                          n("ClientObjectStorySpec-resolvers")
                                            .link_data,
                                          "__relay_model_instance",
                                          !0,
                                        ),
                                        path: "selected_ad_account.combined_adgroups.creative.object_story_spec.link_data",
                                        normalizationInfo: {
                                          kind: "WeakModel",
                                          concreteType:
                                            "CombinedCreativeLinkData",
                                          plural: !1,
                                        },
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "CombinedCreativeLinkData",
                                        kind: "LinkedField",
                                        name: "link_data",
                                        plural: !1,
                                        selections: [
                                          {
                                            kind: "ClientEdgeToClientObject",
                                            concreteType:
                                              "CombinedLinkDataChildAttachment",
                                            modelResolvers: null,
                                            serverObjectOperations: null,
                                            backingField: {
                                              alias: null,
                                              args: null,
                                              fragment: {
                                                args: null,
                                                kind: "FragmentSpread",
                                                name: "CombinedCreativeLinkData____relay_model_instance",
                                              },
                                              kind: "RelayResolver",
                                              name: "child_attachments",
                                              resolverModule: n(
                                                "relay-runtime/experimental",
                                              ).resolverDataInjector(
                                                n(
                                                  "CombinedCreativeLinkData____relay_model_instance.graphql",
                                                ),
                                                n(
                                                  "CombinedCreativeLinkData-resolvers",
                                                ).child_attachments,
                                                "__relay_model_instance",
                                                !0,
                                              ),
                                              path: "selected_ad_account.combined_adgroups.creative.object_story_spec.link_data.child_attachments",
                                              normalizationInfo: {
                                                kind: "WeakModel",
                                                concreteType:
                                                  "CombinedLinkDataChildAttachment",
                                                plural: !0,
                                              },
                                            },
                                            linkedField: {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "CombinedLinkDataChildAttachment",
                                              kind: "LinkedField",
                                              name: "child_attachments",
                                              plural: !0,
                                              selections: [
                                                {
                                                  alias: null,
                                                  args: null,
                                                  fragment: {
                                                    args: null,
                                                    kind: "FragmentSpread",
                                                    name: "CombinedLinkDataChildAttachment____relay_model_instance",
                                                  },
                                                  kind: "RelayResolver",
                                                  name: "video_id",
                                                  resolverModule: n(
                                                    "relay-runtime/experimental",
                                                  ).resolverDataInjector(
                                                    n(
                                                      "CombinedLinkDataChildAttachment____relay_model_instance.graphql",
                                                    ),
                                                    n(
                                                      "CombinedLinkDataChildAttachment-resolvers",
                                                    ).video_id,
                                                    "__relay_model_instance",
                                                    !0,
                                                  ),
                                                  path: "selected_ad_account.combined_adgroups.creative.object_story_spec.link_data.child_attachments.video_id",
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                  ],
                                  storageKey: null,
                                },
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                concreteType: "ClientAssetFeedSpec",
                                modelResolvers: null,
                                serverObjectOperations: null,
                                backingField: {
                                  alias: null,
                                  args: null,
                                  fragment: o,
                                  kind: "RelayResolver",
                                  name: "asset_feed_spec",
                                  resolverModule: n(
                                    "relay-runtime/experimental",
                                  ).resolverDataInjector(
                                    n(
                                      "ClientAdCreative____relay_model_instance.graphql",
                                    ),
                                    n("ClientAdCreative-resolvers")
                                      .asset_feed_spec,
                                    "__relay_model_instance",
                                    !0,
                                  ),
                                  path: "selected_ad_account.combined_adgroups.creative.asset_feed_spec",
                                  normalizationInfo: {
                                    kind: "WeakModel",
                                    concreteType: "ClientAssetFeedSpec",
                                    plural: !1,
                                  },
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientAssetFeedSpec",
                                  kind: "LinkedField",
                                  name: "asset_feed_spec",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      concreteType: "ClientAssetFeedSpecVideo",
                                      modelResolvers: null,
                                      serverObjectOperations: null,
                                      backingField: {
                                        alias: null,
                                        args: null,
                                        fragment: {
                                          args: null,
                                          kind: "FragmentSpread",
                                          name: "ClientAssetFeedSpec____relay_model_instance",
                                        },
                                        kind: "RelayResolver",
                                        name: "videos",
                                        resolverModule: n(
                                          "relay-runtime/experimental",
                                        ).resolverDataInjector(
                                          n(
                                            "ClientAssetFeedSpec____relay_model_instance.graphql",
                                          ),
                                          n("ClientAssetFeedSpec-resolvers")
                                            .videos,
                                          "__relay_model_instance",
                                          !0,
                                        ),
                                        path: "selected_ad_account.combined_adgroups.creative.asset_feed_spec.videos",
                                        normalizationInfo: {
                                          kind: "WeakModel",
                                          concreteType:
                                            "ClientAssetFeedSpecVideo",
                                          plural: !0,
                                        },
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "ClientAssetFeedSpecVideo",
                                        kind: "LinkedField",
                                        name: "videos",
                                        plural: !0,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            fragment: {
                                              args: null,
                                              kind: "FragmentSpread",
                                              name: "ClientAssetFeedSpecVideo____relay_model_instance",
                                            },
                                            kind: "RelayResolver",
                                            name: "video_id",
                                            resolverModule: n(
                                              "relay-runtime/experimental",
                                            ).resolverDataInjector(
                                              n(
                                                "ClientAssetFeedSpecVideo____relay_model_instance.graphql",
                                              ),
                                              n(
                                                "ClientAssetFeedSpecVideo-resolvers",
                                              ).video_id,
                                              "__relay_model_instance",
                                              !0,
                                            ),
                                            path: "selected_ad_account.combined_adgroups.creative.asset_feed_spec.videos.video_id",
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                  ],
                                  storageKey: null,
                                },
                              },
                            ],
                            storageKey: null,
                          },
                        },
                      ],
                      storageKey: null,
                    },
                  },
                ],
                storageKey: null,
              },
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsManagerToCreativeInsightsCardContainerImpl_Query",
          selections: [
            {
              kind: "ClientEdgeToClientObject",
              backingField: {
                name: "selected_ad_account",
                args: null,
                fragment: null,
                kind: "RelayResolver",
                storageKey: null,
                isOutputType: !1,
              },
              linkedField: {
                alias: null,
                args: null,
                concreteType: "ClientAdAccount",
                kind: "LinkedField",
                name: "selected_ad_account",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                  {
                    kind: "ClientEdgeToClientObject",
                    backingField: {
                      name: "combined_adgroups",
                      args: t,
                      fragment: {
                        kind: "InlineFragment",
                        selections: [
                          {
                            name: "__relay_model_instance",
                            args: null,
                            fragment: {
                              kind: "InlineFragment",
                              selections: l,
                              type: "ClientAdAccount",
                              abstractKey: null,
                            },
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !1,
                          },
                        ],
                        type: "ClientAdAccount",
                        abstractKey: null,
                      },
                      kind: "RelayResolver",
                      storageKey: null,
                      isOutputType: !1,
                    },
                    linkedField: {
                      alias: null,
                      args: t,
                      concreteType: "CombinedAdgroup",
                      kind: "LinkedField",
                      name: "combined_adgroups",
                      plural: !0,
                      selections: [
                        {
                          name: "ad_object_id",
                          args: null,
                          fragment: s,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          name: "name",
                          args: null,
                          fragment: s,
                          kind: "RelayResolver",
                          storageKey: null,
                          isOutputType: !0,
                        },
                        {
                          kind: "ClientEdgeToClientObject",
                          backingField: {
                            name: "creative",
                            args: null,
                            fragment: s,
                            kind: "RelayResolver",
                            storageKey: null,
                            isOutputType: !0,
                          },
                          linkedField: {
                            alias: null,
                            args: null,
                            concreteType: "ClientAdCreative",
                            kind: "LinkedField",
                            name: "creative",
                            plural: !1,
                            selections: [
                              {
                                name: "video_id",
                                args: null,
                                fragment: c,
                                kind: "RelayResolver",
                                storageKey: null,
                                isOutputType: !0,
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                backingField: {
                                  name: "object_story_spec",
                                  args: null,
                                  fragment: c,
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !0,
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientObjectStorySpec",
                                  kind: "LinkedField",
                                  name: "object_story_spec",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      backingField: {
                                        name: "video_data",
                                        args: null,
                                        fragment: d,
                                        kind: "RelayResolver",
                                        storageKey: null,
                                        isOutputType: !0,
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "CombinedCreativeVideoData",
                                        kind: "LinkedField",
                                        name: "video_data",
                                        plural: !1,
                                        selections: [
                                          {
                                            name: "video_id",
                                            args: null,
                                            fragment: {
                                              kind: "InlineFragment",
                                              selections: u,
                                              type: "CombinedCreativeVideoData",
                                              abstractKey: null,
                                            },
                                            kind: "RelayResolver",
                                            storageKey: null,
                                            isOutputType: !0,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      backingField: {
                                        name: "link_data",
                                        args: null,
                                        fragment: d,
                                        kind: "RelayResolver",
                                        storageKey: null,
                                        isOutputType: !0,
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "CombinedCreativeLinkData",
                                        kind: "LinkedField",
                                        name: "link_data",
                                        plural: !1,
                                        selections: [
                                          {
                                            kind: "ClientEdgeToClientObject",
                                            backingField: {
                                              name: "child_attachments",
                                              args: null,
                                              fragment: {
                                                kind: "InlineFragment",
                                                selections: u,
                                                type: "CombinedCreativeLinkData",
                                                abstractKey: null,
                                              },
                                              kind: "RelayResolver",
                                              storageKey: null,
                                              isOutputType: !0,
                                            },
                                            linkedField: {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "CombinedLinkDataChildAttachment",
                                              kind: "LinkedField",
                                              name: "child_attachments",
                                              plural: !0,
                                              selections: [
                                                {
                                                  name: "video_id",
                                                  args: null,
                                                  fragment: {
                                                    kind: "InlineFragment",
                                                    selections: u,
                                                    type: "CombinedLinkDataChildAttachment",
                                                    abstractKey: null,
                                                  },
                                                  kind: "RelayResolver",
                                                  storageKey: null,
                                                  isOutputType: !0,
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                  ],
                                  storageKey: null,
                                },
                              },
                              {
                                kind: "ClientEdgeToClientObject",
                                backingField: {
                                  name: "asset_feed_spec",
                                  args: null,
                                  fragment: c,
                                  kind: "RelayResolver",
                                  storageKey: null,
                                  isOutputType: !0,
                                },
                                linkedField: {
                                  alias: null,
                                  args: null,
                                  concreteType: "ClientAssetFeedSpec",
                                  kind: "LinkedField",
                                  name: "asset_feed_spec",
                                  plural: !1,
                                  selections: [
                                    {
                                      kind: "ClientEdgeToClientObject",
                                      backingField: {
                                        name: "videos",
                                        args: null,
                                        fragment: {
                                          kind: "InlineFragment",
                                          selections: u,
                                          type: "ClientAssetFeedSpec",
                                          abstractKey: null,
                                        },
                                        kind: "RelayResolver",
                                        storageKey: null,
                                        isOutputType: !0,
                                      },
                                      linkedField: {
                                        alias: null,
                                        args: null,
                                        concreteType:
                                          "ClientAssetFeedSpecVideo",
                                        kind: "LinkedField",
                                        name: "videos",
                                        plural: !0,
                                        selections: [
                                          {
                                            name: "video_id",
                                            args: null,
                                            fragment: {
                                              kind: "InlineFragment",
                                              selections: u,
                                              type: "ClientAssetFeedSpecVideo",
                                              abstractKey: null,
                                            },
                                            kind: "RelayResolver",
                                            storageKey: null,
                                            isOutputType: !0,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    },
                                  ],
                                  storageKey: null,
                                },
                              },
                            ],
                            storageKey: null,
                          },
                        },
                        i,
                      ],
                      storageKey: null,
                    },
                  },
                  i,
                ],
                storageKey: null,
              },
            },
          ],
        },
        params: {
          cacheID: "cfa9e4fed07fdaeeb0bd3f4a12806643",
          id: null,
          metadata: {},
          name: "AdsManagerToCreativeInsightsCardContainerImpl_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
