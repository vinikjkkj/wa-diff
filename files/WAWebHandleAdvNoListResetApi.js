__d(
  "WAWebHandleAdvNoListResetApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexGatingUtils",
    "WAWebCryptoCurve25519",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t, n, r, o, a, i) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u, c) {
            l === void 0 && (l = !1);
            var d = n.keyIndex,
              m = n.timestamp,
              p = o("WALongInt").numberOrThrowIfTooLarge(m),
              _ = t.device;
            if (
              ((_ != null && _ !== o("WAJids").DEFAULT_DEVICE_ID) ||
                s(0, 56259),
              i.timestamp >= p && i.validIndexes && !i.validIndexes.includes(d))
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
                  p,
                  i.timestamp,
                  d,
                  i.validIndexes,
                ),
                r("err")(
                  "handleADVDeviceIdentity:handleNoListReset: out-of-order timestamp detected",
                )
              );
            var f = new Map(
              i.devices.map(function (e) {
                return [e.id, e.keyIndex];
              }),
            );
            if (!f.has(_) || f.get(_) !== d) {
              f.set(_, d);
              var g = Array.from(f.entries(), function (e) {
                  var t = e[0],
                    n = e[1];
                  return { id: t, keyIndex: n };
                }),
                h = babelHelpers.extends({}, i, { devices: g, deleted: !1 }),
                y = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord(
                  p,
                  h,
                  u,
                );
              ((h.expectedTs = y.expectedTs),
                (h.expectedTsLastDeviceJobTs = y.expectedTsLastDeviceJobTs),
                (h.expectedTsUpdateTs = y.expectedTsUpdateTs),
                o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                  (h.advAccountType = c),
                yield o(
                  "WAWebIdentityUpdateDeviceTableApi",
                ).bulkApplyDeviceUpdate(
                  [
                    {
                      wid: o("WAWebWidFactory").asUserWidOrThrow(t),
                      update: h,
                      currentRecord: i,
                    },
                  ],
                  l,
                  !0,
                ),
                yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .saveIdentity(
                    o("WAWebSignalCommonUtils")
                      .createSignalAddress(t)
                      .toString(),
                    o("WAWebCryptoCurve25519").toSignalCurvePubKey(a),
                  ));
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.handleNoListReset = u;
  },
  98,
);
