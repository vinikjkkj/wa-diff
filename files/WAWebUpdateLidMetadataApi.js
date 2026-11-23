__d(
  "WAWebUpdateLidMetadataApi",
  ["WAWebApiContact", "WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.updates,
        n = t.map(function (e) {
          var t = e.data,
            n = e.lid,
            r = { lid: n };
          return (
            t.shareOwnPn != null && (r.shareOwnPn = t.shareOwnPn),
            t.displayNameLID != null && (r.displayNameLID = t.displayNameLID),
            t.requestedPnTimestamp != null &&
              (r.requestedPnTimestamp = t.requestedPnTimestamp),
            t.username != null && (r.username = t.username),
            r
          );
        });
      (await o("WAWebBackendApi").frontendSendAndReceive(
        "bulkUpdateLidContactState",
        { lidContactDataMappings: n },
      ),
        await o("WAWebApiContact").updateLidMetadata(t));
    }
    l.updateLidMetadata = e;
  },
  98,
);
