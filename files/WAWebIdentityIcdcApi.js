__d(
  "WAWebIdentityIcdcApi",
  [
    "WACryptoSha256",
    "WAJids",
    "WANullthrows",
    "WASignalOther",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiDeviceList",
    "WAWebBizCoexGatingUtils",
    "WAWebCryptoCurve25519",
    "WAWebIdentityApiUtils",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 720 * 60 * 60;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiDeviceList").getDeviceRecord(e);
          return !t || t.deleted ? null : d(e, t);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t || t.deleted) return null;
          var n = { keyHash: void 0, timestamp: void 0 },
            a = t.advAccountType,
            i = t.devices,
            l = t.id,
            s = t.timestamp,
            u = i.some(function (e) {
              return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
            });
          if (u) {
            var c = i.map(function (e) {
                return [
                  e.keyIndex,
                  o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                    l,
                    e.id,
                    e.isHosted,
                  ),
                ];
              }),
              d = [],
              m = null;
            c.forEach(function (e) {
              var t = e[0],
                n = e[1];
              o("WAWebUserPrefsMeUser").isMeDevice(n)
                ? (m = t)
                : d.push([t, n]);
            });
            var _ = yield o("WAWebIdentityApiUtils").getAllIdentityKeysBytes(
                d.map(function (e) {
                  var t = e[1];
                  return t;
                }),
              ),
              h = [],
              y = [];
            if (
              (_.forEach(function (e, t) {
                e != null && (h.push(e), y.push(d[t][0]));
              }),
              o("WAWebUserPrefsMeUser").isMeAccount(e))
            ) {
              var C = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .getIdentityKeyPair();
              if (!C) return null;
              (h.push(new Uint8Array(C.pubKey)), y.push(r("WANullthrows")(m)));
            }
            var b = f();
            ((n.keyHash = yield p(
              h.map(function (e) {
                return new Uint8Array(
                  o("WAWebCryptoCurve25519").toCurveKeyPubKey(e.buffer),
                );
              }),
              b,
            )),
              y.length !== i.length && (n.keyIndexes = y));
          }
          return (
            (u || g(s)) && (n.timestamp = s),
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              (o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                (yield o(
                  "WAWebUserPrefsMultiDevice",
                ).getIsHostedMeAccount()) === !0 &&
                (n.senderAccountType = o(
                  "WAWebProtobufsAdv.pb",
                ).ADVEncryptionType.HOSTED),
              !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                a === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                (n.receiverAccountType = o(
                  "WAWebProtobufsAdv.pb",
                ).ADVEncryptionType.HOSTED)),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebIdentityApiUtils").identityKeysToBinary(e),
            r = yield o("WACryptoSha256").sha256(n),
            a = new Uint8Array(r);
          return o("WASignalOther").sliceBytes(a, 0, t);
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      var t = o("WAWebABProps").getABPropConfigValue("md_icdc_hash_length");
      return Math.max(t, e);
    }
    function g(e) {
      return o("WATimeUtils").unixTime() - e < s;
    }
    ((l.getICDCMeta = u),
      (l.getICDCMetaFromDeviceRecord = d),
      (l.computeIdentityHash = p));
  },
  98,
);
