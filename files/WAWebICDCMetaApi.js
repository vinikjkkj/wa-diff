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
          var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            r,
            a,
            i = !1,
            l = null;
          try {
            r = yield o("WAWebIdentityIcdcApi").getICDCMeta(n);
          } catch (e) {
            ((i = !0), (l = e));
          }
          try {
            if (r == null) {
              var s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
              r = s ? yield o("WAWebIdentityIcdcApi").getICDCMeta(s) : null;
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
