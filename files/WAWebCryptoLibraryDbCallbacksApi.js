__d(
  "WAWebCryptoLibraryDbCallbacksApi",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var t = async function (t) {
          var e = o("WAWebWidFactory").createDeviceWidOrThrow(t);
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION,
          );
          var n = o("WAWebSignalCommonUtils").createSignalAddress(e),
            r = await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .loadSession(n);
          return r != null ? r : null;
        },
        n = async function (t, n, r, a, i, l) {
          l === void 0 && (l = !1);
          var e = o("WAWebWidFactory").createDeviceWidOrThrow(t);
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
          );
          var s = o("WAWebSignalCommonUtils").createSignalAddress(e);
          return Promise.all([
            !l &&
              o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .storeSession(s, n),
            r &&
              o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .saveIdentity(s, o("WAByteArray").uint8ArrayToBuffer(r)),
            a != null &&
              o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .removePreKey(a),
          ]).then(function () {
            return o("WAResultOrError").makeResult();
          });
        },
        r = function (t, n) {
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
        a = function (t, n, r) {
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
        i = async function (n) {
          var t = o("WAWebWidFactory").createDeviceWidOrThrow(n);
          o("WAWebApiContact").checkPnToLidMapping(
            [t],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_LOAD_SESSION,
          );
          var r = o("WAWebSignalCommonUtils").createSignalAddress(
            t,
            o("WAWebSessionScope").SessionScope.STATUS,
          );
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[status-session] loadSessionStatusScope",
              ])),
          );
          var a = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .loadSession(r);
          return a != null ? a : null;
        },
        l = async function (t, n, r, a, i, l) {
          l === void 0 && (l = !1);
          var e = o("WAWebWidFactory").createDeviceWidOrThrow(t);
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_CRYPTO_LIBRARY_DB_CALLBACK_API_HANDLE_NEW_SESSION,
          );
          var u = o("WAWebSignalCommonUtils").createSignalAddress(
              e,
              o("WAWebSessionScope").SessionScope.STATUS,
            ),
            c = o("WAWebSignalCommonUtils").createSignalAddress(e);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[status-session] handleNewSessionStatusScope",
                ])),
            ),
            Promise.all([
              !l &&
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .storeSession(u, n),
              r &&
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .saveIdentity(c, o("WAByteArray").uint8ArrayToBuffer(r)),
              a != null &&
                o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .removePreKey(a),
            ]).then(function () {
              return o("WAResultOrError").makeResult();
            })
          );
        };
      return {
        loadSession: t,
        handleNewSession: n,
        loadSenderKeySession: r,
        saveSenderKeySession: a,
        loadSessionStatusScope: i,
        handleNewSessionStatusScope: l,
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
        getRegistrationInfo: async function () {
          var e = await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .getLocalRegistrationId(),
            t = await o("WAWebSignalProtocolStore")
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
        },
      };
    }
    l.getCryptoDbCallbacks = u;
  },
  98,
);
