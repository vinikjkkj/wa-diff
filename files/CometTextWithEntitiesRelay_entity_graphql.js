__d(
  "CometTextWithEntitiesRelay_entity.graphql",
  [],
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
          concreteType: "WorkForeignEntityInfo",
          kind: "LinkedField",
          name: "work_foreign_entity_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        n = { kind: "Variable", name: "scale", variableName: "scale" },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "height",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "uri",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "width",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "scale" }],
        kind: "Fragment",
        metadata: { mask: !1 },
        name: "CometTextWithEntitiesRelay_entity",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: "Literal", name: "site", value: "comet" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"comet")',
          },
          {
            alias: "mobileUrl",
            args: [{ kind: "Literal", name: "site", value: "mobile" }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"mobile")',
          },
          {
            kind: "InlineFragment",
            selections: [e],
            type: "Actor",
            abstractKey: "__isActor",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometTextWithEntitiesRelay_entity",
                fragmentName:
                  "GroupsCometHashtagsStoryMessageHashtagLink_hashtag",
                fragmentPropName: "hashtag",
                kind: "ModuleImport",
              },
            ],
            type: "GroupHashtag",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometTextWithEntitiesRelay_entity",
                fragmentName: "PagesCometPageLink_page",
                fragmentPropName: "page",
                kind: "ModuleImport",
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "category_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "verification_status",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "CometPageVerificationBadge_page",
              },
            ],
            type: "Page",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "ProfileCometProfileLink_actor",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                documentName: "CometTextWithEntitiesRelay_entity",
                fragmentName: "ProfileGeminiWeakReferenceLink_user",
                fragmentPropName: "user",
                kind: "ModuleImport",
              },
              t,
              {
                alias: null,
                args: null,
                concreteType: "WorkUserInfo",
                kind: "LinkedField",
                name: "work_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_active_account",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_verified",
                storageKey: null,
              },
              e,
              {
                alias: null,
                args: [{ kind: "Literal", name: "surface", value: "FEED" }],
                kind: "ScalarField",
                name: "show_promode_badge",
                storageKey: 'show_promode_badge(surface:"FEED")',
              },
            ],
            type: "User",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_prioritize_ig_display_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null,
              },
            ],
            type: "InstagramUserV2",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "external_url",
                storageKey: null,
              },
            ],
            type: "ExternalUrl",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "time_index",
                storageKey: null,
              },
            ],
            type: "VideoTimeIndex",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "web_link",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "fbclid",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "lynx_mode",
                        storageKey: null,
                      },
                    ],
                    type: "ExternalWebLink",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: "WebLinkable",
            abstractKey: "__isWebLinkable",
          },
          {
            kind: "InlineFragment",
            selections: [
              t,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_multi_company_group",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "work_official_status",
                storageKey: null,
              },
            ],
            type: "Group",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: "imageScaledForFeed",
                args: [n, { kind: "Literal", name: "width", value: 680 }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: [r, o, a],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "accessibility_caption",
                storageKey: null,
              },
            ],
            type: "Photo",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              i,
              {
                alias: null,
                args: [
                  { kind: "Literal", name: "height", value: 64 },
                  { kind: "Literal", name: "media_type", value: "image/png" },
                  n,
                  { kind: "Literal", name: "width", value: 64 },
                ],
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: [o],
                storageKey: null,
              },
            ],
            type: "XFBWorkCustomEmoji",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                args: null,
                kind: "FragmentSpread",
                name: "VideoPlayerRelay_video",
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "VideoPlayerCometFeedThumbnail_video",
              },
              a,
              r,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_animated_gif",
                storageKey: null,
              },
            ],
            type: "Video",
            abstractKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "CometTitleSentenceGroupJoinButtonRenderer_entity",
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deep_link_number",
                storageKey: null,
              },
            ],
            type: "PageWhatsAppNumber",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              i,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ticker_symbol",
                storageKey: null,
              },
            ],
            type: "KGTickerNode",
            abstractKey: null,
          },
          {
            kind: "InlineFragment",
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "snapshot_url",
                storageKey: null,
              },
              {
                args: null,
                kind: "FragmentSpread",
                name: "truncateComposedTextWithUnidash_entity",
              },
            ],
            type: "XFBProdQuartzVizirSnapshot",
            abstractKey: null,
          },
        ],
        type: "Entity",
        abstractKey: "__isEntity",
      };
    })();
    a.exports = e;
  },
  null,
);
