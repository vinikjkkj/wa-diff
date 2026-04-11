__d(
  "WAWebBizAdManagementColumnWidths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { minWidth: 80, maxWidth: 250 },
      l = {
        yourAds: {
          type: "proportional",
          value: 20,
          options: { minWidth: 200, maxWidth: 450 },
        },
        status: { type: "proportional", value: 15, options: e },
        reach: { type: "proportional", value: 15, options: e },
        conversations: { type: "proportional", value: 15, options: e },
        costPerConversation: { type: "proportional", value: 15, options: e },
        amountSpent: {
          type: "proportional",
          value: 10,
          options: { minWidth: 150, maxWidth: 250 },
        },
        actions: { type: "fill", options: { minWidth: 140 } },
      };
    i.adManagementColumnWidths = l;
  },
  66,
);
