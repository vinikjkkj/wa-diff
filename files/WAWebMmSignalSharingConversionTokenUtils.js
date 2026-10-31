__d(
  "WAWebMmSignalSharingConversionTokenUtils",
  [
    "WAWebConversionTupleCollection",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingPostDcNewSchemaEnabled()
      ) {
        var t = o(
          "WAWebMmSignalSharingModelUtils",
        ).getMmSignalSharingExpirationWindowItem({ chat: e });
        if (t != null) {
          var n = r("WAWebConversionTupleCollection").get(e.id);
          return (n == null ? void 0 : n.fromMe) !== !0 ||
            n.conversionData == null
            ? !0
            : t.unixTime.client >= n.timestamp;
        }
      }
    }
    l.isLatestMmConversionToken = e;
  },
  98,
);
