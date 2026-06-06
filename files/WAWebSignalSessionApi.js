__d(
  "WAWebSignalSessionApi",
  [
    "WABinary",
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
    "cr:4533",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t, n) {
      var a = t.deviceIdentity,
        i = t.identity,
        l = t.wid;
      if (
        (r("gkx")("26258")
          ? o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Signal::createSignalSession sessionScope=",
                  "",
                ])),
              n != null ? n : "default",
            )
          : o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Signal::createSignalSession with ",
                  " sessionScope=",
                  "",
                ])),
              l.toString({ legacy: !0 }),
              n != null ? n : "default",
            ),
        l.device != null && l.device !== o("WAJids").DEFAULT_DEVICE_ID)
      ) {
        if (!a)
          throw r("err")(
            "Signal::createSignalSession: expected device-identity in keyBundle for companion device",
          );
        var m = await o("WAWebAdvSignatureApi").validateADVwithIdentityKey(
          l,
          a,
          i,
        );
        if (!m)
          throw r("err")(
            "Signal::createSignalSession: invalid identityKey fetched",
          );
      }
      var p, _, f;
      try {
        p = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          new (o("WABinary").Binary)(t.identity).readBuffer(),
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
        _ = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          new (o("WABinary").Binary)(t.skey.pubkey).readBuffer(),
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
      if (t.key)
        try {
          f = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
            new (o("WABinary").Binary)(t.key.pubkey).readBuffer(),
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
      var g = {
        registrationId: t.regId,
        identityKey: p,
        signedPreKey: {
          keyId: t.skey.id,
          publicKey: _,
          signature: new (o("WABinary").Binary)(t.skey.signature).readBuffer(),
        },
      };
      return (
        t.key && f && (g.preKey = { keyId: t.key.id, publicKey: f }),
        o("WAWebCryptoLibrarySessionApi").createSignalSession(
          g,
          l,
          n,
          o("WAWebABProps").getABPropConfigValue(
            "web_anr_async_msg_send_handler",
          ),
        )
      );
    }
    function b(e, t) {
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
    async function v(e) {
      return o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e);
    }
    async function S(e) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_INFO,
      );
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
        n = o("WAWebSignalCommonUtils")
          .createSignalAddress(e, o("WAWebSessionScope").SessionScope.STATUS)
          .toString();
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[session] deleteRemoteInfo",
          ])),
      );
      var r = [
        o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .removeIdentity(t),
        o("WAWebSignalProtocolStore").getSignalProtocolStore().removeSession(t),
        o("WAWebSignalProtocolStore").getSignalProtocolStore().removeSession(n),
      ];
      await Promise.all(r);
    }
    async function R(e) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION,
      );
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
        n = o("WAWebSignalCommonUtils")
          .createSignalAddress(e, o("WAWebSessionScope").SessionScope.STATUS)
          .toString();
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[session] deleteRemoteSession",
          ])),
      ),
        await Promise.all([
          o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .removeSession(t),
          o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .removeSession(n),
        ]));
    }
    function L(e) {
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .maybeCleanUpUnconvertedSession(t);
    }
    async function E(e) {
      var t = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
        n = o("WAJids").unsafeCoerceToDeviceJid(e.toJid()),
        a = await r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(
          n,
          t.loadSession,
        );
      return a.success === !0 ? a.value : null;
    }
    async function k(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(e),
        r = await E(e);
      r
        ? await o("WAWebSignalStoreApi").waSignalStore.saveBaseKey(
            n.toString(),
            t,
            r,
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
    async function I(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [e],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(e),
        r = await Promise.all([
          E(e),
          o("WAWebSignalStoreApi").waSignalStore.loadBaseKey(n.toString(), t),
        ]),
        a = r[0],
        i = r[1];
      return i
        ? a
          ? o("WAWebSignalCommonUtils").bufferEqual(i, a)
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
    async function T(e, t, n) {
      return o("WAWebCryptoLibrarySessionApi").createGroupSenderSignalSession(
        o("WAWebWidFactory").createWid(t),
        e,
        n,
      );
    }
    async function D(e, t) {
      return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
    }
    function x(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [t],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(t),
        r = e.toString({ legacy: !0 }) + "::" + n.toString();
      return o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(r);
    }
    function $(e) {
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
    ((l.createSignalSession = C),
      (l.hasSignalSessions = b),
      (l.getRemoteRegId = v),
      (l.deleteRemoteInfo = S),
      (l.deleteRemoteSession = R),
      (l.maybeDeleteUnconvertedSession = L),
      (l.saveSessionBaseKey = k),
      (l.hasSameBaseKey = I),
      (l.createGroupSignalSession = T),
      (l.getGroupSenderKeyInfo = D),
      (l.deleteGroupSenderKeyInfo = x),
      (l.deleteDeviceSenderKey = $));
  },
  98,
);
