__d(
  "WAWebAdvHandlerApi",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebHandleAdvForMessageApi",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("TaskScheduler").taskScheduler(
        "device-sync",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    function d(e, t, n, r, o, a, i) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        m.apply(this, arguments)
      );
    }
    function p(t) {
      if (t.length === 0) return (u || (u = n("Promise"))).resolve();
      var r = self.performance.now();
      return (
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.ADVProcessing,
        ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleADVDeviceSyncResult: ",
              " updates",
            ])),
          t.length,
        ),
        _(t).finally(function () {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleADVDeviceSyncResult: ",
                " updates, took: ",
                "ms",
              ])),
            t.length,
            Math.round(self.performance.now() - r),
          ),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.ADVProcessing,
            ));
        })
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            d = [],
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
                    d.push({
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
                  d.push({ wid: t.wid, currentRecord: a, update: r.update });
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
              yield c.yield());
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
              deviceUpdateResult: d,
              offline: !1,
              shouldAddHostedSystemMsgIfApplicable: m,
            }));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.handleADVDeviceUpdateForMessage = d),
      (l.handleADVDeviceSyncResult = p));
  },
  98,
);
