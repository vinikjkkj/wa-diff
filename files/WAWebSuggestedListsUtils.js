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
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.NEW_CUSTOMER,
          ),
          colorIndex: 1,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.NEW_ORDER,
          name: e.PREDEFINED_LABEL_NAMES.NEW_ORDER,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.NEW_ORDER,
          ),
          colorIndex: 2,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
          name: e.PREDEFINED_LABEL_NAMES.PENDING_PAYMENT,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.PENDING_PAYMENT,
          ),
          colorIndex: 0,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.FOLLOW_UP,
          name: e.PREDEFINED_LABEL_NAMES.FOLLOW_UP,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.FOLLOW_UP,
          ),
          colorIndex: 12,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.PAID,
          name: e.PREDEFINED_LABEL_NAMES.PAID,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.PAID,
          ),
          colorIndex: 3,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
          name: e.PREDEFINED_LABEL_NAMES.ORDER_COMPLETE,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.ORDER_COMPLETE,
          ),
          colorIndex: 5,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.LEAD,
          name: e.PREDEFINED_LABEL_NAMES.LEAD,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.LEAD,
          ),
          colorIndex: 18,
        },
        {
          predefinedId: e.PREDEFINED_LABEL_IDS.IMPORTANT,
          name: e.PREDEFINED_LABEL_NAMES.IMPORTANT,
          displayName: e.mapPredefinedIdToLabelName(
            e.PREDEFINED_LABEL_IDS.IMPORTANT,
          ),
          colorIndex: 11,
        },
      ];
    function u(e) {
      e === void 0 && (e = "");
      var t = new Set(),
        n = new Set();
      for (var r of o("WAWebLabelCollection").LabelCollection.toArray())
        (r.predefinedId != null && t.add(r.predefinedId),
          r.name != null && n.add(r.name.toLowerCase()));
      var a = s.filter(function (e) {
          return !t.has(e.predefinedId) && !n.has(e.name.toLowerCase());
        }),
        i = e.trim().toLowerCase();
      return i === ""
        ? a
        : a.filter(function (e) {
            var t, n;
            return (
              (t = (n = e.displayName) == null ? void 0 : n.toString()) != null
                ? t
                : e.name
            )
              .toLowerCase()
              .includes(i);
          });
    }
    l.getSuggestedLists = u;
  },
  98,
);
