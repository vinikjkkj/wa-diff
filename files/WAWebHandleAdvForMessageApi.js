__d(
  "WAWebHandleAdvForMessageApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCurrentUser",
    "WAWebHandleAdvListResetApi",
    "WAWebHandleAdvNoListResetApi",
    "WAWebSignalCommonUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.deviceWid,
            r = t.incomingAdvAccountType,
            a = t.incomingAdvDeviceIdentity,
            i = t.incomingDeviceIdentity,
            l = t.incomingPrimaryIdentity,
            u = t.lastDeviceJobTs,
            c = t.localPrimaryIdentity,
            d = t.offline,
            m = d === void 0 ? !1 : d,
            p = a.keyIndex,
            _ = a.rawId,
            f = a.timestamp;
          (_ != null || s(0, 56258),
            f != null || s(0, 56257),
            p != null || s(0, 56256));
          var g = { rawId: _, timestamp: f, keyIndex: p },
            h = n.device;
          (h != null && h !== o("WAJids").DEFAULT_DEVICE_ID) || s(0, 56259);
          var y = o("WAWebWidFactory").asUserWidOrThrow(n),
            C = yield o("WAWebApiDeviceList").getDeviceRecord(y),
            b =
              c == null ||
              (l != null && !o("WAWebSignalCommonUtils").bufferEqual(c, l));
          return (
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleADVDeviceIdentity: isNewPrimaryIdentity-",
                    "",
                  ])),
                b,
              ),
            !C || C.deleted || C.rawId !== _ || b
              ? o("WAWebHandleAdvListResetApi").handleListReset({
                  deviceWid: n,
                  incomingAdvAccountType: r,
                  incomingAdvDeviceIdentity: g,
                  incomingDeviceIdentity: i,
                  lastDeviceJobTs: u,
                  localDeviceRecord: C,
                  newPrimaryKey: b ? l : null,
                  offline: m,
                })
              : o("WAWebHandleAdvNoListResetApi").handleNoListReset(
                  n,
                  g,
                  i,
                  C,
                  m,
                  u,
                  r,
                )
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.handleADVDeviceUpdateForMessage = u;
  },
  98,
);
