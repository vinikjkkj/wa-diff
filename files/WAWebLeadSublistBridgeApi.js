__d(
  "WAWebLeadSublistBridgeApi",
  ["WAWebLeadSublistChangeNotifier"],
  function (t, n, r, o, a, i, l) {
    var e = {
      syncLeadSublist: function () {
        o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
      },
      removeLeadSublistFromCollection: function () {
        o("WAWebLeadSublistChangeNotifier").notifyLeadSublistChanged();
      },
    };
    l.LeadSublistBridgeApi = e;
  },
  98,
);
