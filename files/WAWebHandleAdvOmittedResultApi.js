__d(
  "WAWebHandleAdvOmittedResultApi",
  ["WAJids", "WAWebAdvExpectedTsApi", "WAWebProtobufsAdv.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      if (!t || t.deleted || (e != null && e < t.timestamp)) return null;
      var a = babelHelpers.extends({}, t);
      return (
        e != null &&
          ((a.timestamp = e),
          o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(e, n, t, r) &&
            ((a.expectedTs = void 0),
            (a.expectedTsLastDeviceJobTs = void 0),
            (a.expectedTsUpdateTs = void 0))),
        (a.devices = [{ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }]),
        t.advAccountType ===
          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (a.advAccountType = o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE),
        { update: a, clearRecord: !1, fromHandleOmittedResult: !0 }
      );
    }
    l.handleOmittedResult = e;
  },
  98,
);
