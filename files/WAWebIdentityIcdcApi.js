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
  ],
  function (t, n, r, o, a, i, l) {
    var e = 8,
      s = 720 * 60 * 60;
    async function u(e) {
      var t = await o("WAWebApiDeviceList").getDeviceRecord(e);
      return !t || t.deleted ? null : c(e, t);
    }
    async function c(e, t) {
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
          _ = [],
          f = null;
        c.forEach(function (e) {
          var t = e[0],
            n = e[1];
          o("WAWebUserPrefsMeUser").isMeDevice(n) ? (f = t) : _.push([t, n]);
        });
        var g = await o("WAWebIdentityApiUtils").getAllIdentityKeysBytes(
            _.map(function (e) {
              var t = e[1];
              return t;
            }),
          ),
          h = [],
          y = [];
        if (
          (g.forEach(function (e, t) {
            e != null && (h.push(e), y.push(_[t][0]));
          }),
          o("WAWebUserPrefsMeUser").isMeAccount(e))
        ) {
          var C = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .getIdentityKeyPair();
          if (!C) return null;
          (h.push(new Uint8Array(C.pubKey)), y.push(r("WANullthrows")(f)));
        }
        var b = m();
        ((n.keyHash = await d(
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
        (u || p(s)) && (n.timestamp = s),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          (o("WAWebUserPrefsMeUser").isMeAccount(e) &&
            (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) ===
              !0 &&
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
    }
    async function d(e, t) {
      var n = o("WAWebIdentityApiUtils").identityKeysToBinary(e),
        r = await o("WACryptoSha256").sha256(n),
        a = new Uint8Array(r);
      return o("WASignalOther").sliceBytes(a, 0, t);
    }
    function m() {
      var t = o("WAWebABProps").getABPropConfigValue("md_icdc_hash_length");
      return Math.max(t, e);
    }
    function p(e) {
      return o("WATimeUtils").unixTime() - e < s;
    }
    ((l.getICDCMeta = u),
      (l.getICDCMetaFromDeviceRecord = c),
      (l.computeIdentityHash = d));
  },
  98,
);
