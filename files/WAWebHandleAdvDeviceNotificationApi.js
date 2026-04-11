__d(
  "WAWebHandleAdvDeviceNotificationApi",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexUtils",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebProtobufsAdv.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, r, a, i, l, u) {
      if (!l || l.deleted)
        return (
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            o("WAWebBizCoexUtils").triggerUsyncForCoexDeviceAdd(n, t),
          null
        );
      if (r < l.timestamp || i == null) return null;
      var c = o(
        "WAWebHandleAdvDeviceNotificationUtils",
      ).decodeSignedKeyIndexBytes(i, a);
      if (!c) return null;
      var d = c.rawId,
        m = o("WALongInt").numberOrThrowIfTooLarge(c.timestamp),
        p = null;
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          ((p = c.accountType),
          p === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleDeviceAddNotification: add to coex cache for ",
                  "",
                ])),
              t == null ? void 0 : t.toLogString(),
            ),
            o(
              "WAWebBizCoexHostedAddVerification",
            ).addToCoexHostedVerificationCache(t))),
        m !== r)
      )
        return null;
      var _ = !1,
        f = null,
        g = l.timestamp;
      (l.rawId !== d ? (_ = !0) : (f = l.devices),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          l.advAccountType != null &&
          l.advAccountType !== p &&
          ((_ = !0),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Clear record due to mismatch between local ADV account type and incoming ADV account type of ",
                " for ",
                "",
              ])),
            p,
            t == null ? void 0 : t.toLogString(),
          )));
      var h = new Set(c.validIndexes),
        y = c.currentIndex || 0,
        C =
          f == null
            ? []
            : f.filter(function (e) {
                return (
                  e.id !== o("WAJids").DEFAULT_DEVICE_ID &&
                  (h.has(e.keyIndex) || e.keyIndex > y)
                );
              });
      (n.forEach(function (e) {
        var t = e.id,
          n = e.keyIndex;
        t !== o("WAJids").DEFAULT_DEVICE_ID &&
          n != null &&
          h.has(n) &&
          C.push({ id: t, keyIndex: n });
      }),
        C.push({ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }));
      var b = {
          id: o("WAWebDeviceListPk").createDeviceListPK(t),
          rawId: d,
          timestamp: g,
          validIndexes: Array.from(h),
          devices: C,
          currentIndex: c.currentIndex,
          deleted: !1,
        },
        v = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord(
          m,
          b,
          u,
        );
      return (
        (b.expectedTs = v.expectedTs),
        (b.expectedTsLastDeviceJobTs = v.expectedTsLastDeviceJobTs),
        (b.expectedTsUpdateTs = v.expectedTsUpdateTs),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          p != null &&
          (b.advAccountType = p),
        { update: b, clearRecord: _ }
      );
    }
    function c(e, t, n) {
      if (n == null || n.deleted || t < n.timestamp) return null;
      var r = new Map(
          e.map(function (e) {
            return [e.id, e.keyIndex];
          }),
        ),
        a = n.devices.filter(function (e) {
          if (e.id !== o("WAJids").DEFAULT_DEVICE_ID) {
            var t = r.get(e.id);
            return t == null || t !== e.keyIndex;
          }
          return !1;
        });
      return (
        a.push({ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }),
        { update: babelHelpers.extends({}, n, { devices: a }), clearRecord: !1 }
      );
    }
    ((l.handleDeviceAddNotification = u),
      (l.handleDeviceRemoveNotification = c));
  },
  98,
);
