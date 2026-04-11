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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 99;
    function d(t, n, r, a, i, l, d, m, p) {
      if ((l == null ? void 0 : l.timestamp) != null && r < l.timestamp)
        return null;
      var _ = null;
      if (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        n != null &&
        n.some(function (e) {
          return !!e.isHosted;
        })
      ) {
        if (
          ((_ = o(
            "WAWebHandleAdvDeviceNotificationUtils",
          ).verifySKeyIndexWithAccSigKey(t, a)),
          !_)
        )
          return null;
      } else {
        if (p !== void 0) _ = p;
        else {
          if (i == null) return null;
          _ = o(
            "WAWebHandleAdvDeviceNotificationUtils",
          ).decodeSignedKeyIndexBytes(i, a);
        }
        if (!_) return null;
      }
      var f = _.rawId,
        g = o("WALongInt").numberOrThrowIfTooLarge(_.timestamp),
        h = null;
      if (
        (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          ((h = _.accountType),
          h === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
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
        g !== r)
      )
        return null;
      var y = !1,
        C = null,
        b = n;
      if (l && !l.deleted) {
        if (
          (b == null && (b = l.devices),
          l.rawId !== f ? (y = !0) : (C = l.devices),
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled())
        ) {
          var v =
            (l.advAccountType != null && l.advAccountType !== h) ||
            (l != null &&
              h === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              h !== (l == null ? void 0 : l.advAccountType));
          v &&
            ((y = !0),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ADV] clear record: type mismatch ",
                  " for ",
                  "",
                ])),
              h,
              t == null ? void 0 : t.toLogString(),
            ));
        }
      } else if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var S =
          h === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (l == null ? void 0 : l.deletedChangedToHost) !== !0;
        S && (y = !0);
      }
      var R = new Map(),
        L = new Set(_.validIndexes),
        E = _.currentIndex || 0;
      (b &&
        b.forEach(function (e) {
          var t = e.keyIndex;
          t != null &&
            L.has(t) &&
            (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              e.id === c &&
              (e.isHosted === !0 || s(0, 76137)),
            R.set(e.id, t));
        }),
        C != null &&
          C.forEach(function (e) {
            e.keyIndex > E && R.set(e.id, e.keyIndex);
          }),
        R.set(o("WAJids").DEFAULT_DEVICE_ID, 0));
      var k = Array.from(R.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            t === c
            ? { id: t, keyIndex: n, isHosted: !0 }
            : { id: t, keyIndex: n };
        }),
        I = g,
        T = {
          id: o("WAWebDeviceListPk").createDeviceListPK(t),
          rawId: f,
          timestamp: I,
          validIndexes: Array.from(L),
          devices: k,
          currentIndex: _.currentIndex,
          deleted: !1,
          advAccountType: h,
        };
      return (
        !y &&
          !o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(g, m, l, d) &&
          l &&
          !l.deleted &&
          ((T.expectedTs = l.expectedTs),
          (T.expectedTsLastDeviceJobTs = l.expectedTsLastDeviceJobTs),
          (T.expectedTsUpdateTs = l.expectedTsUpdateTs)),
        _.identityUpdatePromise
          ? {
              update: T,
              clearRecord: y,
              identityUpdatePromise: _.identityUpdatePromise,
            }
          : { update: T, clearRecord: y }
      );
    }
    function m(e, t, n, r, o, a, i, l, s) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a, i, l, s) {
            return d(e, t, n, r, o, a, i, l, s);
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.handleKeyIndexResultSync = d), (l.handleKeyIndexResult = m));
  },
  98,
);
