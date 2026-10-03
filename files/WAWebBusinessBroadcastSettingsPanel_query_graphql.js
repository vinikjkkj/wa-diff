__d(
  "WAWebBusinessBroadcastSettingsPanel_query.graphql",
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
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBusinessBroadcastSettingsPanel_query",
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
                    concreteType: "AdBusiness",
                    kind: "LinkedField",
                    name: "owner_business",
                    plural: !1,
                    selections: [
                      e,
                      {
                        alias: null,
                        args: null,
                        concreteType:
                          "XFBMarketingMessageWhatsAppEventSharingBusinessDefault",
                        kind: "LinkedField",
                        name: "marketing_message_whatsapp_event_sharing_consent",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "marketing_message_optimization_consent_status",
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
                selections: [e],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
