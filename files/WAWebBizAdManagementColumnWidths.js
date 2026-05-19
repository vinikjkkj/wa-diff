__d(
  "WAWebBizAdManagementColumnWidths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { maxWidth: 250, minWidth: 80 },
      l = {
        actions: { options: { minWidth: 140 }, type: "fill" },
        amountSpent: {
          options: { maxWidth: 250, minWidth: 150 },
          type: "proportional",
          value: 10,
        },
        conversations: { options: e, type: "proportional", value: 15 },
        costPerConversation: { options: e, type: "proportional", value: 15 },
        reach: { options: e, type: "proportional", value: 15 },
        status: { options: e, type: "proportional", value: 15 },
        yourAds: {
          options: { maxWidth: 450, minWidth: 200 },
          type: "proportional",
          value: 20,
        },
      };
    i.adManagementColumnWidths = l;
  },
  66,
);
