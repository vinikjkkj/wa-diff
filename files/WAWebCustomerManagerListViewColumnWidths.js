__d(
  "WAWebCustomerManagerListViewColumnWidths",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 48,
      l = {
        options: { minWidth: 160, maxWidth: 400 },
        type: "proportional",
        value: 10,
      },
      s = {
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
        username: {
          options: { minWidth: 160, maxWidth: 220 },
          type: "proportional",
          value: 10,
        },
        list: {
          options: { minWidth: 200, maxWidth: 260 },
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
        address: {
          options: { minWidth: 200, maxWidth: 320 },
          type: "proportional",
          value: 12,
        },
        birthday: {
          options: { minWidth: 140, maxWidth: 180 },
          type: "proportional",
          value: 7,
        },
        lastMessage: {
          options: { minWidth: 150, maxWidth: 180 },
          type: "proportional",
          value: 8,
        },
        lastOrder: {
          options: { minWidth: 200, maxWidth: 320 },
          type: "proportional",
          value: 12,
        },
        notes: {
          options: { minWidth: 200, maxWidth: 640 },
          type: "proportional",
          value: 25,
        },
        actions: { options: { minWidth: 160 }, type: "fill" },
      };
    function u(e) {
      return e.reduce(function (e, t) {
        var n, r;
        return (
          e +
          (t.type === "pixel"
            ? t.px
            : (n = (r = t.options) == null ? void 0 : r.minWidth) != null
              ? n
              : 0)
        );
      }, 0);
    }
    ((i.SELECT_COLUMN_WIDTH_PX = e),
      (i.customFieldColumnWidth = l),
      (i.customerManagerColumnWidths = s),
      (i.getCustomerManagerTableMinWidth = u));
  },
  66,
);
