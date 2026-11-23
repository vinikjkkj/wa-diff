__d(
  "WAWebICDCMetaApi",
  [
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebE2EProtoGenerator",
    "WAWebIdentityIcdcApi",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserUtils").getMeLidUserOrThrow(),
        r,
        a,
        i = !1,
        l = null;
      try {
        r = await o("WAWebIdentityIcdcApi").getICDCMeta(n);
      } catch (e) {
        ((i = !0), (l = e));
      }
      try {
        if (r == null) {
          var s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          r = s ? await o("WAWebIdentityIcdcApi").getICDCMeta(s) : null;
        }
      } catch (e) {
        i || ((i = !0), (l = e));
      }
      if (r == null && i)
        throw (
          new (o(
            "WAWebAdvMetadataCreationFailureWamEvent",
          ).AdvMetadataCreationFailureWamEvent)({
            advMetadataIsMe: !0,
          }).commit(),
          l
        );
      try {
        a = o("WAWebUserUtils").isMeAccount(e)
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
