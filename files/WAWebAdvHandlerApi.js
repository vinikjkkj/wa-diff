__d(
  "WAWebAdvHandlerApi",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WALogger",
    "WAWebAdvCrashAnnotations",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("TaskScheduler").taskScheduler(
        "device-sync",
        { concurrency: 1 },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    async function c(e) {
      var t = e.accountSignatureKey,
        n = e.advDeviceIdentity,
        r = e.deviceIdentityKey,
        a = e.deviceWid,
        i = e.incomingAdvAccountType,
        l = e.offline,
        s = l === void 0 ? !1 : l,
        u = e.primarySignatureKey,
        c = await o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
      return o("WAWebHandleAdvForMessageApi").handleADVDeviceUpdateForMessage({
        deviceWid: a,
        incomingAdvAccountType: i,
        incomingAdvDeviceIdentity: n,
        incomingDeviceIdentity: r,
        incomingPrimaryIdentity: t,
        lastDeviceJobTs: c,
        localPrimaryIdentity: u,
        offline: s,
      });
    }
    function d(t) {
      if (t.length === 0) return Promise.resolve();
      var n = self.performance.now();
      o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.ADVProcessing,
      );
      var r = o("WAWebAdvCrashAnnotations").annotateCrashWithAdvSyncStart(
        t.length,
      );
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleADVDeviceSyncResult: ",
              " updates",
            ])),
          t.length,
        ),
        m(t).finally(function () {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleADVDeviceSyncResult: ",
                " updates, took: ",
                "ms",
              ])),
            t.length,
            Math.round(self.performance.now() - n),
          ),
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.ADVProcessing,
            ),
            o("WAWebAdvCrashAnnotations").annotateCrashWithAdvSyncEnd(
              r,
              self.performance.now() - n,
            ));
        })
      );
    }
    async function m(e) {
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
        c = !1,
        d = [],
        m = function (n, r) {
          if (r != null) {
            var t = e[n],
              a = i[n];
            if (
              (r.identityUpdatePromise && d.push(r.identityUpdatePromise),
              r.clearRecord)
            ) {
              var u;
              (l.push({
                wid: t.wid,
                currentList: (a == null ? void 0 : a.devices) || [],
                currentAdvAccountType: a == null ? void 0 : a.advAccountType,
                incomingAdvAccountType:
                  (u = r.update) == null ? void 0 : u.advAccountType,
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
                  (c = !0);
              }
              s.push(
                r.fromHandleOmittedResult === !0
                  ? {
                      wid: t.wid,
                      currentRecord: a,
                      update: r.update,
                      isFromPrimaryOnlyDeviceList: !0,
                    }
                  : { wid: t.wid, currentRecord: a, update: r.update },
              );
            }
          }
        };
      for (var p of e.entries()) {
        var _ = p[0],
          f = p[1],
          g = a.get(o("WAWebDeviceListPk").createDeviceListPK(f.wid)),
          h =
            g != null
              ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                  o("WAWebSignalCommonUtils").strToBuffer(g),
                )
              : null;
        (m(
          _,
          o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(
            f.wid,
            f.devices,
            h,
            i[_],
          ),
        ),
          await u.yield());
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
        await o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
          deviceUpdateResult: s,
          offline: !1,
          shouldAddHostedSystemMsgIfApplicable: c,
        }));
    }
    ((l.handleADVDeviceUpdateForMessage = c),
      (l.handleADVDeviceSyncResult = d));
  },
  98,
);
