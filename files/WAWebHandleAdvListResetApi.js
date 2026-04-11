__d(
  "WAWebHandleAdvListResetApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexGatingUtils",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t, n, r, o, a, i, l) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u, c, d) {
            var m;
            u === void 0 && (u = !1);
            var p = n.keyIndex,
              _ = n.rawId,
              f = n.timestamp,
              g = o("WALongInt").numberOrThrowIfTooLarge(f),
              h = t.device;
            (h != null && h !== o("WAJids").DEFAULT_DEVICE_ID) || s(0, 56259);
            var y = o("WAWebWidFactory").asUserWidOrThrow(t),
              C = 0;
            if (
              ((C =
                (m = l == null ? void 0 : l.timestamp) != null
                  ? m
                  : o("WATimeUtils").pastUnixTime(
                      (o("WAWebABProps").getABPropConfigValue(
                        "num_days_key_index_list_expiration",
                      ) -
                        1) *
                        o("WATimeUtils").DAY_SECONDS,
                    )),
              l != null && !l.deleted)
            ) {
              if (l.timestamp > g)
                throw (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleADVDeviceIdentity:handleListReset: incomingTs: ",
                        " localDeviceRecord.timestamp: ",
                        "",
                      ])),
                    g,
                    l.timestamp,
                  ),
                  r("err")(
                    "handleADVDeviceIdentity:handleListReset: out-of-order timestamp detected",
                  )
                );
              yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
                y,
                l.devices,
                u,
              );
            }
            a &&
              (yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .saveIdentity(
                  o("WAWebSignalCommonUtils").createSignalAddress(y).toString(),
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(a),
                ));
            var b = {
                id: o("WAWebDeviceListPk").createDeviceListPK(t),
                rawId: _,
                timestamp: C,
                devices: [
                  { id: h, keyIndex: p },
                  { id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 },
                ],
                validIndexes: null,
                currentIndex: null,
                deleted: !1,
              },
              v = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord(
                g,
                b,
                c,
              );
            ((b.expectedTs = v.expectedTs),
              (b.expectedTsLastDeviceJobTs = v.expectedTsLastDeviceJobTs),
              (b.expectedTsUpdateTs = v.expectedTsUpdateTs),
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                d != null &&
                (b.advAccountType = d),
              yield o(
                "WAWebIdentityUpdateDeviceTableApi",
              ).bulkApplyDeviceUpdate(
                [{ wid: y, update: b, currentRecord: null }],
                u,
              ),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .saveIdentity(
                  o("WAWebSignalCommonUtils").createSignalAddress(t).toString(),
                  o("WAWebCryptoCurve25519").toSignalCurvePubKey(i),
                ));
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.handleListReset = u;
  },
  98,
);
