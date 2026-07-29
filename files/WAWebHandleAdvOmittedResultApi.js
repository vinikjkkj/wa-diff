__d(
  "WAWebHandleAdvOmittedResultApi",
  ["WAJids", "WAWebAdvExpectedTsApi", "WAWebProtobufsAdv.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.incomingExpectedTs,
        n = e.incomingTs,
        r = e.lastDeviceJobTs,
        a = e.localDeviceRecord;
      if (!a || a.deleted || (n != null && n < a.timestamp)) return null;
      var i = babelHelpers.extends({}, a);
      return (
        n != null &&
          ((i.timestamp = n),
          o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(n, t, a, r) &&
            ((i.expectedTs = void 0),
            (i.expectedTsLastDeviceJobTs = void 0),
            (i.expectedTsUpdateTs = void 0))),
        (i.devices = [{ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }]),
        a.advAccountType ===
          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (i.advAccountType = o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE),
        { update: i, clearRecord: !1, fromHandleOmittedResult: !0 }
      );
    }
    l.handleOmittedResult = e;
  },
  98,
);
