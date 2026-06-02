__d(
  "WAWebAdvHandlerApi",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBackendWorkerClient",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebHandleAdvForMessageApi",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebLowEndDeviceApi",
    "WAWebProtobufsAdv.pb",
    "WAWebReleaseToEventLoop",
    "WAWebRunInBatches",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10,
      c = o("TaskScheduler").taskScheduler(
        "device-sync",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    async function d(e, t, n, r, a, i, l) {
      i === void 0 && (i = !1);
      var s = await o(
        "WAWebLastADVCheckTimeApi",
      ).getLastADVDeviceInfoCheckTime();
      return o("WAWebHandleAdvForMessageApi").handleADVDeviceUpdateForMessage(
        e,
        t,
        n,
        r,
        a,
        i,
        s,
        l,
      );
    }
    function m(e) {
      var t = e.devices,
        n = e.type,
        o = e.wid;
      return n == null
        ? Promise.reject(
            r("err")("handleADVDeviceNotification: notification without type"),
          )
        : _(o, t, n);
    }
    function p(t) {
      if (t.length === 0) return Promise.resolve();
      var n = self.performance.now();
      o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.ADVProcessing,
      );
      var r =
        t.length >= u &&
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
        r,
      );
      var a = r ? g(t) : f(t);
      return a.finally(function () {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "handleADVDeviceSyncResult: ",
              " updates, useWorker:",
              ", took: ",
              "ms",
            ])),
          t.length,
          r,
          Math.round(self.performance.now() - n),
        ),
          o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.ADVProcessing,
          ));
      });
    }
    async function _(e, t, n) {
      var r = null;
      if (n === "add") {
        var a = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .loadIdentityKey(
            o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
          );
        if (
          ((r =
            a != null
              ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                  o("WAWebSignalCommonUtils").strToBuffer(a),
                )
              : null),
          !o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            t.deviceList != null)
        ) {
          var i;
          t.deviceList =
            (i = t.deviceList) == null
              ? void 0
              : i.filter(function (e) {
                  return e.id !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID;
                });
        }
      }
      var l = await o("WAWebApiDeviceList").getDeviceRecord(e),
        s = await o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime(),
        u = o("WAWebHandleAdvForUsyncApi").handleDeviceNotification(
          e,
          n,
          t,
          r,
          l,
          s,
        );
      if (u) {
        if (u.clearRecord) {
          var c;
          await o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
            e,
            (l == null ? void 0 : l.devices) || [],
            !1,
            l == null ? void 0 : l.advAccountType,
            u == null || (c = u.update) == null ? void 0 : c.advAccountType,
          );
        }
        return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate([
          { wid: e, update: u.update, currentRecord: l },
        ]);
      }
    }
    async function f(e) {
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
        e.forEach(function (e) {
          var t, n;
          (e == null || (t = e.devices) == null ? void 0 : t.deviceList) !=
            null &&
            (e.devices.deviceList =
              (n = e.devices.deviceList) == null
                ? void 0
                : n.filter(function (e) {
                    return e.id !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID;
                  }));
        });
      var t = e.map(function (e) {
          return e.wid;
        }),
        n = e.filter(function (e) {
          var t;
          return (t = e.devices.keyIndex) == null
            ? void 0
            : t.signedKeyIndexBytes;
        }),
        r = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .bulkLoadIdentityKey(
            n.map(function (e) {
              return o("WAWebSignalCommonUtils")
                .createSignalAddress(e.wid)
                .toString();
            }),
          ),
        a = new Map();
      n.forEach(function (e, t) {
        var n = r[t];
        n != null && a.set(o("WAWebDeviceListPk").createDeviceListPK(e.wid), n);
      });
      var i = await o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
        l = [],
        s = [],
        u = !1,
        d = [],
        m = function (n, r) {
          if (r != null) {
            var t = e[n],
              a = i[n];
            if (
              (r.identityUpdatePromise && d.push(r.identityUpdatePromise),
              r.clearRecord)
            ) {
              var c;
              (l.push({
                wid: t.wid,
                currentList: (a == null ? void 0 : a.devices) || [],
                currentAdvAccountType: a == null ? void 0 : a.advAccountType,
                incomingAdvAccountType:
                  (c = r.update) == null ? void 0 : c.advAccountType,
              }),
                s.push({
                  wid: t.wid,
                  currentRecord: {
                    id: o("WAWebDeviceListPk").createDeviceListPK(t.wid),
                    deleted: !0,
                  },
                  update: r.update,
                }));
            } else {
              if ((r == null ? void 0 : r.fromHandleOmittedResult) === !0) {
                var m;
                (a == null ? void 0 : a.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (r == null || (m = r.update) == null
                    ? void 0
                    : m.advAccountType) ===
                    o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE &&
                  (u = !0);
              }
              s.push({ wid: t.wid, currentRecord: a, update: r.update });
            }
          }
        },
        p = o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web");
      if (p)
        for (var _ of e.entries()) {
          var f = _[0],
            g = _[1],
            h = a.get(o("WAWebDeviceListPk").createDeviceListPK(g.wid)),
            y =
              h != null
                ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                    o("WAWebSignalCommonUtils").strToBuffer(h),
                  )
                : null;
          (m(
            f,
            o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(
              g.wid,
              g.devices,
              y,
              i[f],
            ),
          ),
            await c.yield());
        }
      else {
        var C = v();
        for (var b of e.entries()) {
          var S = b[0],
            R = b[1];
          {
            var L = a.get(o("WAWebDeviceListPk").createDeviceListPK(R.wid)),
              E =
                L != null
                  ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                      o("WAWebSignalCommonUtils").strToBuffer(L),
                    )
                  : null,
              k = await o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
                R.wid,
                R.devices,
                E,
                i[S],
              );
            (m(S, k), await C());
          }
        }
      }
      (d.length > 0 && (await Promise.all(d)),
        await Promise.all(
          l.map(function (e) {
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
        await o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate(
          s,
          !1,
          u,
        ));
    }
    async function g(e) {
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() ||
        e.forEach(function (e) {
          var t, n;
          (e == null || (t = e.devices) == null ? void 0 : t.deviceList) !=
            null &&
            (e.devices.deviceList =
              (n = e.devices.deviceList) == null
                ? void 0
                : n.filter(function (e) {
                    return e.id !== o("WAWebBizCoexUtils").HOSTED_DEVICE_ID;
                  }));
        });
      var t = e.map(function (e) {
          return e.wid;
        }),
        n = e.filter(function (e) {
          var t;
          return (t = e.devices.keyIndex) == null
            ? void 0
            : t.signedKeyIndexBytes;
        }),
        r = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .bulkLoadIdentityKey(
            n.map(function (e) {
              return o("WAWebSignalCommonUtils")
                .createSignalAddress(e.wid)
                .toString();
            }),
          ),
        a = new Map();
      n.forEach(function (e, t) {
        var n = r[t];
        n != null && a.set(o("WAWebDeviceListPk").createDeviceListPK(e.wid), n);
      });
      var i = new Map(),
        l = [],
        s = [],
        u = function (n) {
          var t,
            r = e[n],
            i =
              (t = r.devices.keyIndex) == null ? void 0 : t.signedKeyIndexBytes;
          if (
            i != null &&
            !(
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              r.devices.deviceList != null &&
              r.devices.deviceList.some(function (e) {
                return !!e.isHosted;
              })
            )
          ) {
            var u = a.get(o("WAWebDeviceListPk").createDeviceListPK(r.wid));
            u != null &&
              (l.push(n),
              s.push({
                localPrimaryIdentity: o(
                  "WAWebCryptoCurve25519",
                ).toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(u)),
                signedKeyIndexBytes: i,
              }));
          }
        },
        d = o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web");
      if (d) for (var m = 0; m < e.length; m++) (u(m), await c.yield());
      else for (var p = v(), _ = 0; _ < e.length; _++) (u(_), await p());
      if (s.length > 0) {
        var f = await o(
          "WAWebHandleAdvDeviceNotificationUtils",
        ).decodeSignedKeyIndexBytesBatchInWorker(s);
        l.forEach(function (e, t) {
          i.set(e, f[t]);
        });
      }
      var g = await o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
        y = [],
        S = [],
        R = !1,
        L = [];
      if (d)
        for (var E of e.entries()) {
          var k = E[0],
            I = E[1],
            T = a.get(o("WAWebDeviceListPk").createDeviceListPK(I.wid)),
            D =
              T != null
                ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                    o("WAWebSignalCommonUtils").strToBuffer(T),
                  )
                : null,
            x = i.has(k) ? i.get(k) : void 0;
          ((R = h({
            clearRecords: y,
            deviceADVResult: o(
              "WAWebHandleAdvForUsyncApi",
            ).handleADVSyncResultSync(I.wid, I.devices, D, g[k], void 0, x),
            identityUpdates: L,
            localDeviceRecord: g[k],
            shouldAddHosted: R,
            updates: S,
            wid: I.wid,
          })),
            await c.yield());
        }
      else {
        var $ = v();
        for (var P of e.entries()) {
          var N = P[0],
            M = P[1];
          {
            var w = a.get(o("WAWebDeviceListPk").createDeviceListPK(M.wid)),
              A =
                w != null
                  ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                      o("WAWebSignalCommonUtils").strToBuffer(w),
                    )
                  : null,
              F = i.has(N) ? i.get(N) : void 0,
              O = await o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
                M.wid,
                M.devices,
                A,
                g[N],
                void 0,
                F,
              );
            ((R = h({
              clearRecords: y,
              deviceADVResult: O,
              identityUpdates: L,
              localDeviceRecord: g[N],
              shouldAddHosted: R,
              updates: S,
              wid: M.wid,
            })),
              await $());
          }
        }
      }
      (L.length > 0 && (await Promise.all(L)),
        await o("WAWebRunInBatches").runInBatches(
          y,
          async function (e) {
            await Promise.all(
              e.map(function (e) {
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
            );
          },
          { batchSize: b },
        ),
        await o("WAWebRunInBatches").runInBatches(
          S,
          function (e) {
            return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate(
              e,
              !1,
              R,
            );
          },
          { batchSize: C },
        ));
    }
    function h(e) {
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
    var y = 100,
      C = 25,
      b = 25;
    function v() {
      var e = self.performance.now();
      return async function () {
        self.performance.now() - e > y &&
          (await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          (e = self.performance.now()));
      };
    }
    ((l.handleADVDeviceUpdateForMessage = d),
      (l.handleADVDeviceNotification = m),
      (l.handleADVDeviceSyncResult = p));
  },
  98,
);
