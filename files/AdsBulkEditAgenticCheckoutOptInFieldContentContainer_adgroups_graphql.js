__d(
  "AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups.graphql",
  [
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "CombinedAdgroup-is_dynamic_ad-resolver",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "relay-runtime/experimental",
    "CatalogProductSet__id.graphql",
    "CatalogProductSet-resolvers",
    "relay-runtime/experimental",
    "ClientAdCreative____relay_model_instance.graphql",
    "ClientAdCreative-resolvers",
    "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog.graphql",
    "relay-runtime/experimental",
    "CatalogProductSet____relay_model_instance.graphql",
    "CatalogProductSet-resolvers",
    "relay-runtime/experimental",
    "CombinedCampaignGroup__id.graphql",
    "CombinedCampaignGroup-resolvers",
    "relay-runtime/experimental",
    "CombinedAdgroup____relay_model_instance.graphql",
    "CombinedAdgroup-resolvers",
    "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_combined_campaign_group__product_catalog.graphql",
    "relay-runtime/experimental",
    "CombinedCampaignGroup____relay_model_instance.graphql",
    "CombinedCampaignGroup-resolvers",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          args: null,
          kind: "FragmentSpread",
          name: "CombinedAdgroup____relay_model_instance",
        },
        t = {
          alias: null,
          args: null,
          concreteType: "ProductCatalog",
          kind: "LinkedField",
          name: "product_catalog",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { hasClientEdges: !0, plural: !0, throwOnFieldError: !0 },
        name: "AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useAgenticCheckoutEligibility_adgroups",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "adset_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedAdgroup____relay_model_instance.graphql"),
              n("CombinedAdgroup-resolvers").adset_id,
              "__relay_model_instance",
              !0,
            ),
            path: "adset_id",
          },
          {
            alias: null,
            args: null,
            fragment: e,
            kind: "RelayResolver",
            name: "campaign_id",
            resolverModule: n(
              "relay-runtime/experimental",
            ).resolverDataInjector(
              n("CombinedAdgroup____relay_model_instance.graphql"),
              n("CombinedAdgroup-resolvers").campaign_id,
              "__relay_model_instance",
              !0,
            ),
            path: "campaign_id",
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "CombinedAdgroupUtilNameSpace",
            modelResolvers: null,
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: e,
              kind: "RelayResolver",
              name: "utils",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("CombinedAdgroup____relay_model_instance.graphql"),
                n("CombinedAdgroup-resolvers").utils,
                "__relay_model_instance",
                !0,
              ),
              path: "utils",
              normalizationInfo: {
                kind: "WeakModel",
                concreteType: "CombinedAdgroupUtilNameSpace",
                plural: !1,
              },
            },
            linkedField: {
              alias: null,
              args: null,
              concreteType: "CombinedAdgroupUtilNameSpace",
              kind: "LinkedField",
              name: "utils",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  fragment: {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CombinedAdgroupIsDynamicAdResolver",
                  },
                  kind: "RelayResolver",
                  name: "is_dynamic_ad",
                  resolverModule: n("CombinedAdgroup-is_dynamic_ad-resolver")
                    .is_dynamic_ad,
                  path: "utils.is_dynamic_ad",
                },
              ],
              storageKey: null,
            },
          },
          {
            kind: "ClientEdgeToClientObject",
            concreteType: "ClientAdCreative",
            modelResolvers: null,
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: e,
              kind: "RelayResolver",
              name: "creative",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("CombinedAdgroup____relay_model_instance.graphql"),
                n("CombinedAdgroup-resolvers").creative,
                "__relay_model_instance",
                !0,
              ),
              path: "creative",
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
                  kind: "ClientEdgeToClientObject",
                  concreteType: "CatalogProductSet",
                  modelResolvers: {
                    CatalogProductSet: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CatalogProductSet__id",
                      },
                      kind: "RelayLiveResolver",
                      name: "__relay_model_instance",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n("CatalogProductSet__id.graphql"),
                        n("CatalogProductSet-resolvers").CatalogProductSet,
                        "id",
                        !0,
                      ),
                      path: "creative.product_set.__relay_model_instance",
                    },
                  },
                  serverObjectOperations: null,
                  backingField: {
                    alias: null,
                    args: null,
                    fragment: {
                      args: null,
                      kind: "FragmentSpread",
                      name: "ClientAdCreative____relay_model_instance",
                    },
                    kind: "RelayResolver",
                    name: "product_set",
                    resolverModule: n(
                      "relay-runtime/experimental",
                    ).resolverDataInjector(
                      n("ClientAdCreative____relay_model_instance.graphql"),
                      n("ClientAdCreative-resolvers").product_set,
                      "__relay_model_instance",
                      !0,
                    ),
                    path: "creative.product_set",
                  },
                  linkedField: {
                    alias: null,
                    args: null,
                    concreteType: "CatalogProductSet",
                    kind: "LinkedField",
                    name: "product_set",
                    plural: !1,
                    selections: [
                      {
                        kind: "CatchField",
                        field: {
                          kind: "ClientEdgeToServerObject",
                          operation: n(
                            "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_creative__product_set__product_catalog.graphql",
                          ),
                          backingField: {
                            alias: null,
                            args: null,
                            fragment: {
                              args: null,
                              kind: "FragmentSpread",
                              name: "CatalogProductSet____relay_model_instance",
                            },
                            kind: "RelayResolver",
                            name: "product_catalog",
                            resolverModule: n(
                              "relay-runtime/experimental",
                            ).resolverDataInjector(
                              n(
                                "CatalogProductSet____relay_model_instance.graphql",
                              ),
                              n("CatalogProductSet-resolvers").product_catalog,
                              "__relay_model_instance",
                              !0,
                            ),
                            path: "creative.product_set.product_catalog",
                          },
                          linkedField: t,
                        },
                        to: "NULL",
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
            concreteType: "CombinedCampaignGroup",
            modelResolvers: {
              CombinedCampaignGroup: {
                alias: null,
                args: null,
                fragment: {
                  args: null,
                  kind: "FragmentSpread",
                  name: "CombinedCampaignGroup__id",
                },
                kind: "RelayLiveResolver",
                name: "__relay_model_instance",
                resolverModule: n(
                  "relay-runtime/experimental",
                ).resolverDataInjector(
                  n("CombinedCampaignGroup__id.graphql"),
                  n("CombinedCampaignGroup-resolvers").CombinedCampaignGroup,
                  "id",
                  !0,
                ),
                path: "combined_campaign_group.__relay_model_instance",
              },
            },
            serverObjectOperations: null,
            backingField: {
              alias: null,
              args: null,
              fragment: e,
              kind: "RelayResolver",
              name: "combined_campaign_group",
              resolverModule: n(
                "relay-runtime/experimental",
              ).resolverDataInjector(
                n("CombinedAdgroup____relay_model_instance.graphql"),
                n("CombinedAdgroup-resolvers").combined_campaign_group,
                "__relay_model_instance",
                !0,
              ),
              path: "combined_campaign_group",
            },
            linkedField: {
              alias: null,
              args: null,
              concreteType: "CombinedCampaignGroup",
              kind: "LinkedField",
              name: "combined_campaign_group",
              plural: !1,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    kind: "ClientEdgeToServerObject",
                    operation: n(
                      "ClientEdgeQuery_AdsBulkEditAgenticCheckoutOptInFieldContentContainer_adgroups_combined_campaign_group__product_catalog.graphql",
                    ),
                    backingField: {
                      alias: null,
                      args: null,
                      fragment: {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CombinedCampaignGroup____relay_model_instance",
                      },
                      kind: "RelayResolver",
                      name: "product_catalog",
                      resolverModule: n(
                        "relay-runtime/experimental",
                      ).resolverDataInjector(
                        n(
                          "CombinedCampaignGroup____relay_model_instance.graphql",
                        ),
                        n("CombinedCampaignGroup-resolvers").product_catalog,
                        "__relay_model_instance",
                        !0,
                      ),
                      path: "combined_campaign_group.product_catalog",
                    },
                    linkedField: t,
                  },
                  to: "NULL",
                },
              ],
              storageKey: null,
            },
          },
        ],
        type: "CombinedAdgroup",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
