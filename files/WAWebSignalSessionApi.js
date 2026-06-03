__d(
  "WAWebSignalSessionApi",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:4533",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            var m = yield o("WAWebAdvSignatureApi").validateADVwithIdentityKey(
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
                .sendLogs(
                  "Signal::createSignalSession: invalid preKey fetched",
                );
            }
          var g = {
            registrationId: t.regId,
            identityKey: p,
            signedPreKey: {
              keyId: t.skey.id,
              publicKey: _,
              signature: new (o("WABinary").Binary)(
                t.skey.signature,
              ).readBuffer(),
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
        })),
        v.apply(this, arguments)
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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_INFO,
          );
          var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
            r = o("WAWebSignalCommonUtils")
              .createSignalAddress(
                e,
                o("WAWebSessionScope").SessionScope.STATUS,
              )
              .toString();
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[session] deleteRemoteInfo",
              ])),
          );
          var a = [
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .removeIdentity(t),
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .removeSession(t),
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .removeSession(r),
          ];
          yield (C || (C = n("Promise"))).all(a);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION,
          );
          var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString(),
            r = o("WAWebSignalCommonUtils")
              .createSignalAddress(
                e,
                o("WAWebSessionScope").SessionScope.STATUS,
              )
              .toString();
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[session] deleteRemoteSession",
              ])),
          ),
            yield (C || (C = n("Promise"))).all([
              o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .removeSession(t),
              o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .removeSession(r),
            ]));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .maybeCleanUpUnconvertedSession(t);
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
            n = o("WAJids").unsafeCoerceToDeviceJid(e.toJid()),
            a = yield r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(
              n,
              t.loadSession,
            );
          return a.success === !0 ? a.value : null;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY,
          );
          var n = o("WAWebSignalCommonUtils").createSignalAddress(e),
            r = yield x(e);
          r
            ? yield o("WAWebSignalStoreApi").waSignalStore.saveBaseKey(
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
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY,
          );
          var r = o("WAWebSignalCommonUtils").createSignalAddress(e),
            a = yield (C || (C = n("Promise"))).all([
              x(e),
              o("WAWebSignalStoreApi").waSignalStore.loadBaseKey(
                r.toString(),
                t,
              ),
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
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o(
            "WAWebCryptoLibrarySessionApi",
          ).createGroupSenderSignalSession(
            o("WAWebWidFactory").createWid(t),
            e,
            n,
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [t],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(t),
        r = e.toString({ legacy: !0 }) + "::" + n.toString();
      return o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(r);
    }
    function q(e) {
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
      (l.hasSignalSessions = S),
      (l.getRemoteRegId = R),
      (l.deleteRemoteInfo = E),
      (l.deleteRemoteSession = I),
      (l.maybeDeleteUnconvertedSession = D),
      (l.saveSessionBaseKey = P),
      (l.hasSameBaseKey = M),
      (l.createGroupSignalSession = A),
      (l.getGroupSenderKeyInfo = O),
      (l.deleteGroupSenderKeyInfo = W),
      (l.deleteDeviceSenderKey = q));
  },
  98,
);
