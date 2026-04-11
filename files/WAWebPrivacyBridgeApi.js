__d(
  "WAWebPrivacyBridgeApi",
  ["WAWebCmd", "WAWebUserDisclosureCollection", "WAWebUserDisclosureModel"],
  function (t, n, r, o, a, i, l) {
    var e = {
      updateUserDisclosures: function (t) {
        var e = t.userDisclosures,
          n = [];
        (e.map(function (e) {
          var t = new (r("WAWebUserDisclosureModel"))({
            id: e.id,
            accepted: e.accepted,
            lastUpdated: new Date(),
          });
          n.push(t);
        }),
          o("WAWebUserDisclosureCollection").UserDisclosureCollection.add(n, {
            merge: !0,
          }));
      },
      triggerAccountSyncForPrivacyFromBridge: function (t) {
        o("WAWebCmd").Cmd.onAccountSyncForPrivacyFromBridge(t);
      },
    };
    l.PrivacyBridgeApi = e;
  },
  98,
);
