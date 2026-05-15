__d(
  "WAWebBizAdManagementColumnWidths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { maxWidth: 250, minWidth: 80 },
      l = {
        actions: { type: "fill", options: { minWidth: 140 } },
        amountSpent: {
          type: "proportional",
          value: 10,
          options: { minWidth: 150, maxWidth: 250 },
        },
        conversations: { type: "proportional", value: 15, options: e },
        costPerConversation: { type: "proportional", value: 15, options: e },
        reach: { type: "proportional", value: 15, options: e },
        status: { type: "proportional", value: 15, options: e },
        yourAds: {
          type: "proportional",
          value: 20,
          options: { minWidth: 200, maxWidth: 450 },
        },
      };
    i.adManagementColumnWidths = l;
  },
  66,
);
