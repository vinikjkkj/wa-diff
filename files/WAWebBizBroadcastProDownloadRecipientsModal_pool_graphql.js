__d(
  "WAWebBizBroadcastProDownloadRecipientsModal_pool.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProDownloadRecipientsModal_pool",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "business_object_name",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_subscriber_pool_empty",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
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
      type: "XFBMarketingMessageWhatsAppSubscriberPool",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
