__d(
  "WAWebBizBroadcastProDownloadRecipientsModalQuery.graphql",
  ["WAWebBizBroadcastProDownloadRecipientsModalQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "owner_business",
          plural: !1,
          selections: [t],
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_object_name",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_subscriber_pool_empty",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProDownloadRecipientsModalQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [
                    e,
                    r,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "WAWebBizBroadcastProDownloadRecipientsModal_waba",
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
              concreteType: "XFBWhatsAppSMBBBPro",
              kind: "LinkedField",
              name: "xfb_whatsapp_bb_pro",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
                  kind: "LinkedField",
                  name: "default_subscriber_pool",
                  plural: !1,
                  selections: [
                    o,
                    t,
                    a,
                    e,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "WAWebBizBroadcastProDownloadRecipientsModal_pool",
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
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizBroadcastProDownloadRecipientsModalQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [
                    e,
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WhatsAppBusinessAccountToNumberCurrentStatus",
                      kind: "LinkedField",
                      name: "phone_number_status",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "waba_display_phone_number",
                          storageKey: null,
                        },
                        t,
                      ],
                      storageKey: null,
                    },
                    t,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBWhatsAppSMBBBPro",
              kind: "LinkedField",
              name: "xfb_whatsapp_bb_pro",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMarketingMessageWhatsAppSubscriberPool",
                  kind: "LinkedField",
                  name: "default_subscriber_pool",
                  plural: !1,
                  selections: [
                    o,
                    t,
                    a,
                    e,
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
                          name: "lower_bound",
                          storageKey: null,
                        },
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
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProDownloadRecipientsModalQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProDownloadRecipientsModalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
