__d(
  "WAWebAdvSignatureApi",
  [
    "invariant",
    "WABase64",
    "WABinary",
    "WAByteArray",
    "WALogger",
    "WAWebAdvHandlerApi",
    "WAWebAdvSignatureConstants",
    "WAWebBackendJobs.flow",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexHostedAddVerification",
    "WAWebCryptoCurve25519",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebCurrentUser",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g, h;
    async function y(t, n, r, a) {
      a === void 0 && (a = !1);
      var i = !1;
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        (i = t.isHosted());
      try {
        var l = o("WAWebWidFactory").asUserWidOrThrow(t),
          g = o("WAByteArray").uint8ArrayToBuffer(r),
          h = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadIdentityKey(
              o("WAWebSignalCommonUtils").createSignalAddress(t).toString(),
            );
        if (h != null) {
          var y = o("WAWebCryptoCurve25519").toCurveKeyPubKey(
            o("WAWebSignalCommonUtils").strToBuffer(h),
          );
          if (o("WAWebSignalCommonUtils").bufferEqual(y, g)) return !0;
        }
        var C = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
          n,
        );
        C != null || s(0, 56342);
        var b = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadIdentityKey(
              o("WAWebSignalCommonUtils").createSignalAddress(l).toString(),
            ),
          v =
            b != null
              ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(
                  o("WAWebSignalCommonUtils").strToBuffer(b),
                )
              : null;
        if (!L(C, g, v))
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "validateADVIdentity: invalid account signature",
                ])),
            ),
            !1
          );
        if (!x(C, g, v, i))
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "validateADVIdentity: invalid device signature",
                ])),
            ),
            !1
          );
        var S = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
          C.details,
        );
        S != null || s(0, 56341);
        var R = C.accountSignatureKey;
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          (S.accountType ===
            o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "validateADVIdentity: add to coex cache for ",
                  "",
                ])),
              t == null ? void 0 : t.toLogString(),
            ),
            o(
              "WAWebBizCoexHostedAddVerification",
            ).addToCoexHostedVerificationCache(t)),
          (R = R && R.byteLength > 0 ? R : void 0));
        try {
          await o("WAWebAdvHandlerApi").handleADVDeviceUpdateForMessage(
            t,
            S,
            v,
            R,
            g,
            a,
            S.accountType,
          );
        } catch (e) {
          if (!o("WAWebCurrentUser").isEmployee())
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "validateADVIdentity: process adv device identity failed: ",
                  "",
                ])),
              e,
            );
          else {
            var E = t.device;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "advDeviceIdentity failed for deviceId: ",
                  "",
                ])),
              E,
            ),
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "validateADVIdentity: process adv device identity failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "validate-adv-identity-handle-update-for-message-failed",
                ));
          }
          return !1;
        }
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "validateADVIdentity: verified acctSig + deviceSig",
              ])),
          ),
          !0
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "validateADVIdentity: failed",
              ])),
          ),
          !1
        );
      }
    }
    async function C(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = n.find(function (e) {
        return e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
      });
      if (!a) return !0;
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "validateADVwithEncs: start validate prekey msg ",
          ])),
      );
      try {
        e != null || s(0, 56346);
        var i = o("WAWebSignalUtilsApi").extractIdentityKey(a.ciphertext);
        i != null || s(0, 56345);
        var l = await y(e, t, new Uint8Array(i), r);
        return (
          await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
          l
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "validateADVwithEncs: failed ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    async function b() {
      var e = new Uint8Array(32);
      self.crypto.getRandomValues(e);
      var t = o("WABase64").encodeB64(e);
      return (await o("WAWebUserPrefsMultiDevice").setADVSecretKey(t), t);
    }
    async function v() {
      var e = await o("WAWebUserPrefsMultiDevice").getADVSecretKey();
      if (e == null) throw r("err")("secretKey is null or undefined");
      return e;
    }
    function S(e) {
      return e == null
        ? Promise.reject(
            r("err")("advSignedDeviceIdentity is null or undefined"),
          )
        : e.deviceSignature == null
          ? Promise.reject(
              r("err")("advSignedDeviceIdentity is missing deviceSignature"),
            )
          : o("WAWebSignalStoreApi").waSignalStore.putADVSignedIdentity(e);
    }
    async function R() {
      var e = await o(
        "WAWebSignalStoreApi",
      ).waSignalStore.getADVSignedIdentity();
      if (e == null)
        throw r("err")("advSignedDeviceIdentity is null or undefined");
      if (e.deviceSignature == null)
        throw r("err")("advSignedDeviceIdentity is missing deviceSignature");
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVSignedDeviceIdentitySpec,
          e,
        )
        .readByteArrayView();
    }
    function L(e, t, n) {
      var r = k(e, n),
        o = r.accountSignature,
        a = r.accountSignatureKey,
        i = r.advDeviceIdentityDetails;
      return E(i, o, t, a);
    }
    function E(e, t, n, r) {
      var a = o(
        "WAWebAdvSignatureConstants",
      ).ADV_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE;
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var i = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
          e,
        );
        i.deviceType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
          (a = o(
            "WAWebAdvSignatureConstants",
          ).ADV_HOSTED_PREFIX_DEVICE_IDENTITY_ACCOUNT_SIGNATURE);
      }
      (r != null || s(0, 56344), t != null || s(0, 56295));
      var l = o("WABinary").Binary.build(a, e, n).readByteArrayView();
      return o("WAWebCryptoCurve25519VerifySignature").verifySignature(
        new Uint8Array(r),
        l,
        new Uint8Array(t),
      );
    }
    function k(e, t) {
      var n = e.details,
        r = e.accountSignatureKey || t;
      (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        (r = r && r.byteLength > 0 ? r : t),
        r != null || s(0, 56344));
      var a = e.accountSignature;
      return (
        a != null || s(0, 56295),
        n != null || s(0, 70451),
        {
          accountSignatureKey: r,
          accountSignature: a,
          advDeviceIdentityDetails: n,
        }
      );
    }
    function I(e) {
      var t = e.advSignedDeviceIdentity,
        n = e.identityKeyPair,
        r = e.primarySignatureKey,
        a = t.details,
        i = o("WABinary")
          .Binary.build(
            o("WAWebAdvSignatureConstants")
              .ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE,
            a,
            n.pubKey,
            r,
          )
          .readByteArrayView().buffer;
      return o("WAWebCryptoCurve25519CalculateSignature").calculateSignature(
        n,
        i,
      );
    }
    function T(e, t, n, r, a) {
      var i = o(
        "WAWebAdvSignatureConstants",
      ).ADV_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE;
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
        (i = o(
          "WAWebAdvSignatureConstants",
        ).ADV_HOSTED_PREFIX_DEVICE_IDENTITY_DEVICE_SIGNATURE);
      var l = o("WABinary").Binary.build(i, e, t, a).readByteArrayView();
      return o("WAWebCryptoCurve25519VerifySignature").verifySignature(
        new Uint8Array(t),
        l,
        new Uint8Array(r),
      );
    }
    function D(e, t) {
      var n = e.details,
        r = e.deviceSignature;
      r != null || s(0, 56343);
      var a = e.accountSignatureKey || t;
      return (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          (a = a && a.byteLength > 0 ? a : t),
        a != null || s(0, 56344),
        n != null || s(0, 70451),
        {
          accountSignatureKey: a,
          deviceSignature: r,
          advDeviceIdentityDetails: n,
        }
      );
    }
    function x(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = D(e, n),
        i = a.accountSignatureKey,
        l = a.advDeviceIdentityDetails,
        s = a.deviceSignature,
        u = o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE;
      return (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          r &&
          (u = o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED),
        T(l, t, u, s, i)
      );
    }
    function $(e) {
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var t = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVDeviceIdentitySpec,
          e.details,
        );
        t != null || s(0, 56341);
        var n = t.accountType,
          r = t.deviceType;
        (n !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE || s(0, 70449),
          r !== o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE ||
            s(0, 70450));
      }
    }
    async function P() {
      await o("WAWebUserPrefsMultiDevice").setADVSecretKey(void 0);
    }
    ((l.validateADVwithIdentityKey = y),
      (l.validateADVwithEncs = C),
      (l.generateADVSecretKey = b),
      (l.getADVSecretKey = v),
      (l.setADVSignedIdentity = S),
      (l.getADVEncodedIdentity = R),
      (l.verifyDeviceIdentityAccountSignature = L),
      (l.generateDeviceSignature = I),
      (l.clearADVSecretKey = P));
  },
  98,
);
