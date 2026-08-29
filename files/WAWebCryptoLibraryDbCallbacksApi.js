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
    "WAWebSignalStorage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return t === o("WAWebSessionScope").SessionScope.PQ
        ? e.loadSessionPqScope
        : t === o("WAWebSessionScope").SessionScope.STATUS
          ? e.loadSessionStatusScope
          : e.loadSession;
    }
    function p(e, t) {
      return t === o("WAWebSessionScope").SessionScope.PQ
        ? e.handleNewSessionPqScope
        : t === o("WAWebSessionScope").SessionScope.STATUS
          ? e.handleNewSessionStatusScope
          : e.handleNewSession;
    }
    function _() {
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
              var u = o("WAWebSignalCommonUtils").createSignalAddress(s);
              return (d || (d = n("Promise")))
                .all([
                  !l &&
                    o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .storeSession(u, t),
                  r &&
                    o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .saveIdentity(u, o("WAByteArray").uint8ArrayToBuffer(r)),
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
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a, i, l) {
              l === void 0 && (l = !1);
              var u = o("WAWebWidFactory").createDeviceWidOrThrow(e);
              o("WAWebApiContact").checkPnToLidMapping(
                [u],
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
              );
              var c = o("WAWebSignalCommonUtils").createSignalAddress(
                  u,
                  o("WAWebSessionScope").SessionScope.STATUS,
                ),
                m = o("WAWebSignalCommonUtils").createSignalAddress(u);
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[status-session] handleNewSessionStatusScope",
                    ])),
                ),
                (d || (d = n("Promise")))
                  .all([
                    !l &&
                      o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .storeSession(c, t),
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
        })(),
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebWidFactory").createDeviceWidOrThrow(e);
            o("WAWebApiContact").checkPnToLidMapping(
              [t],
              o("WAWebApiContact").CheckPnToLidMappingCaller
                .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION,
            );
            var n = o("WAWebSignalCommonUtils").createSignalAddress(
              t,
              o("WAWebSessionScope").SessionScope.PQ,
            );
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[pq-session] loadSessionPqScope",
                ])),
            );
            var r = yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadSession(n);
            return r != null ? r : null;
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        _ = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, r, a, i, l) {
              l === void 0 && (l = !1);
              var s = o("WAWebWidFactory").createDeviceWidOrThrow(e);
              o("WAWebApiContact").checkPnToLidMapping(
                [s],
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
              );
              var u = o("WAWebSignalCommonUtils").createSignalAddress(
                  s,
                  o("WAWebSessionScope").SessionScope.PQ,
                ),
                m = o("WAWebSignalCommonUtils").createSignalAddress(s);
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[pq-session] handleNewSessionPqScope",
                    ])),
                ),
                (d || (d = n("Promise")))
                  .all([
                    !l &&
                      o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .storeSession(u, t),
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
        handleNewSessionStatusScope: m,
        loadSessionPqScope: p,
        handleNewSessionPqScope: _,
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
        loadKyberPreKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebSignalStorage").getKyberPreKeyTable().get(e);
            if (t != null)
              return {
                secretKey: new Uint8Array(t.keyPair.privKey),
                shouldDeleteAfterUse: !0,
              };
            var n = yield o("WAWebSignalStorage")
              .getKyberLastResortKeyTable()
              .get(e);
            return n == null
              ? null
              : {
                  secretKey: new Uint8Array(n.keyPair.privKey),
                  shouldDeleteAfterUse: !1,
                };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        deleteKyberPreKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebSignalStorage").getKyberPreKeyTable().remove(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
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
    ((l.selectLoadSession = m),
      (l.selectHandleNewSession = p),
      (l.getCryptoDbCallbacks = _));
  },
  98,
);
