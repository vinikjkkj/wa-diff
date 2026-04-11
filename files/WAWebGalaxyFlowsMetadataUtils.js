__d(
  "WAWebGalaxyFlowsMetadataUtils",
  ["WATimeUtils", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (
        ((t = e.flowMetadata) == null ? void 0 : t.data_api_version) == null
      ) {
        var n = e.messageTimestamp,
          r = o("WAWebABProps").getABPropConfigValue(
            "wae_metadata_integrity_timeout_minutes",
          );
        return (
          n != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(n),
            r * o("WATimeUtils").MINUTE_SECONDS,
          )
        );
      }
      return !1;
    }
    l.skipIfStaleMedatadataOrNullDataApiVersion = e;
  },
  98,
);
