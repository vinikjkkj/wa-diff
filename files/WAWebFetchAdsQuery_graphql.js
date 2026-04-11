__d(
  "WAWebFetchAdsQuery.graphql",
  ["WAWebFetchAdsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "options" },
        t = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        r = [
          { kind: "Variable", name: "options", variableName: "options" },
          { kind: "Variable", name: "page_id", variableName: "page_id" },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [o],
          type: "Node",
          abstractKey: "__isNode",
        },
        i = [{ kind: "Literal", name: "supported", value: "304s3R" }],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "formatted_for_lwi",
          storageKey: null,
        },
        s = {
          alias: null,
          args: [
            { kind: "Literal", name: "height", value: 64 },
            { kind: "Literal", name: "width", value: 64 },
          ],
          kind: "ScalarField",
          name: "thumbnail_image_url",
          storageKey: "thumbnail_image_url(height:64,width:64)",
        },
        u = [{ kind: "Literal", name: "metrics", value: ["REACH", "RESULTS"] }],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "reach",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "results",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          concreteType: "AdInsightsNode",
          kind: "LinkedField",
          name: "node",
          plural: !1,
          selections: [c, d],
          storageKey: null,
        },
        p = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boosting_status",
          storageKey: null,
        },
        _ = {
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
              kind: "ScalarField",
              name: "body",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        f = {
          alias: null,
          args: null,
          concreteType: "AdsLWIAdGroupSpec",
          kind: "LinkedField",
          name: "adgroup_spec",
          plural: !0,
          selections: [_],
          storageKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = [
          o,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "boosting_info",
            plural: !1,
            selections: [
              g,
              {
                alias: null,
                args: null,
                concreteType: "CurrencyQuantity",
                kind: "LinkedField",
                name: "spent",
                plural: !1,
                selections: [l],
                storageKey: null,
              },
              s,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "AdCampaignGroup",
            kind: "LinkedField",
            name: "campaign_group",
            plural: !1,
            selections: [
              o,
              {
                alias: null,
                args: u,
                concreteType: "AdInsightsConnection",
                kind: "LinkedField",
                name: "ad_insights",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "AdInsightsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [m],
                    storageKey: null,
                  },
                ],
                storageKey: 'ad_insights(metrics:["REACH","RESULTS"])',
              },
            ],
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
              g,
              p,
              {
                alias: null,
                args: null,
                concreteType: "AdsLWIAdGroupSpec",
                kind: "LinkedField",
                name: "adgroup_spec",
                plural: !0,
                selections: [_, o],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchAdsQuery",
          selections: [
            {
              kind: "RequiredField",
              field: {
                alias: null,
                args: null,
                concreteType: "CTWAAPI",
                kind: "LinkedField",
                name: "ctwa",
                plural: !1,
                selections: [
                  {
                    kind: "RequiredField",
                    field: {
                      alias: null,
                      args: r,
                      concreteType: "CTWAAPIAllPageAdsConnection",
                      kind: "LinkedField",
                      name: "all_page_ads",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "CTWAAPIAllPageAdsEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              kind: "RequiredField",
                              field: {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [
                                  a,
                                  {
                                    kind: "RequiredField",
                                    field: {
                                      alias: null,
                                      args: i,
                                      concreteType: null,
                                      kind: "LinkedField",
                                      name: "wrapper_renderer",
                                      plural: !1,
                                      selections: [
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "CTWABoostedComponentWrapper",
                                              kind: "LinkedField",
                                              name: "boosted_component",
                                              plural: !1,
                                              selections: [
                                                {
                                                  kind: "RequiredField",
                                                  field: o,
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.id",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "boosting_info",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "CurrencyQuantity",
                                                          kind: "LinkedField",
                                                          name: "spent",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              kind: "RequiredField",
                                                              field: l,
                                                              action: "THROW",
                                                              path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.boosting_info.spent.formatted_for_lwi",
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.boosting_info.spent",
                                                      },
                                                      {
                                                        kind: "RequiredField",
                                                        field: s,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.boosting_info.thumbnail_image_url",
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.boosting_info",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType:
                                                      "AdCampaignGroup",
                                                    kind: "LinkedField",
                                                    name: "campaign_group",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: o,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.campaign_group.id",
                                                      },
                                                      {
                                                        alias: null,
                                                        args: u,
                                                        concreteType:
                                                          "AdInsightsConnection",
                                                        kind: "LinkedField",
                                                        name: "ad_insights",
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType:
                                                              "AdInsightsEdge",
                                                            kind: "LinkedField",
                                                            name: "edges",
                                                            plural: !0,
                                                            selections: [
                                                              {
                                                                kind: "RequiredField",
                                                                field: m,
                                                                action: "THROW",
                                                                path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.campaign_group.ad_insights.edges.node",
                                                              },
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        storageKey:
                                                          'ad_insights(metrics:["REACH","RESULTS"])',
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.campaign_group",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "spec",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: p,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.spec.boosting_status",
                                                      },
                                                      {
                                                        kind: "RequiredField",
                                                        field: f,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.spec.adgroup_spec",
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.boosted_component.spec",
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "CTWAAdsManagementBoostedComponent",
                                          abstractKey: null,
                                        },
                                        {
                                          kind: "InlineFragment",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              concreteType:
                                                "BoostedComponentAsyncWrapper",
                                              kind: "LinkedField",
                                              name: "async_request",
                                              plural: !1,
                                              selections: [
                                                {
                                                  kind: "RequiredField",
                                                  field: o,
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.id",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "boosting_info",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: {
                                                          alias: null,
                                                          args: null,
                                                          concreteType:
                                                            "CurrencyQuantity",
                                                          kind: "LinkedField",
                                                          name: "spent",
                                                          plural: !1,
                                                          selections: [
                                                            {
                                                              kind: "RequiredField",
                                                              field: l,
                                                              action: "THROW",
                                                              path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.boosting_info.spent.formatted_for_lwi",
                                                            },
                                                          ],
                                                          storageKey: null,
                                                        },
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.boosting_info.spent",
                                                      },
                                                      {
                                                        kind: "RequiredField",
                                                        field: s,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.boosting_info.thumbnail_image_url",
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.boosting_info",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType:
                                                      "AdCampaignGroup",
                                                    kind: "LinkedField",
                                                    name: "campaign_group",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: o,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.campaign_group.id",
                                                      },
                                                      {
                                                        alias: null,
                                                        args: u,
                                                        concreteType:
                                                          "AdInsightsConnection",
                                                        kind: "LinkedField",
                                                        name: "ad_insights",
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType:
                                                              "AdInsightsEdge",
                                                            kind: "LinkedField",
                                                            name: "edges",
                                                            plural: !0,
                                                            selections: [
                                                              {
                                                                kind: "RequiredField",
                                                                field: {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType:
                                                                    "AdInsightsNode",
                                                                  kind: "LinkedField",
                                                                  name: "node",
                                                                  plural: !1,
                                                                  selections: [
                                                                    {
                                                                      kind: "RequiredField",
                                                                      field: c,
                                                                      action:
                                                                        "THROW",
                                                                      path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.campaign_group.ad_insights.edges.node.reach",
                                                                    },
                                                                    d,
                                                                  ],
                                                                  storageKey:
                                                                    null,
                                                                },
                                                                action: "THROW",
                                                                path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.campaign_group.ad_insights.edges.node",
                                                              },
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        storageKey:
                                                          'ad_insights(metrics:["REACH","RESULTS"])',
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.campaign_group",
                                                },
                                                {
                                                  kind: "RequiredField",
                                                  field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "spec",
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: "RequiredField",
                                                        field: p,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.spec.boosting_status",
                                                      },
                                                      {
                                                        kind: "RequiredField",
                                                        field: f,
                                                        action: "THROW",
                                                        path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.spec.adgroup_spec",
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  action: "THROW",
                                                  path: "ctwa.all_page_ads.edges.node.wrapper_renderer.async_request.spec",
                                                },
                                              ],
                                              storageKey: null,
                                            },
                                          ],
                                          type: "LWIAdsManagementBoostedComponentAsyncRequest",
                                          abstractKey: null,
                                        },
                                      ],
                                      storageKey:
                                        'wrapper_renderer(supported:"304s3R")',
                                    },
                                    action: "THROW",
                                    path: "ctwa.all_page_ads.edges.node.wrapper_renderer",
                                  },
                                ],
                                storageKey: null,
                              },
                              action: "THROW",
                              path: "ctwa.all_page_ads.edges.node",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    action: "THROW",
                    path: "ctwa.all_page_ads",
                  },
                ],
                storageKey: null,
              },
              action: "THROW",
              path: "ctwa",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "WAWebFetchAdsQuery",
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
                  alias: null,
                  args: r,
                  concreteType: "CTWAAPIAllPageAdsConnection",
                  kind: "LinkedField",
                  name: "all_page_ads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "CTWAAPIAllPageAdsEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "node",
                          plural: !1,
                          selections: [
                            g,
                            a,
                            {
                              alias: null,
                              args: i,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "wrapper_renderer",
                              plural: !1,
                              selections: [
                                g,
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "CTWABoostedComponentWrapper",
                                      kind: "LinkedField",
                                      name: "boosted_component",
                                      plural: !1,
                                      selections: h,
                                      storageKey: null,
                                    },
                                  ],
                                  type: "CTWAAdsManagementBoostedComponent",
                                  abstractKey: null,
                                },
                                {
                                  kind: "InlineFragment",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "BoostedComponentAsyncWrapper",
                                      kind: "LinkedField",
                                      name: "async_request",
                                      plural: !1,
                                      selections: h,
                                      storageKey: null,
                                    },
                                  ],
                                  type: "LWIAdsManagementBoostedComponentAsyncRequest",
                                  abstractKey: null,
                                },
                              ],
                              storageKey:
                                'wrapper_renderer(supported:"304s3R")',
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
        },
        params: {
          id: n("WAWebFetchAdsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebFetchAdsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
