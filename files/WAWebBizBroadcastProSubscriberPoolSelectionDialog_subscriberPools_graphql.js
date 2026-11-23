__d(
  "WAWebBizBroadcastProSubscriberPoolSelectionDialog_subscriberPools.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "name",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { plural: !0 },
        name: "WAWebBizBroadcastProSubscriberPoolSelectionDialog_subscriberPools",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null,
          },
          e,
          {
            alias: null,
            args: null,
            concreteType: "AdBusiness",
            kind: "LinkedField",
            name: "owning_business",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
        ],
        type: "XFBMarketingMessageWhatsAppSubscriberPool",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
