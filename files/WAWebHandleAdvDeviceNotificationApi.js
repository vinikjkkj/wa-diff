__d(
  "WAWebHandleAdvDeviceNotificationApi",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexUtils",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebProtobufsAdv.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.addDeviceList,
        r = t.keyIndexTs,
        a = t.lastDeviceJobTs,
        i = t.localDeviceRecord,
        l = t.localPrimaryIdentity,
        u = t.signedKeyIndexBytes,
        c = t.wid;
      if (!i || i.deleted)
        return (
          o("WAWebBizCoexUtils").triggerUsyncForCoexDeviceAdd(n, c),
          null
        );
      if (r < i.timestamp || l == null) return null;
      var d = o(
        "WAWebHandleAdvDeviceNotificationUtils",
      ).decodeSignedKeyIndexBytes(l, u);
      if (!d) return null;
      var m = d.rawId,
        p = o("WALongInt").numberOrThrowIfTooLarge(d.timestamp),
        _ = d.accountType;
      if (
        (_ === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleDeviceAddNotification: add to coex cache for ",
                "",
              ])),
            c == null ? void 0 : c.toLogString(),
          ),
          o(
            "WAWebBizCoexHostedAddVerification",
          ).addToCoexHostedVerificationCache(c)),
        p !== r)
      )
        return null;
      var f = !1,
        g = null,
        h = i.timestamp;
      (i.rawId !== m ? (f = !0) : (g = i.devices),
        i.advAccountType != null &&
          i.advAccountType !== _ &&
          ((f = !0),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Clear record due to mismatch between local ADV account type and incoming ADV account type of ",
                " for ",
                "",
              ])),
            _,
            c == null ? void 0 : c.toLogString(),
          )));
      var y = new Set(d.validIndexes),
        C = d.currentIndex || 0,
        b =
          g == null
            ? []
            : g.filter(function (e) {
                return (
                  e.id !== o("WAJids").DEFAULT_DEVICE_ID &&
                  (y.has(e.keyIndex) || e.keyIndex > C)
                );
              });
      (n.forEach(function (e) {
        var t = e.id,
          n = e.keyIndex;
        t !== o("WAJids").DEFAULT_DEVICE_ID &&
          n != null &&
          y.has(n) &&
          b.push({ id: t, keyIndex: n });
      }),
        b.push({ id: o("WAJids").DEFAULT_DEVICE_ID, keyIndex: 0 }));
      var v = {
          id: o("WAWebDeviceListPk").createDeviceListPK(c),
          rawId: m,
          timestamp: h,
          validIndexes: Array.from(y),
          devices: b,
          currentIndex: d.currentIndex,
          deleted: !1,
        },
        S = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
          deviceRecord: v,
          incomingTs: p,
          lastDeviceJobTs: a,
        });
      return (
        (v.expectedTs = S.expectedTs),
        (v.expectedTsLastDeviceJobTs = S.expectedTsLastDeviceJobTs),
        (v.expectedTsUpdateTs = S.expectedTsUpdateTs),
        _ != null && (v.advAccountType = _),
        { update: v, clearRecord: f }
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
