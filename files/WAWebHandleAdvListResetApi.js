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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.deviceWid,
            i = t.incomingAdvAccountType,
            l = t.incomingAdvDeviceIdentity,
            u = t.incomingDeviceIdentity,
            c = t.lastDeviceJobTs,
            d = t.localDeviceRecord,
            m = t.newPrimaryKey,
            p = t.offline,
            _ = p === void 0 ? !1 : p,
            f = l.keyIndex,
            g = l.rawId,
            h = l.timestamp,
            y = o("WALongInt").numberOrThrowIfTooLarge(h),
            C = a.device;
          (C != null && C !== o("WAJids").DEFAULT_DEVICE_ID) || s(0, 56259);
          var b = o("WAWebWidFactory").asUserWidOrThrow(a),
            v = 0;
          if (
            ((v =
              (n = d == null ? void 0 : d.timestamp) != null
                ? n
                : o("WATimeUtils").pastUnixTime(
                    (o("WAWebABProps").getABPropConfigValue(
                      "num_days_key_index_list_expiration",
                    ) -
                      1) *
                      o("WATimeUtils").DAY_SECONDS,
                  )),
            d != null && !d.deleted)
          ) {
            if (d.timestamp > y)
              throw (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleADVDeviceIdentity:handleListReset: incomingTs: ",
                      " localDeviceRecord.timestamp: ",
                      "",
                    ])),
                  y,
                  d.timestamp,
                ),
                r("err")(
                  "handleADVDeviceIdentity:handleListReset: out-of-order timestamp detected",
                )
              );
            yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
              b,
              d.devices,
              _,
            );
          }
          m &&
            (yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .saveIdentity(
                o("WAWebSignalCommonUtils").createSignalAddress(b).toString(),
                o("WAWebCryptoCurve25519").toSignalCurvePubKey(m),
              ));
          var S = {
              id: o("WAWebDeviceListPk").createDeviceListPK(a),
              rawId: g,
              timestamp: v,
              devices: [
                { id: C, keyIndex: f },
                { id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 },
              ],
              validIndexes: null,
              currentIndex: null,
              deleted: !1,
            },
            R = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
              deviceRecord: S,
              incomingTs: y,
              lastDeviceJobTs: c,
            });
          ((S.expectedTs = R.expectedTs),
            (S.expectedTsLastDeviceJobTs = R.expectedTsLastDeviceJobTs),
            (S.expectedTsUpdateTs = R.expectedTsUpdateTs),
            i != null && (S.advAccountType = i),
            yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
              deviceUpdateResult: [{ wid: b, update: S, currentRecord: null }],
              offline: _,
            }),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .saveIdentity(
                o("WAWebSignalCommonUtils").createSignalAddress(a).toString(),
                o("WAWebCryptoCurve25519").toSignalCurvePubKey(u),
              ));
        })),
        c.apply(this, arguments)
      );
    }
    l.handleListReset = u;
  },
  98,
);
