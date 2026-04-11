__d(
  "WAWebAdvHandlerApi",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebRunInBatches",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
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
            ).handleADVDeviceUpdateForMessage(e, t, n, r, a, i, s, l);
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.devices,
        o = e.type,
        a = e.wid;
      return o == null
        ? (u || (u = n("Promise"))).reject(
            r("err")("handleADVDeviceNotification: notification without type"),
          )
        : g(a, t, o);
    }
    function f(t) {
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
      var i = a ? b(t) : y(t);
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = null;
          if (n === "add") {
            var a = yield o("WAWebSignalProtocolStore")
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
          var l = yield o("WAWebApiDeviceList").getDeviceRecord(e),
            s = yield o(
              "WAWebLastADVCheckTimeApi",
            ).getLastADVDeviceInfoCheckTime(),
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
              yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(
                e,
                (l == null ? void 0 : l.devices) || [],
                !1,
                l == null ? void 0 : l.advAccountType,
                u == null || (c = u.update) == null ? void 0 : c.advAccountType,
              );
            }
            return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate(
              [{ wid: e, update: u.update, currentRecord: l }],
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            },
            f = o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            );
          if (f)
            for (var g of e.entries()) {
              var h = g[0],
                y = g[1],
                C = i.get(o("WAWebDeviceListPk").createDeviceListPK(y.wid)),
                b =
                  C != null
                    ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                        o("WAWebSignalCommonUtils").strToBuffer(C),
                      )
                    : null;
              (_(
                h,
                o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(
                  y.wid,
                  y.devices,
                  b,
                  l[h],
                ),
              ),
                yield d.yield());
            }
          else {
            var v = E();
            for (var S of e.entries()) {
              var R = S[0],
                L = S[1];
              {
                var k = i.get(o("WAWebDeviceListPk").createDeviceListPK(L.wid)),
                  I =
                    k != null
                      ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                          o("WAWebSignalCommonUtils").strToBuffer(k),
                        )
                      : null,
                  T = yield o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
                    L.wid,
                    L.devices,
                    I,
                    l[R],
                  );
                (_(R, T), yield v());
              }
            }
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
            yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate(
              c,
              !1,
              m,
            ));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                  r.devices.deviceList != null &&
                  r.devices.deviceList.some(function (e) {
                    return !!e.isHosted;
                  })
                )
              ) {
                var l = i.get(o("WAWebDeviceListPk").createDeviceListPK(r.wid));
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
            p = o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            );
          if (p) for (var _ = 0; _ < e.length; _++) (m(_), yield d.yield());
          else for (var f = E(), g = 0; g < e.length; g++) (m(g), yield f());
          if (c.length > 0) {
            var h = yield o(
              "WAWebHandleAdvDeviceNotificationUtils",
            ).decodeSignedKeyIndexBytesBatchInWorker(c);
            s.forEach(function (e, t) {
              l.set(e, h[t]);
            });
          }
          var y = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
            C = [],
            b = [],
            v = !1,
            S = [],
            k = function (n, r) {
              if (r != null) {
                var t = e[n],
                  a = y[n];
                if (
                  (r.identityUpdatePromise && S.push(r.identityUpdatePromise),
                  r.clearRecord)
                ) {
                  var i;
                  (C.push({
                    wid: t.wid,
                    currentList: (a == null ? void 0 : a.devices) || [],
                    currentAdvAccountType:
                      a == null ? void 0 : a.advAccountType,
                    incomingAdvAccountType:
                      (i = r.update) == null ? void 0 : i.advAccountType,
                  }),
                    b.push({
                      wid: t.wid,
                      currentRecord: {
                        id: o("WAWebDeviceListPk").createDeviceListPK(t.wid),
                        deleted: !0,
                      },
                      update: r.update,
                    }));
                } else {
                  if ((r == null ? void 0 : r.fromHandleOmittedResult) === !0) {
                    var l;
                    (a == null ? void 0 : a.advAccountType) ===
                      o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                      (r == null || (l = r.update) == null
                        ? void 0
                        : l.advAccountType) ===
                        o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE &&
                      (v = !0);
                  }
                  b.push({ wid: t.wid, currentRecord: a, update: r.update });
                }
              }
            };
          if (p)
            for (var I of e.entries()) {
              var T = I[0],
                D = I[1],
                x = i.get(o("WAWebDeviceListPk").createDeviceListPK(D.wid)),
                $ =
                  x != null
                    ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                        o("WAWebSignalCommonUtils").strToBuffer(x),
                      )
                    : null,
                P = l.has(T) ? l.get(T) : void 0;
              (k(
                T,
                o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(
                  D.wid,
                  D.devices,
                  $,
                  y[T],
                  void 0,
                  P,
                ),
              ),
                yield d.yield());
            }
          else {
            var N = E();
            for (var M of e.entries()) {
              var w = M[0],
                A = M[1];
              {
                var F = i.get(o("WAWebDeviceListPk").createDeviceListPK(A.wid)),
                  O =
                    F != null
                      ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                          o("WAWebSignalCommonUtils").strToBuffer(F),
                        )
                      : null,
                  B = l.has(w) ? l.get(w) : void 0,
                  W = yield o("WAWebHandleAdvForUsyncApi").handleADVSyncResult(
                    A.wid,
                    A.devices,
                    O,
                    y[w],
                    void 0,
                    B,
                  );
                (k(w, W), yield N());
              }
            }
          }
          (S.length > 0 && (yield (u || (u = n("Promise"))).all(S)),
            yield o("WAWebRunInBatches").runInBatches(
              C,
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
              { batchSize: L },
            ),
            yield o("WAWebRunInBatches").runInBatches(
              b,
              function (e) {
                return o(
                  "WAWebIdentityUpdateDeviceTableApi",
                ).bulkApplyDeviceUpdate(e, !1, v);
              },
              { batchSize: R },
            ));
        })),
        v.apply(this, arguments)
      );
    }
    var S = 100,
      R = 25,
      L = 25;
    function E() {
      var e = self.performance.now();
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        self.performance.now() - e > S &&
          (yield o("WAPromiseDelays").releaseToEventLoop(),
          (e = self.performance.now()));
      });
    }
    ((l.handleADVDeviceUpdateForMessage = m),
      (l.handleADVDeviceNotification = _),
      (l.handleADVDeviceSyncResult = f));
  },
  98,
);
