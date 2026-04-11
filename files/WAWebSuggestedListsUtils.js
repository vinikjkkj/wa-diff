__d(
  "WAWebSuggestedListsUtils",
  ["WAWebLabelCollection", "WAWebLabelConstants"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        {
          predefinedId: (e = o("WAWebLabelConstants")).PREDEFINED_LABEL_IDS
            .NEW_CUSTOMER,
          name: e.PREDEFINED_LABEL_NAMES.NEW_CUSTOMER,
          colorIndex: 1,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.NEW_ORDER,
          name: e.PREDEFINED_LABEL_NAMES.NEW_ORDER,
          colorIndex: 2,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
          name: e.PREDEFINED_LABEL_NAMES.PENDING_PAYMENT,
          colorIndex: 0,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.FOLLOW_UP,
          name: e.PREDEFINED_LABEL_NAMES.FOLLOW_UP,
          colorIndex: 12,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.PAID,
          name: e.PREDEFINED_LABEL_NAMES.PAID,
          colorIndex: 3,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
          name: e.PREDEFINED_LABEL_NAMES.ORDER_COMPLETE,
          colorIndex: 5,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.LEAD,
          name: e.PREDEFINED_LABEL_NAMES.LEAD,
          colorIndex: 18,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.IMPORTANT,
          name: e.PREDEFINED_LABEL_NAMES.IMPORTANT,
          colorIndex: 11,
        },
      ];
    function u(e) {
      e === void 0 && (e = "");
      var t = new Set();
      for (var n of o("WAWebLabelCollection").LabelCollection.toArray())
        n.predefinedId != null && t.add(n.predefinedId);
      var r = s.filter(function (e) {
          return !t.has(e.predefinedId);
        }),
        a = e.trim().toLowerCase();
      return (
        a !== "" &&
          (r = r.filter(function (e) {
            return e.name.toLowerCase().includes(a);
          })),
        r
      );
    }
    l.getSuggestedLists = u;
  },
  98,
);
