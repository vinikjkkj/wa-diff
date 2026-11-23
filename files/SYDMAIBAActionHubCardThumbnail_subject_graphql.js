__d(
  "SYDMAIBAActionHubCardThumbnail_subject.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { kind: "Literal", name: "height", value: 64 },
          { kind: "Literal", name: "width", value: 64 },
        ],
        t = [
          {
            alias: null,
            args: e,
            concreteType: "Image",
            kind: "LinkedField",
            name: "preview_image",
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
            storageKey: "preview_image(height:64,width:64)",
          },
          {
            alias: null,
            args: null,
            concreteType: "AdCreative",
            kind: "LinkedField",
            name: "creative",
            plural: !1,
            selections: [
              {
                alias: null,
                args: e,
                kind: "ScalarField",
                name: "thumbnail_url",
                storageKey: "thumbnail_url(height:64,width:64)",
              },
            ],
            storageKey: null,
          },
        ],
        n = [
          {
            alias: null,
            args: [{ kind: "Literal", name: "first", value: 3 }],
            concreteType: "AdCampaignAdgroupsConnection",
            kind: "LinkedField",
            name: "adgroups",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Adgroup",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: t,
                storageKey: null,
              },
            ],
            storageKey: "adgroups(first:3)",
          },
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "SYDMAIBAActionHubCardThumbnail_subject",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "ad_object",
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
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                ],
                type: "Node",
                abstractKey: "__isNode",
              },
              {
                kind: "InlineFragment",
                selections: t,
                type: "Adgroup",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: n,
                type: "AdCampaign",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: [{ kind: "Literal", name: "first", value: 1 }],
                    concreteType: "AdCampaignGroupAdCampaignsConnection",
                    kind: "LinkedField",
                    name: "ad_campaigns",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "AdCampaign",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: n,
                        storageKey: null,
                      },
                    ],
                    storageKey: "ad_campaigns(first:1)",
                  },
                ],
                type: "AdCampaignGroup",
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "SYDMAIBAActionHubCardSubject",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
