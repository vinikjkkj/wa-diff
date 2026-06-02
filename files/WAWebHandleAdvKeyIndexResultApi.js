__d(
  "WAWebHandleAdvKeyIndexResultApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebProtobufsAdv.pb",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 99;
    function d(t, n, r, a, i, l, d, m, _) {
      if ((l == null ? void 0 : l.timestamp) != null && r < l.timestamp)
        return null;
      var f = p(t, n, a, i, _);
      if (!f) return null;
      var g = f.rawId,
        h = o("WALongInt").numberOrThrowIfTooLarge(f.timestamp),
        y = null;
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          ((y = f.accountType),
          y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleKeyIndexResult: add to coex cache for ",
                  "",
                ])),
              t == null ? void 0 : t.toLogString(),
            ),
            o(
              "WAWebBizCoexHostedAddVerification",
            ).addToCoexHostedVerificationCache(t))),
        h !== r)
      )
        return null;
      var C = !1,
        b = null,
        v = n;
      if (l && !l.deleted) {
        if (
          (v == null && (v = l.devices),
          l.rawId !== g ? (C = !0) : (b = l.devices),
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
        ) {
          var S =
            (l.advAccountType != null && l.advAccountType !== y) ||
            (l != null &&
              y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              y !== (l == null ? void 0 : l.advAccountType));
          S &&
            ((C = !0),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ADV] clear record: type mismatch ",
                  " for ",
                  "",
                ])),
              y,
              t == null ? void 0 : t.toLogString(),
            ));
        }
      } else if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var R =
          y === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (l == null ? void 0 : l.deletedChangedToHost) !== !0;
        R && (C = !0);
      }
      var L = new Map(),
        E = new Set(f.validIndexes),
        k = f.currentIndex || 0;
      (v &&
        v.forEach(function (e) {
          var t = e.keyIndex;
          t != null &&
            E.has(t) &&
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              e.id === c &&
              (e.isHosted === !0 || s(0, 76137)),
            L.set(e.id, t));
        }),
        b != null &&
          b.forEach(function (e) {
            e.keyIndex > k && L.set(e.id, e.keyIndex);
          }),
        L.set(o("WAJids").DEFAULT_DEVICE_ID, 0));
      var I = Array.from(L.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            t === c
            ? { id: t, keyIndex: n, isHosted: !0 }
            : { id: t, keyIndex: n };
        }),
        T = h,
        D = {
          id: o("WAWebDeviceListPk").createDeviceListPK(t),
          rawId: g,
          timestamp: T,
          validIndexes: Array.from(E),
          devices: I,
          currentIndex: f.currentIndex,
          deleted: !1,
          advAccountType: y,
        };
      return (
        !C &&
          !o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(h, m, l, d) &&
          l &&
          !l.deleted &&
          ((D.expectedTs = l.expectedTs),
          (D.expectedTsLastDeviceJobTs = l.expectedTsLastDeviceJobTs),
          (D.expectedTsUpdateTs = l.expectedTsUpdateTs)),
        f.identityUpdatePromise
          ? {
              update: D,
              clearRecord: C,
              identityUpdatePromise: f.identityUpdatePromise,
            }
          : { update: D, clearRecord: C }
      );
    }
    async function m(e, t, n, r, o, a, i, l, s) {
      return d(e, t, n, r, o, a, i, l, s);
    }
    function p(e, t, n, r, a) {
      return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        t != null &&
        t.some(function (e) {
          return !!e.isHosted;
        })
        ? o(
            "WAWebHandleAdvDeviceNotificationUtils",
          ).verifySKeyIndexWithAccSigKey(e, n)
        : a !== void 0
          ? a
          : r == null
            ? null
            : o(
                "WAWebHandleAdvDeviceNotificationUtils",
              ).decodeSignedKeyIndexBytes(r, n);
    }
    ((l.handleKeyIndexResultSync = d), (l.handleKeyIndexResult = m));
  },
  98,
);
