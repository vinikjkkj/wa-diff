__d(
  "WAWebContactManagerListViewColumnWidths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 48,
      l = {
        select: { type: "pixel", px: e },
        customer: {
          options: { minWidth: 200, maxWidth: 320 },
          type: "proportional",
          value: 18,
        },
        phone: {
          options: { minWidth: 180, maxWidth: 240 },
          type: "proportional",
          value: 10,
        },
        leadStage: {
          options: { minWidth: 160, maxWidth: 200 },
          type: "proportional",
          value: 8,
        },
        list: {
          options: { minWidth: 150, maxWidth: 200 },
          type: "proportional",
          value: 7,
        },
        acquisitionSource: {
          options: { minWidth: 170, maxWidth: 220 },
          type: "proportional",
          value: 12,
        },
        email: {
          options: { minWidth: 200, maxWidth: 280 },
          type: "proportional",
          value: 10,
        },
        lastMessage: {
          options: { minWidth: 150, maxWidth: 180 },
          type: "proportional",
          value: 8,
        },
        lastOrder: {
          options: { minWidth: 140, maxWidth: 180 },
          type: "proportional",
          value: 7,
        },
        notes: { options: { minWidth: 200 }, type: "proportional", value: 25 },
        actions: { options: { minWidth: 100 }, type: "fill" },
      };
    ((i.SELECT_COLUMN_WIDTH_PX = e), (i.contactManagerColumnWidths = l));
  },
  66,
);
