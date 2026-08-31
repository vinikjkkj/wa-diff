__d(
  "WAWebHandleAdvForUsyncApi",
  [
    "WAJids",
    "WALogger",
    "WAWebHandleAdvKeyIndexResultApi",
    "WAWebHandleAdvOmittedResultApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, r, a, i, l) {
      var s = n.deviceList,
        u = n.keyIndex;
      if (u == null || u.signedKeyIndexBytes == null) {
        if (
          s != null &&
          s.some(function (e) {
            return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
          })
        ) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[processADVSyncResult] drop: has companion, no keyIndexBytes",
              ])),
          );
          return;
        }
        return o("WAWebHandleAdvOmittedResultApi").handleOmittedResult({
          incomingExpectedTs: u == null ? void 0 : u.expectedTs,
          incomingTs: u == null ? void 0 : u.ts,
          lastDeviceJobTs: i,
          localDeviceRecord: a,
        });
      }
      var c = u.expectedTs,
        d = u.signedKeyIndexBytes,
        m = u.ts;
      return o("WAWebHandleAdvKeyIndexResultApi").handleKeyIndexResultSync(
        t,
        s,
        m,
        d,
        r,
        a,
        i,
        c,
        l,
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceResponse,
            n = e.lastDeviceJobTs,
            r = e.localDeviceRecord,
            o = e.localPrimaryIdentity,
            a = e.preDecodedKeyIndexList,
            i = e.userWid;
          return s(i, t, o, r, n, a);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.handleADVSyncResultSync = s), (l.handleADVSyncResult = u));
  },
  98,
);
