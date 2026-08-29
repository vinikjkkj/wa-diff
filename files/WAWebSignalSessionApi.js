__d(
  "WAWebSignalSessionApi",
  [
    "Promise",
    "WABinary",
    "WAJids",
    "WALogger",
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
      C,
      b = [
        o("WAWebSessionScope").SessionScope.DEFAULT,
        o("WAWebSessionScope").SessionScope.STATUS,
        o("WAWebSessionScope").SessionScope.PQ,
      ];
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          t.key && f && (g.preKey = { keyId: t.key.id, publicKey: f });
          var h = t.kyberKey;
          return (
            h != null &&
              (g.kyberKey = {
                keyId: h.id,
                publicKey: new Uint8Array(h.publicKey).buffer,
                signature: new Uint8Array(h.signature).buffer,
              }),
            o("WAWebCryptoLibrarySessionApi").createSignalSession(g, l, n)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
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
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e, t);
          return n != null || t === o("WAWebSessionScope").SessionScope.DEFAULT
            ? n
            : o("WAWebCryptoLibrarySessionApi").getRemoteRegId(
                e,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r = [
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .removeIdentity(t),
          ].concat(
            b.map(function (t) {
              return o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .removeSession(
                  o("WAWebSignalCommonUtils")
                    .createSignalAddress(e, t)
                    .toString(),
                );
            }),
          );
          yield (C || (C = n("Promise"))).all(r);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_DELETE_REMOTE_SESSION,
          );
          var r = t != null ? [t] : b;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[session] deleteRemoteSession scope=",
                "",
              ])),
            t != null ? t : "all",
          ),
            yield (C || (C = n("Promise"))).all(
              r.map(function (t) {
                return o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .removeSession(
                    o("WAWebSignalCommonUtils")
                      .createSignalAddress(e, t)
                      .toString(),
                  );
              }),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .maybeCleanUpUnconvertedSession(t);
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
            a = o("WAJids").unsafeCoerceToDeviceJid(e.toJid()),
            i = yield r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(
              a,
              o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(n, t),
            );
          return i.success === !0 ? i.value : null;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY,
          );
          var r = o("WAWebSignalCommonUtils").createSignalAddress(e, n),
            a = yield $(e, n);
          a
            ? yield o("WAWebSignalStoreApi").waSignalStore.saveBaseKey(
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
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY,
          );
          var a = o("WAWebSignalCommonUtils").createSignalAddress(e, r),
            i = yield (C || (C = n("Promise"))).all([
              $(e, r),
              o("WAWebSignalStoreApi").waSignalStore.loadBaseKey(
                a.toString(),
                t,
              ),
            ]),
            l = i[0],
            s = i[1];
          return s
            ? l
              ? o("WAWebSignalCommonUtils").bufferEqual(s, l)
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o(
            "WAWebCryptoLibrarySessionApi",
          ).createGroupSenderSignalSession(
            o("WAWebWidFactory").createWid(t),
            e,
            n,
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [t],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(t),
        r = e.toString({ legacy: !0 }) + "::" + n.toString();
      return o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(r);
    }
    function U(e) {
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
    ((l.createSignalSession = v),
      (l.hasSignalSessions = R),
      (l.getRemoteRegId = L),
      (l.deleteRemoteInfo = k),
      (l.deleteRemoteSession = T),
      (l.maybeDeleteUnconvertedSession = x),
      (l.saveSessionBaseKey = N),
      (l.hasSameBaseKey = w),
      (l.createGroupSignalSession = F),
      (l.getGroupSenderKeyInfo = B),
      (l.deleteGroupSenderKeyInfo = q),
      (l.deleteDeviceSenderKey = U));
  },
  98,
);
