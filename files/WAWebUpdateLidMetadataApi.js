__d(
  "WAWebUpdateLidMetadataApi",
  ["WAWebApiContact", "WAWebBackendApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.updates,
            n = t.map(function (e) {
              var t = e.data,
                n = e.lid,
                r = { lid: n };
              return (
                t.shareOwnPn != null && (r.shareOwnPn = t.shareOwnPn),
                t.displayNameLID != null &&
                  (r.displayNameLID = t.displayNameLID),
                t.requestedPnTimestamp != null &&
                  (r.requestedPnTimestamp = t.requestedPnTimestamp),
                t.username != null && (r.username = t.username),
                r
              );
            });
          (yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdateLidContactState",
            { lidContactDataMappings: n },
          ),
            yield o("WAWebApiContact").updateLidMetadata(t));
        })),
        s.apply(this, arguments)
      );
    }
    l.updateLidMetadata = e;
  },
  98,
);
