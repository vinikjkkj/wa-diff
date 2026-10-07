__d(
  "WAWebAdvHandlerApi",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBackendWorkerClient",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebHandleAdvForMessageApi",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebLowEndDeviceApi",
    "WAWebProtobufsAdv.pb",
    "WAWebRunInBatches",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10,
      d = o("TaskScheduler").taskScheduler(
        "device-sync",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    function m(e, t, n, r, o, a, i) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            i === void 0 && (i = !1);
            var s = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime();
            return o(
              "WAWebHandleAdvForMessageApi",
            ).handleADVDeviceUpdateForMessage({
              deviceWid: e,
              incomingAdvAccountType: l,
              incomingAdvDeviceIdentity: t,
              incomingDeviceIdentity: a,
              incomingPrimaryIdentity: r,
              lastDeviceJobTs: s,
              localPrimaryIdentity: n,
              offline: i,
            });
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      if (t.length === 0) return (u || (u = n("Promise"))).resolve();
      var r = self.performance.now();
      o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.ADVProcessing,
      );
      var a =
        t.length >= c &&
        !o("WAWebLowEndDeviceApi").isLowEndDevice() &&
        o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() &&
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_worker_adv_processing_enabled",
        );
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleADVDeviceSyncResult: ",
            " updates, useWorker:",
            "",
          ])),
        t.length,
        a,
      );
      var i = a ? h(t) : f(t);
      return i.finally(function () {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "handleADVDeviceSyncResult: ",
              " updates, useWorker:",
              ", took: ",
              "ms",
            ])),
          t.length,
          a,
          Math.round(self.performance.now() - r),
        ),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.ADVProcessing,
          ));
      });
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.wid;
            }),
            r = e.filter(function (e) {
              var t;
              return (t = e.devices.keyIndex) == null
                ? void 0
                : t.signedKeyIndexBytes;
            }),
            a = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkLoadIdentityKey(
                r.map(function (e) {
                  return o("WAWebSignalCommonUtils")
                    .createSignalAddress(e.wid)
                    .toString();
                }),
              ),
            i = new Map();
          r.forEach(function (e, t) {
            var n = a[t];
            n != null &&
              i.set(o("WAWebDeviceListPk").createDeviceListPK(e.wid), n);
          });
          var l = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
            s = [],
            c = [],
            m = !1,
            p = [],
            _ = function (n, r) {
              if (r != null) {
                var t = e[n],
                  a = l[n];
                if (
                  (r.identityUpdatePromise && p.push(r.identityUpdatePromise),
                  r.clearRecord)
                ) {
                  var i;
                  (s.push({
                    wid: t.wid,
                    currentList: (a == null ? void 0 : a.devices) || [],
                    currentAdvAccountType:
                      a == null ? void 0 : a.advAccountType,
                    incomingAdvAccountType:
                      (i = r.update) == null ? void 0 : i.advAccountType,
                  }),
                    c.push({
                      wid: t.wid,
                      currentRecord: {
                        id: o("WAWebDeviceListPk").createDeviceListPK(t.wid),
                        deleted: !0,
                      },
                      update: r.update,
                    }));
                } else {
                  if ((r == null ? void 0 : r.fromHandleOmittedResult) === !0) {
                    var u;
                    (a == null ? void 0 : a.advAccountType) ===
                      o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                      (r == null || (u = r.update) == null
                        ? void 0
                        : u.advAccountType) ===
                        o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE &&
                      (m = !0);
                  }
                  c.push({ wid: t.wid, currentRecord: a, update: r.update });
                }
              }
            };
          for (var f of e.entries()) {
            var g = f[0],
              h = f[1],
              y = i.get(o("WAWebDeviceListPk").createDeviceListPK(h.wid)),
              C =
                y != null
                  ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                      o("WAWebSignalCommonUtils").strToBuffer(y),
                    )
                  : null;
            (_(
              g,
              o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(
                h.wid,
                h.devices,
                C,
                l[g],
              ),
            ),
              yield d.yield());
          }
          (p.length > 0 && (yield (u || (u = n("Promise"))).all(p)),
            yield (u || (u = n("Promise"))).all(
              s.map(function (e) {
                var t = e.currentAdvAccountType,
                  n = e.currentList,
                  r = e.incomingAdvAccountType,
                  a = e.wid;
                return o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
                  a,
                  n,
                  !1,
                  t,
                  r,
                );
              }),
            ),
            yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
              deviceUpdateResult: c,
              offline: !1,
              shouldAddHostedSystemMsgIfApplicable: m,
            }));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.wid;
            }),
            r = e.filter(function (e) {
              var t;
              return (t = e.devices.keyIndex) == null
                ? void 0
                : t.signedKeyIndexBytes;
            }),
            a = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkLoadIdentityKey(
                r.map(function (e) {
                  return o("WAWebSignalCommonUtils")
                    .createSignalAddress(e.wid)
                    .toString();
                }),
              ),
            i = new Map();
          r.forEach(function (e, t) {
            var n = a[t];
            n != null &&
              i.set(o("WAWebDeviceListPk").createDeviceListPK(e.wid), n);
          });
          for (
            var l = new Map(),
              s = [],
              c = [],
              m = function (n) {
                var t,
                  r = e[n],
                  a =
                    (t = r.devices.keyIndex) == null
                      ? void 0
                      : t.signedKeyIndexBytes;
                if (
                  a != null &&
                  !(
                    r.devices.deviceList != null &&
                    r.devices.deviceList.some(function (e) {
                      return !!e.isHosted;
                    })
                  )
                ) {
                  var l = i.get(
                    o("WAWebDeviceListPk").createDeviceListPK(r.wid),
                  );
                  l != null &&
                    (s.push(n),
                    c.push({
                      localPrimaryIdentity: o(
                        "WAWebCryptoCurve25519",
                      ).toCurveKeyPubKey(
                        o("WAWebSignalCommonUtils").strToBuffer(l),
                      ),
                      signedKeyIndexBytes: a,
                    }));
                }
              },
              p = 0;
            p < e.length;
            p++
          )
            (m(p), yield d.yield());
          if (c.length > 0) {
            var _ = yield o(
              "WAWebHandleAdvDeviceNotificationUtils",
            ).decodeSignedKeyIndexBytesBatchInWorker(c);
            s.forEach(function (e, t) {
              l.set(e, _[t]);
            });
          }
          var f = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
            g = [],
            h = [],
            y = !1,
            S = [];
          for (var R of e.entries()) {
            var L = R[0],
              E = R[1],
              k = i.get(o("WAWebDeviceListPk").createDeviceListPK(E.wid)),
              I =
                k != null
                  ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                      o("WAWebSignalCommonUtils").strToBuffer(k),
                    )
                  : null,
              T = l.has(L) ? l.get(L) : void 0;
            ((y = C({
              clearRecords: g,
              deviceADVResult: o(
                "WAWebHandleAdvForUsyncApi",
              ).handleADVSyncResultSync(E.wid, E.devices, I, f[L], void 0, T),
              identityUpdates: S,
              localDeviceRecord: f[L],
              shouldAddHosted: y,
              updates: h,
              wid: E.wid,
            })),
              yield d.yield());
          }
          (S.length > 0 && (yield (u || (u = n("Promise"))).all(S)),
            yield o("WAWebRunInBatches").runInBatches(
              g,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    yield (u || (u = n("Promise"))).all(
                      e.map(function (e) {
                        var t = e.currentAdvAccountType,
                          n = e.currentList,
                          r = e.incomingAdvAccountType,
                          a = e.wid;
                        return o(
                          "WAWebIdentityUpdateDeviceTableApi",
                        ).clearDeviceRecord(a, n, !1, t, r);
                      }),
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { batchSize: v },
            ),
            yield o("WAWebRunInBatches").runInBatches(
              h,
              function (e) {
                return o(
                  "WAWebIdentityUpdateDeviceTableApi",
                ).bulkApplyDeviceUpdate({
                  deviceUpdateResult: e,
                  offline: !1,
                  shouldAddHostedSystemMsgIfApplicable: y,
                });
              },
              { batchSize: b },
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = e.clearRecords,
        n = e.deviceADVResult,
        r = e.identityUpdates,
        a = e.localDeviceRecord,
        i = e.shouldAddHosted,
        l = e.updates,
        s = e.wid;
      if (n == null) return i;
      if (
        (n.identityUpdatePromise && r.push(n.identityUpdatePromise),
        n.clearRecord)
      ) {
        var u;
        return (
          t.push({
            wid: s,
            currentList: (a == null ? void 0 : a.devices) || [],
            currentAdvAccountType: a == null ? void 0 : a.advAccountType,
            incomingAdvAccountType:
              (u = n.update) == null ? void 0 : u.advAccountType,
          }),
          l.push({
            wid: s,
            currentRecord: {
              id: o("WAWebDeviceListPk").createDeviceListPK(s),
              deleted: !0,
            },
            update: n.update,
          }),
          i
        );
      }
      var c = i;
      if ((n == null ? void 0 : n.fromHandleOmittedResult) === !0) {
        var d;
        (a == null ? void 0 : a.advAccountType) ===
          o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (n == null || (d = n.update) == null ? void 0 : d.advAccountType) ===
            o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE &&
          (c = !0);
      }
      return (l.push({ wid: s, currentRecord: a, update: n.update }), c);
    }
    var b = 25,
      v = 25;
    ((l.handleADVDeviceUpdateForMessage = m),
      (l.handleADVDeviceSyncResult = _));
  },
  98,
);
