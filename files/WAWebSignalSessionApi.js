__d(
  "WAWebSignalSessionApi",
  [
    "Promise",
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
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.deviceIdentity,
            a = e.identity,
            i = e.wid;
          if (
            (r("gkx")("9092")
              ? o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Signal::createSignalSession with ",
                      " sessionScope=",
                      "",
                    ])),
                  i.toString({ legacy: !0 }),
                  t != null ? t : "default",
                )
              : o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Signal::createSignalSession sessionScope=",
                      "",
                    ])),
                  t != null ? t : "default",
                ),
            i.device != null && i.device !== o("WAJids").DEFAULT_DEVICE_ID)
          ) {
            if (!n)
              throw r("err")(
                "Signal::createSignalSession: expected device-identity in keyBundle for companion device",
              );
            var l = yield o("WAWebAdvSignatureApi").validateADVwithIdentityKey(
              i,
              n,
              a,
            );
            if (!l)
              throw r("err")(
                "Signal::createSignalSession: invalid identityKey fetched",
              );
          }
          return o("WAWebCryptoLibrarySessionApi").createSignalSession(
            R(e),
            i,
            t,
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      var n, r, a;
      try {
        n = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          t.identity.slice().buffer,
        );
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Assertion failed!",
                ])),
            )
            .sendLogs(
              "Signal::createSignalSession: invalid identityKey fetched",
            ),
          t
        );
      }
      try {
        r = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
          t.skey.pubkey.slice().buffer,
        );
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
          a = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
            t.key.pubkey.slice().buffer,
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Assertion failed!",
                ])),
            )
            .sendLogs("Signal::createSignalSession: invalid preKey fetched");
        }
      var i = {
        registrationId: t.regId,
        identityKey: n,
        signedPreKey: {
          keyId: t.skey.id,
          publicKey: r,
          signature: t.skey.signature.slice().buffer,
        },
      };
      t.key && a && (i.preKey = { keyId: t.key.id, publicKey: a });
      var l = t.kyberKey;
      return (
        l != null &&
          (i.kyberKey = {
            keyId: l.id,
            publicKey: new Uint8Array(l.publicKey).buffer,
            signature: new Uint8Array(l.signature).buffer,
          }),
        i
      );
    }
    function L(e, t) {
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
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCryptoLibrarySessionApi").getRemoteRegId(e, t);
          return n != null || t === o("WAWebSessionScope").SessionScope.DEFAULT
            ? n
            : o("WAWebCryptoLibrarySessionApi").getRemoteRegId(
                e,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              );
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = o("WAWebSignalCommonUtils").createSignalAddress(e).toString();
      return o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .maybeCleanUpUnconvertedSession(t);
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebCryptoLibraryDbCallbacksApi").getCryptoDbCallbacks(),
            a = o("WAJids").unsafeCoerceToDeviceJid(e.toJid()),
            i = yield r("WAWebCryptoLibraryUtilsApi").getSessionAliceBaseKey(
              a,
              o("WAWebCryptoLibraryDbCallbacksApi").selectLoadSession(n, t),
            );
          return i.success === !0 ? i.value : null;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_SAVE_SESSION_BASE_KEY,
          );
          var r = o("WAWebSignalCommonUtils").createSignalAddress(e, n),
            a = yield P(e, n);
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
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_SIGNAL_SESSION_HAS_SAME_BASE_KEY,
          );
          var a = o("WAWebSignalCommonUtils").createSignalAddress(e, r),
            i = yield (C || (C = n("Promise"))).all([
              P(e, r),
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return o(
            "WAWebCryptoLibrarySessionApi",
          ).createGroupSenderSignalSession(
            o("WAWebWidFactory").createWid(t),
            e,
            n,
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebCryptoLibrary").getGroupSenderKeyInfo(e, t);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      o("WAWebApiContact").checkPnToLidMapping(
        [t],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_SIGNAL_SESSION_DELETE_GROUP_SENDER_KEY_INFO,
      );
      var n = o("WAWebSignalCommonUtils").createSignalAddress(t),
        r = e.toString({ legacy: !0 }) + "::" + n.toString();
      return o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(r);
    }
    function V(e) {
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
      (l.toSignalPrekeyBundle = R),
      (l.hasSignalSessions = L),
      (l.getRemoteRegId = E),
      (l.deleteRemoteInfo = I),
      (l.deleteRemoteSession = D),
      (l.maybeDeleteUnconvertedSession = $),
      (l.saveSessionBaseKey = M),
      (l.hasSameBaseKey = A),
      (l.createGroupSignalSession = O),
      (l.getGroupSenderKeyInfo = W),
      (l.deleteGroupSenderKeyInfo = U),
      (l.deleteDeviceSenderKey = V));
  },
  98,
);
