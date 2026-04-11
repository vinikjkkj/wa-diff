__d(
  "WAWebStatusSetAndSyncMute",
  [
    "WATimeUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSyncdCoreApi",
    "WAWebUserStatusMuteSync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r("WAWebUserStatusMuteSync").getMutationForStatusMute(
            e,
            t,
            o("WATimeUtils").unixTimeMs(),
          );
          e.isGroup()
            ? yield o("WAWebSyncdCoreApi").lockForSync(
                ["group-metadata"],
                [n],
                function () {
                  return o("WAWebSchemaGroupMetadata")
                    .getGroupMetadataTable()
                    .merge(e.toString(), { statusMute: t });
                },
              )
            : yield o("WAWebSyncdCoreApi").lockForSync(
                ["contact"],
                [n],
                function () {
                  return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .merge(e.toString({ legacy: !0 }), { statusMute: t });
                },
              );
        })),
        s.apply(this, arguments)
      );
    }
    l.setAndSyncStatusMute = e;
  },
  98,
);
