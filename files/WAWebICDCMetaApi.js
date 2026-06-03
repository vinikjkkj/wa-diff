__d(
  "WAWebICDCMetaApi",
  [
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebE2EProtoGenerator",
    "WAWebIdentityIcdcApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            r,
            a;
          try {
            r = yield o("WAWebIdentityIcdcApi").getICDCMeta(n);
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
              : yield o("WAWebIdentityIcdcApi").getICDCMeta(e);
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
        })),
        s.apply(this, arguments)
      );
    }
    l.populateICDCMeta = e;
  },
  98,
);
