__d(
  "WAWebICDCMetaApi",
  [
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebE2EProtoGenerator",
    "WAWebIdentityIcdcApi",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        r,
        a;
      try {
        r = await o("WAWebIdentityIcdcApi").getICDCMeta(n);
      } catch (e) {
        throw (
          new (o(
            "WAWebAdvMetadataCreationFailureWamEvent",
          ).AdvMetadataCreationFailureWamEvent)({
            advMetadataIsMe: !0,
          }).commit(),
          e
        );
      }
      try {
        a = o("WAWebUserPrefsMeUser").isMeAccount(e)
          ? null
          : await o("WAWebIdentityIcdcApi").getICDCMeta(e);
      } catch (e) {
        throw (
          new (o(
            "WAWebAdvMetadataCreationFailureWamEvent",
          ).AdvMetadataCreationFailureWamEvent)({
            advMetadataIsMe: !1,
          }).commit(),
          e
        );
      }
      o("WAWebE2EProtoGenerator").populateMessageContextInfo(t, r, a);
    }
    l.populateICDCMeta = e;
  },
  98,
);
