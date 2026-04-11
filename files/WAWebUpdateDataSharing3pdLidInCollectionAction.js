__d(
  "WAWebUpdateDataSharing3pdLidInCollectionAction",
  ["PerCustomerDataSharingModel", "WAWebDataSharing3pdLidCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.dataSharing3pdEnabled,
        n = e.lidRawString,
        r = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.get(n);
      r
        ? r.set("dataSharing3pdEnabled", t)
        : o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.add(
            new (o("PerCustomerDataSharingModel").PerCustomerDataSharingModel)({
              id: n,
              dataSharing3pdEnabled: t,
            }),
          );
    }
    function s(e) {
      var t = e.lidRawString;
      o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.remove(
        t,
      );
    }
    ((l.updateDataSharing3pdLidInCollection = e),
      (l.removeDataSharing3pdLidFromCollection = s));
  },
  98,
);
