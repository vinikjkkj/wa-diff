__d(
  "MAIBABoostPostAdPreviewPopoverQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaign_group_draft_id",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "id",
            variableName: "campaign_group_draft_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "profile_picture_uri",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType:
            "XFBEntAdCampaignGroupWithDraftDataBoostPostPreviewFields",
          kind: "LinkedField",
          name: "maiba_lwi_boost_post_preview",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "publisher_platforms",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "creative_spec_json",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "legacy_ad_account_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "picture",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "BoostPostPreviewPageInfo",
              kind: "LinkedField",
              name: "page_info",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "category_text",
                  storageKey: null,
                },
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_verified",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "BoostPostPreviewInstagramInfo",
              kind: "LinkedField",
              name: "instagram_info",
              plural: !1,
              selections: [n, r],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBABoostPostAdPreviewPopoverQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [o],
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
          name: "MAIBABoostPostAdPreviewPopoverQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [
                o,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28715705734715118",
          metadata: {},
          name: "MAIBABoostPostAdPreviewPopoverQuery",
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
