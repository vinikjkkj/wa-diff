__d(
  "AdvertiserProfileMessageMarketingDataStoreLoaderQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = [
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
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
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
        a = {
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
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "dfca_automatic_upload_consent_status",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          concreteType: "XFBMarketingMessagesAccountSettings",
          kind: "LinkedField",
          name: "marketing_messages_account_settings",
          plural: !1,
          selections: [
            r,
            i,
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
                r,
                l,
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
              selections: [r],
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
                r,
                l,
                i,
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
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdvertiserProfileMessageMarketingDataStoreLoaderQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
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
                          alias: "mm_advertiser_profile_editable_attributes",
                          args: n,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "advertiser_profile_editable_attributes",
                          plural: !0,
                          selections: [
                            r,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "value",
                              plural: !1,
                              selections: [o, a],
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
                      selections: [s],
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdvertiserProfileMessageMarketingDataStoreLoaderQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: "mm_advertiser_profile_editable_attributes",
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "advertiser_profile_editable_attributes",
                  plural: !0,
                  selections: [
                    u,
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "value",
                      plural: !1,
                      selections: [u, o, a],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'advertiser_profile_editable_attributes(attribute_types:["IS_MESSAGE_MARKETING_FEATURES_ACTIVATED","HAS_CREATED_COMBINED_MESSAGE_MARKETING_CAMPAIGN","DEFAULT_MESSAGE_MARKETING_PROFILE_ID","IS_MESSAGE_MARKETING_DFCA_AUTOMATIC_UPLOAD_ENABLED","MESSAGE_MARKETING_SUBSCRIBER_POOL_NAME","DEFAULT_SUBSCRIBER_POOL_ID"])',
                },
                s,
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "37933416752940923",
          metadata: {},
          name: "AdvertiserProfileMessageMarketingDataStoreLoaderQuery",
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
