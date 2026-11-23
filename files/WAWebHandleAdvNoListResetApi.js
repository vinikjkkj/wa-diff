__d(
  "WAWebHandleAdvNoListResetApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebCryptoCurve25519",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    async function u(t, n, a, i, l, u, c) {
      var d;
      l === void 0 && (l = !1);
      var m = n.keyIndex,
        p = n.timestamp,
        _ = o("WALongInt").numberOrThrowIfTooLarge(p),
        f = t.device;
      if (
        ((f != null && f !== o("WAJids").DEFAULT_DEVICE_ID) || s(0, 56259),
        i.timestamp >= _ && i.validIndexes && !i.validIndexes.includes(m))
      )
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleADVDeviceIdentity:handleNoListReset: incomingTs: ",
                " localDeviceRecord.timestamp: ",
                " incomingKeyIndex ",
                " localDeviceRecord.validIndexes: ",
                "",
              ])),
            _,
            i.timestamp,
            m,
            i.validIndexes,
          ),
          r("err")(
            "handleADVDeviceIdentity:handleNoListReset: out-of-order timestamp detected",
          )
        );
      var g = new Map(
        i.devices.map(function (e) {
          return [e.id, e];
        }),
      );
      if (((d = g.get(f)) == null ? void 0 : d.keyIndex) !== m) {
        g.set(
          f,
          r("WAWebWid").isHosted(t)
            ? { id: f, keyIndex: m, isHosted: !0 }
            : { id: f, keyIndex: m },
        );
        var h = babelHelpers.extends({}, i, {
            devices: Array.from(g.values()),
            deleted: !1,
          }),
          y = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
            deviceRecord: h,
            incomingTs: _,
            lastDeviceJobTs: u,
          });
        ((h.expectedTs = y.expectedTs),
          (h.expectedTsLastDeviceJobTs = y.expectedTsLastDeviceJobTs),
          (h.expectedTsUpdateTs = y.expectedTsUpdateTs),
          (h.advAccountType = c),
          await o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
            deviceUpdateResult: [
              {
                wid: o("WAWebWidFactory").asUserWidOrThrow(t),
                update: h,
                currentRecord: i,
              },
            ],
            offline: l,
            shouldAddHostedSystemMsgIfApplicable: !0,
          }),
          await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .saveIdentity(
              o("WAWebSignalCommonUtils").createSignalAddress(t).toString(),
              o("WAWebCryptoCurve25519").toSignalCurvePubKey(a),
            ));
      }
    }
    l.handleNoListReset = u;
  },
  98,
);
