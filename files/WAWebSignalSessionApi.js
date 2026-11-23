__d(
  "WAWebSignalSessionApi",
  [
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibrary",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebCryptoLibrarySessionApi",
    "WAWebCryptoLibraryUtilsApi",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebSignalStoreApi",
    "WAWebWidFactory",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = [
        o("WAWebSessionScope").SessionScope.DEFAULT,
        o("WAWebSessionScope").SessionScope.STATUS,
        o("WAWebSessionScope").SessionScope.PQ,
      ];
    async function b(t, n) {
      var a = t.deviceIdentity,
        i = t.identity,
        l = t.wid;
      if (
        (r("gkx")("9092")
          ? o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Signal::createSignalSession with ",
                  " sessionScope=",
                  "",
                ])),
              l.toString({ legacy: !0 }),
              n != null ? n : "default",
            )
          : o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Signal::createSignalSession sessionScope=",
                  "",
                ])),
              n != null ? n : "default",
            ),
        l.device != null && l.device !== o("WAJids").DEFAULT_DEVICE_ID)
      ) {
        if (!a)
          throw r("err")(
            "Signal::createSignalSession: expected device-identity in keyBundle for companion device",
          );
        var u = await o("WAWebAdvSignatureApi").validateADVwithIdentityKey(
          l,
          a,
          i,
        );
        if (!u)
          throw r("err")(
            "Signal::createSignalSession: invalid identityKey fetched",
          );
      }
      return o("WAWebCryptoLibrarySessionApi").createSignalSession(v(t), l, n);
    }
    function v(e) {
      var t, n, r;
      try {
        t = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          e.identity.slice().buffer,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Assertion failed!",
                ])),
            )
            .sendLogs(
              "Signal::createSignalSession: invalid identityKey fetched",
            ),
          e
        );
      }
      try {
        n = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          e.skey.pubkey.slice().buffer,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Assertion failed!",
                ])),
            )
            .sendLogs(
              "Signal::createSignalSession: invalid signedPreKey fetched",
            ),
          e
        );
      }
      if (e.key)
        try {
          r = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
            e.key.pubkey.slice().buffer,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Assertion failed!",
                ])),
            )
            .sendLogs("Signal::createSignalSession: invalid preKey fetched");
        }
      var a = {
        registrationId: e.regId,
        identityKey: t,
        signedPreKey: {
          keyId: e.skey.id,
          publicKey: n,
          signature: e.skey.signature.slice().buffer,
        },
      };
      e.key && r && (a.preKey = { keyId: e.key.id, publicKey: r });
      var i = e.kyberKey;
      return (
        i != null &&
          (a.kyberKey = {
            keyId: i.id,
            publicKey: new Uint8Array(i.publicKey).buffer,
            signature: new Uint8Array(i.signature).buffer,
          }),
        a
      );
    }
    function S(e, t) {
      return (
        o("WAWebApiContact").checkPnToLidMapping(
          e,
          o("WAWebApiContact").CheckPnToLidMappingCaller
            .WAWEB_SIGNAL_SESSION_HAS_SIGNAL_SESSIONS,
        ),
        o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .containSessions(
            e.map(function (e) {
              return o("WAWebSignalCommonUtils")
                .createSignalAddress(e, t)
                .toString();
            }),
          )
      );
    }
    async function R(e, t) {
      var n = await o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e, t);
      return n != null || t === o("WAWebSessionScope").SessionScope.DEFAULT
        ? n
        : o("WAWebCryptoLibrarySessionApi").getRemoteRegId(
            e,
            o("WAWebSessionScope").SessionScope.DEFAULT,
          );
    }
    async function L(e) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_INFO,
      );
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[session] deleteRemoteInfo",
          ])),
      );
      var n = [
        o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .removeIdentity(t),
      ].concat(
        C.map(function (t) {
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .removeSession(
              o("WAWebSignalCommonUtils").createSignalAddress(e, t).toString(),
            );
        }),
      );
      await Promise.all(n);
    }
    async function E(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION,
      );
      var n = t != null ? [t] : C;
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[session] deleteRemoteSession scope=",
            "",
          ])),
        t != null ? t : "all",
      ),
        await Promise.all(
          n.map(function (t) {
            return o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .removeSession(
                o("WAWebSignalCommonUtils")
                  .createSignalAddress(e, t)
                  .toString(),
              );
          }),
        ));
    }
    function k(e, t) {
      var n = o("WAWebSignalCommonUtils").createSignalAddress(e, t).toString();
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .maybeCleanUpUnconvertedSession(n);
    }
    async function I(e, t) {
      var n = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
        a = o("WAJids").unsafeCoerceToDeviceJid(e.toJid()),
        i = await r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(
          a,
          o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(n, t),
        );
      return i.success === !0 ? i.value : null;
    }
    async function T(e, t, n) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY,
      );
      var r = o("WAWebSignalCommonUtils").createSignalAddress(e, n),
        a = await I(e, n);
      a
        ? await o("WAWebSignalStoreApi").waSignalStore.saveBaseKey(
            r.toString(),
            t,
            a,
          )
        : o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "saveSessionBaseKey: for ",
                ", no basekey provided",
              ])),
            t,
          );
    }
    async function D(e, t, n) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY,
      );
      var r = o("WAWebSignalCommonUtils").createSignalAddress(e, n),
        a = await Promise.all([
          I(e, n),
          o("WAWebSignalStoreApi").waSignalStore.loadBaseKey(r.toString(), t),
        ]),
        i = a[0],
        l = a[1];
      return l
        ? i
          ? o("WAWebSignalCommonUtils").bufferEqual(l, i)
            ? (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "hasSameBaseKey: ",
                    ", baseKey match",
                  ])),
                t,
              ),
              !0)
            : (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "hasSameBaseKey: ",
                    ", baseKey mismatch",
                  ])),
                t,
              ),
              !1)
          : (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "hasSameBaseKey: ",
                  ", no saved session",
                ])),
              t,
            ),
            !1)
        : (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "hasSameBaseKey: ",
                ", no saved baseKey",
              ])),
            t,
          ),
          !1);
    }
    async function x(e, t, n) {
      return o("WAWebCryptoLibrarySessionApi").createGroupSenderSignalSession(
        o("WAWebWidFactory").createWid(t),
        e,
        n,
      );
    }
    async function $(e, t) {
      return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
    }
    function P(e, t) {
      return o("WAWebABProps").getABPropConfigValue(
        "web_sender_key_rotation_fix_enabled",
      )
        ? N(e, t)
        : o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(M(e, t));
    }
    function N(e, t) {
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .removeOwnSenderKey(M(e, t));
    }
    function M(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [t],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(t);
      return e.toString({ legacy: !0 }) + "::" + n.toString();
    }
    function w(e) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_DEVICE_SENDER_KEY,
      );
      var t = String(o("WAWebSignalCommonUtils").createSignalAddress(e));
      return o("WAWebSignalStoreApi").waSignalStore.removeSenderKeyBySenderId(
        t,
      );
    }
    ((l.createSignalSession = b),
      (l.toSignalPrekeyBundle = v),
      (l.hasSignalSessions = S),
      (l.getRemoteRegId = R),
      (l.deleteRemoteInfo = L),
      (l.deleteRemoteSession = E),
      (l.maybeDeleteUnconvertedSession = k),
      (l.saveSessionBaseKey = T),
      (l.hasSameBaseKey = D),
      (l.createGroupSignalSession = x),
      (l.getGroupSenderKeyInfo = $),
      (l.deleteGroupSenderKeyInfo = P),
      (l.deleteOwnSenderKey = N),
      (l.deleteDeviceSenderKey = w));
  },
  98,
);
