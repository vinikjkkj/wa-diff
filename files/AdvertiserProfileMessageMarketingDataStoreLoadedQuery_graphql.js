__d(
  "AdvertiserProfileMessageMarketingDataStoreLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            kind: "Literal",
            name: "attribute_types",
            value: [
              "IS_MESSAGE_MARKETING_FEATURES_ACTIVATED",
              "HAS_CREATED_COMBINED_MESSAGE_MARKETING_CAMPAIGN",
              "DEFAULT_MESSAGE_MARKETING_PROFILE_ID",
              "IS_MESSAGE_MARKETING_DFCA_AUTOMATIC_UPLOAD_ENABLED",
              "MESSAGE_MARKETING_SUBSCRIBER_POOL_NAME",
              "DEFAULT_SUBSCRIBER_POOL_ID",
            ],
          },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "as_boolean",
              storageKey: null,
            },
          ],
          type: "XFBAdvertiserProfileBooleanBasedAttributeValue",
          abstractKey: null,
        },
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "as_string",
              storageKey: null,
            },
          ],
          type: "XFBAdvertiserProfileStringBasedAttributeValue",
          abstractKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "dfca_automatic_upload_consent_status",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          concreteType: "XFBMarketingMessagesAccountSettings",
          kind: "LinkedField",
          name: "marketing_messages_account_settings",
          plural: !1,
          selections: [
            t,
            o,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "whatsapp_activation_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
              kind: "LinkedField",
              name: "whatsapp_subscriber_pool",
              plural: !1,
              selections: [
                t,
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_agency_subscriber_upload_enabled",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "MarketingMessageSubscriberPoolViewerPermissions",
                  kind: "LinkedField",
                  name: "viewer_permissions",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_update_automations",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "can_upload_to_pool",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "WhatsAppBusinessAccountToNumberCurrentStatus",
              kind: "LinkedField",
              name: "whatsapp_phone_number_current_status",
              plural: !1,
              selections: [t],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_created_whatsapp_liquidity_campaign",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "messenger_activation_status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMarketingMessageMessengerSubscriberPool",
              kind: "LinkedField",
              name: "messenger_subscriber_pool",
              plural: !1,
              selections: [
                t,
                a,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBSubscriberPoolAudienceSize",
                  kind: "LinkedField",
                  name: "subscriber_pool_audience_size",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "upper_bound",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_custom_audience_populating",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdvertiserProfileMessageMarketingDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineDataFragmentSpread",
                      name: "useMarketingMessagesAccountSettingsDataInline_fragment",
                      selections: [
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "useAdvertiserProfileAllMessageMarketingDataInline_fragment",
                          selections: [
                            {
                              alias:
                                "mm_advertiser_profile_editable_attributes",
                              args: e,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "advertiser_profile_editable_attributes",
                              plural: !0,
                              selections: [
                                t,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "value",
                                  plural: !1,
                                  selections: [n, r],
                                  storageKey: null,
                                },
                              ],
                              storageKey:
                                'advertiser_profile_editable_attributes(attribute_types:["IS_MESSAGE_MARKETING_FEATURES_ACTIVATED","HAS_CREATED_COMBINED_MESSAGE_MARKETING_CAMPAIGN","DEFAULT_MESSAGE_MARKETING_PROFILE_ID","IS_MESSAGE_MARKETING_DFCA_AUTOMATIC_UPLOAD_ENABLED","MESSAGE_MARKETING_SUBSCRIBER_POOL_NAME","DEFAULT_SUBSCRIBER_POOL_ID"])',
                            },
                          ],
                          args: null,
                          argumentDefinitions: [],
                        },
                        {
                          kind: "InlineDataFragmentSpread",
                          name: "useMarketingMessagesAccountSettingsInline_fragment",
                          selections: [i],
                          args: null,
                          argumentDefinitions: [],
                        },
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdvertiserProfileMessageMarketingDataStoreLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "loaded_ad_accounts",
                  plural: !0,
                  selections: [
                    {
                      alias: "mm_advertiser_profile_editable_attributes",
                      args: e,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "advertiser_profile_editable_attributes",
                      plural: !0,
                      selections: [
                        l,
                        t,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "value",
                          plural: !1,
                          selections: [l, n, r],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'advertiser_profile_editable_attributes(attribute_types:["IS_MESSAGE_MARKETING_FEATURES_ACTIVATED","HAS_CREATED_COMBINED_MESSAGE_MARKETING_CAMPAIGN","DEFAULT_MESSAGE_MARKETING_PROFILE_ID","IS_MESSAGE_MARKETING_DFCA_AUTOMATIC_UPLOAD_ENABLED","MESSAGE_MARKETING_SUBSCRIBER_POOL_NAME","DEFAULT_SUBSCRIBER_POOL_ID"])',
                    },
                    i,
                    t,
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "346bf1e413bd8c1c0a0f5dea79015d13",
          id: null,
          metadata: {},
          name: "AdvertiserProfileMessageMarketingDataStoreLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
