__d(
  "WAWebBizBroadcastProDownloadRecipientsModal_waba.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProDownloadRecipientsModal_waba",
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
          concreteType: "WhatsAppBusinessAccountToNumberCurrentStatus",
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
          ],
          storageKey: null,
        },
      ],
      type: "WhatsAppBusinessAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
