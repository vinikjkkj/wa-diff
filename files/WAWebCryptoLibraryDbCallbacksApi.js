__d(
  "WAWebCryptoLibraryDbCallbacksApi",
  [
    "Promise",
    "WAByteArray",
    "WALogger",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "WAWebApiContact",
    "WAWebSessionScope",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      var t = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebWidFactory").createDeviceWidOrThrow(e);
            o("WAWebApiContact").checkPnToLidMapping(
              [t],
              o("WAWebApiContact").CheckPnToLidMappingCaller
                .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION,
            );
            var n = o("WAWebSignalCommonUtils").createSignalAddress(t),
              r = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .loadSession(n);
            return r != null ? r : null;
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        r = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a, i, l) {
              l === void 0 && (l = !1);
              var s = o("WAWebWidFactory").createDeviceWidOrThrow(e);
              o("WAWebApiContact").checkPnToLidMapping(
                [s],
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
              );
              var c = o("WAWebSignalCommonUtils").createSignalAddress(s);
              return (u || (u = n("Promise")))
                .all([
                  !l &&
                    o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .storeSession(c, t),
                  r &&
                    o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .saveIdentity(c, o("WAByteArray").uint8ArrayToBuffer(r)),
                  a != null &&
                    o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .removePreKey(a),
                ])
                .then(function () {
                  return o("WAResultOrError").makeResult();
                });
            },
          );
          return function (n, r, o, a, i, l) {
            return e.apply(this, arguments);
          };
        })(),
        a = function (t, n) {
          var e = o("WAWebWidFactory").createDeviceWidOrThrow(n);
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SENDER_KEY_SESSION,
          );
          var r = o("WAWebSignalCommonUtils").createSignalLikeSenderKeyName(
            t,
            e,
          );
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadSenderKey(r)
            .then(function (e) {
              if (e == null)
                return o("WAResultOrError").makeError(
                  "errLoadSenderKeySession",
                );
              var t = e;
              return o("WAResultOrError").makeResult(t);
            });
        },
        i = function (t, n, r) {
          var e = o("WAWebWidFactory").createDeviceWidOrThrow(n);
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_SAVE_SENDER_KEY_SESSION,
          );
          var a = o("WAWebSignalCommonUtils").createSignalLikeSenderKeyName(
            t,
            e,
          );
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .storeSenderKey(a, r);
        },
        l = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = o("WAWebWidFactory").createDeviceWidOrThrow(t);
            o("WAWebApiContact").checkPnToLidMapping(
              [n],
              o("WAWebApiContact").CheckPnToLidMappingCaller
                .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION,
            );
            var r = o("WAWebSignalCommonUtils").createSignalAddress(
              n,
              o("WAWebSessionScope").SessionScope.STATUS,
            );
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[status-session] loadSessionStatusScope",
                ])),
            );
            var a = yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadSession(r);
            return a != null ? a : null;
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a, i, l) {
              l === void 0 && (l = !1);
              var c = o("WAWebWidFactory").createDeviceWidOrThrow(e);
              o("WAWebApiContact").checkPnToLidMapping(
                [c],
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
              );
              var d = o("WAWebSignalCommonUtils").createSignalAddress(
                  c,
                  o("WAWebSessionScope").SessionScope.STATUS,
                ),
                m = o("WAWebSignalCommonUtils").createSignalAddress(c);
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[status-session] handleNewSessionStatusScope",
                    ])),
                ),
                (u || (u = n("Promise")))
                  .all([
                    !l &&
                      o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .storeSession(d, t),
                    r &&
                      o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .saveIdentity(
                          m,
                          o("WAByteArray").uint8ArrayToBuffer(r),
                        ),
                    a != null &&
                      o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .removePreKey(a),
                  ])
                  .then(function () {
                    return o("WAResultOrError").makeResult();
                  })
              );
            },
          );
          return function (n, r, o, a, i, l) {
            return e.apply(this, arguments);
          };
        })();
      return {
        loadSession: t,
        handleNewSession: r,
        loadSenderKeySession: a,
        saveSenderKeySession: i,
        loadSessionStatusScope: l,
        handleNewSessionStatusScope: c,
        loadSignedPreKey: function (t) {
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadSignedPreKey(t)
            .then(function (e) {
              if (e == null) return null;
              var n = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                  e.pubKey,
                  e.privKey,
                ),
                r = o("WASignalOther").encodeSignalProto(
                  o("WASignalLocalStorageProtocol.pb")
                    .SignedPreKeyRecordStructureSpec,
                  {
                    id: t,
                    publicKey: o("WASignalKeys").serializePubKey(n),
                    privateKey: n.privateKey,
                    signature: new Uint8Array(e.signature),
                    timestamp: 0,
                  },
                );
              return o("WASignalOther").castToByteEncoded(r);
            });
        },
        loadOneTimePreKey: function (t) {
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadPreKey(t)
            .then(function (e) {
              if (e == null) return null;
              var n = o("WASignalKeys").makeKeyPairFromArrayBuffers(
                  e.pubKey,
                  e.privKey,
                ),
                r = o("WASignalOther").encodeSignalProto(
                  o("WASignalLocalStorageProtocol.pb")
                    .PreKeyRecordStructureSpec,
                  {
                    id: t,
                    publicKey: o("WASignalKeys").serializePubKey(n),
                    privateKey: n.privateKey,
                  },
                );
              return o("WASignalOther").castToByteEncoded(r);
            });
        },
        getRegistrationInfo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .getLocalRegistrationId(),
              t = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .getIdentityKeyPair();
            if (!(e == null || t == null) && e && t)
              return {
                regId: o("WASignalOther").castRegistrationId(e),
                staticKeyPair: o("WASignalKeys").makeKeyPairFromArrayBuffers(
                  t.pubKey.slice(1),
                  t.privKey,
                ),
              };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    }
    l.getCryptoDbCallbacks = c;
  },
  98,
);
