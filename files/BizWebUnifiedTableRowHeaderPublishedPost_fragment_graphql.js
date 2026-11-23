__d(
  "BizWebUnifiedTableRowHeaderPublishedPost_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BizWebUnifiedTableRowHeaderPublishedPost_fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_trending_now",
          storageKey: null,
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "BizWebUnifiedTableRowHeaderHighQualityPill_rowHeader",
                  },
                ],
              },
            ],
            type: "TofuUnifiedTablePublishedPostRowHeader",
            abstractKey: null,
          },
          kind: "AliasedInlineFragmentSpread",
          name: "high_quality_pill",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "BizWebUnifiedTableRowHeaderTrendingNowPill_rowHeader",
                  },
                ],
              },
            ],
            type: "TofuUnifiedTablePublishedPostRowHeader",
            abstractKey: null,
          },
          kind: "AliasedInlineFragmentSpread",
          name: "trending_now_pill",
        },
        {
          alias: null,
          args: null,
          concreteType: "TofuEntity",
          kind: "LinkedField",
          name: "entity",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "caller_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "entity_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "entity_id",
                  storageKey: null,
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useMaybeUpdateTofuObjectInsightsUTAContext_entityInfo",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "context_values",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useMaybeUpdateMAIBAAssetSelectionUTAContext_entityInfo",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "maiba_asset_data",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizWebUnifiedTableRowHeaderTitle_fragment",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "title_fragment",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useBizWebUnifiedTableRowHeaderGeoPlatform_fragment",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "platform",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useBizWebUnifiedTableRowHeaderFormattedVideoDuration_fragment",
                      },
                    ],
                    type: "TofuEntityWithVideoDurationInfo",
                    abstractKey: "__isTofuEntityWithVideoDurationInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "video_duration",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizWebUnifiedTableRowHeaderBoostStatusPill_entityInfo",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "boost_status",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizWebUnifiedTableRowHeaderExpiringSoonPill_entityInfo",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "expiring_soon",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizWebUnifiedTableRowHeaderScaleGoodCampaignPill_entityInfo",
                      },
                    ],
                    type: "TofuEntityInfo",
                    abstractKey: "__isTofuEntityInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "scale_good_campaign",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizWebUnifiedTableRowHeaderVideoPublishingAlertPill_videoInfo",
                      },
                    ],
                    type: "TofuEntityWithVideoInfo",
                    abstractKey: "__isTofuEntityWithVideoInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "video_publishing_alert",
                },
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        args: null,
                        kind: "FragmentSpread",
                        name: "useBizWebUnifiedTableCreationPackage_fragment",
                      },
                    ],
                    type: "TofuEntityWithCreationPackageInfo",
                    abstractKey: "__isTofuEntityWithCreationPackageInfo",
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "creation_package",
                },
              ],
              storageKey: null,
            },
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useMaybeUpdateBusinessContentManagerCachedContentIdentityDataPublishedPost_tofuEntity",
                  },
                ],
                type: "TofuEntity",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "content_identity_data",
            },
            {
              fragment: {
                kind: "InlineFragment",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useSubscribeToContentTabAdRowRefresh_entity",
                  },
                ],
                type: "TofuEntity",
                abstractKey: null,
              },
              kind: "AliasedInlineFragmentSpread",
              name: "ad_row_refresh",
            },
          ],
          storageKey: null,
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "BizWebUnifiedTableRowHeaderOwnerInfoWithCrossPost_rowHeader",
              },
            ],
            type: "TofuUnifiedTableRowHeader",
            abstractKey: "__isTofuUnifiedTableRowHeader",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "owner_info",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useBizWebUnifiedTableRowHeaderContentType_rowHeader",
              },
            ],
            type: "TofuUnifiedTableRowHeader",
            abstractKey: "__isTofuUnifiedTableRowHeader",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "content_type",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "useBizWebUnifiedTableRowHeaderContentTypeIcon_rowHeader",
              },
            ],
            type: "TofuUnifiedTableRowHeader",
            abstractKey: "__isTofuUnifiedTableRowHeader",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "content_icon",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: [
                  {
                    kind: "Literal",
                    name: "shouldShowAdsManagerCrosslink",
                    value: !0,
                  },
                ],
                kind: "FragmentSpread",
                name: "useBizWebUnifiedTableRowHeaderCrosslinkPopover_crosslink",
              },
            ],
            type: "TofuUnifiedTableRowHeader",
            abstractKey: "__isTofuUnifiedTableRowHeader",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "crosslink",
        },
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "BizWebUnifiedTableRowMaybeCrossPostHeaderImage_rowHeader",
              },
            ],
            type: "TofuUnifiedTableRowHeader",
            abstractKey: "__isTofuUnifiedTableRowHeader",
          },
          kind: "AliasedInlineFragmentSpread",
          name: "header_image",
        },
      ],
      type: "TofuUnifiedTablePublishedPostRowHeader",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
